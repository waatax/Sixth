// TikTok / Shorts-Style Micro-Learning Data for 6th Grade & Junior High Prep
export const shortsReelsData = [
  {
    id: 'reel-math-1',
    subject: 'math',
    subjectName: '🧮 數學大神',
    themeColor: 'from-blue-600 to-indigo-600',
    accentColor: '#3b82f6',
    title: '🍕 為什麼圓面積是「半徑 × 半徑 × 3.14」？',
    subtitle: '30秒披薩神技！切成64等份瞬間變長方形！',
    videoEmoji: '🍕',
    author: '數理小精靈 Spark',
    audioScript: '你知道為什麼圓面積是半徑乘半徑乘3.14嗎？想像把一個圓形大披薩切成無數個極細扇形，上下交錯拼貼，就會驚奇地變成一個長方形！長方形的寬剛好是圓的「半徑 r」，而長剛好是圓周長的一半，也就是「半徑乘3.14」。長乘寬就等於「半徑乘半徑乘3.14」！秒懂了吧！',
    keyCards: [
      { emoji: '🔪', title: '極限分割', desc: '把圓切成 32 或 64 等份扇形' },
      { emoji: '🧩', title: '交錯拼貼', desc: '上下拼合瞬間化身平行四邊形/長方形' },
      { emoji: '📏', title: '公式推導', desc: '長(r × π) × 寬(r) = r² × 3.14' }
    ],
    funMeme: '💡 記住：披薩切得越細，越像長方形！',
    popQuiz: {
      question: '如果一個圓的半徑是 10 公分，它的圓面積大約是多少平方公分？',
      options: ['31.4 cm²', '62.8 cm²', '314 cm²', '628 cm²'],
      answerIndex: 2,
      explanation: '面積 = 半徑 × 半徑 × 3.14 = 10 × 10 × 3.14 = 314 cm²！'
    },
    likes: 1240,
    tags: ['#數學秒懂', '#圓面積', '#幾何拼貼', '#小六必考']
  },
  {
    id: 'reel-sci-1',
    subject: 'science',
    subjectName: '🔬 自然狂人',
    themeColor: 'from-emerald-600 to-teal-700',
    accentColor: '#10b981',
    title: '⚖️ 給我一個支點，我能翹起地球！槓桿三兄弟',
    subtitle: '施力臂越長越省力！指甲剪、開瓶器都在用它！',
    videoEmoji: '⚖️',
    author: '探索小博士 Sage',
    audioScript: '槓桿平衡大原則：施力乘施力臂等於抗力乘抗力臂！當「施力臂大於抗力臂」時就是「省力槓桿」，例如開瓶器與拔釘器；當「抗力臂大於施力臂」時就是「費力但省距離」，例如鑷子與筷子；天平則是等臂槓桿。記住口訣：施力臂長就省力！',
    keyCards: [
      { emoji: '💪', title: '省力槓桿', desc: '施力臂 > 抗力臂 (開瓶器、裁紙刀)' },
      { emoji: '🥢', title: '省時槓桿', desc: '施力臂 < 抗力臂 (筷子、鑷子、釣竿)' },
      { emoji: '⚖️', title: '等臂槓桿', desc: '施力臂 = 抗力臂 (天平、翹翹板)' }
    ],
    funMeme: '💡 只要把手握在工具最末端，施力臂最長，瞬間省力 80%！',
    popQuiz: {
      question: '想要最省力地用剪刀剪斷堅硬鐵絲，應該怎麼做？',
      options: ['把鐵絲放在刀刃尖端剪', '手握在剪刀握把的最前段', '把鐵絲放靠近軸心，手握在握把末端', '隨便剪都一樣省力'],
      answerIndex: 2,
      explanation: '把鐵絲放靠近軸心(縮小抗力臂)，手握在末端(拉長施力臂)，最省力！'
    },
    likes: 2180,
    tags: ['#物理好好玩', '#槓桿原理', '#簡單機械', '#科學探究']
  },
  {
    id: 'reel-eng-1',
    subject: 'english',
    subjectName: '🇬🇧 雙語神手',
    themeColor: 'from-sky-600 to-blue-700',
    accentColor: '#0ea5e9',
    title: '🔥 3 秒搞懂 Past Tense 不規則動詞神曲！',
    subtitle: 'go-went, see-saw, eat-ate, have-had 一次通關！',
    videoEmoji: '🎸',
    author: '晴波豚 Aqua',
    audioScript: '動詞過去式總是背了就忘嗎？跟著節奏念一次：Go went went, See saw seen, Eat ate eaten, Have had had, Take took taken, Buy bought bought! 否定句只要用 didn\'t 加原形動詞！例如：I went to school, but I didn\'t see him!',
    keyCards: [
      { emoji: '🚀', title: '高頻過去式', desc: 'go→went, see→saw, eat→ate, have→had' },
      { emoji: '🛡️', title: '否定大絕招', desc: 'didn\'t + 原形動詞 (didn\'t go, NOT didn\'t went)' },
      { emoji: '❓', title: '過去式問句', desc: 'Did you + 原形動詞 ...? Yes, I did.' }
    ],
    funMeme: '💡 記住：didn\'t 是魔法還原水，後面的動詞永遠打回原形！',
    popQuiz: {
      question: '選出文法正確的過去式句子：',
      options: ['Yesterday I didn\'t went to the park.', 'Yesterday I didn\'t go to the park.', 'Yesterday I not went to the park.', 'Yesterday I don\'t went to the park.'],
      answerIndex: 1,
      explanation: 'didn\'t 後面必須搭配原形動詞 go，所以 "Yesterday I didn\'t go to the park" 完全正確！'
    },
    likes: 3410,
    tags: ['#GEPT初級', '#英文文法', '#過去式', '#雙語開掛']
  },
  {
    id: 'reel-math-2',
    subject: 'math',
    subjectName: '🧮 數學大神',
    themeColor: 'from-purple-600 to-pink-600',
    accentColor: '#8b5cf6',
    title: '⚡ 分數除法為什麼要「顛倒相乘」？',
    subtitle: '4 ÷ (1/2) 為什麼等於 4 × 2 = 8？看圖秒懂！',
    videoEmoji: '🍰',
    author: '數理小精靈 Spark',
    audioScript: '分數除法為什麼顛倒相乘？想像有 4 個大蛋糕，每半個也就是二分之一個分裝成一盒，總共可以裝幾盒？一個蛋糕有 2 個半個，4 個蛋糕就有 4 乘 2 等於 8 盒！所以除以二分之一，本質上就是乘以二！除以分數等於乘以它的倒數！',
    keyCards: [
      { emoji: '🎂', title: '生活分裝', desc: '4 個蛋糕分給半個一盒 = 4 ÷ 1/2 = 8 盒' },
      { emoji: '🔄', title: '倒數原理', desc: '除以 3/4 等於乘以 4/3' },
      { emoji: '⚠️', title: '帶分數避坑', desc: '計算前必須先化為假分數再顛倒！' }
    ],
    funMeme: '💡 除號變乘號，後面分數做「倒立翻跟斗」！',
    popQuiz: {
      question: '計算 6 ÷ (2/3) 的結果是多少？',
      options: ['4', '9', '12', '1/9'],
      answerIndex: 1,
      explanation: '6 ÷ (2/3) = 6 × (3/2) = (6 × 3) / 2 = 18 / 2 = 9！'
    },
    likes: 1890,
    tags: ['#分數除法', '#算理圖解', '#小六數學', '#滿分公式']
  },
  {
    id: 'reel-sci-2',
    subject: 'science',
    subjectName: '🔬 自然狂人',
    themeColor: 'from-amber-500 to-red-600',
    accentColor: '#f59e0b',
    title: '🧪 藍變紅是酸？紅變藍是鹼？石蕊口訣！',
    subtitle: '酸性是檸檬醋酸，鹼性是小蘇打皂水！3秒口訣！',
    videoEmoji: '🧪',
    author: '探索小博士 Sage',
    audioScript: '石蕊試紙顏色總是記混嗎？送你最強口訣：「酸性紅通通，鹼性藍汪汪」！藍色石蕊試紙遇到酸性溶液會變紅色；紅色石蕊試紙遇到鹼性溶液會變藍色！中性溶液則兩張試紙都不變色！電解質水溶液還能導電喔！',
    keyCards: [
      { emoji: '🍋', title: '酸性物質', desc: '檸檬汁、醋酸、鹽酸 → 石蕊試紙變紅' },
      { emoji: '🧼', title: '鹼性物質', desc: '小蘇打水、肥皂水、氨水 → 石蕊試紙變藍' },
      { emoji: '💧', title: '中性物質', desc: '純水、食鹽水、糖水 → 試紙皆不變色' }
    ],
    funMeme: '💡 口訣：酸酸的像紅蘋果，鹼鹼的像藍大海！',
    popQuiz: {
      question: '將紅色石蕊試紙與藍色石蕊試紙放入「純食鹽水」中，試紙會如何變化？',
      options: ['兩張都變紅色', '兩張都變藍色', '兩張都不變色', '紅色變藍色，藍色變紅色'],
      answerIndex: 2,
      explanation: '食鹽水是中性水溶液，紅色與藍色石蕊試紙都不會改變顏色！'
    },
    likes: 2750,
    tags: ['#酸鹼性質', '#石蕊試紙', '#電解質', '#自然實驗']
  },
  {
    id: 'reel-prep-1',
    subject: 'prep',
    subjectName: '🎓 國中先修',
    themeColor: 'from-purple-700 to-indigo-900',
    accentColor: '#a855f7',
    title: '🧠 國一魔王關：為什麼「負負得正」？',
    subtitle: '往反方向倒退走，竟然是在往前進？！神級圖解！',
    videoEmoji: '🚀',
    author: '雷霆龍 Draco',
    audioScript: '升國一最困惑的「負負得正」怎麼理解？想像你在數線上：正號是往前走，負號是往後退；乘正數是放慢鏡頭，乘負數是「時間倒帶」！如果你面向後方（負），然後錄影帶倒著播（負），在畫面上看起來你是不是正神奇地往前進？這就是 (-2) 乘 (-3) 等於正 6 的奧秘！',
    keyCards: [
      { emoji: '⏪', title: '倒帶比喻', desc: '倒退著走 + 倒帶播放 = 視覺上正在往前衝' },
      { emoji: '⚖️', title: '去括號法則', desc: '-(-a) = +a；-(+a) = -a' },
      { emoji: '💡', title: '乘法正負表', desc: '正正得正、正負得負、負正得負、負負得正' }
    ],
    funMeme: '💡 「敵人的敵人」就是我的「朋友」！負負必定得正！',
    popQuiz: {
      question: '計算算式：(-4) × (-5) + (-10) 的結果是多少？',
      options: ['-30', '10', '30', '-10'],
      answerIndex: 1,
      explanation: '(-4) × (-5) 負負得正等於 +20，接著 20 + (-10) = 10！'
    },
    likes: 4200,
    tags: ['#國中先修', '#負負得正', '#數線代數', '#七年級必看']
  },
  {
    id: 'reel-man-1',
    subject: 'mandarin',
    subjectName: '📖 國語秒懂',
    themeColor: 'from-amber-600 to-orange-700',
    accentColor: '#f97316',
    title: '🖋️ 議論文滿分鐵三角：論點・論據・論證！',
    subtitle: '寫作文不再廢話連篇！3步驟說服閱卷老師！',
    videoEmoji: '📝',
    author: '文學妙筆仙 Luna',
    audioScript: '議論文想要拿六級分，只要套用黃金三要素：第一，論點就是你的主張；第二，論據就是舉出事實或名人名言佐證；第三，論證就是解釋論據如何支持論點！記住：光有論點沒有論據就是空洞口號！',
    keyCards: [
      { emoji: '🎯', title: '論點 (Claim)', desc: '文章的主張與核心看法 (如：失敗是成功之母)' },
      { emoji: '📚', title: '論據 (Evidence)', desc: '事實論據 (愛迪生發明電燈) 或名言論據' },
      { emoji: '🔗', title: '論證 (Reasoning)', desc: '運用因果或對比邏輯，論證論據與論點的關聯' }
    ],
    funMeme: '💡 寫作秘訣：論點是骨架，論據是肌肉，論證是神經連結！',
    popQuiz: {
      question: '在議論文中，「愛迪生經過上千次實驗失敗才成功發明電燈」屬於哪種要素？',
      options: ['論點', '論據', '論證', '修辭'],
      answerIndex: 1,
      explanation: '愛迪生具體的發明經歷屬於支持觀點的「事實論據」！'
    },
    likes: 1980,
    tags: ['#國語寫作', '#議論文', '#會考作文', '#修辭論述']
  },
  {
    id: 'reel-soc-1',
    subject: 'social',
    subjectName: '🌍 社會領航',
    themeColor: 'from-violet-600 to-purple-800',
    accentColor: '#a855f7',
    title: '🏛️ 臺灣民主三部曲：解嚴到總統直選！',
    subtitle: '1987 解嚴、1996 總統直選！公民權利這樣來的！',
    videoEmoji: '🗳️',
    author: '環球小領航 Draco',
    audioScript: '臺灣的民主歷程是世界奇蹟！1987年宣布解除戒嚴，開放黨禁與報禁，人民重獲言論自由；1996年舉辦第一次公民直選總統，落實主權在民！憲法保障我們平等、自由、受益與參政四大基本權利！',
    keyCards: [
      { emoji: '🕊️', title: '1987 解除戒嚴', desc: '開放組黨、報紙發行，邁向民主自由' },
      { emoji: '🗳️', title: '1996 總統直選', desc: '全體公民直選國家元首，主權在民' },
      { emoji: '📜', title: '憲法四大權利', desc: '平等權、自由權、受益權、參政權' }
    ],
    funMeme: '💡 民主不是天上掉下來的，是前人奮鬥爭取來的！',
    popQuiz: {
      question: '臺灣於哪一年舉行了歷史上第一次「總統公民直接選舉」？',
      options: ['1949 年', '1987 年', '1996 年', '2024 年'],
      answerIndex: 2,
      explanation: '1996年臺灣舉行首次總統公民直選，由李登輝當選第九任總統！'
    },
    likes: 1650,
    tags: ['#社會公民', '#臺灣民主', '#憲法權利', '#歷史大事']
  },
  {
    id: 'reel-health-1',
    subject: 'health_pe',
    subjectName: '💪 健體小鐵人',
    themeColor: 'from-rose-600 to-red-700',
    accentColor: '#f43f5e',
    title: '🚑 黃金 4 分鐘！CPR+AED「叫叫CD」救命口訣！',
    subtitle: '按壓深度5公分、速率每分鐘100~120下！每個人都能當英雄！',
    videoEmoji: '❤️',
    author: '活力小鐵人 Leo',
    audioScript: '遇到有人突然倒下，牢記黃金救命口訣「叫、叫、C、D」！第一叫：確認患者意識與呼吸；第二叫：大聲呼救並撥打119拿AED；第三 C：胸外按壓 CPR，兩乳頭連線中央用力快快壓，深度至少5公分，速率每分鐘100到120下；第四 D：開啟 AED 自動體外心臟電擊去顫器照語音操作！',
    keyCards: [
      { emoji: '🗣️', title: '叫・叫', desc: '1.叫患者查意識 2.叫幫手撥119取AED' },
      { emoji: '👐', title: 'C (Chest Compression)', desc: '兩乳連線中點，每分鐘100-120下，深5cm' },
      { emoji: '⚡', title: 'D (Defibrillation)', desc: '開AED開關、貼貼片、聽語音電擊' }
    ],
    funMeme: '💡 跟著《Stayin\' Alive》的音樂節奏按壓，速率剛剛好！',
    popQuiz: {
      question: '實施成人 CPR 胸外按壓時，每分鐘建議的按壓頻率是多少下？',
      options: ['40 ~ 60 下', '60 ~ 80 下', '100 ~ 120 下', '180 ~ 200 下'],
      answerIndex: 2,
      explanation: 'CPR 胸外按壓口訣「用力壓、快快壓」，標準速率為每分鐘 100 ~ 120 下！'
    },
    likes: 3890,
    tags: ['#急救安全', '#CPR叫叫CD', '#AED操作', '#健體素養']
  }
];
