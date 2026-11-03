# 小小學習島 · Sixth

讓小學生用圖解、遊戲和小考，快樂學好 108 課綱。免登入、無廣告，手機、平板、桌機都能用。

[開啟 GitHub Pages](https://waatax.github.io/Sixth/) · [研究與優化計畫](LEARNING-GARDEN-PLAN.md)

## 目前能學什麼

| 入口 | 內容 |
| --- | --- |
| 學習地圖 | 一至六年級 271 堂原創微課、546 題，可用觀念、單元名稱或課綱代碼搜尋 |
| 數學 | 國小 131 條學習內容全部有對應微課（條目依國教院正式領綱） |
| 自然 | 三至六年級 33 堂，標注對應的學習內容代碼（代表性主題，非全部條目） |
| 其他領域 | 國語、英語、社會、藝術、健體、綜合、生活的代表性主題 |
| 遊戲島 | 火箭速算、翻牌配對、分類島、順序列車、拼字船、島主挑戰 |
| 小考檢查 | 可選年級、範圍與題數，提供各科分析與要補的課 |
| 我的手札 | 等級與小島成長、貼紙、14 天紀錄、複習清單、CSV |
| 原有小六教材 | 八科 64 單元、題庫、段考講義、閃卡與互動實驗 |

**這不是所有版本教材的逐冊收錄。** 各審定版本都依同一份 108 課綱編寫，本站以課綱學習內容與觀念為骨架，孩子可用課本單元裡的觀念找到對應微課；尚未逐冊核對各出版社的課名、頁碼與進度，也不重製出版社課文、插圖或習作。本土語文、新住民語文與校訂課程尚未涵蓋。

## 學習與遊戲設計

- 看圖 → 回想 → 換情境應用 → 看理由 → 延後複習；依作答安排 1、3、7、14 天回顧。
- 題型：四選一、是非、填數字、排序、配對。分數以直式呈現；圖解共 40 種，其中 11 種可用滑桿操作。
- 經驗值、等級（小島逐步蓋起建築）、每日任務、23 張貼紙、連續天數（休息一天不中斷）。
- 答錯也有經驗、不扣分、不公開排名；提前重做只給少量經驗；遊戲經驗每日有上限。
- 進度只存在瀏覽器；資料毀損或無法儲存時仍可學習並會提示。

選擇題只能檢查部分觀念；藝術創作、口說、動作與合作需要實作觀察。本站尚未進行學習成效研究或學生實測，內容由 AI 協助撰寫，雖經自動與人工檢查仍可能有錯，不作正式學力認證。

## 開發與檢查

使用 React、Vite、React Router、Lucide 與 KaTeX。正式部署的 base 為 `/Sixth/`，以 HashRouter 保留深層路由。

```sh
npm ci
npm run dev
node scripts/verify-island-content.mjs
node scripts/verify-learning-garden.mjs
node scripts/verify-garden-render.mjs
node scripts/verify-study-studio.mjs
node scripts/verify-print-assets.mjs
npm run build
node scripts/verify-learning-upgrade.mjs
```

`verify-island-content` 驗算課文中所有數字等式、檢查 131 條數學條目都有對應微課、每題可正確判分、遊戲產生器與獎勵規則。它不能取代教師的內容編審。

推送 `main` 後，GitHub Actions 執行上述檢查與建置，再部署 `dist/` 至 GitHub Pages。

新增課程：在 `src/data/garden/` 加一列（格式見 `build.js`），圖解類型見 `src/components/garden/Visual.jsx`。

## 官方資料與設計依據

- [國家教育研究院・正式公布課綱](https://www.naer.edu.tw/PageSyllabus?fid=52)
- [國家教育研究院・教科用書審定資訊網](https://textbooks.naer.edu.tw/)
- [教育部因材網](https://adl.edu.tw/)
- [IES・Organizing Instruction and Study to Improve Student Learning](https://ies.ed.gov/ncee/wwc/PracticeGuide/1)
