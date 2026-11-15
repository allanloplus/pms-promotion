"""將系統截圖（Playwright 擷取之 PNG）裁切、壓縮為課程用 JPG。
用法：python3 tools/prep_shots.py <截圖資料夾>   輸出至 img/
"""
import os, sys
from PIL import Image

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "img")
V = (384, 0, 1980, 1230)  # 預設：去除左側選單的可視範圍
CROPS = {
    "g-01b-login-mail": (0, 0, 1980, 1230),
    "g-02-dash": V, "g-02-dash#nav": (0, 0, 1980, 1230), "g-02-dash#charts": (384, 1950, 1980, 3180),
    "g-05-my-pm": V, "g-06-reports": V, "g-06-reports#people": (384, 3060, 1980, 3900),
    "g-07-guide-flow": (384, 0, 1980, 1100), "g-07-guide-flow#nature": (384, 1150, 1980, 2560), "g-07-guide-flow#std": (384, 4100, 1980, 4600),
    "g-07-guide-phases": V, "g-07-guide-risk": V, "g-07-guide-controls": V,
    "g-08-admin-catalog": V, "g-08-admin-users": V, "g-08-admin-companies": (384, 0, 1980, 900), "g-09b-auditlog": V,
    "e1-09-phase1": V, "e1-09-phase1#sec": (384, 1300, 1980, 2530),
    "e1-10-imp": (384, 700, 1980, 1930), "e1-10-imp#b": (384, 2300, 1980, 3530),
    "e1-14-risks": (384, 700, 1980, 1930), "e1-17-reqs": (384, 700, 1980, 1930), "e1-17-reqs#sp": (384, 5800, 1980, 7030),
    "e1-19-docs": (384, 700, 1980, 1930), "e1-25b-overview-exec": (384, 300, 1980, 1780),
    "e1-38-risks-treated": (384, 1260, 1980, 2960), "e1-41-closed": V,
    "e2-02-phase1": V, "e2-03-imp-result": (384, 700, 1980, 1930), "e2-04-risks": (384, 1250, 1980, 2480),
    "e2-05-reqs": (384, 700, 1980, 1930), "e2-05-reqs#sp": (384, 4230, 1980, 5460), "e2-09-reqs-verified": (384, 700, 1980, 1930),
    "e2-10-phase5": V, "e2-11-closed": V,
    "e3-03-overview": V, "e3-04-phase1": V, "e3-08-phase1-auto#sec": (384, 1150, 1980, 2380), "e3-12-closed": V,
}
os.makedirs(OUT, exist_ok=True)
names = sorted(set([f[:-4] for f in os.listdir(SRC) if f.endswith(".png") and f.startswith("e")] + [k for k in CROPS]))
for key in names:
    base = key.split("#")[0]
    path = os.path.join(SRC, base + ".png")
    if not os.path.exists(path):
        continue
    im = Image.open(path).convert("RGB")
    box = CROPS.get(key, V)
    box = (box[0], box[1], min(box[2], im.width), min(box[3], im.height))
    im = im.crop(box)
    if im.width > 1400:
        im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
    name = key.replace("#", "-") + ".jpg"
    im.save(os.path.join(OUT, name), quality=74, optimize=True, progressive=True)
print("done", len(os.listdir(OUT)))
