export const resourcesData = {
  categories: [
    { id: 'all', name: '全部資源' },
    { id: 'gov', name: '🏛️ 政府官方數位學習' },
    { id: 'publishers', name: '📚 三大教科書出版社' },
    { id: 'gamified', name: '🎮 遊戲化與互動平台' },
    { id: 'transition', name: '🎓 升國中先修與會考銜接' }
  ],
  resources: [
    // 🏛️ 政府官方數位學習
    {
      id: 'adl',
      category: 'gov',
      title: '教育部因材網 (ADL)',
      badge: '適性診斷・官方首選',
      color: 'hsl(215, 80%, 50%)',
      desc: '教育部官方智慧適性教學平台，依據 108 課綱進行知識節點檢測，自動診斷學習弱點並提供個人化補救教學路徑。',
      tags: ['OpenID 登入', '國數自社英', '弱點診斷', '免費公有'],
      url: 'https://adl.edu.tw/',
      tips: '建議使用各縣市校園 OpenID 登入，可自動綁定班級進度與學習歷程！'
    },
    {
      id: 'cool-english',
      category: 'gov',
      title: 'Cool English 酷英網',
      badge: '台師大建置・英語加強',
      color: 'hsl(190, 85%, 40%)',
      desc: '教育部委請國立臺灣師範大學建置，涵蓋聽力、口說、閱讀、寫作、字彙/文法、英語動畫與課本戰力提升包。',
      tags: ['英語全方位', '口說AI辨識', '英閱王競賽', '國小高年級專區'],
      url: 'https://www.coolenglish.edu.tw/',
      tips: '高年級可參加「英閱王」與「聽力悅讀王」競賽，提升國中英語銜接實力！'
    },
    {
      id: 'moe-cloud',
      category: 'gov',
      title: '教育部教育雲 (Education Cloud)',
      badge: '數位入口・整合大市集',
      color: 'hsl(150, 60%, 40%)',
      desc: '全國教育體系整合型入口網，收錄「教育大市集」、「教育媒體影音」與「學習百科」，匯集數萬件教學素材。',
      tags: ['教育入口網', '多媒體素材', '跨領域資源', '電子書'],
      url: 'https://cloud.edu.tw/',
      tips: '查詢專題報告、寒暑假自主學習探究專題的最佳資料庫。'
    },
    {
      id: 'cirn',
      category: 'gov',
      title: '國教院 CIRN 課程與教學資源網',
      badge: '課綱指標・評量題庫',
      color: 'hsl(280, 65%, 50%)',
      desc: '國家教育研究院維護，提供 108 課綱各領域「學習表現」與「學習內容」詳細指標，及全國國中小段考考古題庫。',
      tags: ['官方課綱', '歷屆段考試卷', '評量標準', '名師教案'],
      url: 'https://cirn.moe.edu.tw/',
      tips: '段考前至「中小學題庫網」下載近 3 年各校段考考卷，實戰演練效果最佳。'
    },

    // 📚 三大教科書出版社
    {
      id: 'knsh-cloud',
      category: 'publishers',
      title: '康軒雲 (KNSH Cloud)',
      badge: '課本同步・影音互動',
      color: 'hsl(25, 85%, 50%)',
      desc: '康軒文教官方數位學習網，提供國小各年級課本電子書、單元重點簡報、Kahoot 互動遊戲化測驗題庫。',
      tags: ['康軒版教材', '單元練習卷', '國數自社', '影音動畫'],
      url: 'https://www.knsh.com.tw/',
      tips: '學校若使用康軒版課本，可在段考前線上下載單元練習單自我檢測。'
    },
    {
      id: 'hanlin-cloud',
      category: 'publishers',
      title: '翰林雲端學院 / 翰林官網',
      badge: '名師題庫・自編評量',
      color: 'hsl(200, 80%, 45%)',
      desc: '翰林出版官方平台，同步翰林版六年級教材進度，提供單元自我評量、精選解題影片與圖解觀念。',
      tags: ['翰林版教材', '線上自測', '課文詳解', '閱讀理解'],
      url: 'https://www.hanlin.com.tw/',
      tips: '翰林國語與數學單元後附有「素養挑戰題」，很適合作為進階思維訓練。'
    },
    {
      id: 'nani-digital',
      category: 'publishers',
      title: '南一數位學習網 (Nani Digital)',
      badge: '素養導向・動畫教學',
      color: 'hsl(340, 75%, 55%)',
      desc: '南一書局官方數位資源，提供螺旋式架構的單元學習單、自然科實驗步驟動態圖解與社會科地圖互動教材。',
      tags: ['南一版教材', '實驗演示', '數學短除法精講', '多媒體教學'],
      url: 'https://www.nani.com.tw/',
      tips: '南一自然科實驗教學動畫非常生動，能幫助學生快速搞懂實驗操作原理。'
    },

    // 🎮 遊戲化與互動平台
    {
      id: 'junyi',
      category: 'gamified',
      title: '均一教育平台 (Junyi Academy)',
      badge: '免費公益・全科影片',
      color: 'hsl(215, 80%, 50%)',
      desc: '全臺最大免費公益學習平台，以知識地圖連結所有數學與自然觀念，提供徽章激勵機制與精準練習題。',
      tags: ['全科目影片', '三大版本對應', '學習星空圖', '自主練習'],
      url: 'https://www.junyiacademy.org/',
      tips: '觀念不清楚時，直接搜尋該單元影片，跟著老師一步一步在螢幕上動筆練習！'
    },
    {
      id: 'pagamo',
      category: 'gamified',
      title: 'PaGamO 遊戲化學習平台',
      badge: '答題攻城・做題不枯燥',
      color: 'hsl(10, 80%, 50%)',
      desc: '臺大葉丙成教授團隊研發，將全科國小題庫融入策略攻城遊戲中，透過回答題目佔領土地、建造王國。',
      tags: ['遊戲化答題', '跨界題庫', '同儕競賽', '段考刷題'],
      url: 'https://www.pagamo.org/',
      tips: '適合在讀完單元教學後，用遊戲闖關方式進行大量刷題與弱點鞏固。'
    },
    {
      id: 'learnmode',
      category: 'gamified',
      title: '學習吧 (LearnMode)',
      badge: '語音AI辨識・素養課程',
      color: 'hsl(165, 70%, 40%)',
      desc: '整合三大版本教材與課外素養專題，具備國語文語音朗讀辨識打分功能，培養自主閱讀習慣。',
      tags: ['AI語音辨識', '國語課文朗讀', '課外閱讀', '版本同步'],
      url: 'https://www.learnmode.net/',
      tips: '特別推薦使用國語文朗讀功能，練習口語咬字與文章流暢度。'
    },
    {
      id: 'phet',
      category: 'gamified',
      title: 'PhET 互動科學模擬 (科羅拉多大學)',
      badge: '虛擬實驗室・動手操作',
      color: 'hsl(45, 90%, 45%)',
      desc: '世界著名的互動科學模擬軟體（已全中文化），讓學童在電腦上親自調整槓桿支點、組裝電磁鐵電路、調配水溶液酸鹼。',
      tags: ['物理模擬', '化學實驗', '數學分數幾何', '動手做'],
      url: 'https://phet.colorado.edu/zh_TW/',
      tips: '不用擔心實驗器材損壞，在虛擬實驗室隨意拉動槓桿與電路，感受物理定律！'
    },

    // 🎓 升國中先修與會考銜接
    {
      id: 'junior-prep-math',
      category: 'transition',
      title: '國一數學銜接指南：負數與一元一次方程式',
      badge: '升中必備・代數思維',
      color: 'hsl(215, 80%, 50%)',
      desc: '小六升國中數學最大斷層在於「負數四則運算」與「未知數 x 代數符號」。本站精選銜接核心，提前打好國中基底。',
      tags: ['正負數', '數線與相反數', '一元一次方程式', '等量公理'],
      url: '#/prep',
      tips: '暑假期間提前掌握「等量公理」與「分配律」，開學第一次段考輕鬆拿滿分！'
    },
    {
      id: 'junior-prep-science',
      category: 'transition',
      title: '國中自然理化先修：密度、質量與化學元素',
      badge: '理化啟蒙・科學探究',
      color: 'hsl(150, 60%, 40%)',
      desc: '從國小自然「物質受熱、水溶液」延伸至國中理化「質量與密度 $D=M/V$、週期表元素符號與原子分子模型」。',
      tags: ['密度計算', '元素符號', '實驗安全守則', '探究實作'],
      url: '#/prep',
      tips: '提早背誦前 20 號元素週期表（氫氦鋰鈹硼、碳氮氧氟氖...），國中理化事半功倍！'
    }
  ]
};
