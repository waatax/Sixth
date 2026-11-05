// 實際讀過的公開資料。只取題型與考點，題目一律重新命題，不重製原卷內容。
const DG = 'https://olddgps.kl.edu.tw/index/file';
const MY = 'https://www.myps.hlc.edu.tw/modules/tad_uploader/index.php';

export const SOURCES = {
  DG111M1: { short: '東光國小111上數學', name: '基隆市東光國小 111 學年度上學期六年級數學第一次定期評量', url: `${DG}/167/%E7%AC%AC1%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E6%95%B8%E5%AD%B8%E9%A0%98%E5%9F%9F.pdf` },
  DG111M2: { short: '東光國小111下數學', name: '基隆市東光國小 111 學年度下學期六年級數學第二次定期評量', url: `${DG}/168/%E7%AC%AC2%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E6%95%B8%E5%AD%B8%E9%A0%98%E5%9F%9F.pdf` },
  DG113S1: { short: '東光國小113下自然', name: '基隆市東光國小 113 學年度下學期六年級自然第一次定期評量', url: `${DG}/204/%E7%AC%AC1%E6%AC%A1%E8%A9%95%E9%87%8F%E8%A9%A6%E9%A1%8C_%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%B8%E9%A0%98%E5%9F%9F.pdf` },
  MY106S2: { short: '明義國小106上自然', name: '花蓮縣明義國小 106 學年度上學期六年級自然期末評量', url: `${MY}?op=dlfile&cfsn=3122&cat_sn=299&fn=1070104%E5%85%AD%E5%B9%B4%E7%B4%9A%E8%87%AA%E7%84%B6%E6%9C%9F%E6%9C%AB%E8%80%83%E6%9F%A5%E9%A1%8C%E7%9B%AE%E5%8D%B7.pdf` },
  DG111C1: { short: '東光國小111上社會', name: '基隆市東光國小 111 學年度上學期六年級社會第一次定期評量', url: `${DG}/167/%E7%AC%AC1%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E7%A4%BE%E6%9C%83%E9%A0%98%E5%9F%9F.pdf` },
  DG112C1: { short: '東光國小112下社會', name: '基隆市東光國小 112 學年度下學期六年級社會第一次定期評量', url: `${DG}/170/%E7%AC%AC1%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E7%A4%BE%E6%9C%83%E9%A0%98%E5%9F%9F.pdf` },
  DG113C1: { short: '東光國小113下社會', name: '基隆市東光國小 113 學年度下學期六年級社會第一次定期評量', url: `${DG}/204/%E7%AC%AC1%E6%AC%A1%E8%A9%95%E9%87%8F%E8%A9%A6%E9%A1%8C_%E7%A4%BE%E6%9C%83%E9%A0%98%E5%9F%9F.pdf` },
  DG112E1: { short: '東光國小112下英語', name: '基隆市東光國小 112 學年度下學期六年級英語第一次定期評量', url: `${DG}/170/%E7%AC%AC1%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E8%8B%B1%E8%AA%9E%E9%A0%98%E5%9F%9F.pdf` },
  DG112M2: { short: '東光國小112下國語', name: '基隆市東光國小 112 學年度下學期六年級國語第二次定期評量', url: `${DG}/170/%E7%AC%AC2%E6%AC%A1%E5%AE%9A%E6%9C%9F%E8%A9%95%E9%87%8F_%E5%9C%8B%E8%AA%9E%E9%A0%98%E5%9F%9F.pdf` },
  MY108M1: { short: '明義國小108上國語', name: '花蓮縣明義國小 108 學年度上學期六年級國語期中評量', url: 'https://xc.hlc.edu.tw/~myps_www/modules/tad_uploader/index.php?op=dlfile&cfsn=4265&cat_sn=434&fn=%E8%8A%B1%E8%93%AE%E7%B8%A3%E8%8A%B1%E8%93%AE%E5%B8%82%E6%98%8E%E7%BE%A9%E5%9C%8B%E6%B0%91%E5%B0%8F%E5%AD%B8108%E5%AD%B8%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%AD%B8%E6%9C%9F%E5%85%AD%E5%B9%B4%E7%B4%9A%E5%9C%8B%E8%AA%9E%E7%A7%91%E6%9C%9F%E4%B8%AD%E8%A9%95%E9%87%8F%E8%A9%A6%E5%8D%B7.pdf' },
  TCM: { short: '公開國語文測驗', name: '臺中市校園網站公開的國小六年級國語文測驗', url: 'https://school.tc.edu.tw/open-message/064644/get-file/608a0243b6ef1721261226c5' },
};

// 無公開紙筆段考時的命題依據（藝術、健體、綜合）
export const PLAN_BASIS = {
  art: '找不到可公開閱讀的藝術紙筆段考卷；依 [高雄市陽明國小六年級藝術課程計畫](https://web.ymps.kh.edu.tw/ymps15/%E8%AA%B2%E7%A8%8B%E8%A8%88%E7%95%AB/114/6/114%E9%A0%98%E5%9F%9F%E8%AA%B2%E7%A8%8B%E8%A8%88%E7%95%AB_6/114%E9%A0%98%E5%9F%9F%E8%AA%B2%E7%A8%8B%E8%A8%88%E7%95%AB_6B%E8%97%9D%E8%A1%93.pdf) 與 108 課綱學習重點命題。各校多以實作評量，紙筆比例請問老師。',
  pe: '找不到可公開閱讀的健體紙筆段考卷；依 [高雄市鳳山國小六年級健體課程計畫](https://course.fsp.kh.edu.tw/114course/%E5%85%AD%E5%B9%B4%E7%B4%9A/pdf/01%E9%83%A8%E5%AE%9A%E8%AA%B2%E7%A8%8B/%E4%B8%8A%E5%AD%B8%E6%9C%9F/%E5%85%AD%E4%B8%8A%E5%81%A5%E9%AB%94.pdf) 與 108 課綱學習重點命題。各校評量方式不同，請以老師公告為準。',
  comp: '綜合活動通常不辦紙筆段考；依 108 課綱綜合活動學習重點設計情境判斷題，用來練習做決定，不代表學校會這樣考。',
};
