import fs from 'fs';
import path from 'path';
import { createSvg, outDir } from './svgHelper.js';

// Map of topics and metadata for automatic SVG creation
const unitMeta = {
  'math-u1': { title: '最大公因數與最小公倍數 (GCD & LCM)', sub: '質因數分解、短除法與生活平分排程', badge: '108 課綱 n-III-2' },
  'math-u2': { title: '分數的除法 (Fraction Division)', sub: '顛倒相乘幾何意義、帶分數化假分數', badge: '108 課綱 n-III-5' },
  'math-u3': { title: '小數的除法與餘數 (Decimal Division)', sub: '除數小數點移位、商與餘數小數點對齊', badge: '108 課綱 n-III-7' },
  'math-u4': { title: '比與比值 (Ratio & Proportion)', sub: '前項後項、等比性質與最簡整數比', badge: '108 課綱 n-III-9' },
  'math-u5': { title: '圓周長與扇形弧長 (Circumference & Arc)', sub: '圓周率 π ≈ 3.14、直徑×3.14、扇形周長', badge: '108 課綱 s-III-1' },
  'math-u6': { title: '圓面積與扇形面積 (Circle Area)', sub: '半徑×半徑×3.14、扇形拼成長方形推導', badge: '108 課綱 s-III-3' },
  'math-u7': { title: '速率與生活應用 (Speed, Distance, Time)', sub: '距離＝速率×時間、時分秒速單位換算', badge: '108 課綱 n-III-8' },
  'math-u8': { title: '柱體體積與表面積 (Prisms & Cylinders)', sub: '底面積×柱高、柱體展開圖與側面積', badge: '108 課綱 s-III-5' },
  'math-u9': { title: '放大圖、縮圖與比例尺 (Scale & Maps)', sub: '對應角不變、邊長比 vs 面積平方比', badge: '108 課綱 s-III-7' },
  'math-u10': { title: '基準量與比較量 (Base & Compared)', sub: '比較量÷基準量＝比值、折扣與加成', badge: '108 課綱 r-III-2' },
  'math-u11': { title: '等量公理與未知數 (Axiom of Equality)', sub: '天平平衡、一元一次方程式求解', badge: '108 課綱 r-III-4' },
  'math-u12': { title: '統計圖表與圓形圖 (Pie Charts)', sub: '圓心角＝360°×百分率、大數據判讀', badge: '108 課綱 d-III-1' },

  'sci-u1': { title: '多變的天氣與氣象預報 (Weather & Fronts)', sub: '水循環三態、高低氣壓、冷暖鋒面與颱風', badge: '108 課綱 INc-III-1' },
  'sci-u2': { title: '水溶液的性質與酸鹼性 (Solutions & pH)', sub: '電解質導電性、石蕊試紙變色、酸鹼中和', badge: '108 課綱 INb-III-3' },
  'sci-u3': { title: '電與磁的奇妙世界 (Electromagnetism)', sub: '電流磁效應、右手螺旋、電磁鐵磁力強化', badge: '108 課綱 INc-III-4' },
  'sci-u4': { title: '變動的大地與地表作用 (Rocks & Erosion)', sub: '三大岩類循環、河流侵蝕搬運堆積、地震', badge: '108 課綱 INc-III-5' },
  'sci-u5': { title: '熱的傳播與保溫原理 (Heat Transfer)', sub: '熱傳導、熱對流、熱輻射與保溫瓶真空層', badge: '108 課綱 INb-III-4' },
  'sci-u6': { title: '巧妙的簡單機械 (Simple Machines)', sub: '三類槓桿原理、滑輪組、輪軸與斜面省力', badge: '108 課綱 INc-III-6' },
  'sci-u7': { title: '物質變化——防鏽與防腐 (Rust & Preservation)', sub: '鐵生鏽條件(水+氧氣)、食品脫水冷凍真空', badge: '108 課綱 INb-III-5' },
  'sci-u8': { title: '生物與環境保育 (Ecosystems & Energy)', sub: '生產者消費者分解者、食物網與能量金字塔', badge: '108 課綱 INa-III-1' },
  'sci-u9': { title: '奇妙的聲音世界 (Sound & Instruments)', sub: '物體振動、傳播介質、音調頻率與音量振幅', badge: '108 課綱 INb-III-2' },
  'sci-u10': { title: '微觀世界與顯微鏡 (Microscopy & Microbes)', sub: '顯微鏡光路操作、倒立成像規律、玻片製作', badge: '108 課綱 INa-III-3' },

  'man-u1': { title: '高年級閱讀理解策略 (Reading Comprehension)', sub: '訊息擷取、事實 Fact vs 觀點 Opinion、5W1H', badge: '108 課綱 5-III-1' },
  'man-u2': { title: '記敘文寫作的起承轉合 (Narrative Writing)', sub: '情節高潮山峰圖、人事時地物、五感細膩摹寫', badge: '108 課綱 6-III-1' },
  'man-u3': { title: '說明文與議論文思維 (Expository & Argument)', sub: '總分總架構、說明三方法、論點論據論證', badge: '108 課綱 5-III-8' },
  'man-u4': { title: '修辭的魔法與成語百寶箱 (Rhetoric & Idioms)', sub: '譬喻、擬人、排比、誇飾、設問與成語典故', badge: '108 課綱 4-III-1' },
  'man-u5': { title: '古典文學選讀——詩詞與寓言 (Classical Literature)', sub: '近體詩五絕七絕格律押韻、先秦寓言處世哲理', badge: '108 課綱 5-III-4' },
  'man-u6': { title: '口語表達與簡報力 (Public Speaking)', sub: '燈塔原則眼神、聲音四度空間、簡報視覺Less is More', badge: '108 課綱 2-III-1' },
  'man-u7': { title: '應用文的智慧與生活實踐 (Practical Chinese)', sub: '書信格式提稱語祝道語、直式橫式信封收發稱謂', badge: '108 課綱 6-III-4' },
  'man-u8': { title: '漢字造字之美與國學常識 (Six Scripts & Philology)', sub: '象形指事會意形聲、形近多音字、文言虛詞', badge: '108 課綱 4-III-2' },

  'soc-u1': { title: '臺灣的民主之路與政府組織 (Democracy & Govt)', sub: '解嚴總統直選、五院分立相互制衡、憲法權利', badge: '108 課綱 社 1a-III-1' },
  'soc-u2': { title: '社會變遷與多元族群文化 (Society & Diversity)', sub: '少子高齡化、16法定原住民族文化、新住民共融', badge: '108 課綱 社 2a-III-1' },
  'soc-u3': { title: '經濟發展與產業轉型 (Economy & Silicon Shield)', sub: '土地改革加工區、十大建設、竹科與全球半導體', badge: '108 課綱 社 3a-III-1' },
  'soc-u4': { title: '全球化浪潮與國際組織 (Globalization & IOs)', sub: '全球分工、UN/WHO/WTO/APEC、Taiwan Can Help', badge: '108 課綱 社 3b-III-1' },
  'soc-u5': { title: '法律與生活——兒童人權 (Law & Child Rights)', sub: 'CRC兒童權利公約四大原則、智慧財產權、反霸凌1953', badge: '108 課綱 社 1b-III-2' },
  'soc-u6': { title: '永續發展與環境——SDGs (Sustainable Action)', sub: '聯合國SDGs 17指標、2050淨零碳排、源頭減塑', badge: '108 課綱 社 2c-III-1' },
  'soc-u7': { title: '地球村世界地理與文明 (World Geography & History)', sub: '七大洲三大洋、四大古文明、世界三大宗教巡禮', badge: '108 課綱 地 1a-III-1' },
  'soc-u8': { title: '科技浪潮與資訊倫理 (AI & Tech Ethics)', sub: '人工智慧就業生活、數位足跡隱私、Deepfake防詐', badge: '108 課綱 社 3c-III-1' },

  'eng-u1': { title: 'Daily Routines & Time Management (作息與時間)', sub: 'Clock expressions, prepositions at/in/on, frequency adverbs', badge: '108 課綱 1-III-2' },
  'eng-u2': { title: 'Past Tense Stories & Adventures (過去式時態)', sub: 'Regular verb +ed, Irregular verbs, Did you...? questions', badge: '108 課綱 2-III-3' },
  'eng-u3': { title: 'Places & Asking for Directions (問路與空間介系詞)', sub: 'Excuse me, how do I get to...? Turn left/right navigation', badge: '108 課綱 1-III-4' },
  'eng-u4': { title: 'Food, Health & Body Care (身體保健與症狀)', sub: 'Symptoms with -ache, sore throat, healthy food groups', badge: '108 課綱 2-III-4' },
  'eng-u5': { title: 'Festivals, Holidays & World Cultures (世界節慶)', sub: 'Taiwanese vs Western holidays, cultural respect & dates', badge: '108 課綱 3-III-3' },
  'eng-u6': { title: 'Reading Comprehension & Phonics (閱讀策略與字尾)', sub: 'Skimming for main idea, Scanning for details, suffixes -tion', badge: '108 課綱 3-III-4' },
  'eng-u7': { title: 'Future Plans & Dream Careers (未來式與夢想職業)', sub: 'will + base verb vs be going to, future time markers', badge: '108 課綱 2-III-5' },
  'eng-u8': { title: 'Comparisons & World Wonders (比較級最高級)', sub: 'Comparative -er / more, Superlative -est / the most', badge: '108 課綱 2-III-6' },

  'art-u1': { title: '視覺藝術探索——色彩與構圖 (Color Theory & Design)', sub: '色彩三要素色相明度彩度、12色相環、三分法黃金比例', badge: '108 課綱 視 1-III-1' },
  'art-u2': { title: '音樂欣賞與實作——音符與節奏 (Music & Staff Notation)', sub: '五線譜高音譜號音名、4/4與3/4拍律動、管弦樂編制', badge: '108 課綱 音 1-III-1' },
  'art-u3': { title: '表演藝術與戲劇舞台 (Drama & Stagecraft)', sub: '肢體雕塑非語言溝通、聲音四度空間、三幕劇起承轉合', badge: '108 課綱 表 1-III-1' },
  'art-u4': { title: '生活美學與設計思考 (Design Thinking & Universal)', sub: '設計思考EDIPT五步驟、通用設計友善生活、公共標識', badge: '108 課綱 視 1-III-2' },
  'art-u5': { title: '數位藝術、定格動畫與多媒體 (Digital Art & Animation)', sub: '數位繪圖圖層、定格動畫影格率FPS、音效採集剪輯', badge: '108 課綱 視 3-III-1' },
  'art-u6': { title: '臺灣傳統民間工藝與偶戲 (Traditional Crafts & Puppetry)', sub: '交趾陶剪黏藍染、布袋戲生旦淨末丑、世界偶戲藝術', badge: '108 課綱 視 2-III-3' },

  'pe-u1': { title: '青春期的身心蛻變 (Puberty & Growth Mindset)', sub: '男女第二性徵生理發育、情緒調適、身體自主權拒絕界線', badge: '108 課綱 健 1a-III-1' },
  'pe-u2': { title: '飲食與營養密碼——我的餐盤 (Nutrition & MyPlate)', sub: '六大類食物比例口訣、食品營養標示三要素、減糖減鈉', badge: '108 課綱 健 2a-III-1' },
  'pe-u3': { title: '安全急救與運動防護 (First Aid CPR+AED & PRICE)', sub: '叫叫CD急救步驟、氣道哽塞哈姆立克法、急性扭傷冰敷', badge: '108 課綱 健 3a-III-1' },
  'pe-u4': { title: '體適能與運動家精神 (Fitness & Sportsmanship)', sub: '健康體適能四大要素、個人運動處方、尊重拼搏勝不驕', badge: '108 課綱 體 1c-III-1' },
  'pe-u5': { title: '球類戰術與運動安全 (Ball Games Tactics & Safety)', sub: '籃球運球投籃防守、排球接發球站位、羽球米字步法', badge: '108 課綱 體 2d-III-1' },
  'pe-u6': { title: '心理健康、壓力調適與復原力 (Mental Health & Resilience)', sub: '壓力身心覺察、正念4-7-8呼吸放鬆、定型心態vs成長心態', badge: '108 課綱 健 1b-III-1' },

  'comp-u1': { title: '時間與金錢管理 (Time & Financial Management)', sub: '時間四象限法、自主學習課表排定、六三一儲蓄法則', badge: '108 課綱 綜 1a-III-1' },
  'comp-u2': { title: '人際溝通與情緒解碼 (Communication & EQ)', sub: '情緒紅綠燈停想行、我訊息四步驟公式、同理心化解衝突', badge: '108 課綱 綜 2a-III-1' },
  'comp-u3': { title: '生涯探索與自主學習 (Career Exploration & Notes)', sub: '迦納八大多元智能、康乃爾筆記法三大結構、費曼學習法', badge: '108 課綱 綜 3a-III-1' },
  'comp-u4': { title: '社會服務與公民實踐 (Service Learning & Action)', sub: '服務學習四部曲(準備-行動-反思-慶賀)、校園社區志工', badge: '108 課綱 綜 2b-III-1' },
  'comp-u5': { title: '媒體素養與健康上網 (Media Literacy & Digital Health)', sub: '假訊息查核三步驟、演算法同溫層、個人隱私、20-20-20護眼', badge: '108 課綱 綜 1c-III-1' },
  'comp-u6': { title: '戶外冒險與危機應變 (Outdoor Adventure & LNT)', sub: '無痕山林LNT七大準則、指北針地圖定向越野、野外求生333', badge: '108 課綱 綜 3b-III-1' }
};

// Generic visual card builder for any unit
function generateGenericVisualContent(meta, conceptNum = 1) {
  return `
    <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
    <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
    <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📌 核心架構視覺概念圖解 (Part ${conceptNum})</text>

    <rect x="20" y="60" width="330" height="75" rx="8" fill="#0f172a" stroke="#2563eb" stroke-width="1.5"/>
    <text x="35" y="85" font-size="14" font-weight="800" fill="#60a5fa">${meta.title.split('(')[0]}</text>
    <text x="35" y="110" font-size="12" fill="#cbd5e1">${meta.sub}</text>

    <rect x="20" y="150" width="330" height="150" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="35" y="178" font-size="13" font-weight="800" fill="#34d399">💡 108 課綱學習重點檢核：</text>
    <text x="35" y="202" font-size="12" fill="#cbd5e1">1. 掌握基本定義、原理與生活實例應用</text>
    <text x="35" y="225" font-size="12" fill="#cbd5e1">2. 融會貫通算式推導、邏輯架構與實驗分析</text>
    <text x="35" y="248" font-size="12" fill="#cbd5e1">3. 避開常考迷思陷阱，靈活解決素養問題</text>
    <text x="35" y="275" font-size="12" font-weight="700" fill="#38bdf8">★ 核心素養導向：知行合一・自主探究</text>

    <!-- Right Box -->
    <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
    <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
    <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🚀 知識圖譜拓撲與升學銜接</text>

    <rect x="405" y="55" width="340" height="80" rx="8" fill="#0f172a" stroke="#f59e0b"/>
    <text x="420" y="80" font-size="13" font-weight="800" fill="#fbbf24">國小六年級先備知識 ➔</text>
    <text x="420" y="103" font-size="12" fill="#cbd5e1">建立扎實基本功，熟練運算與概念辨識，不留死角！</text>
    <text x="420" y="122" font-size="11" fill="#fde68a">打好地基是國中先修最關鍵的一步。</text>

    <rect x="405" y="145" width="340" height="80" rx="8" fill="#0f172a" stroke="#a855f7"/>
    <text x="420" y="170" font-size="13" font-weight="800" fill="#c084fc">國中七年級先修橋樑 ➔</text>
    <text x="420" y="193" font-size="12" fill="#cbd5e1">銜接國中抽象概念、代數符號思維與會考綜合題型。</text>
    <text x="420" y="212" font-size="11" fill="#e9d5ff">無痛跨越小學到中學的思考鴻溝！</text>

    <rect x="405" y="235" width="340" height="75" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="575" y="260" font-size="13" font-weight="800" fill="#38bdf8" text-anchor="middle">最強小六課程研發團隊・核心素養審定</text>
    <text x="575" y="285" font-size="12" fill="#94a3b8" text-anchor="middle">對齊康軒、南一、翰林三大版本教科書進度</text>
  `;
}

// Generate for all units that lack concept1.svg or referenced subconcepts
for (const [unitId, meta] of Object.entries(unitMeta)) {
  const normUnit = unitId.replace('-', '_');
  // Check concept1, concept2, concept3, concept4
  for (let c = 1; c <= 4; c++) {
    const filename = `${normUnit}_concept${c}.svg`;
    const fullPath = path.join(outDir, filename);
    if (!fs.existsSync(fullPath)) {
      const svgStr = createSvg(
        `${meta.title} - 圖解 ${c}`,
        meta.sub,
        meta.badge,
        generateGenericVisualContent(meta, c)
      );
      fs.writeFileSync(fullPath, svgStr, 'utf-8');
      console.log(`Generated: ${filename}`);
    }
  }
}

console.log('All unit SVGs generated successfully!');
