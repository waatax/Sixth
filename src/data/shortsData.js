// TikTok / Shorts-Style Micro-Learning Data for 6th Grade & Junior High Prep (18 Reels Full Coverage)
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
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEW REELS: 補齊藝術、綜合與各科進階題材
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 'reel-art-1',
    subject: 'arts',
    subjectName: '🎨 藝術玩家',
    themeColor: 'from-rose-600 to-amber-600',
    accentColor: '#e11d48',
    title: '🎨 12色相環秘密：對角線「互補色」撞出最強視覺！',
    subtitle: '紅配綠、黃配紫、藍配橙！梵谷大師都在用的色彩密碼！',
    videoEmoji: '🎨',
    author: '美學魔法師 Monet',
    audioScript: '你知道為什麼聖誕節是紅配綠、向日葵在藍天中特別亮眼嗎？秘密就在12色相環！色相環上夾角180度的對角線顏色稱為「互補色」！互補色放在一起，會形成最強烈的明暗與色彩對比，讓人一眼就看見！暖色調熱情奔放，冷色調平靜深邃，學會配色你就是視覺大師！',
    keyCards: [
      { emoji: '🎡', title: '12色相環', desc: '以紅、黃、藍三原色衍生出的12種純色環' },
      { emoji: '⚡', title: '180° 互補色', desc: '紅配綠、黃配紫、藍配橙，視覺對比最強烈' },
      { emoji: '🌡️', title: '冷暖色調', desc: '紅黃橙給人溫暖熱情；藍青紫給人平靜涼爽' }
    ],
    funMeme: '💡 互補色就像歡喜冤家：單獨看很極端，擺在一起卻超級吸睛！',
    popQuiz: {
      question: '在12色相環中，「藍色」的 180 度互補色（對比色）是哪一種顏色？',
      options: ['紅色', '綠色', '橙色', '紫色'],
      answerIndex: 2,
      explanation: '在色相環上，藍色的正對面 180 度剛好是橙色！兩者是經典的互補色組合！'
    },
    likes: 2480,
    tags: ['#藝術生活', '#12色相環', '#互補色', '#色彩學']
  },
  {
    id: 'reel-art-2',
    subject: 'arts',
    subjectName: '🎨 藝術玩家',
    themeColor: 'from-violet-600 to-indigo-700',
    accentColor: '#8b5cf6',
    title: '🎻 聽懂交響樂！管弦樂團「四大樂器家族」大點名！',
    subtitle: '弦樂、木管、銅管、打擊！首席小提琴帶你走進音樂廳！',
    videoEmoji: '🎼',
    author: '交響領航員 Bach',
    audioScript: '走進音樂廳看管弦樂團，你認得四大樂器家族嗎？第一排是弦樂家族，小提琴高亢華麗，大提琴沉穩溫暖；中間是木管家族，長笛靈動如鳥鳴，雙簧管音色哀傷迷人；後排是銅管家族，小號嘹亮小丑，法國號圓潤雄渾；最後方是打擊樂家族，定音鼓震撼全場！指揮家一揮棒，百人共鳴！',
    keyCards: [
      { emoji: '🎻', title: '弦樂家族', desc: '小提琴、中提琴、大提琴、低音提琴' },
      { emoji: '🪵', title: '木管家族', desc: '長笛、雙簧管、單簧管、低音管' },
      { emoji: '🎺', title: '銅管家族', desc: '小號、法國號、長號、低音號 (金屬吹口)' }
    ],
    funMeme: '💡 記住：雙簧管是樂團的調音標準音 A（440Hz）！',
    popQuiz: {
      question: '管弦樂團演出前，全體團員通常會聽哪一種樂器吹奏的標準音「La (440Hz)」進行調音？',
      options: ['大鼓', '小提琴', '雙簧管 (Oboe)', '三角鐵'],
      answerIndex: 2,
      explanation: '雙簧管的音色穩定且穿透力強，自古以來就是管弦樂團調音的標準基準器！'
    },
    likes: 1920,
    tags: ['#音樂素養', '#管弦樂團', '#樂器家族', '#藝術美感']
  },
  {
    id: 'reel-comp-1',
    subject: 'integrative',
    subjectName: '🧭 綜合實踐家',
    themeColor: 'from-emerald-600 to-teal-700',
    accentColor: '#10b981',
    title: '🧭 成功人士秘密武器！艾森豪「時間四象限」擺脫拖延！',
    subtitle: '重要 vs 緊急！為什麼卓越者都全力投資「第二象限」？',
    videoEmoji: '⏳',
    author: '高管教練 Peter',
    audioScript: '你每天都被功課追著跑嗎？美國總統艾森豪發明了時間四象限：第一象限「重要且緊急」，如明天考試，必須立刻做；第三象限「不重要但緊急」，如打遊戲通知，要懂得拒絕；第四象限「不重要不緊急」，如發呆滑手機，果斷戒除！最核心的是第二象限「重要但不緊急」，如運動、閱讀、預習！多做第二象限，第一象限危機就會消失！',
    keyCards: [
      { emoji: '🚨', title: '象限 I (危機)', desc: '重要且緊急 ➔ 迫在眉睫立刻處理' },
      { emoji: '🌱', title: '象限 II (卓越)', desc: '重要但不緊急 ➔ 預先排程專注投資 (成功關鍵！)' },
      { emoji: '🗑️', title: '象限 IV (浪費)', desc: '不重要也不緊急 ➔ 果斷捨棄遠離時間黑洞' }
    ],
    funMeme: '💡 不要讓「緊急的事」擠掉了「真正重要的事」！',
    popQuiz: {
      question: '「每天睡前堅持閱讀課外讀物 20 分鐘」屬於時間管理四象限中的哪一類？',
      options: ['重要且緊急 (象限 I)', '重要但不緊急 (象限 II)', '不重要但緊急 (象限 III)', '不重要且不緊急 (象限 IV)'],
      answerIndex: 1,
      explanation: '閱讀雖然沒有明天必須交差的急迫性，但對長期智識養成極其重要，屬於最重要的「第二象限」！'
    },
    likes: 3120,
    tags: ['#時間管理', '#艾森豪矩陣', '#綜合活動', '#學習方法']
  },
  {
    id: 'reel-comp-2',
    subject: 'integrative',
    subjectName: '🧭 綜合實踐家',
    themeColor: 'from-amber-600 to-yellow-600',
    accentColor: '#d97706',
    title: '💰 小學生也能理財！「631存錢法則」打造第一桶金！',
    subtitle: '壓歲錢與零用錢別亂花！分清「需要」與「想要」！',
    videoEmoji: '🪙',
    author: '小小巴菲特 Warren',
    audioScript: '領到零用錢馬上花光光嗎？試試超強「六三一理財法則」：把零用錢分成三等份，六成用在「日常必要開銷」，如文具與餐費；三成用在「儲蓄投資」，存進郵局撲滿當夢想基金；一成用在「風險應急與公益」！買東西前先問自己：這是肚子餓的「需要」，還是虛榮的「想要」？',
    keyCards: [
      { emoji: '🥪', title: '60% 必要生活', desc: '文具書本、日常必要交通飲食開銷' },
      { emoji: '🏦', title: '30% 儲蓄投資', desc: '強迫儲蓄存入銀行，賺取複利成長' },
      { emoji: '🎯', title: '10% 彈性應急', desc: '朋友生日禮物、突發應急金或愛心公益' }
    ],
    funMeme: '💡 「需要」是少了會無法生活，「想要」是少了只是心裡癢癢！',
    popQuiz: {
      question: '想要買最新款限定版電競手遊公仔，但手邊已經有五個了，這屬於？',
      options: ['生活絕對需要 (Needs)', '心理渴望想要 (Wants)', '應急必需品', '投資理財工具'],
      answerIndex: 1,
      explanation: '手邊已有足夠玩具，再買限定版只是滿足心理渴望，屬於「想要」而非「需要」！'
    },
    likes: 2790,
    tags: ['#財商教育', '#六三一法則', '#儲蓄習慣', '#需要與想要']
  },
  {
    id: 'reel-man-2',
    subject: 'mandarin',
    subjectName: '📖 國語秒懂',
    themeColor: 'from-red-600 to-amber-700',
    accentColor: '#ea580c',
    title: '📖 破音字不再抓狂！「讀音」與「語音」一秒分清！',
    subtitle: '血泊(ㄆㄛ)不是血泊(ㄅㄛˊ)！詞性決定發音的秘密！',
    videoEmoji: '📚',
    author: '文學妙筆仙 Luna',
    audioScript: '破音字到底該怎麼念？記住兩大黃金定律：第一看詞性，第二看文白！例如「冠」，當動詞戴帽子念四聲「冠名」，當名詞冠軍、皇冠念一聲；「泊」，停泊、淡泊念二聲ㄅㄛˊ，但湖泊、血泊念一聲ㄆㄛ！詞性變了，讀音就變了！',
    keyCards: [
      { emoji: '👑', title: '冠字辨析', desc: '名詞念一聲 (皇冠、奪冠)；動詞念四聲 (冠名贊助)' },
      { emoji: '💧', title: '泊字辨析', desc: '停靠安靜念ㄅㄛˊ (漂泊)；水澤聚集念ㄆㄛ (湖泊、血泊)' },
      { emoji: '🪨', title: '石字文白', desc: '書面讀音ㄕˊ (石碑、岩石)；計量單位ㄉㄢˋ (一石米)' }
    ],
    funMeme: '💡 詞性是漢字的身份證，換了身份就換了聲音！',
    popQuiz: {
      question: '請問成語「冠蓋雲集」中的「冠」字，正確的國語讀音為何？',
      options: ['ㄍㄨㄢ (一聲)', 'ㄍㄨㄢˋ (四聲)', 'ㄍㄨㄢˇ (三聲)', 'ㄍㄨㄢˊ (二聲)'],
      answerIndex: 0,
      explanation: '「冠蓋雲集」中的「冠」指古代官吏所戴的帽子，名詞讀一聲「ㄍㄨㄢ」！'
    },
    likes: 2150,
    tags: ['#國語字音字形', '#多音字', '#國小必考', '#成語素養']
  },
  {
    id: 'reel-soc-2',
    subject: 'social',
    subjectName: '🌍 社會領航',
    themeColor: 'from-blue-700 to-cyan-600',
    accentColor: '#0284c7',
    title: '🌊 臺灣是個寶島！「黑潮」與「親潮」如何影響氣候？',
    subtitle: '溫暖海水北上帶來豐富飛魚！洋流大探秘！',
    videoEmoji: '🌊',
    author: '環球小領航 Draco',
    audioScript: '臺灣四周環海，氣候為什麼四季溫暖濕潤？最大的幕後功臣就是「黑潮」！黑潮是從赤道北上的強大暖流，水色深藍近黑，帶來溫暖海水與豐富迴游魚類如飛魚、旗魚與鯖魚；冬季北方大陸沿岸冷流南下，在臺灣海峽形成絕佳寒暖流交會漁場！',
    keyCards: [
      { emoji: '🔥', title: '黑潮暖流', desc: '發源赤道北上，高溫高鹽，流經臺灣東部海域' },
      { emoji: '❄️', title: '大陸沿岸冷流', desc: '冬季順東北季風沿海峽南下，帶來寒帶水族' },
      { emoji: '🐟', title: '寒暖交匯', desc: '上下翻湧帶來浮游生物，形成烏魚與飛魚天然漁場' }
    ],
    funMeme: '💡 黑潮不是黑心水，是因為太純淨透明吸收了紅光而呈現墨藍色！',
    popQuiz: {
      question: '流經臺灣東部外海，對臺灣氣候增溫增濕具有關鍵影響的著名暖流是？',
      options: ['親潮', '黑潮 (Kuroshio)', '秘魯涼流', '墨西哥灣流'],
      answerIndex: 1,
      explanation: '黑潮是北太平洋最主要的暖流，終年自臺灣東部往北流動，帶來豐沛水氣與溫暖氣候！'
    },
    likes: 1840,
    tags: ['#臺灣地理', '#黑潮洋流', '#海洋教育', '#氣候特徵']
  },
  {
    id: 'reel-health-2',
    subject: 'health_pe',
    subjectName: '💪 健體小鐵人',
    themeColor: 'from-teal-600 to-emerald-700',
    accentColor: '#0d9488',
    title: '🩹 扭傷不要熱敷！運動傷害急救「PRICE 五步驟」！',
    subtitle: '保護、休息、冰敷、壓迫、抬高！扭傷腫脹救命招！',
    videoEmoji: '🩹',
    author: '活力小鐵人 Leo',
    audioScript: '體育課打籃球腳踝扭傷，千萬不要馬上熱敷或揉推！記住運動傷害急救英文 PRICE 五原則：P 保護患處避免二次傷害；R 休息停止運動；I 冰敷每次15分鐘收縮血管；C 加壓彈性繃帶包紮止腫；E 抬高受傷肢體高於心臟幫助血液回流！48小時後消腫才能熱敷喔！',
    keyCards: [
      { emoji: '🛡️', title: 'P - Protect (保護)', desc: '固定受傷患處，使用護具避免二度扭傷' },
      { emoji: '🧊', title: 'I - Ice (冰敷)', desc: '受傷前 48 小時冰敷收縮微血管，切忌熱敷揉推' },
      { emoji: '🩺', title: 'E - Elevate (抬高)', desc: '將受傷關節抬高於心臟水平，減緩水腫淤血' }
    ],
    funMeme: '💡 記住口訣：PRICE 價值千金！急性期熱敷等於火上加油！',
    popQuiz: {
      question: '剛在球場發生急性踝關節扭傷時，前 24~48 小時內最正確的處置方式是？',
      options: ['用力按摩揉開瘀血', '使用熱毛巾熱敷促進循環', '進行冰敷並加壓包紮抬高 (PRICE)', '繼續跑步動一動才不會僵硬'],
      answerIndex: 2,
      explanation: '急性運動傷害剛發生時，微血管破裂出血，必須立刻依 PRICE 原則進行冰敷與壓迫，嚴禁熱敷按摩！'
    },
    likes: 2950,
    tags: ['#運動傷害', '#PRICE原則', '#急救常識', '#健體素養']
  },
  {
    id: 'reel-eng-2',
    subject: 'english',
    subjectName: '🇬🇧 雙語神手',
    themeColor: 'from-blue-600 to-indigo-700',
    accentColor: '#2563eb',
    title: '🚀 比一比誰更強！形容詞「比較級與最高級」魔王規則！',
    subtitle: 'tall-taller-tallest！什麼時候要用 more 與 most？看音節！',
    videoEmoji: '🏆',
    author: '晴波豚 Aqua',
    audioScript: '比較級到底怎麼變？看「音節長短」就對了！單音節短字直接加 -er 與 -est，例如 tall, taller, tallest；以 y 結尾去 y 加 -ier，如 happy, happier, happiest；三個音節以上的長單字，前面加 more 與 most，如 beautiful, more beautiful, most beautiful！記得兩者相比用 than 喔！',
    keyCards: [
      { emoji: '📏', title: '短字加尾巴', desc: 'fast → faster → fastest；big → bigger (重複字尾)' },
      { emoji: '✨', title: '長字加皇冠', desc: 'expensive → more expensive → most expensive' },
      { emoji: '👑', title: '不規則變化', desc: 'good → better → best；bad → worse → worst' }
    ],
    funMeme: '💡 單音節字自己長尾巴，多音節長字戴上 more/most 遮陽帽！',
    popQuiz: {
      question: '選出填入空格最適當的英文：Taipei 101 is ______ building in Taiwan.',
      options: ['the taller', 'the most tall', 'the tallest', 'more tall'],
      answerIndex: 2,
      explanation: 'tall 是單音節形容詞，最高級為 the tallest，句型為 "the + 形容詞-est"！'
    },
    likes: 3100,
    tags: ['#英文文法', '#比較級最高級', '#小六必考', '#雙語會考']
  },
  {
    id: 'reel-prep-2',
    subject: 'prep',
    subjectName: '🎓 國中先修',
    themeColor: 'from-indigo-700 to-purple-900',
    accentColor: '#7c3aed',
    title: '📐 國一數學銜接：等量公理與移項「天平不倒翁」！',
    subtitle: '移項為什麼要變號？加變減、乘變除！天平原理秒懂！',
    videoEmoji: '⚖️',
    author: '雷霆龍 Draco',
    audioScript: '升上國中代數最核心的「等量公理」：等號就是一個精準的天平！左邊加 5，右邊也必須加 5，天平才會平衡；左邊減 3，右邊也減 3！所謂的「移項法則」，本質就是兩邊同時加減乘除！例如 x 加 4 等於 9，兩邊同時減 4，左邊消掉，右邊變成 9 減 4 等於 5！移過去變號就是這麼來的！',
    keyCards: [
      { emoji: '⚖️', title: '等量公理', desc: '若 a = b，則 a ± c = b ± c 且 a × c = b × c' },
      { emoji: '🔄', title: '移項變號', desc: '跨越等號：+ 變 -，- 變 +；× 變 ÷，÷ 變 ×' },
      { emoji: '🚫', title: '除法鐵律', desc: '等號兩邊同除一個數時，除數絕對不能為 0！' }
    ],
    funMeme: '💡 跨過等號這道魔法門，加號變減號，乘號變除號，性格大反轉！',
    popQuiz: {
      question: '解一元一次方程式：3x - 7 = 14，未知數 x 的值是多少？',
      options: ['5', '7', '9', '21'],
      answerIndex: 1,
      explanation: '移項計算：3x = 14 + 7 = 21，接著兩邊同除以 3：x = 21 ÷ 3 = 7！'
    },
    likes: 3780,
    tags: ['#國中數學先修', '#等量公理', '#一元一次方程式', '#移項法則']
  }
];
