import { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Lightbulb, 
  Search, 
  BookOpen, 
  Sparkles, 
  Volume2, 
  Copy, 
  Check, 
  Target, 
  ShieldAlert, 
  Compass, 
  GraduationCap, 
  Maximize2, 
  Download, 
  CheckCircle2,
  Filter,
  ArrowRight,
  GitBranch,
  Network,
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { knowledgePointsData, searchKnowledgePoints } from '../../data/knowledgePoints';
import { getKnowledgePointInfographic } from '../../data/knowledgeInfographics';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

/**
 * 💡 全域視覺知識庫與微知識點圖鑑 (Visual Knowledge Hub & Infographics Explorer)
 * 深度整合 108 課綱六年級 8 大領域、64 單元、192 個核心微知識點與高清純向量 SVG 資訊圖表
 */
const VisualKnowledgeHubModal = ({ isOpen, onClose, initialSubject = 'all', initialUnitId = null, initialKpId = null }) => {
  const [activeSubject, setActiveSubject] = useState(initialSubject);
  const [activeSemester, setActiveSemester] = useState('all'); // 'all' | '6A' | '6B'
  const [activeTheme, setActiveTheme] = useState('all'); // 'all' | 'concept' | 'formula' | 'trap' | 'life'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPointId, setSelectedPointId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isSpeakingId, setIsSpeakingId] = useState(null);
  const [masteredPoints, setMasteredPoints] = useState({});
  const [isFullscreenSvg, setIsFullscreenSvg] = useState(false);

  // 讀取已標記為精熟之知識點 (localStorage)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sixth_mastered_kpoints');
      if (saved) {
        setMasteredPoints(JSON.parse(saved));
      }
    } catch {}
  }, []);

  // 當開啟時若有指定 initialKpId 或 unitId，預選對應知識點
  useEffect(() => {
    if (isOpen) {
      if (initialKpId) {
        const found = knowledgePointsData.find(kp => kp.id === initialKpId);
        if (found) {
          setSelectedPointId(found.id);
          setActiveSubject(found.subjectId);
          setActiveSemester(found.semester);
          return;
        }
      }
      if (initialSubject && initialSubject !== 'all') {
        setActiveSubject(initialSubject);
      }
      if (initialUnitId) {
        const found = knowledgePointsData.find(kp => kp.unitId === initialUnitId);
        if (found) {
          setSelectedPointId(found.id);
          setActiveSubject(found.subjectId);
          setActiveSemester(found.semester);
        }
      }
    }
  }, [isOpen, initialSubject, initialUnitId, initialKpId]);

  // 切換精熟狀態
  const toggleMastery = (kpId, e) => {
    e.stopPropagation();
    const next = { ...masteredPoints, [kpId]: !masteredPoints[kpId] };
    setMasteredPoints(next);
    try {
      localStorage.setItem('sixth_mastered_kpoints', JSON.stringify(next));
    } catch {}
    
    if (next[kpId]) {
      playSound('success');
      triggerHaptic('medium');
      dispatchDynamicIsland({
        type: 'success',
        title: '知識點掌握！',
        message: '已將該微概念標記為精熟 ★'
      });
    } else {
      playSound('pop');
      triggerHaptic('light');
    }
  };

  // 語音朗讀知識點
  const handleSpeak = (kp, e) => {
    e.stopPropagation();
    if (isSpeakingId === kp.id) {
      speechEngine.stop();
      setIsSpeakingId(null);
      return;
    }

    setIsSpeakingId(kp.id);
    playSound('click');
    const textToRead = `${kp.title}。${kp.definition}。${kp.strategyTip}`;
    speechEngine.speak(textToRead, {
      lang: kp.subjectId === 'english' ? 'en-US' : 'zh-TW',
      onEnd: () => setIsSpeakingId(null),
      onError: () => setIsSpeakingId(null)
    });
  };

  // 複製知識點摘要筆記
  const handleCopyNote = (kp, e) => {
    e.stopPropagation();
    const text = `【${kp.category}】${kp.title}\n定義：${kp.definition}\n公式/心法：${kp.formulaOrRule}\n避雷防錯：${kp.trapAlert}\n生活實用：${kp.practicalUtility}\n三版本焦點：${kp.textbookFocus}\n—— 來自《最強小六》108 課綱旗艦全科智庫`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(kp.id);
      playSound('pop');
      triggerHaptic('light');
      dispatchDynamicIsland({
        type: 'success',
        title: '筆記已複製',
        message: '已成功複製該知識點摘要至剪貼簿'
      });
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // 點擊關聯知識點時平滑跳轉切換
  const handleSelectRelatedPoint = (rel) => {
    if (rel.isBridge) {
      playSound('pop');
      dispatchDynamicIsland({
        type: 'info',
        title: '國中先修橋樑',
        message: `${rel.title}：${rel.desc}`
      });
      return;
    }

    const targetKp = knowledgePointsData.find(kp => kp.id === rel.id);
    if (targetKp) {
      setSelectedPointId(targetKp.id);
      if (activeSubject !== 'all' && activeSubject !== targetKp.subjectId) {
        setActiveSubject(targetKp.subjectId);
      }
      if (activeSemester !== 'all' && activeSemester !== targetKp.semester) {
        setActiveSemester(targetKp.semester);
      }
      playSound('click');
      triggerHaptic('light');
      dispatchDynamicIsland({
        type: 'info',
        title: '關聯知識點跳轉',
        message: `已切換至【${targetKp.category}】${targetKp.title}`
      });
    }
  };

  // 篩選後之知識點清單
  const filteredPoints = useMemo(() => {
    let list = searchKnowledgePoints(searchQuery, activeSubject, activeSemester);
    if (activeTheme !== 'all') {
      if (activeTheme === 'concept') list = list.filter(p => p.category.includes('觀念') || p.category.includes('本質'));
      else if (activeTheme === 'formula') list = list.filter(p => p.category.includes('算理') || p.category.includes('公式') || p.formulaOrRule.includes('$'));
      else if (activeTheme === 'trap') list = list.filter(p => p.trapAlert.includes('必背') || p.trapAlert.includes('防雷'));
      else if (activeTheme === 'life') list = list.filter(p => p.practicalUtility.length > 15);
    }
    return list;
  }, [searchQuery, activeSubject, activeSemester, activeTheme]);

  // 當前聚焦之知識點物件
  const currentFocusedPoint = useMemo(() => {
    if (selectedPointId) {
      const found = knowledgePointsData.find(kp => kp.id === selectedPointId);
      if (found) return found;
    }
    return filteredPoints[0] || knowledgePointsData[0];
  }, [selectedPointId, filteredPoints]);

  // 當前知識點之專屬 Infographic
  const currentInfographic = useMemo(() => {
    return getKnowledgePointInfographic(currentFocusedPoint);
  }, [currentFocusedPoint]);

  // 下載當前 SVG 圖檔
  const handleDownloadSvg = () => {
    if (!currentInfographic?.svg) return;
    const blob = new Blob([currentInfographic.svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentFocusedPoint.title}_infographic.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    playSound('chest_open');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-surface-primary dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 頂部 Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-surface-secondary/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <Lightbulb size={22} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  108 課綱全科視覺知識庫與微知識點圖鑑
                </h2>
                <span className="badge badge-accent text-[11px] font-bold px-2 py-0.5">
                  192 微知識點全覆蓋
                </span>
                <span className="badge badge-success text-[11px] font-bold px-2 py-0.5">
                  純向量 Infographics
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                深度拆解小六 8 大學科、64 單元觀念本質、算理公式、防雷避坑與生活實用性
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* 精熟度進度徽章 */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>已掌握：{Object.values(masteredPoints).filter(Boolean).length} / 192</span>
              <div className="w-16 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ml-1">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((Object.values(masteredPoints).filter(Boolean).length / 192) * 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="關閉知識庫"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 篩選與搜尋工具塢 */}
        <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col gap-2.5">
          {/* 學科 Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => { setActiveSubject('all'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                activeSubject === 'all' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              🌟 全科 (192)
            </button>
            {coursesData.subjects.map(sub => {
              const subCount = knowledgePointsData.filter(kp => kp.subjectId === sub.id).length;
              return (
                <button
                  key={sub.id}
                  onClick={() => { setActiveSubject(sub.id); playSound('click'); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    activeSubject === sub.id 
                      ? 'text-white shadow-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  style={activeSubject === sub.id ? { backgroundColor: sub.color } : {}}
                >
                  <span>{sub.emoji}</span>
                  <span>{sub.shortName}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeSubject === sub.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                  }`}>
                    {subCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 第二層工具：學期、類別主題與即時搜尋 */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* 學期切換 */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => { setActiveSemester('all'); playSound('click'); }}
                className={`px-2.5 py-1 text-xs rounded-md font-bold transition-colors ${
                  activeSemester === 'all' ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                全部學期
              </button>
              <button
                onClick={() => { setActiveSemester('6A'); playSound('click'); }}
                className={`px-2.5 py-1 text-xs rounded-md font-bold transition-colors ${
                  activeSemester === '6A' ? 'bg-blue-500 text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                📘 6上
              </button>
              <button
                onClick={() => { setActiveSemester('6B'); playSound('click'); }}
                className={`px-2.5 py-1 text-xs rounded-md font-bold transition-colors ${
                  activeSemester === '6B' ? 'bg-orange-500 text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                📙 6下
              </button>
            </div>

            {/* 類別主題篩選 */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: '全部主題' },
                { id: 'concept', label: '📐 觀念本質' },
                { id: 'formula', label: '⚡ 運算公式' },
                { id: 'trap', label: '🛡️ 避雷防錯' },
                { id: 'life', label: '🌍 生活實用' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTheme(t.id); playSound('click'); }}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold border transition-colors ${
                    activeTheme === t.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* 搜尋框 */}
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜尋知識點、公式、避雷關鍵字..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 主體區塊：左側知識點清單 + 右側專屬 Infographic 圖表展示面板 */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-[480px]">
          {/* 左側：知識點卡片清單 */}
          <div className="w-full lg:w-1/2 overflow-y-auto p-4 flex flex-col gap-3 border-r border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>共找到 <strong>{filteredPoints.length}</strong> 個精準微知識點</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 size={13} />
                已掌握 {Object.values(masteredPoints).filter(Boolean).length} / {knowledgePointsData.length}
              </span>
            </div>

            {filteredPoints.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                <Search size={36} className="mb-2 stroke-1" />
                <p className="text-sm">沒有找到符合條件的微知識點</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveSubject('all'); setActiveSemester('all'); setActiveTheme('all'); }}
                  className="mt-3 px-3 py-1 text-xs text-blue-500 hover:underline"
                >
                  重置所有搜尋過濾條件
                </button>
              </div>
            ) : (
              filteredPoints.map((kp) => {
                const isSelected = (currentFocusedPoint?.id === kp.id);
                const isMastered = !!masteredPoints[kp.id];
                const subMeta = coursesData.subjects.find(s => s.id === kp.subjectId) || coursesData.subjects[0];

                return (
                  <div
                    key={kp.id}
                    onClick={() => { setSelectedPointId(kp.id); playSound('pop'); }}
                    className={`relative p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-white dark:bg-slate-800 shadow-md ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {/* 卡片標頭列 */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span 
                          className="px-2 py-0.5 rounded text-[11px] font-bold text-white shadow-xs"
                          style={{ backgroundColor: subMeta.color }}
                        >
                          {subMeta.emoji} {subMeta.shortName}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {kp.semester}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300">
                          {kp.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        {/* 朗讀按鈕 */}
                        <button
                          onClick={(e) => handleSpeak(kp, e)}
                          className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                            isSpeakingId === kp.id ? 'text-blue-600 animate-pulse' : 'text-slate-400'
                          }`}
                          title="語音伴讀"
                        >
                          <Volume2 size={15} />
                        </button>

                        {/* 複製按鈕 */}
                        <button
                          onClick={(e) => handleCopyNote(kp, e)}
                          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 transition-colors"
                          title="複製知識點筆記"
                        >
                          {copiedId === kp.id ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                        </button>

                        {/* 精熟勾選按鈕 */}
                        <button
                          onClick={(e) => toggleMastery(kp.id, e)}
                          className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                            isMastered ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'
                          }`}
                          title={isMastered ? '已掌握 (點擊取消)' : '標記為已精熟'}
                        >
                          <CheckCircle2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* 知識點標題與核心定義 */}
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block" />
                      {kp.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-2">
                      {kp.definition}
                    </p>

                    {/* 核心工具或公式 */}
                    {kp.formulaOrRule && (
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] font-mono text-blue-700 dark:text-blue-300 mb-2 truncate">
                        <strong>⚡ 核心心法：</strong>{kp.formulaOrRule}
                      </div>
                    )}

                    {/* 實用性與防雷標籤列 */}
                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800/80 text-slate-400">
                      <span className="truncate max-w-[240px] text-emerald-600 dark:text-emerald-400">
                        {kp.practicalUtility.replace('【生活實用】', '🌍 ')}
                      </span>
                      <span className="text-blue-500 font-bold flex items-center gap-0.5 shrink-0">
                        檢視圖卡 <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* 右側：專屬向量 Infographic 與深度解析面板 */}
          <div className="w-full lg:w-1/2 overflow-y-auto p-5 flex flex-col gap-4 bg-white dark:bg-slate-900">
            {currentFocusedPoint && (
              <>
                {/* 當前焦點資訊橫幅 */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-accent text-xs font-bold">
                        {currentFocusedPoint.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        單元 ID: {currentFocusedPoint.unitId}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-800 dark:text-slate-100">
                      {currentFocusedPoint.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => { setIsFullscreenSvg(true); playSound('pop'); }}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      title="全螢幕放大檢視資訊圖卡"
                    >
                      <Maximize2 size={14} />
                      <span>全螢幕</span>
                    </button>
                    <button
                      onClick={handleDownloadSvg}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      title="下載高清 SVG 向量圖"
                    >
                      <Download size={14} />
                      <span>下載 SVG</span>
                    </button>
                    <button
                      onClick={(e) => handleSpeak(currentFocusedPoint, e)}
                      className="px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center gap-1.5 hover:bg-blue-100 transition-colors"
                      title="完整朗讀此知識點"
                    >
                      <Volume2 size={14} />
                      <span>朗讀解析</span>
                    </button>
                  </div>
                </div>

                {/* 🎨 專屬純向量 SVG Infographic 展示視窗 */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950/40 shadow-inner p-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
                    <span className="font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                      <Sparkles size={13} className="text-amber-500" />
                      {currentInfographic.title}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {currentInfographic.subtitle}
                    </span>
                  </div>

                  {/* SVG 容器 */}
                  <div 
                    className="w-full flex items-center justify-center py-2"
                    dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
                  />
                </div>

                {/* 明確知識點四大深層架構卡片 */}
                <div className="grid grid-cols-1 gap-2.5">
                  {/* 1. 定義與核心原理 */}
                  <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 mb-1.5">
                      <Target size={14} />
                      <span>明確說明・定義與本質原理</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                      {currentFocusedPoint.definition}
                    </p>
                  </div>

                  {/* 2. 審題攻略與破題觸發器 */}
                  <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                    <div className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                      <Sparkles size={14} />
                      <span>審題攻略・關鍵字雷達與破題工具</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      {currentFocusedPoint.strategyTip}
                    </p>
                  </div>

                  {/* 3. 避雷防錯警訊 */}
                  <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40">
                    <div className="text-xs font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5 mb-1.5">
                      <ShieldAlert size={14} />
                      <span>歷屆高頻陷阱・防雷避坑指南</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      {currentFocusedPoint.trapAlert}
                    </p>
                  </div>

                  {/* 4. 生活實用性與國中先修橋樑 */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
                      <Compass size={14} />
                      <span>生活實用性與素養實踐</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed mb-2">
                      {currentFocusedPoint.practicalUtility}
                    </p>
                    <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                      <GraduationCap size={13} />
                      <span>升國中七年級銜接：{currentFocusedPoint.juniorHighBridge}</span>
                    </div>
                  </div>

                  {/* 5. 三大版本考點比對 */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                      📚 三大教科書版本命題焦點比對：
                    </span>
                    {currentFocusedPoint.textbookFocus}
                  </div>

                  {/* 6. 🔗 相關知識點與概念拓撲網絡 */}
                  {currentFocusedPoint.relatedPoints && currentFocusedPoint.relatedPoints.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <Network size={14} />
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                              <span>🔗 相關知識點拓撲網絡</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold">
                                {currentFocusedPoint.relatedPoints.length} 個關聯節點
                              </span>
                            </h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              同課心法、學科進階、跨域素養與國中先修橋樑（點擊立即切換）
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 網絡卡片清單 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentFocusedPoint.relatedPoints.map((rel, rIdx) => {
                          let badgeStyle = 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800';
                          let icon = <GitBranch size={11} />;

                          if (rel.badgeType === 'step') {
                            badgeStyle = 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800';
                            icon = <Zap size={11} />;
                          } else if (rel.badgeType === 'cross') {
                            badgeStyle = 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/80 dark:text-purple-300 dark:border-purple-800';
                            icon = <Network size={11} />;
                          } else if (rel.badgeType === 'bridge') {
                            badgeStyle = 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800';
                            icon = <GraduationCap size={11} />;
                          }

                          return (
                            <button
                              key={rel.id || rIdx}
                              onClick={() => handleSelectRelatedPoint(rel)}
                              className="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-400 hover:shadow-md hover:translate-y-[-1px] transition-all group flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1.5">
                                  <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold border ${badgeStyle}`}>
                                    {icon}
                                    <span>{rel.relation}</span>
                                  </span>
                                  <span className="text-[10px] text-blue-500 opacity-0 group-hover:opacity-100 flex items-center transition-opacity font-bold">
                                    {rel.isBridge ? '預覽先修' : '立即跳轉'} <ArrowUpRight size={12} />
                                  </span>
                                </div>
                                <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                                  {rel.title}
                                </h5>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                                {rel.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🖼️ SVG 圖卡全螢幕沈浸式燈箱模態框 */}
      {isFullscreenSvg && currentInfographic && (
        <div 
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsFullscreenSvg(false)}
        >
          <div 
            className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4 max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge badge-accent text-xs font-bold">{currentFocusedPoint?.category}</span>
                  <span className="text-xs text-slate-400">108 課綱高清純向量 SVG</span>
                </div>
                <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" />
                  {currentInfographic.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{currentInfographic.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadSvg}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download size={14} /> 下載 SVG
                </button>
                <button
                  onClick={() => setIsFullscreenSvg(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* 全螢幕大圖容器 */}
            <div 
              className="w-full flex-1 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl overflow-auto shadow-inner"
              style={{ minHeight: '360px' }}
              dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
            />

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>💡 原生向量不失真渲染 ｜ 支援投影教學與黑板對照</span>
              <button
                onClick={() => setIsFullscreenSvg(false)}
                className="text-blue-500 hover:underline font-bold"
              >
                返回圖鑑 ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualKnowledgeHubModal;
