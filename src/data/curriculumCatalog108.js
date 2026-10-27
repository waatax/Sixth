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
// 為每一個單元生成 6 種 Duolingo 經典互動微練習：
// 1. word_bank (字塊/公式拼圖)
// 2. matching (配對消消樂)
// 3. cloze (核心觀念填空)
// 4. true_false (迷思是非快判)
// 5. listening (語音聽力辨識)
// 6. mcq (參考書壓軸實戰選答)

export function generateDuolingoExercisesForUnit(unit, quizQuestions = [], knowledgePoints = []) {
  const catalog = getUnitCompleteCatalog(unit);
  const exercises = [];
  const kps = knowledgePoints.filter(k => k.unitId === unit.id);
  const primaryKp = kps[0] || {
    title: unit.badge || unit.title,
    definition: unit.description,
    formulaOrRule: catalog.quickRescue,
    trapAlert: catalog.referenceBooks.examTrap,
    strategyTip: catalog.textbooks.kangHsuan.focus
  };

  // 1. 🧩 字塊/公式拼圖 (Word / Formula Tile Bank)
  const rescueClean = (primaryKp.formulaOrRule || catalog.quickRescue || unit.description)
    .replace(/\$/g, '')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/[！!。]/g, '')
    .split(/[；;，,]/)[0]
    .trim();

  // 將句子切分為 4~6 個有意義的語塊
  let chunks = [];
  if (rescueClean.includes(' ')) {
    const words = rescueClean.split(/\s+/).filter(Boolean);
    if (words.length >= 3 && words.length <= 8) {
      chunks = words;
    }
  }
  if (chunks.length === 0) {
    const len = rescueClean.length;
    const step = Math.max(2, Math.ceil(len / 4));
    for (let i = 0; i < len; i += step) {
      chunks.push(rescueClean.slice(i, i + step));
    }
  }
  const distractors = ['忽略單位', '直接相加', '顛倒順序'].filter(d => !chunks.includes(d)).slice(0, 2);

  exercises.push({
    id: `${unit.id}-ex-wordbank`,
    type: 'word_bank',
    typeLabel: '🧩 觀念字塊拼圖',
    sourceTag: '📘 各版本自修核心口訣',
    prompt: `請依序點擊下方字塊，拼出「${unit.badge || unit.title}」的黃金秒殺心法：`,
    targetHint: `提示：共有 ${chunks.length} 個核心語塊，注意先後邏輯順序！`,
    correctOrder: chunks,
    allTiles: [...chunks, ...distractors].map((text, idx) => ({ id: `tile-${idx}-${text}`, text })),
    explanation: `完整心法：「${chunks.join('')}」。熟記此口訣可於段考 5 秒內破題！`
  });

  // 2. 🔗 配對消消樂 (Tap Matching Pairs)
  const pairs = [];
  if (kps.length >= 2) {
    kps.slice(0, 3).forEach((kp, idx) => {
      const shortTitle = kp.title.replace(/^[^：:]+[：:]/, '').slice(0, 14);
      const shortRule = (kp.formulaOrRule || kp.definition)
        .replace(/\$/g, '')
        .replace(/\\times/g, '×')
        .replace(/\\div/g, '÷')
        .split(/[；。！]/)[0]
        .slice(0, 22);
      pairs.push({ id: `pair-kp-${idx}`, left: shortTitle, right: shortRule });
    });
  }
  while (pairs.length < 4) {
    const idx = pairs.length;
    const concept = (unit.keyConcepts && unit.keyConcepts[idx]) || `核心重點 ${idx + 1}`;
    const matchDesc = idx === 0
      ? '康軒版生活素養必考焦點'
      : idx === 1
      ? '南一版算理與定義本質'
      : idx === 2
      ? '翰林版圖表與結構推導'
      : '段考滿分必備檢核關鍵';
    pairs.push({ id: `pair-kc-${idx}`, left: concept.slice(0, 15), right: matchDesc });
  }

  exercises.push({
    id: `${unit.id}-ex-matching`,
    type: 'matching',
    typeLabel: '🔗 觀念配對消消樂',
    sourceTag: '📗 三大版本與參考書對照',
    prompt: `請將左側的「核心概念」與右側對應的「關鍵定義或版本特色」配對消除：`,
    pairs: pairs.slice(0, 4),
    explanation: `恭喜全部配對成功！融會貫通各概念的對應關係，遇到綜合題也能輕鬆秒殺。`
  });

  // 3. ✍️ 核心觀念填空挑戰 (Interactive Cloze)
  const keyTerm = (unit.keyConcepts && unit.keyConcepts[0]) || unit.badge || '核心規則';
  const wrongTerms = [
    (unit.keyConcepts && unit.keyConcepts[1]) ? `忽略${unit.keyConcepts[1].slice(0, 6)}` : '隨意估計數值',
    '不考慮單位與前提條件',
    '顛倒因果與先後順序'
  ];
  exercises.push({
    id: `${unit.id}-ex-cloze`,
    type: 'cloze',
    typeLabel: '✍️ 參考書重點填空',
    sourceTag: '📙 麻辣/滿分講義精選',
    prompt: `完成下列《名師講義》重點摘要填空：`,
    sentenceBefore: `在攻克「${unit.title}」時，最關鍵的第一步是精準掌握【`,
    sentenceAfter: `】，並結合「${catalog.quickRescue.replace(/\$/g, '').slice(0, 28)}...」進行驗算。`,
    options: [keyTerm, ...wrongTerms],
    correctAnswer: keyTerm,
    explanation: `正解為「${keyTerm}」！這是康軒、南一、翰林三大版本共同列為第一優先的核心指標。`
  });

  // 4. ⚡ 迷思是非快判 (True/False Misconception Blitz)
  const trapText = (primaryKp.trapAlert || catalog.referenceBooks.examTrap).replace(/⚠️/g, '').trim();
  exercises.push({
    id: `${unit.id}-ex-tf`,
    type: 'true_false',
    typeLabel: '⚡ 段考防雷是非快判',
    sourceTag: '📕 學習評量易錯陷阱',
    prompt: `請判斷下列關於「${unit.title}」的防雷敘述是否正確：`,
    statement: `【名師防雷守則】${trapText}`,
    correctBool: true,
    explanation: `完全正確（⭕）！這正是各校段考最常設計的陷阱題防禦心法，牢記就能保住關鍵分數！`
  });

  // 5. 🎧 語音聽力與記憶辨識 (Audio Listening Challenge)
  const speechText = unit.id.startsWith('eng-') || unit.id.startsWith('biling-')
    ? (unit.keyConcepts && unit.keyConcepts[0]) || unit.title
    : `${unit.badge || unit.title}：${(unit.keyConcepts && unit.keyConcepts[0]) || ''}`;
  const listenOptions = [
    (unit.keyConcepts && unit.keyConcepts[0]) || unit.badge || unit.title,
    (unit.keyConcepts && unit.keyConcepts[1]) || '無關的干擾選項 A',
    (unit.keyConcepts && unit.keyConcepts[2]) || '無關的干擾選項 B',
    '以上皆非'
  ];
  exercises.push({
    id: `${unit.id}-ex-listening`,
    type: 'listening',
    typeLabel: '🎧 雙語/語音聽力辨識',
    sourceTag: '🔊 沉浸式語音伴學',
    prompt: `請點擊喇叭按鈕聆聽語音播報，選出你聽到的核心考點內容：`,
    audioText: speechText,
    audioLang: unit.id.startsWith('eng-') ? 'en-US' : 'zh-TW',
    options: listenOptions,
    correctAnswer: listenOptions[0],
    explanation: `聽力正解：「${listenOptions[0]}」。結合聽覺與視覺雙重記憶，學習效率提升 200%！`
  });

  // 6. 🎯 經典參考書壓軸選答 (Reference Book Challenge MCQ - 取自真實題庫)
  if (quizQuestions && quizQuestions.length > 0) {
    quizQuestions.slice(0, 3).forEach((q, qIdx) => {
      exercises.push({
        id: `${unit.id}-ex-mcq-${qIdx}`,
        type: 'mcq',
        typeLabel: `🎯 評量實戰選答 #${qIdx + 1}`,
        sourceTag: qIdx === 0 ? '📘 課堂自修基礎題' : qIdx === 1 ? '📗 學習評量進階題' : '📕 段考壓軸素養題',
        prompt: q.question,
        options: q.options,
        correctIndex: q.answer,
        correctAnswer: q.options[q.answer],
        explanation: q.explanation || catalog.quickRescue
      });
    });
  } else {
    exercises.push({
      id: `${unit.id}-ex-mcq-fallback`,
      type: 'mcq',
      typeLabel: '🎯 評量實戰選答',
      sourceTag: '📗 學習評量必考題',
      prompt: `在「${unit.title}」的段考命題中，下列哪一項是三大版本（康軒/南一/翰林）共同強調的核心考點？`,
      options: [
        (unit.keyConcepts && unit.keyConcepts[0]) || unit.description,
        '完全不需要理解算理，直接猜測答案',
        '忽略題目單位與條件限制',
        '跳過驗算步驟直接作答'
      ],
      correctIndex: 0,
      correctAnswer: (unit.keyConcepts && unit.keyConcepts[0]) || unit.description,
      explanation: catalog.quickRescue
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
