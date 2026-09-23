import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Search, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Filter, 
  Eye, 
  ExternalLink,
  Layers,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

// Format bytes into readable MB
function formatFileSize(bytes) {
  if (!bytes) return '約 1.2 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

// 講義清單資料（內嵌自 manifest 並附帶學科與段考範圍定義）
const HANDOUT_CATALOG = [
  // 數學 (Math)
  {
    id: 'math_6A_midterm',
    subjectId: 'math',
    semester: '6A',
    scope: 'midterm',
    scopeLabel: '6上 期中考講義',
    title: '國小六年級上學期【期中考重點講義】質因數分解・分數除法・小數除法',
    units: ['質因數分解與最大公因數', '分數除法與倒數運算', '小數除法與餘數判定'],
    pdfFileName: 'math_6A_midterm.pdf',
    size: '1.2 MB',
    badge: '期中精華'
  },
  {
    id: 'math_6A_final',
    subjectId: 'math',
    semester: '6A',
    scope: 'final',
    scopeLabel: '6上 期末考講義',
    title: '國小六年級上學期【期末考衝刺講義】比與比值・圓周長與圓面積・線對稱圖形',
    units: ['比與比值與正比圖形', '圓周長與圓面積計算', '線對稱圖形與對稱軸'],
    pdfFileName: 'math_6A_final.pdf',
    size: '1.1 MB',
    badge: '期末必備'
  },
  {
    id: 'math_6A_all',
    subjectId: 'math',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 全冊完整講義',
    title: '國小六年級上學期【數學第一學期全冊講義】六大單元觀念與公式精華',
    units: ['質因數分解', '分數除法', '小數除法', '比與比值', '圓周長與面積', '線對稱圖形'],
    pdfFileName: 'math_6A_all.pdf',
    size: '1.4 MB',
    badge: '全冊合輯'
  },
  {
    id: 'math_6B_midterm',
    subjectId: 'math',
    semester: '6B',
    scope: 'midterm',
    scopeLabel: '6下 期中考講義',
    title: '國小六年級下學期【期中考重點講義】分數小數四則混合・柱體體積表面積・速率',
    units: ['分數與小數的四則運算', '角柱圓柱體積與表面積', '速率公式與單位換算'],
    pdfFileName: 'math_6B_midterm.pdf',
    size: '1.2 MB',
    badge: '期中精華'
  },
  {
    id: 'math_6B_final',
    subjectId: 'math',
    semester: '6B',
    scope: 'final',
    scopeLabel: '6下 畢業考衝刺',
    title: '國小六年級下學期【畢業考與先修講義】基準量與比較量・規律問題・統計圖表',
    units: ['基準量與比較量', '規律問題與簡化運算', '圓形圖與圓心角統計'],
    pdfFileName: 'math_6B_final.pdf',
    size: '1.2 MB',
    badge: '畢業考衝刺'
  },
  {
    id: 'math_6B_all',
    subjectId: 'math',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 全冊完整講義',
    title: '國小六年級下學期【數學第二學期全冊講義】國中銜接大複習總整理',
    units: ['四則混合', '柱體體積', '速率應用', '基準量比較量', '數學規律', '圓形圖表'],
    pdfFileName: 'math_6B_all.pdf',
    size: '1.4 MB',
    badge: '全冊合輯'
  },

  // 國語 (Mandarin)
  {
    id: 'mandarin_6A_midterm',
    subjectId: 'mandarin',
    semester: '6A',
    scope: 'midterm',
    scopeLabel: '6上 期中考講義',
    title: '國小六年級上學期【國語期中考講義】修辭辨析・成語典故・寫作手法',
    units: ['借景抒情與記敘文結構', '常見成語辨析與字詞形音義', '譬喻、排比、映襯修辭'],
    pdfFileName: 'mandarin_6A_midterm.pdf',
    size: '1.2 MB',
    badge: '期中精華'
  },
  {
    id: 'mandarin_6A_final',
    subjectId: 'mandarin',
    semester: '6A',
    scope: 'final',
    scopeLabel: '6上 期末考講義',
    title: '國小六年級上學期【國語期末考講義】議論文三要素・詩歌賞析・閱讀理解',
    units: ['議論文論點論據論證', '現代詩與古典詩歌格律', '文意推論與閱讀素養長文'],
    pdfFileName: 'mandarin_6A_final.pdf',
    size: '1.3 MB',
    badge: '期末必備'
  },
  {
    id: 'mandarin_6A_all',
    subjectId: 'mandarin',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 全冊完整講義',
    title: '國小六年級上學期【國語第一學期完整手冊】全課重點成語語法詞庫',
    units: ['全冊1~12課精讀課文', '形音義辨正表', '修辭全攻略', '名家閱讀技巧'],
    pdfFileName: 'mandarin_6A_all.pdf',
    size: '1.6 MB',
    badge: '全冊合輯'
  },
  {
    id: 'mandarin_6B_midterm',
    subjectId: 'mandarin',
    semester: '6B',
    scope: 'midterm',
    scopeLabel: '6下 期中考講義',
    title: '國小六年級下學期【國語期中考講義】人物傳記・自述抒情・思辨論證',
    units: ['人物描摹與神態刻劃', '多重視角記敘與心理活動', '文言基礎常見虛詞'],
    pdfFileName: 'mandarin_6B_midterm.pdf',
    size: '1.3 MB',
    badge: '期中精華'
  },
  {
    id: 'mandarin_6B_final',
    subjectId: 'mandarin',
    semester: '6B',
    scope: 'final',
    scopeLabel: '6下 畢業考衝刺',
    title: '國小六年級下學期【國語畢業考與銜接講義】六書造字法則・國中文言先修',
    units: ['象形指事會意形聲六書', '畢業贈言與感恩書信', '國中文言白話對照篇章'],
    pdfFileName: 'mandarin_6B_final.pdf',
    size: '1.2 MB',
    badge: '畢業考衝刺'
  },
  {
    id: 'mandarin_6B_all',
    subjectId: 'mandarin',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 全冊完整講義',
    title: '國小六年級下學期【國語第二學期完整手冊】小六畢業大成總複習',
    units: ['課文核心重點', '成語辨析大全', '國中文言基礎詞彙', '寫作升級架構'],
    pdfFileName: 'mandarin_6B_all.pdf',
    size: '1.5 MB',
    badge: '全冊合輯'
  },

  // 自然科學 (Science)
  {
    id: 'science_6A_midterm',
    subjectId: 'science',
    semester: '6A',
    scope: 'midterm',
    scopeLabel: '6上 期中考講義',
    title: '國小六年級上學期【自然期中考講義】天氣變化・颱風豪雨・地表地貌',
    units: ['水的三態與氣溫濕度', '鋒面高低氣壓與颱風路徑', '流水侵蝕搬運堆積作用'],
    pdfFileName: 'science_6A_midterm.pdf',
    size: '1.4 MB',
    badge: '期中精華'
  },
  {
    id: 'science_6A_final',
    subjectId: 'science',
    semester: '6A',
    scope: 'final',
    scopeLabel: '6上 期末考講義',
    title: '國小六年級上學期【自然期末考講義】電磁鐵效應・力與運動・指北針磁場',
    units: ['安培右手定則與電磁線圈', '摩擦力浮力與重力平衡', '馬達運轉原理與應用'],
    pdfFileName: 'science_6A_final.pdf',
    size: '1.3 MB',
    badge: '期末必備'
  },
  {
    id: 'science_6A_all',
    subjectId: 'science',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 全冊完整講義',
    title: '國小六年級上學期【自然第一學期完整講義】氣象、地科與電磁學大彙整',
    units: ['天氣與大氣', '地貌與岩石土壤', '力與運動平衡', '電磁鐵應用'],
    pdfFileName: 'science_6A_all.pdf',
    size: '1.7 MB',
    badge: '全冊合輯'
  },
  {
    id: 'science_6B_midterm',
    subjectId: 'science',
    semester: '6B',
    scope: 'midterm',
    scopeLabel: '6下 期中考講義',
    title: '國小六年級下學期【自然期中考講義】簡單機械・槓桿滑輪輪軸齒輪・化學酸鹼',
    units: ['支點施力點抗力點三類槓桿', '動滑輪定滑輪與滑輪組', '水溶液酸鹼性石蕊廣用試紙'],
    pdfFileName: 'science_6B_midterm.pdf',
    size: '1.5 MB',
    badge: '期中精華'
  },
  {
    id: 'science_6B_final',
    subjectId: 'science',
    semester: '6B',
    scope: 'final',
    scopeLabel: '6下 畢業考衝刺',
    title: '國小六年級下學期【自然畢業考講義】生態系平衡・食物鏈食物網・環境保育',
    units: ['生產者消費者分解者關係', '生物多樣性與外來種衝擊', '再生能源與碳足跡永續發展'],
    pdfFileName: 'science_6B_final.pdf',
    size: '1.3 MB',
    badge: '畢業考衝刺'
  },
  {
    id: 'science_6B_all',
    subjectId: 'science',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 全冊完整講義',
    title: '國小六年級下學期【自然第二學期完整講義】機械力學、水溶液與生態環境大集成',
    units: ['簡單機械總整理', '酸鹼鹽與電解質', '臺灣生態系與環境', '國中理化銜接'],
    pdfFileName: 'science_6B_all.pdf',
    size: '1.7 MB',
    badge: '全冊合輯'
  },

  // 社會 (Social Studies)
  {
    id: 'social_6A_midterm',
    subjectId: 'social',
    semester: '6A',
    scope: 'midterm',
    scopeLabel: '6上 期中考講義',
    title: '國小六年級上學期【社會期中考講義】中華民國憲法與政府組織・民主法治人權',
    units: ['憲法保障之基本權利與義務', '中央政府五院職權與分立', '地方自治與公民參與選舉'],
    pdfFileName: 'social_6A_midterm.pdf',
    size: '1.3 MB',
    badge: '期中精華'
  },
  {
    id: 'social_6A_final',
    subjectId: 'social',
    semester: '6A',
    scope: 'final',
    scopeLabel: '6上 期末考講義',
    title: '國小六年級上學期【社會期末考講義】臺灣經濟發展奇蹟・產業轉型與國際貿易',
    units: ['農業到輕工業與高科技半導體', '進出口貿易與比較利益法則', '市場供求定律與消費者權益'],
    pdfFileName: 'social_6A_final.pdf',
    size: '1.2 MB',
    badge: '期末必備'
  },
  {
    id: 'social_6A_all',
    subjectId: 'social',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 全冊完整講義',
    title: '國小六年級上學期【社會第一學期完整講義】憲法政治、民主社會與臺灣經濟全圖解',
    units: ['民主政體與五院', '法律常識日常應用', '臺灣現代經濟奇蹟', '全球貿易組織'],
    pdfFileName: 'social_6A_all.pdf',
    size: '1.5 MB',
    badge: '全冊合輯'
  },
  {
    id: 'social_6B_midterm',
    subjectId: 'social',
    semester: '6B',
    scope: 'midterm',
    scopeLabel: '6下 期中考講義',
    title: '國小六年級下學期【社會期中考講義】地球村與全球議題・人口氣候與糧食危機',
    units: ['全球化縮小世界距離與跨國物流', '溫室效應與極端氣候協議', '國際非政府組織 (NGO) 援助'],
    pdfFileName: 'social_6B_midterm.pdf',
    size: '1.3 MB',
    badge: '期中精華'
  },
  {
    id: 'social_6B_final',
    subjectId: 'social',
    semester: '6B',
    scope: 'final',
    scopeLabel: '6下 畢業考衝刺',
    title: '國小六年級下學期【社會畢業考講義】聯合國 SDGs 永續發展・世界遺產與地球公民',
    units: ['SDGs 17項核心永續指標', '世界文化與自然遺產保護', '世界公民參與與和平行動'],
    pdfFileName: 'social_6B_final.pdf',
    size: '1.3 MB',
    badge: '畢業考衝刺'
  },
  {
    id: 'social_6B_all',
    subjectId: 'social',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 全冊完整講義',
    title: '國小六年級下學期【社會第二學期完整講義】全球化與世界公民完整宏觀地圖',
    units: ['全球化浪潮', '國際組織與爭端', 'SDGs永續指標', '世界公民實踐'],
    pdfFileName: 'social_6B_all.pdf',
    size: '1.6 MB',
    badge: '全冊合輯'
  },

  // 英語 (English)
  {
    id: 'english_6A_midterm',
    subjectId: 'english',
    semester: '6A',
    scope: 'midterm',
    scopeLabel: '6上 期中考講義',
    title: '國小六年級上學期【英語期中考講義】過去式動詞 (Past Tense)・生活日常句型',
    units: ['規則與不規則過去式動詞變化', '問句 Did you...? 與回答', '時間副詞 yesterday, last night'],
    pdfFileName: 'english_6A_midterm.pdf',
    size: '1.0 MB',
    badge: '期中精華'
  },
  {
    id: 'english_6A_final',
    subjectId: 'english',
    semester: '6A',
    scope: 'final',
    scopeLabel: '6上 期末考講義',
    title: '國小六年級上學期【英語期末考講義】未來式 (Future Tense)・問路方向與介系詞',
    units: ['will 與 be going to 表達未來', '問路 Excuse me, where is...?', '方位介系詞 next to, opposite'],
    pdfFileName: 'english_6A_final.pdf',
    size: '0.9 MB',
    badge: '期末必備'
  },
  {
    id: 'english_6A_all',
    subjectId: 'english',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 全冊完整講義',
    title: '國小六年級上學期【英語第一學期完整手冊】時態語法大統整與日常對話',
    units: ['過去式大集合', '未來式計畫表達', '問路與生活對話', 'GEPT 初級單字表'],
    pdfFileName: 'english_6A_all.pdf',
    size: '1.1 MB',
    badge: '全冊合輯'
  },
  {
    id: 'english_6B_midterm',
    subjectId: 'english',
    semester: '6B',
    scope: 'midterm',
    scopeLabel: '6下 期中考講義',
    title: '國小六年級下學期【英語期中考講義】比較級與最高級 (Comparative & Superlative)',
    units: ['-er, -est 與 more, most 規則', 'as...as 對等比較句型', '生活實物比較對話'],
    pdfFileName: 'english_6B_midterm.pdf',
    size: '1.0 MB',
    badge: '期中精華'
  },
  {
    id: 'english_6B_final',
    subjectId: 'english',
    semester: '6B',
    scope: 'final',
    scopeLabel: '6下 畢業考衝刺',
    title: '國小六年級下學期【英語畢業考與銜接講義】國中基本 1200 單字與 GEPT 先修',
    units: ['情態助動詞 can, should, must', '閱讀短文解題技巧', '國中英語銜接核心文法'],
    pdfFileName: 'english_6B_final.pdf',
    size: '1.0 MB',
    badge: '畢業考衝刺'
  },
  {
    id: 'english_6B_all',
    subjectId: 'english',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 全冊完整講義',
    title: '國小六年級下學期【英語第二學期完整手冊】小六全英語能力躍升總整理',
    units: ['比較級最高級大全', '助動詞核心用法', 'GEPT聽力朗讀範本', '國中句型搶先看'],
    pdfFileName: 'english_6B_all.pdf',
    size: '1.1 MB',
    badge: '全冊合輯'
  },

  // 藝術 (Arts)
  {
    id: 'arts_6A_all',
    subjectId: 'arts',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 藝術講義',
    title: '國小六年級上學期【藝術全冊名師講義】色彩學・透視法・臺灣名畫家與交響樂團',
    units: ['十二色相環與冷暖對比', '單點透視與立體素描', '臺灣鄉土前輩畫家與樂器編制'],
    pdfFileName: 'arts_6A_all.pdf',
    size: '1.4 MB',
    badge: '美育精選'
  },
  {
    id: 'arts_6B_all',
    subjectId: 'arts',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 藝術講義',
    title: '國小六年級下學期【藝術全冊名師講義】現代藝術流派・傳統偶戲・數位多媒體創作',
    units: ['印象派立體派表現派賞析', '布袋戲與皮影戲傳統工藝', '定格動畫與數位影像美學'],
    pdfFileName: 'arts_6B_all.pdf',
    size: '1.4 MB',
    badge: '美育精選'
  },

  // 健康與體育 (Health & PE)
  {
    id: 'health_pe_6A_all',
    subjectId: 'health_pe',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 健體講義',
    title: '國小六年級上學期【健體全冊講義】青春期身心變化・營養熱量平衡・運動安全運動傷害急救',
    units: ['青春期生長激素與第二性徵', '食品標示讀取與三大營養素', 'PRICE 運動傷害應急原則'],
    pdfFileName: 'health_pe_6A_all.pdf',
    size: '1.5 MB',
    badge: '健康必懂'
  },
  {
    id: 'health_pe_6B_all',
    subjectId: 'health_pe',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 健體講義',
    title: '國小六年級下學期【健體全冊講義】CPR+AED急救口訣・水域防溺自救・終身運動處方',
    units: ['叫叫壓電標準 CPR+AED 流程', '防溺十招與水中水母漂自救', '心肺適能目標心率計算'],
    pdfFileName: 'health_pe_6B_all.pdf',
    size: '1.5 MB',
    badge: '急救必修'
  },

  // 綜合活動 (Integrative)
  {
    id: 'integrative_6A_all',
    subjectId: 'integrative',
    semester: '6A',
    scope: 'all',
    scopeLabel: '6上 綜合講義',
    title: '國小六年級上學期【綜合活動講義】團隊領導合作・專案籌備執行・情緒壓力管理',
    units: ['溝通協調傾聽與團隊共識', '六年級校慶畢業活動企劃', '情緒ABC理論與正面調適'],
    pdfFileName: 'integrative_6A_all.pdf',
    size: '1.5 MB',
    badge: '素養必備'
  },
  {
    id: 'integrative_6B_all',
    subjectId: 'integrative',
    semester: '6B',
    scope: 'all',
    scopeLabel: '6下 綜合講義',
    title: '國小六年級下學期【綜合活動講義】國中生活適應・時間管理四象限・生涯自我探索',
    units: ['小六升國七心態調適與課表', '時間管理四象限輕重緩急', '多元智能與未來生涯志向探索'],
    pdfFileName: 'integrative_6B_all.pdf',
    size: '1.4 MB',
    badge: '升學銜接'
  }
];

const LectureNotesDownloadHub = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedScope, setSelectedScope] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 取得基礎路徑，確保 GitHub Pages 上的絕對路徑正確
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;

  // 學科標籤清單
  const subjectFilters = [
    { id: 'all', name: '全部八科', emoji: '📚', color: 'var(--accent-primary)' },
    { id: 'math', name: '數學', emoji: '📐', color: '#2563eb' },
    { id: 'mandarin', name: '國語', emoji: '📖', color: '#dc2626' },
    { id: 'science', name: '自然', emoji: '🔬', color: '#059669' },
    { id: 'social', name: '社會', emoji: '🌏', color: '#d97706' },
    { id: 'english', name: '英語', emoji: '🔤', color: '#7c3aed' },
    { id: 'arts', name: '藝術', emoji: '🎨', color: '#ec4899' },
    { id: 'health_pe', name: '健體', emoji: '🏃', color: '#ea580c' },
    { id: 'integrative', name: '綜合', emoji: '🌱', color: '#0d9488' }
  ];

  // 段考範圍標籤
  const scopeFilters = [
    { id: 'all', label: '全部範圍 (全部 57 份)' },
    { id: 'midterm', label: '🌸 期中考衝刺' },
    { id: 'final', label: '🎯 期末 / 畢業考' },
    { id: '6A', label: '📘 6上全系列' },
    { id: '6B', label: '📗 6下全系列' }
  ];

  // 篩選後之講義清單
  const filteredHandouts = useMemo(() => {
    return HANDOUT_CATALOG.filter(item => {
      // 學科篩選
      if (selectedSubject !== 'all' && item.subjectId !== selectedSubject) {
        return false;
      }

      // 段考與學期篩選
      if (selectedScope === 'midterm' && item.scope !== 'midterm') return false;
      if (selectedScope === 'final' && item.scope !== 'final') return false;
      if (selectedScope === '6A' && item.semester !== '6A') return false;
      if (selectedScope === '6B' && item.semester !== '6B') return false;

      // 關鍵字搜尋
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inUnits = item.units.some(u => u.toLowerCase().includes(q));
        const inScope = item.scopeLabel.toLowerCase().includes(q);
        const inSubject = (coursesData.subjects.find(s => s.id === item.subjectId)?.name || '').toLowerCase().includes(q);
        return inTitle || inUnits || inScope || inSubject;
      }

      return true;
    });
  }, [selectedSubject, selectedScope, searchQuery]);

  return (
    <section 
      id="lecture-notes-hub"
      className="card animate-fade-in"
      style={{
        padding: '28px 24px',
        borderRadius: '24px',
        backgroundColor: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-light)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Accent Deco */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span 
              className="badge" 
              style={{ 
                backgroundColor: 'rgba(99, 102, 241, 0.12)', 
                color: '#6366f1', 
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              📥 全國首創・108 課綱六年級專屬講義庫
            </span>
            <span className="badge badge-success text-[11px] font-bold">
              ✅ 57 份實體 A4 排版 PDF 自由下載列印
            </span>
          </div>
          <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.45rem * var(--font-scale))', letterSpacing: '-0.02em' }}>
            📑 各科目章節講義與考前手冊快速下載中心
          </h2>
          <p className="text-secondary text-xs sm:text-sm mt-1 mb-0" style={{ lineHeight: 1.6 }}>
            名師考前大統整、解題核心公式口訣、易錯防雷陷阱與必備檢核清單。提供「線上互動圖解筆記」與「實體 A4 PDF」一鍵直接下載！
          </p>
        </div>

        {/* Global Stats Counter */}
        <div 
          className="flex items-center gap-3 p-2.5 rounded-xl border flex-shrink-0"
          style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-light)' }}
        >
          <div className="text-center px-2">
            <div className="text-xs text-secondary font-bold">全科講義總量</div>
            <div className="text-lg font-black text-primary">57 <span className="text-xs font-normal">份</span></div>
          </div>
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-light)' }} />
          <div className="text-center px-2">
            <div className="text-xs text-secondary font-bold">目前顯示</div>
            <div className="text-lg font-black" style={{ color: '#6366f1' }}>
              {filteredHandouts.length} <span className="text-xs font-normal">份</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Filter Bar */}
      <div className="flex flex-col gap-3.5 mb-6">
        {/* Search Input Box */}
        <div className="relative">
          <Search 
            size={18} 
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 快速搜尋講義與章節重點：如「分數除法」、「圓面積」、「電磁鐵」、「SDGs」、「過去式」..."
            className="input w-full pl-10 pr-4 py-2.5 text-sm"
            style={{
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-primary)',
              border: '1.5px solid var(--border-light)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-secondary hover:text-primary font-bold"
            >
              清除
            </button>
          )}
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          {subjectFilters.map(sf => {
            const isSelected = selectedSubject === sf.id;
            return (
              <button
                key={sf.id}
                onClick={() => {
                  setSelectedSubject(sf.id);
                  triggerHaptic('selection');
                  playSound('ios_tap');
                }}
                className={`ios-pressable flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 ${
                  isSelected ? 'shadow-sm' : ''
                }`}
                style={{
                  backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-primary)',
                  color: isSelected ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid transparent' : '1px solid var(--border-light)'
                }}
              >
                <span>{sf.emoji}</span>
                <span>{sf.name}</span>
              </button>
            );
          })}
        </div>

        {/* Semester & Scope Secondary Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-xs text-secondary font-bold flex items-center gap-1 mr-1 flex-shrink-0">
            <Filter size={12} /> 範圍：
          </span>
          {scopeFilters.map(sc => {
            const isSelected = selectedScope === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScope(sc.id);
                  triggerHaptic('selection');
                  playSound('ios_tap');
                }}
                className={`ios-pressable px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex-shrink-0 ${
                  isSelected ? 'font-bold' : ''
                }`}
                style={{
                  backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  color: isSelected ? '#6366f1' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
                }}
              >
                {sc.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Handouts Grid */}
      {filteredHandouts.length === 0 ? (
        <div className="py-12 text-center text-secondary">
          <div style={{ fontSize: '2.5rem' }}>🔍</div>
          <p className="font-bold text-base mt-2">找不到符合「{searchQuery}」條件的講義</p>
          <p className="text-xs mt-1">請嘗試縮減關鍵字，或切換其他學科分類篩選！</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
              setSelectedScope('all');
            }}
            className="btn-outline text-xs mt-3"
          >
            重置全部篩選
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '16px'
          }}
        >
          {filteredHandouts.map((item) => {
            const subjectMeta = coursesData.subjects.find(s => s.id === item.subjectId) || coursesData.subjects[0];
            const pdfDownloadUrl = `${baseUrl}downloads/pdf/${item.pdfFileName}`;
            const onlineViewUrl = `/exam-notes/${item.subjectId}/${item.semester}/${item.scope}`;

            return (
              <div
                key={item.id}
                className="ios-glass-card flex flex-col justify-between p-4 transition-all hover:translate-y-[-2px]"
                style={{
                  borderRadius: '18px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1.2px solid var(--border-light)',
                  borderTop: `4px solid ${subjectMeta.color}`,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  {/* Card Header: Subject Tag + Scope Badge + File Size */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="badge text-[11px] font-black"
                        style={{
                          backgroundColor: `${subjectMeta.color}15`,
                          color: subjectMeta.color,
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 8px'
                        }}
                      >
                        {subjectMeta.emoji} {subjectMeta.name}
                      </span>
                      <span className="badge badge-accent text-[11px] font-bold">
                        {item.scopeLabel}
                      </span>
                    </div>
                    <span className="text-[11px] text-secondary font-mono font-bold">
                      📦 {item.size}
                    </span>
                  </div>

                  {/* Handout Title */}
                  <h3
                    className="font-extrabold text-sm mb-2"
                    style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}
                  >
                    {item.title}
                  </h3>

                  {/* Chapter Coverage Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.units.map((unitTitle, uidx) => (
                      <span
                        key={uidx}
                        className="text-[10.5px] px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        ✓ {unitTitle}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (雙按鈕：線上預覽閱讀 + 直接下載 PDF) */}
                <div 
                  className="flex items-center gap-2 pt-3 border-t mt-auto"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  {/* 線上閱讀 */}
                  <Link
                    to={onlineViewUrl}
                    onClick={() => {
                      triggerHaptic('light');
                      playSound('ios_tap');
                    }}
                    className="ios-pressable btn-outline flex-1 flex items-center justify-center gap-1 text-xs font-bold py-2 px-2.5 text-center"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <BookOpen size={13} />
                    <span>線上圖解筆記</span>
                  </Link>

                  {/* 下載 PDF */}
                  <a
                    href={pdfDownloadUrl}
                    download={item.pdfFileName}
                    onClick={() => {
                      triggerHaptic('medium');
                      playSound('success');
                    }}
                    className="ios-pressable btn-primary flex-1 flex items-center justify-center gap-1 text-xs font-black py-2 px-2.5 text-center"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#6366f1',
                      borderColor: '#6366f1',
                      color: '#ffffff',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.35)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Download size={13} />
                    <span>下載 A4 PDF</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer Quick Banner */}
      <div 
        className="mt-6 p-4 rounded-xl flex items-center justify-between flex-wrap gap-3"
        style={{
          backgroundColor: 'var(--bg-primary)',
          border: '1px dashed var(--border-light)'
        }}
      >
        <div className="flex items-center gap-2 text-xs text-secondary">
          <span>💡 <strong>家長與老師列印小提醒</strong>：所有 PDF 講義皆已預設 A4 雙面無損排版與答題空格，支援家用印表機直接彩色列印！</span>
        </div>
        <Link
          to="/exam-notes"
          className="text-xs font-bold flex items-center gap-1 text-primary hover:underline ml-auto"
        >
          <span>前往專題大複習完整導航</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
};

export default LectureNotesDownloadHub;
