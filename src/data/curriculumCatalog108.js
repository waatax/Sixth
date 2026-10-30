// 🎓 108 課綱六年級上下學期（6上 / 6下）全科目・全版本課本・參考書資料庫與 Duolingo 遊戲化闖關總綱
// 涵蓋：
// 1. 基本科目 (Core Basic Subjects)：國語文、數學、自然科學、社會、英語文
// 2. 專業與素養科目 (Specialized & Literacy Subjects)：藝術(視覺/音樂/表演)、健康與體育、綜合活動、科技與運算思維(資訊科技)、本土語文與國際雙語、國中七年級數理英先修
// 3. 所有審定本課本版本對照：康軒版、南一版、翰林版（英語另含何嘉仁 Super Fun / e-Star、朗文 Longman）
// 4. 所有主流參考書與輔助教材編列：課堂自修、學習評量、名師講義、段考滿分卷、素養題本

import { coursesData } from './courses.js';
import { textbookVersionMatrix, getUnitVersionFocus } from './examNotes/textbookVersionMatrix.js';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📚 一、108 課綱所有課本版本清單 (Textbook Versions Registry)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const TEXTBOOK_VERSIONS_108 = [
  {
    id: 'all',
    name: '全部版本整合',
    shortName: '全版本',
    publisher: '教育部 108 課綱審定全版本跨校通用',
    badge: '100% 課綱對齊',
    color: '#4f46e5',
    bgSoft: 'rgba(79, 70, 229, 0.12)',
    description: '整合康軒、南一、翰林及英語專業版本所有交集與聯集核心考點，轉學或跨校段考零死角。'
  },
  {
    id: 'kangHsuan',
    name: '康軒版 (Kang Hsuan)',
    shortName: '康軒版',
    publisher: '康軒文教事業（含英語 Wonder World）',
    badge: '生活素養情境導向',
    color: '#059669',
    bgSoft: 'rgba(5, 150, 105, 0.12)',
    description: '強調日常情境應用、PIRLS 四層次閱讀理解、科學探究實驗步驟與長題幹素養題。',
    companionBooks: ['康軒學習自修', '康軒新挑戰學習評量', '康軒隨堂演練', '康軒麻辣講義', '康軒考前衝刺卷']
  },
  {
    id: 'nanI',
    name: '南一版 (Nan I)',
    shortName: '南一版',
    publisher: '南一書局企業（含英語 Follow Me）',
    badge: '算理本質與防雷辨析',
    color: '#2563eb',
    bgSoft: 'rgba(37, 99, 235, 0.12)',
    description: '強調數學逆運算推導、科學控制變因辨析、語文古今字義與社會公民經濟邏輯。',
    companionBooks: ['南一超群自修', '南一點線面學習評量', '南一精熟演練', '南一高分講義', '南一名校段考卷']
  },
  {
    id: 'hanLin',
    name: '翰林版 (Han Lin)',
    shortName: '翰林版',
    publisher: '翰林出版事業（含英語 Here We Go / Dino）',
    badge: '結構拆解與圖表判讀',
    color: '#d97706',
    bgSoft: 'rgba(217, 119, 6, 0.12)',
    description: '強調幾何圖形割補推導、心智圖結構分析、實驗圖表判讀與國中會考銜接題型。',
    companionBooks: ['翰林贏家自修', '翰林最高水準評量', '翰林小無敵講義', '翰林滿分題庫', '翰林段考素養卷']
  },
  {
    id: 'hessLongman',
    name: '何嘉仁 / 朗文專業版',
    shortName: '何嘉仁/朗文',
    publisher: '何嘉仁 (Super Fun / e-Star) ＆ 培生朗文 (Longman)',
    badge: '雙語聽說讀寫與 GEPT',
    color: '#db2777',
    bgSoft: 'rgba(219, 39, 119, 0.12)',
    description: '針對雙語教學、自然發音 Phonics、情境會話聽力與全民英檢初級 (GEPT Elementary) 完整對齊。',
    companionBooks: ['Super Fun 課本習作', 'e-Star 聽力讀寫評量', '朗文雙語文法講義', 'GEPT 初級模擬題本']
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📖 二、參考書與輔助教材四大類型總覽 (Reference Book Series Catalog)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const REFERENCE_BOOK_SERIES_108 = [
  {
    id: 'self_study',
    title: '📘 課本同步自修系列（課前預習・課後完全解惑）',
    tag: '課本 1:1 詳解',
    color: '#2563eb',
    books: [
      { name: '《康軒學習自修》', publisher: '康軒文教', features: '完整收錄課本習作解答、段落結構心智圖、生活素養延伸專欄。' },
      { name: '《南一超群自修》', publisher: '南一書局', features: '詳列課本例題步驟拆解、易錯觀念紅字提醒、跨領域閱讀補給站。' },
      { name: '《翰林贏家自修》', publisher: '翰林出版', features: '首創圖解核心概念、課文深究問答解析、國中先修觀念橋接。' }
    ]
  },
  {
    id: 'workbook',
    title: '📗 實力進階評量系列（基礎鞏固・段考實戰演練）',
    tag: '題型最齊全',
    color: '#059669',
    books: [
      { name: '《康軒新挑戰學習評量》', publisher: '康軒文教', features: '分層設計「基礎練習 ➔ 進階挑戰 ➔ 素養非選題」，貼合學校平時考。' },
      { name: '《南一點線面學習評量》', publisher: '南一書局', features: '由點（單一概念）到線（跨節整合）到面（全單元綜合），循序漸進。' },
      { name: '《翰林最高水準評量》', publisher: '翰林出版', features: '收錄全國各縣市名校經典必考題、陷阱防雷題與詳盡解析。' }
    ]
  },
  {
    id: 'lecture',
    title: '📙 頂尖名師講義系列（重點濃縮・壓軸難題秒殺）',
    tag: 'A++ 學霸必備',
    color: '#d97706',
    books: [
      { name: '《麻辣講義 / 滿分講義》', publisher: '跨版本綜合', features: '濃縮三大版本交集必考公式、5秒速解口訣、資優壓軸應用題。' },
      { name: '《小無敵 / 點石成金講義》', publisher: '翰林 / 明霖', features: '左頁重點圖表整理、右頁立即演練，專攻段考易失分計算與圖表題。' },
      { name: '《高升鑫 / 雙向溝通講義》', publisher: '升中銜接專書', features: '針對小六升國一數理代數、文言閱讀與英文時態進行系統化加深。' }
    ]
  },
  {
    id: 'exam_papers',
    title: '📕 考前衝刺卷與素養題本（計時模擬・弱點清零）',
    tag: '段考滿分衝刺',
    color: '#7c3aed',
    books: [
      { name: '《全國名校段考必考卷》', publisher: '各版本段考題庫', features: '收錄臺北、新北、臺中、高雄公立國小第一次、第二次與期末考真題。' },
      { name: '《PISA / PIRLS 跨領域素養題本》', publisher: '國教院素養導向', features: '長文圖表判讀、真實生活情境解題、是非說明題與作圖申論題。' },
      { name: '《小六畢業考暨升私中/資優班總複習》', publisher: '升學旗艦系列', features: '總結六年級上下學期全部核心考點，無縫接軌國中七年級課程。' }
    ]
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🧭 三、108 課綱基本科目與專業科目分類架構 (Basic & Specialized Categories)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const CURRICULUM_SUBJECT_GROUPS = [
  {
    id: 'basic',
    title: '🏛️ 部定基本核心科目 (五大學科)',
    subtitle: '國語文・數學・自然科學・社會・英語文（段考與升學必考基石）',
    badge: '基本科目',
    color: '#2563eb',
    subjectIds: ['mandarin', 'math', 'science', 'social', 'english']
  },
  {
    id: 'specialized',
    title: '🎨 部定專業與全人素養科目 (六大專業領域)',
    subtitle: '藝術・健康與體育・綜合活動・資訊科技與運算思維・本土語與國際雙語・國中七年級先修',
    badge: '專業與素養科目',
    color: '#7c3aed',
    subjectIds: ['arts', 'health_pe', 'integrative', 'tech_steam', 'bilingual_native', 'jh_prep']
  }
];

// 擴充專業科目（資訊科技運算思維、本土語與國際雙語、國中先修），與既有 8 大領域組成完整 11 大領域
export const SPECIALIZED_EXTRA_SUBJECTS = [
  {
    id: 'tech_steam',
    name: '💻 資訊科技與運算思維',
    shortName: '資訊科技',
    category: 'specialized',
    emoji: '💻',
    mascot: '程式小創客',
    badge: '演算法・AI素養・STEAM',
    color: 'hsl(200, 85%, 45%)',
    desc: '108課綱科技領域核心：演算法拆解、流程圖邏輯、Scratch積木程式概念、AI生成式人工智慧倫理與資安防護',
    linkedRoute: '/labs'
  },
  {
    id: 'bilingual_native',
    name: '🗣️ 本土語文與雙語檢定',
    shortName: '本土與雙語',
    category: 'specialized',
    emoji: '🗣️',
    mascot: '語文小使者',
    badge: '閩客原語・GEPT初級雙語',
    color: 'hsl(290, 72%, 52%)',
    desc: '108課綱本土語文（臺灣台語、客語、原住民族語俗諺文化）暨雙語 CLIL 學科英語與 GEPT 全民英檢初級實戰',
    linkedRoute: '/gept'
  },
  {
    id: 'jh_prep',
    name: '🚀 國中七年級數理英先修',
    shortName: '國中先修',
    category: 'specialized',
    emoji: '🚀',
    mascot: '領航智多星',
    badge: '正負數・一元一次・理化生物',
    color: 'hsl(245, 80%, 58%)',
    desc: '小六下畢業無縫銜接國一：正負數四則運算、絕對值、一元一次方程式、生物細胞顯微與國一核心英文文法',
    linkedRoute: '/prep'
  }
];

// 專業擴充科目的 6上 / 6下 完整單元編列
export const SPECIALIZED_EXTRA_UNITS = {
  tech_steam: [
    {
      id: 'tech-u1',
      title: '單元 1：運算思維四大核心——拆解、規律、抽象化與演算法',
      description: '學會把複雜大問題拆解成小步驟，找出重複規律並設計清晰的演算法流程圖。',
      semester: '6A',
      term: 'midterm',
      difficulty: 1,
      estimatedMinutes: 15,
      competencyCode: '科-E-A2',
      badge: '運算思維演算法',
      keyConcepts: ['問題拆解 (Decomposition)', '模式辨識找規律', '抽象化擷取重點', '演算法流程圖符號 (菱形判斷/長方形處理)'],
      linkedUnitId: 'math-u1'
    },
    {
      id: 'tech-u2',
      title: '單元 2：程式邏輯結構——循序、條件判斷 (If-Else) 與迴圈 (Loop)',
      description: '掌握 Scratch 與視覺化程式三大基本結構，理解變數計分與事件驅動原理。',
      semester: '6A',
      term: 'final',
      difficulty: 2,
      estimatedMinutes: 15,
      competencyCode: '科-E-B2',
      badge: '程式邏輯條件迴圈',
      keyConcepts: ['循序結構由上而下執行', '條件分歧 If...Then...Else', '計次迴圈與條件重複迴圈', '變數 (Variable) 與座標定位'],
      linkedUnitId: 'math-u4'
    },
    {
      id: 'tech-u3',
      title: '單元 3：網路原理、資安防護與智慧財產權',
      description: '認識雲端網路傳輸、強密碼設計、雙重驗證 (2FA)、防範網路釣魚與創用 CC 授權。',
      semester: '6B',
      term: 'midterm',
      difficulty: 1,
      estimatedMinutes: 15,
      competencyCode: '科-E-C1',
      badge: '資安防護創用CC',
      keyConcepts: ['強密碼與雙因素驗證', '網路釣魚 (Phishing) 識別', '創用 CC 四大授權要素 (姓名標示/非商業/禁止改作/相同方式分享)', '個人資料與數位足跡保護'],
      linkedUnitId: 'soc-u5'
    },
    {
      id: 'tech-u4',
      title: '單元 4：人工智慧 (AI) 素養、感測器應用與 STEAM 專題實作',
      description: '理解機器學習訓練概念、生成式 AI 正確提問 (Prompt) 與查證倫理，結合科學原理完成創客設計。',
      semester: '6B',
      term: 'final',
      difficulty: 2,
      estimatedMinutes: 18,
      competencyCode: '科-E-A3',
      badge: 'AI素養STEAM創客',
      keyConcepts: ['機器學習「資料訓練 ➔ 預測」原理', '生成式 AI 幻覺查核與學術誠信', '光敏/超音波感測器生活自動化', 'STEAM 跨科整合設計流程'],
      linkedUnitId: 'soc-u8'
    }
  ],
  bilingual_native: [
    {
      id: 'biling-u1',
      title: '單元 1：本土語文智慧——臺灣台語、客語與原住民族日常俗諺',
      description: '認識臺灣多元本土語文問候、節慶飲食詞彙與充滿人生哲理的傳統俗諺。',
      semester: '6A',
      term: 'midterm',
      difficulty: 1,
      estimatedMinutes: 15,
      competencyCode: '本-E-B1',
      badge: '本土語俗諺文化',
      keyConcepts: ['臺灣台語常見生活詞彙與節慶俗諺', '客家語「晴耕雨讀、硬頸精神」文化語彙', '原住民族語「感恩自然、共享互助」問候語', '母語傳承與世界母語日 (2月21日)'],
      linkedUnitId: 'soc-u2'
    },
    {
      id: 'biling-u2',
      title: '單元 2：CLIL 雙語跨領域——用英語探索自然科學與數學算理',
      description: '掌握雙語課堂高頻英文字彙（Fraction 分數、Ratio 比、Evaporation 蒸發、Gravity 重力）。',
      semester: '6A',
      term: 'final',
      difficulty: 2,
      estimatedMinutes: 15,
      competencyCode: '英-E-B1',
      badge: 'CLIL雙語數理詞彙',
      keyConcepts: ['數學雙語：numerator 分子 / denominator 分母 / radius 半徑', '自然雙語：solid 固體 / liquid 液體 / gas 氣體', '雙語實驗室安全指令', '圖表英文數據判讀'],
      linkedUnitId: 'eng-u1'
    },
    {
      id: 'biling-u3',
      title: '單元 3：GEPT 全民英檢初級聽力與情境看圖辨義',
      description: '針對全民英檢初級 (GEPT Elementary) 聽力四大題型進行關鍵疑問詞與情境訓練。',
      semester: '6B',
      term: 'midterm',
      difficulty: 2,
      estimatedMinutes: 15,
      competencyCode: '英-E-A1',
      badge: 'GEPT聽力看圖辨義',
      keyConcepts: ['5W1H 疑問詞瞬聽定位 (Who/Where/When/What/Why/How)', '場所與交通工具情境聽力', '日常購物點餐與問路對話', '語調升降與情緒推論'],
      linkedUnitId: 'eng-u3'
    },
    {
      id: 'biling-u4',
      title: '單元 4：GEPT 全民英檢初級閱讀理解與句子重組寫作',
      description: '強化段落主旨閱讀、克漏字介系詞與連接詞填空，以及英文句子重組與看圖寫作。',
      semester: '6B',
      term: 'final',
      difficulty: 3,
      estimatedMinutes: 18,
      competencyCode: '英-E-B2',
      badge: 'GEPT閱讀句子重組',
      keyConcepts: ['連接詞 because / so / although / but 邏輯判斷', '三態時態 (現在/過去/未來) 綜合克漏字', '英文主詞 + 動詞 + 地點 + 時間語序重組', '三段式看圖短文寫作要領'],
      linkedUnitId: 'eng-u8'
    }
  ],
  jh_prep: [
    {
      id: 'prep-u1',
      title: '單元 1：國一數學先修（上）——正負數、數線與絕對值',
      description: '突破國小只有正數的限制！認識負數意義、數線方向、相反數與絕對值距離本質。',
      semester: '6A',
      term: 'midterm',
      difficulty: 2,
      estimatedMinutes: 18,
      competencyCode: '數-J-A1',
      badge: '正負數與絕對值',
      keyConcepts: ['正數與負數的相對意義', '數線三要素（原點、正向、單位長）', '相反數相加為 0', '絕對值 $|a|$ 代表與原點的距離恆大於等於 0'],
      linkedUnitId: 'math-u1'
    },
    {
      id: 'prep-u2',
      title: '單元 2：國一數學先修（進階）——正負數四則運算與一元一次方程式',
      description: '精熟「負負得正」加減乘除口訣、指數律入門與文字符號化簡解一元一次方程式。',
      semester: '6A',
      term: 'final',
      difficulty: 3,
      estimatedMinutes: 18,
      competencyCode: '數-J-A2',
      badge: '負負得正與方程式',
      keyConcepts: ['正負數加減法去括號變號規則', '同號相乘除得正、異號相乘除得負', '分配律去括號化簡代數式', '移項法則解一元一次方程式'],
      linkedUnitId: 'math-u11'
    },
    {
      id: 'prep-u3',
      title: '單元 3：國一生物與理化先修——細胞構造、科學方法與密度概念',
      description: '從小六顯微鏡銜接國一生物細胞學說（細胞壁/細胞膜/細胞核/葉綠體）與理化實驗密度公式。',
      semester: '6B',
      term: 'midterm',
      difficulty: 2,
      estimatedMinutes: 18,
      competencyCode: '自-J-A1',
      badge: '細胞構造與密度',
      keyConcepts: ['細胞發現者虎克與細胞學說', '動植物細胞構造比較（植物有細胞壁與葉綠體）', '科學方法五步驟（觀察➔提問➔假設➔實驗➔結論）', '質量、體積與密度 $D = M / V$ 入門'],
      linkedUnitId: 'sci-u10'
    },
    {
      id: 'prep-u4',
      title: '單元 4：國一英語與國文先修——五大基本句型與文言文閱讀破題',
      description: '掌握國中英語 Be 動詞與一般動詞直述/疑問/否定轉換，以及國一文言文主詞省略與古今字義解碼。',
      semester: '6B',
      term: 'final',
      difficulty: 2,
      estimatedMinutes: 18,
      competencyCode: '國英-J-B1',
      badge: '國一英文字法與文言',
      keyConcepts: ['人稱代名詞主格/所有格/受格 (I / my / me) 完整表', 'There is / There are 存在句型', '文言文常見虛詞（之、其、以、而、乃）破題', '國中會考字音字形與成語典故銜接'],
      linkedUnitId: 'man-u8'
    }
  ]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🗂️ 四、各科目 6上 / 6下 課本三版本章節名稱與參考書頁碼重點對照表
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TEXTBOOK_CHAPTER_DETAILS = {
  // 數學 12 單元
  'math-u1': {
    kangHsuanBook: '康軒6上 第1單元：最大公因數與最小公倍數',
    nanIBook: '南一6上 第1單元：質因數分解和短除法',
    hanLinBook: '翰林6上 第1單元：最大公因數與最小公倍數',
    refSelfStudy: '自修重點：質數表 (2~97 共25個)、短除法連除規則、正方形拼貼與裁切分辨。',
    refWorkbook: '評量必考：分裝水果餘數/不足數先處理再求 GCD；公車同時發車求 LCM 再推算時刻。',
    refExamTrap: '⚠️ 參考書防雷：1 不是質數也不是合數！最小質數且唯一偶質數是 2！'
  },
  'math-u2': {
    kangHsuanBook: '康軒6上 第2單元：分數的除法',
    nanIBook: '南一6上 第2單元：分數的除法',
    hanLinBook: '翰林6上 第2單元：分數的除法',
    refSelfStudy: '自修重點：同分母分數相除等於分子相除；除以一個分數等於乘以它的倒數。',
    refWorkbook: '評量必考：求「裝滿幾包、剩下幾公斤」時，分數部分是「包數」而非「重量」，真實剩餘重量 = 除數 × 餘數包！',
    refExamTrap: '⚠️ 參考書防雷：帶分數相除嚴禁整數除整數、分數除分數，務必先化為假分數！'
  },
  'math-u3': {
    kangHsuanBook: '康軒6上 第3單元：小數的除法',
    nanIBook: '南一6上 第3單元：小數的除法',
    hanLinBook: '翰林6上 第3單元：小數的除法',
    refSelfStudy: '自修重點：除數小數點向右移幾位化為整數，被除數小數點同步右移相同位數。',
    refWorkbook: '評量必考：求商到整數位並寫出餘數時，「商的小數點對齊新位置，餘數的小數點對齊原來的舊位置」。',
    refExamTrap: '⚠️ 參考書防雷：四捨五入求商到小數第二位時，必須除到小數第三位才能判斷！'
  },
  'math-u4': {
    kangHsuanBook: '康軒6上 第4單元：比與比值',
    nanIBook: '南一6上 第5單元：比、比值與正比',
    hanLinBook: '翰林6上 第4單元：比與比值',
    refSelfStudy: '自修重點：$a : b$ 的比值為 $a \\div b = \\frac{a}{b}$；前後項同乘除不為0的數，比值不變。',
    refWorkbook: '評量必考：分數比與小數比化為「最簡整數比」（前後項互質）；利用外項乘積＝內項乘積求未知數。',
    refExamTrap: '⚠️ 參考書防雷：看清楚題目問的是「最簡整數比（要有冒號）」還是「比值（單一分數或小數）」！'
  },
  'math-u5': {
    kangHsuanBook: '康軒6上 第5單元：圓周率與圓周長',
    nanIBook: '南一6上 第6單元：圓周長與扇形周長',
    hanLinBook: '翰林6上 第5單元：圓周長與扇形弧長',
    refSelfStudy: '自修重點：圓周長 $=$ 直徑 $\\times 3.14$；扇形弧長 $=$ 直徑 $\\times 3.14 \\times \\frac{\\text{圓心角}}{360^\\circ}$。',
    refWorkbook: '評量必考：計算扇形「周長」時，算完圓弧長後務必加上「2條半徑 ($+ 2r$)」！',
    refExamTrap: '⚠️ 參考書防雷：題目給的是「半徑」還是「直徑」先圈起來，半圓周長 $= \\text{半圓弧} + \\text{直徑}$！'
  },
  'math-u6': {
    kangHsuanBook: '康軒6上 第6單元：圓面積與扇形面積',
    nanIBook: '南一6上 第7單元：圓與扇形的面積',
    hanLinBook: '翰林6上 第6單元：圓面積與扇形面積',
    refSelfStudy: '自修重點：圓面積 $=$ 半徑 $\\times$ 半徑 $\\times 3.14$；扇形面積 $=$ 圓面積 $\\times \\frac{\\text{圓心角}}{360^\\circ}$。',
    refWorkbook: '評量必考：正方形內葉形（橄欖形）面積速算 $=$ 邊長 $\\times$ 邊長 $\\times 0.57$；羊綁在牆角吃草的複合扇形面積。',
    refExamTrap: '⚠️ 參考書防雷：半徑變為 3 倍時，圓周長變 3 倍，但圓面積會變成 $3 \\times 3 = 9$ 倍！'
  },
  'math-u7': {
    kangHsuanBook: '康軒6下 第3單元：速率',
    nanIBook: '南一6下 第2單元：速率',
    hanLinBook: '翰林6下 第3單元：速率',
    refSelfStudy: '自修重點：速率 $=$ 距離 $\\div$ 時間；時速 $\\div 60 =$ 分速；時速 $\\div 3.6 =$ 秒速。',
    refWorkbook: '評量必考：上山下山來回「平均速率」$=$ 總距離 $\\div$ 總時間；同向追趕時間 $=$ 距離差 $\\div$ 速率差。',
    refExamTrap: '⚠️ 參考書防雷：來回平均速率絕對不能把去程速率與回程速率直接相加除以 2！'
  },
  'math-u8': {
    kangHsuanBook: '康軒6下 第2單元：角柱與圓柱（體積與表面積）',
    nanIBook: '南一6下 第1單元：柱體的體積與表面積',
    hanLinBook: '翰林6下 第2單元：角柱與圓柱',
    refSelfStudy: '自修重點：所有柱體體積 $=$ 底面積 $\\times$ 柱高；柱體表面積 $=$ 底面積 $\\times 2 +$ 底面周長 $\\times$ 柱高。',
    refWorkbook: '評量必考：圓柱側面展開長方形的「長」等於底面圓周長；複合階梯柱體與空心水泥管體積表面積。',
    refExamTrap: '⚠️ 參考書防雷：計算複合凹字形柱體表面積時，善用「三視圖推平移補法」避免漏算內側壁面！'
  },
  'math-u9': {
    kangHsuanBook: '康軒6上 第8單元：放大、縮小與比例尺',
    nanIBook: '南一6上 第9單元：放大圖、縮圖與比例尺',
    hanLinBook: '翰林6上 第8單元：放大圖、縮圖與比例尺',
    refSelfStudy: '自修重點：$n$ 倍放大圖的「對應邊長」變 $n$ 倍、「面積」變 $n^2$ 倍，但「對應角」度數完全不變！',
    refWorkbook: '評量必考：比例尺 $1 : 5000$ 代表圖上 $1\\text{ cm}$ 等於實際 $5000\\text{ cm} = 50\\text{ m}$（刪去2個0換公尺，刪去5個0換公里）。',
    refExamTrap: '⚠️ 參考書防雷：把 $45^\\circ$ 角放大 3 倍後，角度依然是 $45^\\circ$，千萬不可寫 $135^\\circ$！'
  },
  'math-u10': {
    kangHsuanBook: '康軒6下 第4單元：基準量與比較量 / 第5單元：怎樣解題',
    nanIBook: '南一6下 第3單元：基準量與比較量 / 第5單元：怎樣解題',
    hanLinBook: '翰林6下 第4單元：基準量與比較量 / 第5單元：怎樣解題',
    refSelfStudy: '自修重點：當作 1 的是基準量；母子和 $=$ 基準量 $\\times (1 + \\text{比值})$；母子差 $=$ 基準量 $\\times |1 - \\text{比值}|$。',
    refWorkbook: '評量必考：雞兔同籠假設法（全假設為雞，總腳數差 $\\div (4-2) =$ 兔數）；年齡差永遠不變問題。',
    refExamTrap: '⚠️ 參考書防雷：「甲比乙多 25%」基準量是乙；反過來問「乙比甲少幾%」基準量變成甲，答案是少 20% 而非 25%！'
  },
  'math-u11': {
    kangHsuanBook: '康軒6上 第7單元：等量公理與應用',
    nanIBook: '南一6上 第8單元：等量公理',
    hanLinBook: '翰林6上 第7單元：等量公理',
    refSelfStudy: '自修重點：等號兩邊同時加、減、乘、除以一個不為 0 的相同數，等式依然成立。',
    refWorkbook: '評量必考：先算乘除項之外的加減移項，再處理乘除係數；依題意設未知數 $x$ 列式求解。',
    refExamTrap: '⚠️ 參考書防雷：處理像 $40 - x = 15$ 減數為未知數時，$x = 40 - 15 = 25$，切勿寫成 $40 + 15$！'
  },
  'math-u12': {
    kangHsuanBook: '康軒6下 第6單元：圓形圖',
    nanIBook: '南一6下 第6單元：圓形圖與統計圖表',
    hanLinBook: '翰林6下 第6單元：圓形圖',
    refSelfStudy: '自修重點：百分率圓形圖總和 $100\\%$；圓心角 $= 360^\\circ \\times \\text{百分率}$；1% 對應 $3.6^\\circ$。',
    refWorkbook: '評量必考：當各項四捨五入後總和為 $99\\%$ 或 $101\\%$ 時，一律在「佔比最大那一項」加減 $1\\%$ 調整湊滿 $100\\%$。',
    refExamTrap: '⚠️ 參考書防雷：題目給的是「圓心角度數」求數量時，要除以 $360^\\circ$，別誤當成除以 100！'
  }
};

// 自動生成或取得任意單元（含 64 個基本/素養單元 + 12 個擴充專業單元）的完整課本與參考書對照資料
export function getUnitCompleteCatalog(unit) {
  const vf = getUnitVersionFocus(unit.id);
  const specific = TEXTBOOK_CHAPTER_DETAILS[unit.id];
  const semLabel = unit.semester === '6A' ? '6上' : '6下';
  const termLabel = unit.term === 'midterm' ? '期中段考範圍' : '期末/畢業考範圍';

  return {
    unitId: unit.id,
    title: unit.title,
    semester: unit.semester,
    semesterLabel: semLabel,
    term: unit.term,
    termLabel,
    competencyCode: unit.competencyCode || '108課綱核心素養',
    textbooks: {
      kangHsuan: {
        chapterTitle: specific?.kangHsuanBook || `康軒版 ${semLabel}・${unit.title}`,
        focus: vf.kangHsuan
      },
      nanI: {
        chapterTitle: specific?.nanIBook || `南一版 ${semLabel}・${unit.title}`,
        focus: vf.nanI
      },
      hanLin: {
        chapterTitle: specific?.hanLinBook || `翰林版 ${semLabel}・${unit.title}`,
        focus: vf.hanLin
      },
      hessLongman: {
        chapterTitle: unit.id.startsWith('eng-') || unit.id.startsWith('biling-')
          ? `何嘉仁 Super Fun / 朗文 ${semLabel}・${unit.title}`
          : `跨版本雙語素養延伸 ${semLabel}・${unit.badge || unit.title}`,
        focus: unit.id.startsWith('eng-') || unit.id.startsWith('biling-')
          ? '側重生活對話聽力辨識、自然發音規則與 GEPT 初級句型結構演練。'
          : `結合雙語關鍵詞彙與跨領域探究，強化「${(unit.keyConcepts && unit.keyConcepts[0]) || unit.badge}」實戰應用。`
      }
    },
    referenceBooks: {
      selfStudy: specific?.refSelfStudy || `【自修精要（康軒/超群/贏家）】系統化圖解「${(unit.keyConcepts || []).slice(0, 2).join('、')}」，搭配課本習作完整詳解。`,
      workbook: specific?.refWorkbook || `【評量必考（新挑戰/點線面/最高水準）】針對「${(unit.keyConcepts || []).slice(1, 3).join('、')}」設計基礎、進階與跨單元整合題型。`,
      lecture: `【名師講義（麻辣/滿分）】5秒破題口訣：「${vf.quickRescue}」`,
      examTrap: specific?.refExamTrap || `⚠️ 【段考防雷警訊】審題務必鎖定關鍵字「${vf.hotKeywords}」，避免落入選項文字陷阱！`
    },
    quickRescue: vf.quickRescue,
    hotKeywords: vf.hotKeywords
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🦉 五、Duolingo 遊戲化多元互動題型自動生成引擎 (Multi-Modal Exercise Generator)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 為每一個單元生成 6 種語意完整、觀念清晰的 Duolingo 經典互動微練習：
// 1. word_bank (步驟排序與英語語塊重組 — 嚴禁按字元硬切詞彙！)
// 2. matching (核心概念與公式定義配對消消樂 — 左右兩欄獨立隨機洗牌)
// 3. cloze (段考真實情境克漏字填空)
// 4. true_false (真偽雙向概念是非快判 — 兼含 ⭕正確 與 ❌錯誤 題)
// 5. listening (沉浸式雙語/語音考點聽力辨識)
// 6. mcq (課本與參考書實戰四選一 — 選項確定性洗牌)

function hashSeed(str = '') {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function deterministicShuffle(list = [], seedStr = 'sixth') {
  const out = [...list];
  let s = (hashSeed(seedStr) || 1) >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  // 確保洗牌後順序不會剛好跟正確答案完全一模一樣（避免不需排序就能過關）
  if (out.length > 1 && out.every((item, idx) => item === list[idx])) {
    [out[0], out[1]] = [out[1], out[0]];
  }
  return out;
}

function cleanLatexText(text = '') {
  return String(text || '')
    .replace(/\$/g, '')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
    .replace(/\^\\circ/g, '°')
    .trim();
}

// 76 單元專屬「步驟排序 / 英文句子重組」題庫（100% 完整語意步驟或英文單字，零斷詞！）
const UNIT_ORDER_PUZZLES = {
  'math-u1': {
    prompt: '請依序排列「用短除法求最大公因數 (GCD) 與最小公倍數 (LCM)」的正確解題步驟：',
    steps: [
      '① 找出兩數共同的質因數當除數',
      '② 持續短除直到兩數互質為止',
      '③ 左側除數全部相乘 = 最大公因數 (GCD)',
      '④ 左側除數乘上底部兩商 = 最小公倍數 (LCM)'
    ],
    distractors: ['直接將兩數相加除以 2'],
    explanation: '短除法口訣：除到兩數互質（最大公因數為 1）為止；直線左側相乘為 GCD，L 型全乘為 LCM！'
  },
  'math-u2': {
    prompt: '請依序排列「帶分數除以帶分數」的標準計算步驟：',
    steps: [
      '① 將被除數與除數都先化為假分數',
      '② 把除號「÷」改成乘號「×」，並將除數分子分母顛倒（取倒數）',
      '③ 分子與分母先進行交叉約分',
      '④ 分子乘分子、分母乘分母，化為最簡分數'
    ],
    distractors: ['整數除整數、分數除分數'],
    explanation: '帶分數相除切記不可把整數部分直接相除！必先化為假分數，再乘以除數的倒數。'
  },
  'math-u3': {
    prompt: '請依序排列「小數除以小數並求商與餘數」的直式計算步驟：',
    steps: [
      '① 將除數的小數點向右移，化為整數',
      '② 被除數的小數點同步向右移動相同位數',
      '③ 商的小數點對齊被除數「移動後的新小數點」',
      '④ 餘數的小數點對齊被除數「原來的舊小數點」'
    ],
    distractors: ['餘數小數點對齊新小數點'],
    explanation: '小數除法防雷關鍵：商對新點、餘數對舊點，且算出的餘數必定小於原來的除數！'
  },
  'math-u4': {
    prompt: '請依序排列將「分數比或小數比」化為「最簡整數比」的解題步驟：',
    steps: [
      '① 觀察前項與後項是否為小數或分數',
      '② 前後項同乘以 10 的倍數或分母的最小公倍數化為整數',
      '③ 前後項再同除以兩數的最大公因數 (GCD)',
      '④ 確認前後項已互質，寫出「a : b」最簡整數比'
    ],
    distractors: ['把冒號省略寫成單一數字'],
    explanation: '注意「最簡整數比」中間必須保留比號「:」，而「比值」則是前項除以後項的單一數值。'
  },
  'math-u5': {
    prompt: '請依序排列計算「扇形周長」的完整步驟：',
    steps: [
      '① 確認扇形的半徑 r（直徑 = 半徑 × 2）與圓心角度數',
      '② 計算完整圓周長 = 直徑 × 3.14',
      '③ 乘上「圓心角 ÷ 360°」求出扇形的圓弧長',
      '④ 圓弧長再加上「2 條半徑 (+ 2r)」得到扇形周長'
    ],
    distractors: ['只算圓弧長不加兩條半徑'],
    explanation: '段考頭號陷阱：扇形周長是由「1 條圓弧 + 2 條半徑」圍成，算完弧長務必加上 2r！'
  },
  'math-u6': {
    prompt: '請依序排列計算「扇形面積」的完整步驟：',
    steps: [
      '① 先找出扇形的半徑 r（若題目給直徑需先除以 2）',
      '② 計算完整圓面積 = 半徑 × 半徑 × 3.14',
      '③ 算出扇形佔全圓的幾分之幾（圓心角 ÷ 360°）',
      '④ 將圓面積乘以扇形比例，得出扇形面積'
    ],
    distractors: ['直接用直徑乘以 3.14'],
    explanation: '圓面積公式為 r × r × 3.14，再乘以 (圓心角 / 360°) 即為扇形面積。'
  },
  'math-u7': {
    prompt: '請依序排列計算「上山、下山來回平均速率」的正確步驟：',
    steps: [
      '① 分別求出上山距離與下山距離，相加得「來回總距離」',
      '② 分別求出上山花費時間與下山花費時間',
      '③ 將上山時間與下山時間相加得「來回總時間」',
      '④ 用「來回總距離 ÷ 來回總時間」算出平均速率'
    ],
    distractors: ['上山速率加下山速率直接除以 2'],
    explanation: '平均速率永遠等於「總距離 ÷ 總時間」，絕對不可將兩個速率直接相加除以 2！'
  },
  'math-u8': {
    prompt: '請依序排列計算「圓柱體表面積」的完整步驟：',
    steps: [
      '① 計算 1 個圓形底面積 = 半徑 × 半徑 × 3.14',
      '② 將底面積乘以 2，得到「上下兩個底面積總和」',
      '③ 計算側面展開長方形面積 = 底面圓周長 × 柱高',
      '④ 將「上下兩底面積」加上「側面積」得出圓柱表面積'
    ],
    distractors: ['只算一個底面積加側面積'],
    explanation: '柱體表面積 = 底面積 × 2 + 底面周長 × 柱高；圓柱側面展開圖的長正好等於底面圓周長！'
  },
  'math-u9': {
    prompt: '請依序排列利用「地圖比例尺 1 : 5000」求實際距離（公尺）的步驟：',
    steps: [
      '① 用尺量出地圖上兩地的「圖上距離（公分）」',
      '② 將圖上距離乘以 5000，得出實際距離（公分）',
      '③ 將公分除以 100（刪去 2 個 0）換算成「公尺」',
      '④ 檢查題目要求單位（公尺或公里）並寫出答案'
    ],
    distractors: ['將角度也乘以 5000 倍'],
    explanation: '比例尺 1:5000 代表圖上 1 公分等於實際 5000 公分（即 50 公尺）；且放大縮小圖的對應角永遠不變！'
  },
  'math-u10': {
    prompt: '請依序排列「雞兔同籠問題」假設法的標準破題步驟：',
    steps: [
      '① 先假設籠子裡全部都是雞（每隻 2 隻腳）',
      '② 算出假設總腳數，並與題目實際總腳數相減求「總腳數差」',
      '③ 用「總腳數差 ÷ (4 - 2)」求出兔子的數量',
      '④ 用「總隻數 - 兔子數量」求出雞的數量並代回驗算'
    ],
    distractors: ['總腳數直接除以 6'],
    explanation: '全假設為雞時，每把 1 隻雞換成 1 隻兔會多出 2 隻腳，故「總腳數差 ÷ 2 = 兔數」！'
  },
  'math-u11': {
    prompt: '請依序排列利用「等量公理與未知數 x」解應用題的步驟：',
    steps: [
      '① 依題目所求設未知數為 x',
      '② 根據題意找出相等關係，列出含有 x 的等式',
      '③ 運用等量公理，等號兩邊同加減、再同乘除求出 x',
      '④ 將求出的 x 代回原題目驗算是否符合題意'
    ],
    distractors: ['移項時加號不用變減號'],
    explanation: '等號兩邊同做相同運算等式仍成立；求出未知數 x 後代回驗算是拿滿分的黃金習慣！'
  },
  'math-u12': {
    prompt: '請依序排列繪製「百分率圓形圖」的正確步驟：',
    steps: [
      '① 算出各項目占總數量的百分率（四捨五入取到整數位）',
      '② 檢查各項百分率總和是否為 100%（若差 1% 於最大項調整）',
      '③ 將各項百分率乘以 3.6°（或 360° × 百分率）算出圓心角',
      '④ 用量角器依圓心角畫出扇形，並標註項目名稱與百分率'
    ],
    distractors: ['直接將百分率當成圓心角度數'],
    explanation: '全圓為 100% 對應 360°，因此每 1% 對應 3.6°！'
  },
  'eng-u1': {
    prompt: '請依序排列單字，完成正確的英文問句：「你通常幾點起床？」',
    steps: ['What', 'time', 'do', 'you', 'usually', 'get', 'up?'],
    distractors: ['does', 'gets'],
    explanation: '詢問日常作息時間句型：What time do you usually get up? 頻率副詞 usually 放在一般動詞 get 之前！'
  },
  'eng-u2': {
    prompt: '請依序排列單字，完成正確的英文過去式問句：「你上週末去了哪裡？」',
    steps: ['Where', 'did', 'you', 'go', 'last', 'weekend?'],
    distractors: ['went', 'goes'],
    explanation: '過去式疑問句出現助動詞 did 時，後方的動詞必須恢復為原形動詞 go！'
  },
  'eng-u3': {
    prompt: '請依序排列單字，完成禮貌問路的英文句型：「請問我要怎麼去博物館？」',
    steps: ['Excuse me,', 'how', 'can', 'I', 'get', 'to', 'the museum?'],
    distractors: ['where', 'going'],
    explanation: '問路必背黃金句型：Excuse me, how can I get to + 地點？'
  },
  'eng-u4': {
    prompt: '請依序排列單字，完成表達身體不適與建議的英文句子：「我頭痛，你應該多休息。」',
    steps: ['I have', 'a headache.', 'You', 'should', 'take', 'a rest.'],
    distractors: ['takes', 'has'],
    explanation: '表達症狀用 have a headache；給建議用助動詞 should + 原形動詞 take a rest！'
  },
  'eng-u5': {
    prompt: '請依序排列單字，完成節慶與日期的英文句子：「聖誕節在十二月二十五日。」',
    steps: ['Christmas', 'is', 'on', 'December', 'twenty-fifth.'],
    distractors: ['in', 'at'],
    explanation: '特定某一天（含幾月幾日）的時間介系詞必須用 on！若只有月份才用 in。'
  },
  'eng-u6': {
    prompt: '請依序排列英文閱讀理解「先略讀、再掃讀解題」的高分四步驟：',
    steps: [
      '① 先快速略讀 (Skim) 標題與首尾句掌握文章主旨',
      '② 仔細閱讀題目，圈出 5W1H 疑問詞與關鍵字',
      '③ 回到文章掃讀 (Scan) 定位關鍵字所在句子',
      '④ 比對前後文語意與時態，選出最符合文意的選項'
    ],
    distractors: ['遇到一個生字就放棄整篇閱讀'],
    explanation: '善用 Skimming 抓大意與 Scanning 找細節，是攻克長篇素養題的關鍵策略！'
  },
  'eng-u7': {
    prompt: '請依序排列單字，完成詢問未來夢想職業的英文問句：「你未來想成為什麼？」',
    steps: ['What', 'do', 'you', 'want', 'to be', 'in the future?'],
    distractors: ['wants', 'are'],
    explanation: '詢問未來志向：What do you want to be in the future? 回答：I want to be a/an + 職業。'
  },
  'eng-u8': {
    prompt: '請依序排列單字，完成英文比較級句子：「藍鯨比大象更大。」',
    steps: ['The', 'blue whale', 'is', 'bigger', 'than', 'the elephant.'],
    distractors: ['biggest', 'more big'],
    explanation: '兩者比較使用「形容詞比較級 (-er) + than」，big 為短母音加子音，需重複字尾 g 加 er (bigger)！'
  },
  'biling-u1': {
    prompt: '請依序排列推廣與傳承「臺灣多元本土語文」的四個實踐層次：',
    steps: [
      '① 從家庭日常問候與長輩對話開始開口說母語',
      '② 認識本土語文中的節慶習俗與生活智慧俗諺',
      '③ 欣賞臺灣台語、客語與原住民族語的多元文化之美',
      '④ 響應 2 月 21 日世界母語日，落實族群平權與尊重'
    ],
    distractors: ['嘲笑不同族群的口音'],
    explanation: '每種母語都是珍貴的文化資產，多說多聽、彼此尊重才能讓本土語文世代傳承。'
  },
  'biling-u2': {
    prompt: '請依序排列雙語科學實驗課（CLIL）探究物質三態變化的英文邏輯順序：',
    steps: [
      '① Ice is a solid (冰是固體，形狀與體積固定)',
      '② When heated, ice melts into liquid water (受熱融化成液態水)',
      '③ When boiled, liquid water evaporates into gas (沸騰蒸發成氣態水蒸氣)',
      '④ Cooling gas condenses back into liquid droplets (遇冷凝結回液態小水滴)'
    ],
    distractors: ['Solid directly becomes fire'],
    explanation: '掌握雙語科學核心字彙：Solid (固體) ➔ Liquid (液體) ➔ Gas (氣體)。'
  },
  'biling-u3': {
    prompt: '請依序排列全民英檢初級 (GEPT) 聽力測驗「看圖辨義與問答」的高分步驟：',
    steps: [
      '① 播音前先快速瀏覽圖片中的人物動作、地點與方位',
      '② 專注聽開頭第一個疑問詞 (Who / What / Where / When / How)',
      '③ 捕捉動詞時態（現在進行式、過去式或未來式）',
      '④ 排除主詞或時態不符的干擾項，選出最佳回應'
    ],
    distractors: ['不聽完題目就隨便亂猜'],
    explanation: 'GEPT 聽力決勝關鍵在於「預覽圖片特徵」與「鎖定開頭 5W1H 疑問詞」！'
  },
  'biling-u4': {
    prompt: '請依序排列單字，完成正確的英文句子重組：「她昨天早上在圖書館讀了一本書。」',
    steps: ['She', 'read', 'a book', 'in the library', 'yesterday morning.'],
    distractors: ['reads', 'tomorrow'],
    explanation: '英文標準語序為「主詞 (She) + 動詞 (read) + 受詞 (a book) + 地點 (in the library) + 時間 (yesterday morning)」！'
  }
};

function buildUnitOrderExercise(unit, kps, catalog) {
  const custom = UNIT_ORDER_PUZZLES[unit.id];
  if (custom) {
    const isWordSentence = custom.steps.every(s => /^[A-Za-z,\.\?!'\s]+$/.test(s));
    const allRaw = [...custom.steps, ...(custom.distractors || [])];
    const shuffled = deterministicShuffle(allRaw, `${unit.id}-order`);
    return {
      id: `${unit.id}-ex-wordbank`,
      type: 'word_bank',
      typeLabel: isWordSentence ? '🧩 英語句子語序重組' : '🧩 解題與觀念步驟排序',
      sourceTag: '📘 課本核心算理與步驟',
      prompt: custom.prompt,
      targetHint: `提示：請依序選出 ${custom.steps.length} 個正確步驟（含 ${custom.distractors?.length || 0} 個陷阱干擾項）！`,
      correctOrder: custom.steps,
      allTiles: shuffled.map((text, idx) => ({ id: `tile-${idx}-${text}`, text })),
      joinSeparator: isWordSentence ? ' ' : ' ➔ ',
      explanation: custom.explanation
    };
  }

  // 為國語、自然、社會、藝術、健體、綜合、資訊、先修等單元建立清晰的 4 步驟邏輯排序（絕不切斷字詞！）
  const rawConcepts = (unit.keyConcepts || []).map(c => cleanLatexText(c)).filter(Boolean);
  const steps = rawConcepts.slice(0, 4).map((concept, idx) => `步驟 ${idx + 1}：${concept}`);
  while (steps.length < 4) {
    steps.push(`步驟 ${steps.length + 1}：綜合應用與驗算檢核`);
  }
  const distractors = ['忽略題目關鍵字直接猜測'];
  const allRaw = [...steps, ...distractors];
  const shuffled = deterministicShuffle(allRaw, `${unit.id}-order-steps`);

  return {
    id: `${unit.id}-ex-wordbank`,
    type: 'word_bank',
    typeLabel: '🧩 核心觀念步驟排序',
    sourceTag: '📘 三大版本重點脈絡',
    prompt: `請依序排列學習「${unit.title}」的 4 個核心知識脈絡步驟：`,
    targetHint: `提示：請依步驟 1 到步驟 4 的順序點擊排列（內含 1 個錯誤干擾項）！`,
    correctOrder: steps,
    allTiles: shuffled.map((text, idx) => ({ id: `tile-${idx}-${text}`, text })),
    joinSeparator: ' ➔ ',
    explanation: `完整學習脈絡：${steps.join(' ➔ ')}。核心心法：${cleanLatexText(catalog.quickRescue)}`
  };
}

function buildUnitMatchingExercise(unit, quizQuestions, kps, catalog) {
  const pairs = [];
  const usedLeft = new Set();

  // 優先從該單元的真實考題或微知識點擷取乾淨的「概念 ↔ 關鍵解題結論」配對
  kps.forEach((kp, idx) => {
    if (pairs.length >= 4) return;
    const cleanTitle = cleanLatexText(kp.title).replace(/^[^：:]+[：:]/, '').trim();
    const cleanDef = cleanLatexText(kp.definition || kp.formulaOrRule)
      .replace(/^[^：:]+[：:]/, '')
      .replace(/^核心工具與心法[：:]?/, '')
      .split(/[；。！]/)[0]
      .trim();
    if (cleanTitle && cleanDef && !usedLeft.has(cleanTitle)) {
      usedLeft.add(cleanTitle);
      pairs.push({
        id: `pair-kp-${idx}`,
        left: cleanTitle.slice(0, 18),
        right: cleanDef.slice(0, 26)
      });
    }
  });

  // 再從真實題庫 quizQuestions 補充高品質配對（題幹核心詞 ↔ 正確答案）
  (quizQuestions || []).forEach((q, qIdx) => {
    if (pairs.length >= 4) return;
    const ansIdx = q.answerIndex ?? q.answer ?? 0;
    const correctOpt = cleanLatexText(q.options?.[ansIdx] || '');
    const stemShort = cleanLatexText(q.question)
      .replace(/^【[^】]+】/, '')
      .replace(/^請問/, '')
      .replace(/[？\?]$/, '')
      .trim();
    if (stemShort && correctOpt && !usedLeft.has(stemShort.slice(0, 18))) {
      usedLeft.add(stemShort.slice(0, 18));
      pairs.push({
        id: `pair-q-${qIdx}`,
        left: stemShort.length > 18 ? `${stemShort.slice(0, 17)}…` : stemShort,
        right: correctOpt.length > 24 ? `${correctOpt.slice(0, 23)}…` : correctOpt
      });
    }
  });

  // 保底補滿 4 組配對
  const fallbackLabels = [
    { left: cleanLatexText((unit.keyConcepts && unit.keyConcepts[0]) || unit.badge), right: cleanLatexText(catalog.textbooks.kangHsuan.focus).split(/[，。]/)[0] },
    { left: cleanLatexText((unit.keyConcepts && unit.keyConcepts[1]) || '算理與定義本質'), right: cleanLatexText(catalog.textbooks.nanI.focus).split(/[，。]/)[0] },
    { left: cleanLatexText((unit.keyConcepts && unit.keyConcepts[2]) || '圖表與結構推導'), right: cleanLatexText(catalog.textbooks.hanLin.focus).split(/[，。]/)[0] },
    { left: '考前秒殺口訣', right: cleanLatexText(catalog.quickRescue).split(/[；！。]/)[0] }
  ];
  let fbIdx = 0;
  while (pairs.length < 4 && fbIdx < fallbackLabels.length) {
    const item = fallbackLabels[fbIdx++];
    if (!usedLeft.has(item.left)) {
      usedLeft.add(item.left);
      pairs.push({
        id: `pair-fb-${fbIdx}`,
        left: item.left.slice(0, 18),
        right: item.right.slice(0, 26)
      });
    }
  }

  return {
    id: `${unit.id}-ex-matching`,
    type: 'matching',
    typeLabel: '🔗 觀念配對消消樂',
    sourceTag: '📗 核心觀念與實戰對照',
    prompt: `請點擊左欄的「題目或概念」，再點擊右欄對應的「正確答案或定義」完成配對：`,
    pairs: pairs.slice(0, 4),
    explanation: `配對完全正確！將核心概念與正確解答建立直覺連結，作答速度就能倍增。`
  };
}

export function generateDuolingoExercisesForUnit(unit, quizQuestions = [], knowledgePoints = []) {
  const catalog = getUnitCompleteCatalog(unit);
  const exercises = [];
  const kps = knowledgePoints.filter(k => k.unitId === unit.id);
  const primaryKp = kps[0] || {
    id: `kp-${unit.id}-1`,
    title: unit.badge || unit.title,
    definition: unit.description,
    formulaOrRule: catalog.quickRescue,
    trapAlert: catalog.referenceBooks.examTrap,
    strategyTip: catalog.textbooks.kangHsuan.focus
  };

  // Helper to ensure exactly 4 options for standard 4-option MCQ
  const ensureFourOptions = (opts, correctAns, seed) => {
    let unique = Array.from(new Set(opts.filter(Boolean)));
    if (!unique.includes(correctAns)) {
      unique.unshift(correctAns);
    }
    const distractors = [
      '以上皆非',
      '條件不足無法判斷',
      '忽略題目單位限制',
      '顛倒先後運算順序',
      '直接相加不考慮算理'
    ];
    let dIdx = 0;
    while (unique.length < 4 && dIdx < distractors.length) {
      if (!unique.includes(distractors[dIdx])) {
        unique.push(distractors[dIdx]);
      }
      dIdx++;
    }
    if (unique.length > 4) {
      // Keep correct answer and trim to 4
      const others = unique.filter(o => o !== correctAns).slice(0, 3);
      unique = [correctAns, ...others];
    }
    return deterministicShuffle(unique, seed);
  };

  // Normalize quiz questions (handle both answerIndex and answer)
  const normalizedQs = (quizQuestions || []).map((q, idx) => {
    const ansIdx = typeof q.answerIndex === 'number' ? q.answerIndex : (typeof q.answer === 'number' ? q.answer : 0);
    const rawOpts = Array.isArray(q.options) && q.options.length > 0 ? q.options : ['選項 A', '選項 B', '選項 C', '選項 D'];
    const correctAns = rawOpts[ansIdx] ?? rawOpts[0];
    const cleanedCorrect = cleanLatexText(correctAns);
    const fourOptions = ensureFourOptions(rawOpts.map(o => cleanLatexText(o)), cleanedCorrect, `${unit.id}-opt-${idx}`);
    return {
      ...q,
      idx,
      sourceSet: q.isExpansion ? 'expansion' : q.isMockChallenge ? 'mock' : q.isRepresentative ? 'representative' : 'foundation',
      question: cleanLatexText(q.question),
      options: fourOptions,
      correctAnswer: cleanedCorrect,
      explanation: cleanLatexText(q.explanation || catalog.quickRescue)
    };
  });

  // 填空、是非、聽力題取「課綱精選代表題」的最後幾題，避免和各關卡的選擇題重複出現
  const repQs = normalizedQs.filter(q => q.sourceSet === 'representative');
  const pickSpare = (n, fallbackIdx) => repQs[repQs.length - 1 - n] || normalizedQs[fallbackIdx] || normalizedQs[0];
  // 有指定知識點的題目（延伸應用題）連到該知識點；其餘依「題目＋解析」與知識點文字重疊最多者對應，
  // 讓答錯時顯示的易錯提醒和例子真的跟這一題有關
  const bigrams = (text) => {
    const set = new Set();
    for (const run of String(text || '').match(/[一-鿿]+|[A-Za-z]{2,}|\d+/g) || []) {
      if (/^[A-Za-z\d]/.test(run)) set.add(run.toLowerCase());
      else for (let i = 0; i < run.length - 1; i++) set.add(run.slice(i, i + 2));
    }
    return set;
  };
  const kpGrams = kps.map(k => ({ kp: k, title: bigrams(k.title), body: bigrams(`${k.formulaOrRule} ${k.definition} ${k.keyFact || ''}`) }));
  // 同單元多個知識點都有的詞（如「受熱」）權重較低，只出現在一個知識點的詞（如「對流」）權重較高
  const spread = new Map();
  for (const { title, body } of kpGrams) for (const g of new Set([...title, ...body])) spread.set(g, (spread.get(g) || 0) + 1);
  const weight = (g) => 1 / (spread.get(g) || 1);
  const kpForQuestion = (q, qIdx) => {
    const explicit = kps.find(k => k.id === q.kpId);
    if (explicit) return explicit;
    const target = bigrams(`${q.question} ${q.explanation}`);
    let best = null;
    let bestScore = 0;
    for (const { kp, title, body } of kpGrams) {
      let hits = 0;
      for (const g of title) if (target.has(g)) hits += 2 * weight(g);
      for (const g of body) if (target.has(g)) hits += weight(g);
      const score = hits / Math.sqrt(title.size * 2 + body.size || 1);
      if (score > bestScore) { bestScore = score; best = kp; }
    }
    const baseKps = kps.filter(k => !k.isExpansion);
    return best || (baseKps.length > 0 ? baseKps[qIdx % baseKps.length] : primaryKp);
  };

  // 1. 🧩 步驟排序 / 語塊重組 (Word / Step Order Builder)
  const orderEx = buildUnitOrderExercise(unit, kps, catalog);
  orderEx.relatedKp = primaryKp;
  orderEx.kpId = primaryKp.id;
  orderEx.kpTitle = primaryKp.title;
  exercises.push(orderEx);

  // 2. 🔗 觀念配對消消樂 (Matching Pairs)
  const matchEx = buildUnitMatchingExercise(unit, normalizedQs, kps, catalog);
  matchEx.relatedKp = primaryKp;
  matchEx.kpId = primaryKp.id;
  matchEx.kpTitle = primaryKp.title;
  exercises.push(matchEx);

  // 3. ✍️ 實戰觀念填空挑戰 (Interactive Cloze — 標準四選一單選題)
  if (normalizedQs.length > 0) {
    const qCloze = pickSpare(0, 3);
    const clozeKp = kps[1] || primaryKp;
    exercises.push({
      id: `${unit.id}-ex-cloze`,
      type: 'cloze',
      typeLabel: '✍️ 觀念填空 (四選一)',
      sourceTag: '📙 核心考點填空選答',
      prompt: `請選出正確答案填入空格，完成核心觀念題：`,
      sentenceBefore: `${qCloze.question} 正確答案應填入【`,
      sentenceAfter: `】。`,
      options: qCloze.options,
      correctAnswer: qCloze.correctAnswer,
      explanation: qCloze.explanation,
      relatedKp: clozeKp,
      kpId: clozeKp.id,
      kpTitle: clozeKp.title
    });
  } else {
    const keyTerm = cleanLatexText((unit.keyConcepts && unit.keyConcepts[0]) || unit.badge || '核心規則');
    const rawOpts = [
      keyTerm,
      '忽略單位直接相加',
      '不考慮題目限制條件',
      '跳過驗算直接猜測'
    ];
    exercises.push({
      id: `${unit.id}-ex-cloze`,
      type: 'cloze',
      typeLabel: '✍️ 觀念填空 (四選一)',
      sourceTag: '📙 核心考點填空選答',
      prompt: `請選出正確答案填入空格：`,
      sentenceBefore: `在「${unit.title}」單元中，最重要的核心考點是【`,
      sentenceAfter: `】。`,
      options: deterministicShuffle(rawOpts, `${unit.id}-cloze-fb`),
      correctAnswer: keyTerm,
      explanation: cleanLatexText(catalog.quickRescue),
      relatedKp: primaryKp,
      kpId: primaryKp.id,
      kpTitle: primaryKp.title
    });
  }

  // 4. ⚡ 迷思是非快判 (True/False Misconception Blitz)
  if (normalizedQs.length >= 2) {
    const qTrue = pickSpare(2, 0);
    const qFalse = pickSpare(3, 1);
    const wrongOpt = qFalse.options.find(o => o !== qFalse.correctAnswer) || qFalse.options[0];

    exercises.push({
      id: `${unit.id}-ex-tf-false`,
      type: 'true_false',
      typeLabel: '⚡ 段考迷思是非快判',
      sourceTag: '📕 易錯陷阱揪錯挑戰',
      prompt: `請判斷下列關於「${unit.badge || unit.title}」的敘述是否正確：`,
      statement: `題目：「${qFalse.question}」 ➔ 小明回答答案是「${wrongOpt}」，請問小明的回答是否正確？`,
      correctBool: false,
      explanation: `這題應該選「❌ 觀念有誤」！正確答案其實是「${qFalse.correctAnswer}」。${qFalse.explanation}`,
      relatedKp: kps[1] || primaryKp,
      kpId: (kps[1] || primaryKp).id,
      kpTitle: (kps[1] || primaryKp).title
    });

    exercises.push({
      id: `${unit.id}-ex-tf-true`,
      type: 'true_false',
      typeLabel: '⚡ 核心觀念是非快判',
      sourceTag: '📘 課本核心規則驗證',
      prompt: `請判斷下列解題結論是否正確：`,
      statement: `題目：「${qTrue.question}」 ➔ 標準答案是「${qTrue.correctAnswer}」。`,
      correctBool: true,
      explanation: `完全正確（⭕）！${qTrue.explanation}`,
      relatedKp: kps[0] || primaryKp,
      kpId: (kps[0] || primaryKp).id,
      kpTitle: (kps[0] || primaryKp).title
    });
  } else {
    const trapText = cleanLatexText(primaryKp.trapAlert || catalog.referenceBooks.examTrap).replace(/⚠️/g, '').trim();
    exercises.push({
      id: `${unit.id}-ex-tf`,
      type: 'true_false',
      typeLabel: '⚡ 段考防雷是非快判',
      sourceTag: '📕 學習評量易錯陷阱',
      prompt: `請判斷下列關於「${unit.title}」的防雷敘述是否正確：`,
      statement: `${trapText}`,
      correctBool: true,
      explanation: `完全正確（⭕）！牢記這條防雷守則就能避開段考常見陷阱。`,
      relatedKp: primaryKp,
      kpId: primaryKp.id,
      kpTitle: primaryKp.title
    });
  }

  // 5. 🎧 語音聽力挑戰 (四選一)
  if (normalizedQs.length > 0) {
    const qListen = pickSpare(1, 2);
    const listenKp = kps[2] || primaryKp;
    exercises.push({
      id: `${unit.id}-ex-listening`,
      type: 'listening',
      typeLabel: '🎧 語音聽力挑戰 (四選一)',
      sourceTag: '🔊 聽題辨析實戰',
      prompt: `請點擊喇叭聆聽題目，選出正確的答案：`,
      audioText: qListen.question,
      audioLang: unit.id.startsWith('eng-') ? 'en-US' : 'zh-TW',
      options: qListen.options,
      correctAnswer: qListen.correctAnswer,
      explanation: qListen.explanation,
      relatedKp: listenKp,
      kpId: listenKp.id,
      kpTitle: listenKp.title
    });
  } else {
    const speechText = unit.id.startsWith('eng-') || unit.id.startsWith('biling-')
      ? (unit.keyConcepts && unit.keyConcepts[0]) || unit.title
      : `${unit.badge || unit.title}：${(unit.keyConcepts && unit.keyConcepts[0]) || ''}`;
    const listenOptions = [
      (unit.keyConcepts && unit.keyConcepts[0]) || unit.badge || unit.title,
      (unit.keyConcepts && unit.keyConcepts[1]) || '忽略題目單位條件',
      (unit.keyConcepts && unit.keyConcepts[2]) || '顛倒先後運算順序',
      '以上皆非'
    ];
    exercises.push({
      id: `${unit.id}-ex-listening`,
      type: 'listening',
      typeLabel: '🎧 語音聽力辨識 (四選一)',
      sourceTag: '🔊 沉浸式語音伴學',
      prompt: `請點擊喇叭按鈕聆聽語音播報，選出你聽到的核心考點內容：`,
      audioText: speechText,
      audioLang: unit.id.startsWith('eng-') ? 'en-US' : 'zh-TW',
      options: deterministicShuffle(listenOptions, `${unit.id}-listen-fb`),
      correctAnswer: listenOptions[0],
      explanation: `聽力正解：「${listenOptions[0]}」。`,
      relatedKp: primaryKp,
      kpId: primaryKp.id,
      kpTitle: primaryKp.title
    });
  }

  // 6. 🎯 經典實戰選擇題 (四選一) — 涵蓋三大版本課本、自修評量與歷屆段考
  if (normalizedQs.length > 0) {
    // 單元全部題目都可進入闖關（基礎、精選、模擬挑戰、延伸應用），由各關卡挑選不重複的題目
    normalizedQs.forEach((q, qIdx) => {
      const assignedKp = kpForQuestion(q, qIdx);
      const newCorrectIndex = q.options.indexOf(q.correctAnswer);
      exercises.push({
        id: `${unit.id}-ex-mcq-${qIdx}`,
        type: 'mcq',
        typeLabel: q.sourceSet === 'expansion' ? '🌱 延伸應用 (四選一)' : `🎯 實戰選擇題 (四選一) #${qIdx + 1}`,
        sourceSet: q.sourceSet,
        sourceTag: qIdx < 3 
          ? '📘 課本基礎題 (四選一)' 
          : qIdx < 7 
          ? '📗 評量進階題 (四選一)' 
          : '📕 段考素養壓軸題 (四選一)',
        prompt: q.question,
        options: q.options,
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        relatedKp: assignedKp,
        kpId: assignedKp.id,
        kpTitle: assignedKp.title
      });
    });
  } else {
    const ans = cleanLatexText((unit.keyConcepts && unit.keyConcepts[0]) || unit.description);
    const rawFallbackOpts = [
      ans,
      '完全不需要理解算理，直接猜測答案',
      '忽略題目單位與條件限制',
      '跳過驗算步驟直接作答'
    ];
    const shuffledFallback = deterministicShuffle(rawFallbackOpts, `${unit.id}-mcq-fb`);
    exercises.push({
      id: `${unit.id}-ex-mcq-fallback`,
      type: 'mcq',
      typeLabel: '🎯 評量實戰選擇題 (四選一)',
      sourceTag: '📗 學習評量必考題 (四選一)',
      prompt: `在「${unit.title}」的段考命題中，下列哪一項是三大版本（康軒/南一/翰林）共同強調的核心考點？`,
      options: shuffledFallback,
      correctIndex: shuffledFallback.indexOf(ans),
      correctAnswer: ans,
      explanation: cleanLatexText(catalog.quickRescue),
      relatedKp: primaryKp,
      kpId: primaryKp.id,
      kpTitle: primaryKp.title
    });
  }

  return exercises;
}

// 取得全站所有科目（8大領域 + 3大擴充專業科目 = 11大領域）
export function getAll108Subjects() {
  const coreIds = ['mandarin', 'math', 'science', 'social', 'english'];
  const baseSubjects = coursesData.subjects.map(s => ({
    ...s,
    category: coreIds.includes(s.id) ? 'basic' : 'specialized'
  }));
  return [...baseSubjects, ...SPECIALIZED_EXTRA_SUBJECTS];
}

// 取得指定科目的所有單元（含 6A / 6B 與完整課本參考書對照）
export function getUnitsBySubject108(subjectId) {
  const rawUnits = coursesData.units[subjectId] || SPECIALIZED_EXTRA_UNITS[subjectId] || [];
  return rawUnits.map((u, idx) => ({
    ...u,
    orderIndex: idx + 1,
    catalog: getUnitCompleteCatalog(u)
  }));
}
