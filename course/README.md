# 米數Medsig 系統線上課程（動畫教學）

以「米數Medsig 以ISMS為基礎的專案安全管理系統」實際畫面製作的線上課程。主講 Allan 顧問，AI 小助手阿拉蕾串場，隨產品宣傳頁一起以 GitHub Pages 發佈（`/course/`）。

## 課程架構（17 單元）

| 部分 | 單元 |
| --- | --- |
| 開場 | 課程導覽：認識米數Medsig |
| 第一部分｜系統特色 | 不一樣的 PMS：以 ISMS 為基礎／專案性質、分類與五階段管控／專案安全管理：評估、評鑑、要求與稽核／管理與稽核實踐：看板、報表與稽核軌跡 |
| 第二部分｜合規對應 | ISO/IEC 27001／TISAX（VDA ISA）／ISO 27701 與 ISO 42001／IEC 62443 與 ISO/SAE 21434／稽核佐證地圖 |
| 第三部分｜系統操作 | 登入與帳號權限／案例一 研發專案（上中下：申請到結案，含風險評鑑）／案例二 資訊專案（含風險評鑑）／案例三 流程再造專案（免風險評鑑） |
| 結語 | 重點回顧與課後測驗 |

## 英文版

`en/` 為完整英文版（互動教材版 `en/index.html`、影音版 `en/play.html`、20 題英文題庫與英文證書）。系統畫面以系統英文介面重新操作三個案例擷取（`en/img/`）；語音為 Allan：en-US-AndrewNeural、阿拉蕾：en-US-AnaNeural，以 `en/tools/gen_audio.py` 產生。中英文版頂部列可互相切換。

## 兩種版本

- `index.html`：**線上互動教材版**。自由跳讀；系統畫面附紅色編號標註與說明，點圖可放大；每單元有隨堂測驗；閱讀進度存在瀏覽器。
- `play.html`：**線上課程教學影音版**。Allan（台灣男聲 zh-TW-YunJheNeural）與阿拉蕾（zh-TW-HsiaoYuNeural 提高音調）語音導讀，與系列動畫課程相同設定；講到系統畫面時，畫面會自動推近到標註位置。支援播放／暫停、上一句／下一句、時間軸、語速、字幕、連播。某單元若尚未產生語音，播放器會自動改用瀏覽器內建語音。

## 課後測驗與通過證書

- `js/quiz.js`：20 題題庫，每次隨機抽 10 題，80 分通過（`passScore`、`draw` 可調整）。
- 通過後填寫公司、單位、姓名、職稱、E-mail，產生**通過證書**（PNG 下載、列印／另存 PDF），證書上有講師簽名（`assets/signature.png`，透明背景，可直接替換）。
- 未通過不公布正解，列出建議重讀的單元。資料只存在學員自己的瀏覽器，不會上傳。

## 檔案結構

- `js/content-1.js`～`js/content-3.js`：課程內容（可直接編修文字）。系統畫面區塊格式：`["shot", 圖檔, 標題, [[x%, y%, 說明], ...], 開場語音]`，x、y 為標註點在圖上的百分比位置。
- `js/app.js`：互動教材版；`js/play.js`、`js/play-script.js`：影音版播放器與語音腳本；`js/characters.js`：角色與表情。
- `img/`：系統畫面（取自系統 Demo 公司示範資料）；`assets/`：Allan 與阿拉蕾的角色圖、表情與講師簽名。
- `audio/`：各單元語音 MP3 與時間軸 `cues.js`。
- `tools/`：截圖裁切、語音腳本與語音合成工具。

## 修改內容後重新產生語音

```bash
pip install edge-tts   # 另需 ffmpeg
```

```bash
node tools/build-script.js > tools/script.json
```

```bash
python3 tools/gen_audio.py
```

只會合成有變動或尚未完成的句子（快取於 `tools/.tts-cache/`，不進版控）。語音服務偶爾對特定句子不回傳音訊，程式會分輪重試；超過時間預算（環境變數 `TTS_MINUTES`，預設 30 分鐘）仍未完成的單元會先略過，播放器對該單元改用瀏覽器語音，之後再執行一次即可補齊。經過企業代理時，以 `TTS_CA_BUNDLE` 指定代理的 CA 憑證。

## 更新系統畫面

系統畫面以 Playwright 操作系統示範環境擷取（1320×820、1.5 倍），再以下列指令裁切壓縮：

```bash
python3 tools/prep_shots.py <截圖資料夾>
```

更換畫面後，請一併確認 `content-*.js` 中的標註點位置。

---
教材規劃製作／系統開發：米數Medsig（https://www.medsigtw.com/）

Copyright © 2026 Allan Lo. All rights reserved.
