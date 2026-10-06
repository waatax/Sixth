import { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  FileText, 
  FlaskConical, 
  CheckCircle2, 
  Flame, 
  Compass, 
  GraduationCap, 
  Clock, 
  Filter,
  Layers,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { interactiveLabsList } from '../../data/interactiveLabsData';
import SubjectIconBadge from '../common/SubjectIconBadge';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

// 8 大好奇心與興趣主題專題軌道 (Thematic Curiosity Tracks)
const THEMATIC_TRACKS = [
  { id: 'all', label: '🌟 全部主題', short: '全部', color: 'var(--accent-primary)', desc: '探索國小六年級 8 大領域 64 課完整知識庫' },
  { id: 'math-logic', label: '🧮 數理空間與邏輯', short: '數理邏輯', color: 'hsl(215, 85%, 52%)', desc: '幾何圖形、圓面積、比例尺、速率追趕與代數方程' },
  { id: 'science-inquiry', label: '🔬 科學探究與動手做', short: '科學實驗', color: 'hsl(152, 70%, 42%)', desc: '槓桿天平、水溶液酸鹼、電磁鐵與大氣天氣模擬' },
  { id: 'mandarin-lit', label: '📜 文學修辭與古典讀寫', short: '文學讀寫', color: 'hsl(25, 90%, 52%)', desc: '閱讀解碼、高分寫作、修辭魔法與古典寓言古文' },
  { id: 'social-civic', label: '🌍 公民視野與永續地球', short: '社會永續', color: 'hsl(275, 75%, 55%)', desc: '臺灣民主發展、經濟轉型、多元文化與 SDGs 倡議' },
  { id: 'english-bilingual', label: '🇬🇧 雙語生活與英檢實戰', short: '雙語會話', color: 'hsl(192, 88%, 45%)', desc: '生活情境對話、過去式歷險、問路與 GEPT 核心字彙' },
  { id: 'prep-bridge', label: '🎒 國中會考先修橋樑', short: '國中先修', color: 'hsl(280, 80%, 60%)', desc: '七年級負數數線、一元一次方程式與理化先備' },
  { id: 'arts-health', label: '🎨 美感生活與身心成長', short: '美感健體', color: 'hsl(340, 82%, 58%)', desc: '色彩構圖、民謠偶戲、青春期身心、急救CPR與自律' },
];

// 熱門高頻點擊探索標籤 (Instant Topic Chips)
const HOT_TOPIC_CHIPS = [
  { label: '圓面積與圓周率', query: '圓面積', badge: '熱門' },
  { label: '槓桿與天平原理', query: '槓桿', badge: '實驗' },
  { label: '水溶液酸鹼變色', query: '酸鹼', badge: '實驗' },
  { label: '比與最簡整數比', query: '比值' },
  { label: '電與磁電磁鐵', query: '電磁鐵', badge: '探究' },
  { label: '古典詩詞與寓言', query: '寓言' },
  { label: '過去式動詞 (Past Tense)', query: 'Past Tense' },
  { label: '國中負數與數線', query: '負數' },
  { label: '柱體表面積與體積', query: '柱體' },
  { label: '臺灣民主與政府', query: '民主' },
  { label: '速率與生活追趕', query: '速率' },
  { label: 'CPR與緊急急救', query: '急救' },
  { label: 'SDGs永續發展目標', query: 'SDGs' },
  { label: '放大圖與比例尺', query: '比例尺' }
];

export const TopicDiscoveryExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [modalityFilter, setModalityFilter] = useState('all'); // 'all' | 'labs' | 'notes' | 'prep'
  const searchInputRef = useRef(null);

  // 整理扁平化所有單元 (64個單元)
  const allUnitsCatalog = useMemo(() => {
    const list = [];
    coursesData.subjects.forEach(subject => {
      const units = coursesData.units[subject.id] || [];
      units.forEach((unit, idx) => {
        // 檢查該單元是否有關聯的動態實驗 (全站 14 大動態實驗全面連通)
        const labMap = {
          'math-u6': 'circle-area',
          'math-u7': 'speed-race',
          'math-u11': 'number-line',
          'sci-u1': 'weather-fronts',
          'sci-u2': 'acid-base-ph',
          'sci-u3': 'electromagnet',
          'sci-u6': 'lever-seesaw',
          'sci-u10': 'virtual-microscope',
          'eng-u2': 'english-tense',
          'man-u8': 'hanzi-six-scripts',
          'soc-u1': 'five-powers-balance',
          'art-u1': 'color-wheel-mixer',
          'pe-u3': 'cpr-rhythm-metronome',
          'comp-u1': 'time-management-matrix'
        };
        const targetLabId = labMap[unit.id];
        const matchedLab = targetLabId ? interactiveLabsList.find(lab => lab.id === targetLabId) : null;

        // 標記國中銜接重要性
        const isPrepBridge = [
          'math-u1', 'math-u4', 'math-u7', 'math-u8', 'math-u11', 
          'science-u2', 'science-u3', 'science-u5', 'science-u6', 
          'mandarin-u1', 'mandarin-u3', 'mandarin-u8', 
          'english-u2', 'english-u6'
        ].includes(unit.id);

        // 主題興趣軌道歸類
        let trackId = 'arts-health';
        if (subject.id === 'math') trackId = 'math-logic';
        else if (subject.id === 'science') trackId = 'science-inquiry';
        else if (subject.id === 'mandarin') trackId = 'mandarin-lit';
        else if (subject.id === 'social') trackId = 'social-civic';
        else if (subject.id === 'english') trackId = 'english-bilingual';
        else if (['health_pe', 'arts', 'integrative'].includes(subject.id)) trackId = 'arts-health';

        list.push({
          ...unit,
          unitIndex: idx + 1,
          subjectId: subject.id,
          subjectName: subject.name,
          subjectShort: subject.shortName,
          subjectColor: subject.color,
          trackId,
          matchedLab,
          isPrepBridge,
          semester: idx < 6 ? '6上' : '6下'
        });
      });
    });
    return list;
  }, []);

  // 篩選單元列表
  const filteredUnits = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allUnitsCatalog.filter(item => {
      // 1. 搜尋比對 (標題、描述、核心觀念、學科名稱)
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.subjectName.toLowerCase().includes(q) ||
        item.subjectShort.toLowerCase().includes(q) ||
        (item.keyConcepts && item.keyConcepts.some(c => c.toLowerCase().includes(q)))
      );

      // 2. 興趣軌道比對
      const matchesTrack = selectedTrack === 'all' || 
        (selectedTrack === 'prep-bridge' ? item.isPrepBridge : item.trackId === selectedTrack);

      // 3. 學習型態比對
      let matchesModality = true;
      if (modalityFilter === 'labs') matchesModality = Boolean(item.matchedLab);
      if (modalityFilter === 'prep') matchesModality = item.isPrepBridge;

      return matchesSearch && matchesTrack && matchesModality;
    });
  }, [allUnitsCatalog, searchQuery, selectedTrack, modalityFilter]);

  const handleChipClick = (query) => {
    setSearchQuery(query);
    triggerHaptic('light');
    playSound('ios_tap');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    triggerHaptic('light');
    playSound('ios_tap');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section 
      id="topic-discovery-section" 
      className="card shadow-md scroll-mt-20"
      style={{
        borderRadius: '26px',
        padding: '28px 26px',
        backgroundColor: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 頂部柔和光暈裝飾 (visionOS Ambient Light) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '4px',
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          borderRadius: '2px',
          opacity: 0.8
        }}
      />

      {/* 1. 探索中心標題區 */}
      <div className="flex justify-between items-start flex-wrap gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="badge badge-accent font-extrabold flex items-center gap-1">
              <Sparkles size={13} />
              信達雅智能主題搜尋儀
            </span>
            <span className="text-xs text-secondary font-medium">
              涵蓋全站 8 大領域・64 個精選單元地圖
            </span>
          </div>
          <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.5rem * var(--font-scale))', letterSpacing: '-0.02em' }}>
            🎯 依學習興趣與好奇心探索主題
          </h2>
          <p className="text-secondary text-sm mt-1 mb-0" style={{ lineHeight: 1.6 }}>
            輸入想學的概念（如「圓面積」、「槓桿」、「過去式」）或點選感興趣的主題軸線，3 秒直達專屬圖解課堂、A4 講義與動態實驗！
          </p>
        </div>

        {/* 統計晶片 */}
        <div className="flex items-center gap-2">
          <div 
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-bold"
            style={{ 
              backgroundColor: 'var(--accent-soft)', 
              color: 'var(--accent-primary)',
              border: '1px solid var(--border-light)'
            }}
          >
            <span>符合條件：</span>
            <span className="font-black text-sm">{filteredUnits.length}</span>
            <span>/ 64 課</span>
          </div>
        </div>
      </div>

      {/* 2. 核心搜尋列 (Instant Search Input) */}
      <div className="relative mb-4">
        <div 
          className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            border: '2px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
          }}
        >
          <Search size={22} className="text-secondary flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋任何學習主題、公式、課文、實驗或關鍵字（例：圓面積、槓桿、酸鹼、修辭、民主、負數）..."
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: 'calc(1rem * var(--font-scale))',
              color: 'var(--text-primary)',
              fontWeight: 600
            }}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="ios-pressable p-1 rounded-full text-secondary hover:text-primary"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              title="清除搜尋"
              aria-label="清除搜尋"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* 3. 熱門點擊探索晶片 (Hot Topic Quick-Picks) */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        <span className="text-xs text-secondary font-bold flex items-center gap-1">
          <Flame size={13} className="text-amber-500" />
          熱門速選：
        </span>
        {HOT_TOPIC_CHIPS.map((chip) => {
          const isActive = searchQuery === chip.query;
          return (
            <button
              key={chip.label}
              onClick={() => handleChipClick(chip.query)}
              className={`ios-pressable text-xs font-bold py-1 px-2.5 rounded-full flex items-center gap-1 transition-all ${
                isActive ? 'badge-accent' : ''
              }`}
              style={{
                backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              <span>{chip.label}</span>
              {chip.badge && (
                <span 
                  style={{
                    fontSize: '9px',
                    padding: '0 4px',
                    borderRadius: '4px',
                    backgroundColor: chip.badge === '實驗' ? '#10b981' : chip.badge === '熱門' ? '#ef4444' : '#8b5cf6',
                    color: '#ffffff',
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  {chip.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 4. 八大興趣主題專題軌道 (Thematic Curiosity Tracks) */}
      <div className="mb-4">
        <div className="text-xs text-secondary font-bold mb-2 flex items-center justify-between">
          <span>📚 依興趣面向探索 (點選切換專題)：</span>
          {selectedTrack !== 'all' && (
            <button
              onClick={() => {
                setSelectedTrack('all');
                triggerHaptic('light');
              }}
              className="text-xs text-accent font-bold hover:underline"
            >
              重設為全部
            </button>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mobile-scroll-row">
          {THEMATIC_TRACKS.map(track => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedTrack(track.id);
                  triggerHaptic('selection');
                  playSound('ios_tap');
                }}
                className={`ios-pressable text-xs font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 flex-shrink-0 transition-all ${
                  isSelected ? 'shadow-sm' : ''
                }`}
                style={{
                  backgroundColor: isSelected ? track.color : 'var(--bg-tertiary)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: `1.5px solid ${isSelected ? track.color : 'var(--border-light)'}`,
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{track.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. 學習形態篩選標籤 (Modality Filter Pills) */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-3 pb-3 mb-4 border-t border-b" style={{ borderColor: 'var(--border-light)' }}>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-secondary" />
          <span className="text-xs text-secondary font-bold">學習形態過濾：</span>
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => { setModalityFilter('all'); triggerHaptic('light'); }}
              className={`btn-pill text-xs py-1 px-2.5 ${modalityFilter === 'all' ? 'active' : ''}`}
            >
              全部形式
            </button>
            <button
              onClick={() => { setModalityFilter('labs'); triggerHaptic('light'); }}
              className={`btn-pill text-xs py-1 px-2.5 ${modalityFilter === 'labs' ? 'active' : ''}`}
            >
              🔬 附互動實驗 (7課)
            </button>
            <button
              onClick={() => { setModalityFilter('prep'); triggerHaptic('light'); }}
              className={`btn-pill text-xs py-1 px-2.5 ${modalityFilter === 'prep' ? 'active' : ''}`}
            >
              🎒 國中銜接關鍵 (14課)
            </button>
          </div>
        </div>

        {/* 快速提示 */}
        <span className="text-[11px] text-tertiary">
          💡 點選單元可直接查看圖解課堂、下載 A4 講義或進入隨堂測驗
        </span>
      </div>

      {/* 6. 主題探索結果卡片網格 (Thematic Results Grid) */}
      {filteredUnits.length > 0 ? (
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))'
          }}
        >
          {filteredUnits.slice(0, 12).map((unit) => {
            return (
              <div
                key={`${unit.subjectId}-${unit.id}`}
                className="ios-glass-card card-hoverable flex flex-col justify-between p-4 rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-light)',
                  borderTop: `4px solid ${unit.subjectColor}`,
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* 卡片頂部：學科徽章 + 學期 + 標記 */}
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="flex items-center gap-2">
                      <SubjectIconBadge id={unit.subjectId} size="sm" />
                      <div>
                        <span 
                          className="font-extrabold text-xs block"
                          style={{ color: unit.subjectColor }}
                        >
                          {unit.subjectShort}・第 {unit.unitIndex} 單元
                        </span>
                        <span className="text-[10px] text-tertiary">
                          108 課綱 {unit.semester} 範圍
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {unit.matchedLab && (
                        <span 
                          className="badge text-[10px] font-extrabold"
                          style={{ backgroundColor: '#10b98120', color: '#10b981' }}
                          title="具備動態物理/幾何/化學模擬實驗"
                        >
                          🔬 附實驗
                        </span>
                      )}
                      {unit.isPrepBridge && (
                        <span 
                          className="badge text-[10px] font-extrabold"
                          style={{ backgroundColor: '#8b5cf620', color: '#8b5cf6' }}
                          title="升國中七年級高頻銜接要點"
                        >
                          🎒 國中銜接
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 單元標題 */}
                  <h3 
                    className="font-black text-sm mb-1.5"
                    style={{ 
                      color: 'var(--text-primary)', 
                      lineHeight: 1.45,
                      fontSize: 'calc(0.96rem * var(--font-scale))'
                    }}
                  >
                    {unit.title}
                  </h3>

                  {/* 單元描述 */}
                  <p 
                    className="text-xs text-secondary mb-3 line-clamp-2"
                    style={{ lineHeight: 1.55 }}
                  >
                    {unit.description}
                  </p>

                  {/* 核心概念標籤 (Key Concepts) */}
                  {unit.keyConcepts && unit.keyConcepts.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {unit.keyConcepts.slice(0, 3).map((concept, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleChipClick(concept)}
                          className="text-[11px] font-semibold py-0.5 px-2 rounded-md transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-light)'
                          }}
                          title={`搜尋關聯主題：「${concept}」`}
                        >
                          #{concept}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 底部功能直達按鈕列 (Action Buttons) */}
                <div 
                  className="pt-3 mt-1 border-t flex items-center justify-between gap-1.5"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  {/* 主要行動：進入學習課堂 */}
                  <Link
                    to={`/lesson/${unit.id}`}
                    onClick={() => { triggerHaptic('selection'); playSound('ios_tap'); }}
                    className="ios-pressable btn-primary flex-1 flex items-center justify-center gap-1 text-xs font-black py-2 px-2.5"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: unit.subjectColor,
                      borderColor: unit.subjectColor,
                      color: '#ffffff',
                      textDecoration: 'none',
                      minHeight: '34px'
                    }}
                  >
                    <span>🚀 進入圖解學習</span>
                    <ChevronRight size={13} />
                  </Link>

                  {/* 次要行動：隨堂測驗 */}
                  <Link
                    to={`/quiz/${unit.id}`}
                    onClick={() => { triggerHaptic('light'); playSound('ios_tap'); }}
                    className="ios-pressable btn-outline flex items-center justify-center gap-1 text-xs font-bold py-2 px-2.5"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      minHeight: '34px'
                    }}
                    title="立即開始單元檢測與通關測驗"
                  >
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>測驗</span>
                  </Link>

                  {/* 講義筆記快捷 */}
                  <Link
                    to={`/exam-notes/${unit.subjectId}`}
                    onClick={() => { triggerHaptic('light'); playSound('ios_tap'); }}
                    className="ios-pressable btn-outline flex items-center justify-center gap-1 text-xs font-bold py-2 px-2.5"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      minHeight: '34px'
                    }}
                    title="查看並下載本學科段考講義與考前手冊"
                  >
                    <FileText size={13} className="text-indigo-500" />
                    <span>講義</span>
                  </Link>

                  {/* 實驗直達 (若有) */}
                  {unit.matchedLab && (
                    <Link
                      to="/labs"
                      onClick={() => { triggerHaptic('light'); playSound('ios_tap'); }}
                      className="ios-pressable flex items-center justify-center p-2 rounded-lg text-emerald-600 hover:bg-emerald-50"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)'
                      }}
                      title={`進入「${unit.matchedLab.title}」模擬實驗`}
                    >
                      <FlaskConical size={14} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 空狀態引導 */
        <div 
          className="p-8 text-center rounded-2xl"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="text-3xl mb-2">🔍</div>
          <div className="font-extrabold text-base text-primary mb-1">
            找不到符合「{searchQuery}」的學習主題
          </div>
          <p className="text-xs text-secondary max-w-md mx-auto mb-4">
            試試點選上方熱門晶片（例如「圓面積」、「槓桿」、「酸鹼」、「民主」、「負數」），或點選「重設搜尋」瀏覽全部 64 門主題課堂。
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedTrack('all'); setModalityFilter('all'); }}
            className="btn-primary text-xs py-2 px-5 font-bold"
          >
            重設篩選條件・顯示全站主題
          </button>
        </div>
      )}

      {/* 超過 12 筆時提示 */}
      {filteredUnits.length > 12 && (
        <div className="text-center mt-5 pt-3 border-t" style={{ borderColor: 'var(--border-light)' }}>
          <span className="text-xs text-secondary font-bold mr-2">
            已顯示最相關的 12 筆主題，共 {filteredUnits.length} 門主題符合條件。
          </span>
          <button
            onClick={() => {
              const el = document.getElementById('subjects-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs text-accent font-extrabold hover:underline inline-flex items-center gap-1"
          >
            <span>瀏覽八大學科完整課綱地圖</span>
            <ArrowRight size={12} />
          </button>
        </div>
      )}
    </section>
  );
};

export default TopicDiscoveryExplorer;
