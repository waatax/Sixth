# 小小學習島 · Sixth

讓小學生依自己的步調，用圖解、回想與情境挑戰理解觀念。

[開啟 GitHub Pages](https://waatax.github.io/Sixth/) · [研究與優化計畫](LEARNING-GARDEN-PLAN.md)

## 目前能學什麼

| 入口 | 可用內容 |
| --- | --- |
| 一、二年級 | 每級 4 個原創主題微課：數學、國語、生活、健體 |
| 三至六年級 | 每級 8 個原創主題微課：數學、國語、自然、社會、英語、藝術、健體、綜合 |
| 原有小六練習室 | 八科 64 個深入單元、1,024 題可篩選四選一練習 |
| 原有學習工具 | 重點講義、閃卡、互動實驗、闖關與教育資源導航 |

新增微課合計 40 課、80 題，每課包括學習目標、解說例子、觀念圖、整理表、易混淆提醒、回想與應用挑戰。分數和比例尺提供可操作圖解；課文與題目可使用瀏覽器語音朗讀。

**這不是所有年級、學期、領域與出版社教材的完整收錄。** 微課年級是建議探索起點。課本版本選項顯示範圍提醒，尚未逐冊核對各出版社的課名、頁碼與進度；不因選擇出版社就假裝換成該版題庫。本站原創微課不重製出版社課文、插圖或習作。原有深入教材仍需要持續內容編審。

## 學習與遊戲回饋

- 看例子和圖解 → 自己回想 → 換情境應用 → 看理由與反思 → 延後複習。
- 依作答安排 1、3、7、14 天回顧；提前重做不增加跨日熟練，也不推遲複習。
- 初次完成表示兩題都已試答；「已跨日複習」表示兩題皆在到期後再次答對。兩者皆不是正式學力認證。
- 探索、完成初次練習、跨日回顧解鎖里程碑；不扣愛心、不比公開排名。
- 進度留在目前瀏覽器，可下載 CSV。清除瀏覽資料後會重設；儲存不可用時仍能完成當次練習，並顯示提醒。
- 反思文字不儲存、不傳送。沒有登入、後端學生成績服務或廣告系統。

選擇題只用於有限的觀念回饋；藝術創作、口說、動作與合作能力需要實作觀察。本網站尚未進行學習成效研究或學生試用，不聲稱已有專家委員會背書。

## 開發與檢查

使用 React、Vite、React Router、Lucide 與 KaTeX。正式部署的 base 為 `/Sixth/`，以 HashRouter 保留深層路由。

```sh
npm ci
npm run dev
node scripts/verify-learning-garden.mjs
node scripts/verify-garden-render.mjs
node scripts/verify-study-studio.mjs
node scripts/verify-learning-upgrade.mjs
npm run build
```

`npm run validate` 執行原有教材品質矩陣；它主要檢查資料與原始碼結構，不能證明課綱、版本或學習成效已獲教育專業驗證。新增路由渲染測試也不代替真實瀏覽器的互動與視覺測試。

推送 `main` 後，GitHub Actions 執行上述課程／引擎／渲染與內容回歸檢查、正式建置，再部署 `dist/` 至 GitHub Pages。

## 官方資料與設計依據

- [國家教育研究院・正式公布課綱](https://www.naer.edu.tw/PageSyllabus?fid=52)
- [國家教育研究院・教科用書審定資訊網](https://textbooks.naer.edu.tw/)
- [教育部因材網](https://adl.edu.tw/)
- [IES・Organizing Instruction and Study to Improve Student Learning](https://ies.ed.gov/ncee/wwc/PracticeGuide/1)

內容與版本擴充路線、驗證範圍與已知限制，請見 [LEARNING-GARDEN-PLAN.md](LEARNING-GARDEN-PLAN.md)。
