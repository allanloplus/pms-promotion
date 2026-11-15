"""English narration (Microsoft Edge neural voices): en/tools/gen_audio.py
Allan: en-US-AndrewNeural  Arale: en-US-AnaNeural

用法：node tools/build-script.js > tools/script.json && python3 tools/gen_audio.py
需要：pip install edge-tts；ffmpeg
講師：zh-TW-YunJheNeural（台灣男聲）
助教：zh-TW-HsiaoYuNeural 提高音調（台灣小女生）
"""
import asyncio, hashlib, json, os, ssl, subprocess, sys, time, wave

import edge_tts
import edge_tts.communicate as C

if os.environ.get("TTS_CA_BUNDLE"):  # 經過企業代理時使用其 CA
    C._SSL_CTX = ssl.create_default_context(cafile=os.environ["TTS_CA_BUNDLE"])

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "tools", ".tts-cache")
OUT = os.path.join(ROOT, "audio")
VOICE = {
    "A": dict(voice="en-US-AndrewNeural", pitch="+0Hz", rate="+0%"),
    "R": dict(voice="en-US-AnaNeural", pitch="+8Hz", rate="+4%"),
}
RATE = 24000
GAP = 0.35  # 每句之間的停頓（秒）


def key(who, text):
    v = VOICE[who]
    return hashlib.sha1(json.dumps([v, text], ensure_ascii=False).encode()).hexdigest()[:16]


async def synth_once(who, text, sem, pas):
    """單次合成；成功回傳 wav 路徑，失敗回傳 None（由外層分輪重試）。"""
    path = os.path.join(CACHE, key(who, text) + ".wav")
    if os.path.exists(path):
        return path
    v = VOICE[who]
    # 服務端偶有句子在特定音高下不回傳音訊：各輪輪替 -2Hz／+0Hz／-1Hz（音色相同，差異極小）
    pitch = v["pitch"] if v["pitch"] != "-2Hz" else ["-2Hz", "+0Hz", "-1Hz"][pas % 3]
    async with sem:
        try:
            mp3 = path[:-4] + ".mp3"
            await edge_tts.Communicate(text, v["voice"], pitch=pitch, rate=v["rate"],
                                       proxy=os.environ.get("HTTPS_PROXY")).save(mp3)
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", mp3, "-ac", "1", "-ar", str(RATE),
                            "-sample_fmt", "s16", path], check=True)
            os.remove(mp3)
            return path
        except Exception:
            await asyncio.sleep(0.5)
            return None


async def fill(items, minutes):
    """分輪合成所有缺少的句子，直到全部完成或超過時間預算。"""
    sem = asyncio.Semaphore(3)
    todo = list({(i["who"], i["speak"]) for i in items})
    deadline = time.time() + minutes * 60
    pas = 0
    while True:
        todo = [t for t in todo if not os.path.exists(os.path.join(CACHE, key(*t) + ".wav"))]
        print("第 %d 輪：尚缺 %d 句" % (pas + 1, len(todo)), flush=True)
        if not todo or time.time() > deadline:
            return len(todo)
        await asyncio.gather(*[synth_once(w, t, sem, pas) for w, t in todo])
        pas += 1
        if pas > 1:
            await asyncio.sleep(10)


def fnv(text):
    """與 js/play.js 相同的 FNV-1a（UTF-16 碼元），用來確認語音檔與內容一致。"""
    h = 0x811C9DC5
    b = text.encode("utf-16-le")
    for i in range(0, len(b), 2):
        h ^= b[i] | (b[i + 1] << 8)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "x")


def pack(name, items, paths):
    """把多句 wav 串成一個 mp3，並記錄每句起訖時間。"""
    gap = b"\x00\x00" * int(RATE * GAP)
    frames, cues, t = [], [], 0.0
    for it, p in zip(items, paths):
        with wave.open(p) as w:
            data = w.readframes(w.getnframes())
        dur = len(data) / 2 / RATE
        cues.append([round(t, 3), round(t + dur, 3), fnv(it["speak"])])
        frames += [data, gap]
        t += dur + GAP
    wav = os.path.join(CACHE, name + ".all.wav")
    with wave.open(wav, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE)
        w.writeframes(b"".join(frames))
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-codec:a", "libmp3lame", "-b:a", "40k",
                    "-ac", "1", "-ar", str(RATE), os.path.join(OUT, name + ".mp3")], check=True)
    os.remove(wav)
    return cues, round(t, 1)


async def main():
    os.makedirs(CACHE, exist_ok=True); os.makedirs(OUT, exist_ok=True)
    script = json.load(open(os.path.join(ROOT, "tools", "script.json"), encoding="utf-8"))
    groups = [("common", script["common"])] + [(c["id"], c["steps"]) for c in script["chapters"]]
    missing = await fill([i for _, items in groups for i in items], float(os.environ.get("TTS_MINUTES", "30")))
    index = {}
    for name, items in groups:
        paths = [os.path.join(CACHE, key(i["who"], i["speak"]) + ".wav") for i in items]
        if not all(os.path.exists(p) for p in paths):
            print(name, "語音未齊全，略過（播放器將改用瀏覽器語音）", flush=True)
            continue
        cues, total = pack(name, items, paths)
        index[name] = {"duration": total, "cues": cues}
        print(name, len(items), "句", total, "秒", flush=True)
    with open(os.path.join(OUT, "cues.js"), "w", encoding="utf-8") as f:
        f.write("/* 由 tools/gen_audio.py 產生，請勿手動編修 */\nwindow.AUDIO_CUES = ")
        json.dump(index, f, ensure_ascii=False)
        f.write(";\n")
    if missing:
        print("尚有 %d 句未完成，可稍後重新執行本程式補齊（已完成的句子會沿用快取）" % missing)


asyncio.run(main())
