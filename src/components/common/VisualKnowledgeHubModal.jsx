import { useState, useMemo, useEffect, useCallback } from 'react';
import MathText from './MathText';
import { 
  X, 
  Lightbulb, 
  Search, 
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
  ArrowRight,
  GitBranch,
  Network,
  ArrowUpRight,
  Zap,
  Printer,
  Eye,
  Layers
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { knowledgePointsData, searchKnowledgePoints } from '../../data/knowledgePoints';
import { 
  getKnowledgePointInfographic, 
  getUnitDiagramInfographic, 
  getDynamicTailoredInfographic 
} from '../../data/knowledgeInfographics';
import { unitDiagramCatalog } from '../../data/examNotes/unitDiagrams';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

/**
 * 💡 全域視覺知識庫與微知識點圖鑑 (Visual Knowledge Hub & Infographics Explorer)
 * 深度整合 108 課綱六年級 8 大領域、64 單元、256 個核心微知識點與純向量 SVG 資訊圖表
 * 具備：五維知識架構抽屜、雙軌向量圖表切換、舒眼暖色溫模式、全景燈箱、一鍵下載與鍵盤快捷導航
 */
const VisualKnowledgeHubModal = ({ isOpen, onClose, initialSubject = 'all', initialUnitId = null, initialKpId = null }) => {
  const [activeSubject, setActiveSubject] = useState(initialSubject);
  const [activeSemester, setActiveSemester] = useState('all'); // 'all' | '6A' | '6B'
  const [activeTheme, setActiveTheme] = useState('all'); // 'all' | 'concept' | 'formula' | 'trap' | 'life'
  const [masteryFilter, setMasteryFilter] = useState('all'); // 'all' | 'unmastered' | 'mastered'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPointId, setSelectedPointId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isSpeakingId, setIsSpeakingId] = useState(null);
  const [masteredPoints, setMasteredPoints] = useState({});
  const [isFullscreenSvg, setIsFullscreenSvg] = useState(false);
  const [isEyeCare, setIsEyeCare] = useState(false); // 舒眼暖色溫紙質閱讀模式
  const [diagramMode, setDiagramMode] = useState('auto'); // 'auto' | 'unit' | 'tailored'
  const [activeDimension, setActiveDimension] = useState('all'); // 'all' | 'essence' | 'formula' | 'trap' | 'life' | 'network'

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
    if (e) e.stopPropagation();
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
    if (e) e.stopPropagation();
    if (isSpeakingId === kp.id) {
      speechEngine.stop();
      setIsSpeakingId(null);
      return;
    }

    setIsSpeakingId(kp.id);
    playSound('click');
    const textToRead = `${kp.title}。${kp.definition}。${kp.example ? '舉個例子：' + kp.example : ''}`.replace(/$/g, '');
    speechEngine.speak(textToRead, {
      lang: kp.subjectId === 'english' ? 'en-US' : 'zh-TW',
      onEnd: () => setIsSpeakingId(null),
      onError: () => setIsSpeakingId(null)
    });
  };

  // 複製知識點摘要筆記
  const handleCopyNote = (kp, e) => {
    if (e) e.stopPropagation();
    const text = `【${kp.category}】${kp.title}\n白話解釋：${kp.definition}\n舉個例子：${kp.example || ''}\n重點規則：${kp.formulaOrRule}\n易錯提醒：${kp.trapAlert}\n生活實用：${kp.practicalUtility}\n三大版本命題焦點：${kp.textbookFocus}\n升國中銜接：${kp.juniorHighBridge}\n—— 來自《最強小六》108 課綱全科旗艦智庫`;
    
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

  // 列印目前知識點卡片
  const handlePrintCurrentCard = () => {
    playSound('click');
    window.print();
  };

  // 篩選後之知識點清單
  const filteredPoints = useMemo(() => {
    let list = searchKnowledgePoints(searchQuery, activeSubject, activeSemester);
    if (activeTheme !== 'all') {
      if (activeTheme === 'health_med') list = list.filter(p => p.subjectId === 'health_pe' || p.category.includes('體') || p.category.includes('健康') || p.definition.includes('細胞') || p.definition.includes('循環') || p.definition.includes('神經'));
      else if (activeTheme === 'concept') list = list.filter(p => p.category.includes('觀念') || p.category.includes('本質'));
      else if (activeTheme === 'formula') list = list.filter(p => p.category.includes('算理') || p.category.includes('公式') || /[=×÷]/.test(p.formulaOrRule));
      else if (activeTheme === 'trap') list = list.filter(p => /陷阱|不要|不能|不是|錯|別/.test(p.trapAlert));
      else if (activeTheme === 'life') list = list.filter(p => p.practicalUtility.length > 15);
    }
    if (masteryFilter === 'mastered') {
      list = list.filter(p => !!masteredPoints[p.id]);
    } else if (masteryFilter === 'unmastered') {
      list = list.filter(p => !masteredPoints[p.id]);
    }
    return list;
  }, [searchQuery, activeSubject, activeSemester, activeTheme, masteryFilter, masteredPoints]);

  // 當前聚焦之知識點物件
  const currentFocusedPoint = useMemo(() => {
    if (selectedPointId) {
      const found = knowledgePointsData.find(kp => kp.id === selectedPointId);
      if (found) return found;
    }
    return filteredPoints[0] || knowledgePointsData[0];
  }, [selectedPointId, filteredPoints]);

  // 當前知識點之圖表 (支援雙軌切換)
  const currentInfographic = useMemo(() => {
    if (!currentFocusedPoint) return null;
    if (diagramMode === 'unit') {
      const unitFig = getUnitDiagramInfographic(currentFocusedPoint.unitId, currentFocusedPoint.title);
      if (unitFig) return unitFig;
    } else if (diagramMode === 'tailored') {
      const customFig = getDynamicTailoredInfographic(currentFocusedPoint);
      if (customFig) return customFig;
    }
    return getKnowledgePointInfographic(currentFocusedPoint);
  }, [currentFocusedPoint, diagramMode]);

  // 是否有可切換之單元架構圖
  const hasUnitDiagram = useMemo(() => {
    return Boolean(currentFocusedPoint && unitDiagramCatalog[currentFocusedPoint.unitId]?.svg);
  }, [currentFocusedPoint]);

  // 鍵盤上下鍵導航
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      if (isFullscreenSvg) {
        setIsFullscreenSvg(false);
      } else {
        onClose();
      }
      return;
    }
    if (['ArrowDown', 'j'].includes(e.key) && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      e.preventDefault();
      const currentIdx = filteredPoints.findIndex(p => p.id === currentFocusedPoint?.id);
      if (currentIdx < filteredPoints.length - 1) {
        setSelectedPointId(filteredPoints[currentIdx + 1].id);
        playSound('ios_tap');
      }
    } else if (['ArrowUp', 'k'].includes(e.key) && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      e.preventDefault();
      const currentIdx = filteredPoints.findIndex(p => p.id === currentFocusedPoint?.id);
      if (currentIdx > 0) {
        setSelectedPointId(filteredPoints[currentIdx - 1].id);
        playSound('ios_tap');
      }
    }
  }, [isOpen, isFullscreenSvg, filteredPoints, currentFocusedPoint, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/65 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className={`relative w-full max-w-6xl max-h-[94vh] flex flex-col border rounded-2xl shadow-2xl overflow-hidden transition-colors ${
          isEyeCare 
            ? 'bg-[#fbf7ed] border-[#e6dcbe] text-stone-900 shadow-amber-900/10' 
            : 'bg-surface-primary dark:bg-slate-900 border-slate-200 dark:border-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 頂部 Header */}
        <div className={`flex items-center justify-between px-5 py-3.5 border-b backdrop-blur-sm ${
          isEyeCare 
            ? 'bg-[#f5ede0]/90 border-[#e3d5be]' 
            : 'border-slate-200 dark:border-slate-800 bg-surface-secondary/80 dark:bg-slate-900/80'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <Lightbulb size={22} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className={`text-base sm:text-lg font-black flex items-center gap-2 ${
                  isEyeCare ? 'text-stone-900' : 'text-slate-800 dark:text-slate-100'
                }`}>
                  108 課綱全科視覺知識庫與微知識點圖鑑
                </h2>
                <span className="badge badge-accent text-[11px] font-bold px-2 py-0.5">
                  {knowledgePointsData.length} 個知識點全覆蓋
                </span>
                <span className="badge badge-success text-[11px] font-bold px-2 py-0.5">
                  圖解卡
                </span>
              </div>
              <p className={`text-xs mt-0.5 ${
                isEyeCare ? 'text-stone-600' : 'text-slate-500 dark:text-slate-400'
              }`}>
                深度拆解小六 8 大學科、64 單元觀念本質、算理公式、防雷避坑與生活實用性（支援鍵盤 ↑/↓ 導航）
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* 舒眼暖色溫切換按鈕 */}
            <button
              onClick={() => { setIsEyeCare(!isEyeCare); playSound('pop'); }}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all ${
                isEyeCare 
                  ? 'bg-amber-200 border-amber-300 text-amber-900 shadow-inner' 
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
              title={isEyeCare ? '關閉舒眼模式' : '開啟舒眼暖色溫模式（減輕藍光刺激）'}
            >
              <Eye size={15} />
              <span className="hidden md:inline">{isEyeCare ? '護眼模式中' : '舒眼模式'}</span>
            </button>

            {/* 精熟度進度徽章 */}
            <div className={`hidden sm:flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl border ${
              isEyeCare
                ? 'bg-[#ede2cc] border-[#d8c8ab] text-stone-800'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
            }`}>
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>掌握：{Object.values(masteredPoints).filter(Boolean).length} / {knowledgePointsData.length}</span>
              <div className="w-14 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ml-1">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((Object.values(masteredPoints).filter(Boolean).length / knowledgePointsData.length) * 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="關閉知識庫 (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 篩選與搜尋工具塢 */}
        <div className={`px-5 py-2.5 border-b flex flex-col gap-2.5 ${
          isEyeCare 
            ? 'bg-[#f7f1e4] border-[#e6dcbe]' 
            : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40'
        }`}>
          {/* 學科 Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => { setActiveSubject('all'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                activeSubject === 'all' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              🌟 全科 ({knowledgePointsData.length})
            </button>
            {coursesData.subjects.map(sub => {
              const subCount = knowledgePointsData.filter(kp => kp.subjectId === sub.id).length;
              const isActive = activeSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => { setActiveSubject(sub.id); playSound('click'); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all border ${
                    isActive 
                      ? 'text-white shadow-sm border-transparent' 
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
                  }`}
                  style={isActive ? { backgroundColor: sub.color } : {}}
                >
                  <span>{sub.emoji}</span>
                  <span>{sub.shortName}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                  }`}>
                    {subCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 第二層工具：學期、類別主題、精熟篩選與即時搜尋 */}
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
                { id: 'health_med', label: '🩺 醫學體適能' },
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

            {/* 精熟篩選 */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => { setMasteryFilter('all'); playSound('click'); }}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  masteryFilter === 'all' ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white' : 'text-slate-500'
                }`}
              >
                全顯
              </button>
              <button
                onClick={() => { setMasteryFilter('unmastered'); playSound('click'); }}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  masteryFilter === 'unmastered' ? 'bg-amber-500 text-white' : 'text-slate-500'
                }`}
                title="僅顯示尚未打卡掌握之知識點"
              >
                待精熟
              </button>
              <button
                onClick={() => { setMasteryFilter('mastered'); playSound('click'); }}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  masteryFilter === 'mastered' ? 'bg-emerald-500 text-white' : 'text-slate-500'
                }`}
                title="僅顯示已掌握之知識點"
              >
                已精熟
              </button>
            </div>

            {/* 搜尋框 */}
            <div className="relative flex-1 min-w-[180px] max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜尋知識點、公式、避雷詞..."
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

        {/* 主體區塊：左側知識點卡片清單 + 右側專屬 Infographic 圖表展示面板 */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-[480px]">
          {/* 左側：知識點卡片清單 (5/12 欄寬) */}
          <div className={`w-full lg:w-5/12 overflow-y-auto p-3.5 flex flex-col gap-2.5 border-r ${
            isEyeCare 
              ? 'border-[#e6dcbe] bg-[#f8f3e7]' 
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30'
          }`}>
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>共 <strong>{filteredPoints.length}</strong> 個精選微知識點</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 size={13} />
                掌握 {Object.values(masteredPoints).filter(Boolean).length} / {knowledgePointsData.length}
              </span>
            </div>

            {filteredPoints.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                <Search size={36} className="mb-2 stroke-1" />
                <p className="text-sm">沒有找到符合條件的微知識點</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveSubject('all'); setActiveSemester('all'); setActiveTheme('all'); setMasteryFilter('all'); }}
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
                    className={`relative p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? isEyeCare
                          ? 'border-amber-500 bg-[#fffdf9] shadow-md ring-2 ring-amber-400/30'
                          : 'border-blue-500 bg-white dark:bg-slate-800 shadow-md ring-2 ring-blue-500/20'
                        : isEyeCare
                          ? 'border-[#e3d7bb] bg-[#fbf6ec]/80 hover:bg-[#fffdf9]'
                          : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {/* 卡片標頭列 */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span 
                          className="px-2 py-0.5 rounded text-[10.5px] font-bold text-white shadow-xs"
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
                          <Volume2 size={14} />
                        </button>

                        {/* 複製按鈕 */}
                        <button
                          onClick={(e) => handleCopyNote(kp, e)}
                          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 transition-colors"
                          title="複製知識點筆記"
                        >
                          {copiedId === kp.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
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
                    <h3 className={`text-xs sm:text-sm font-bold mb-1 flex items-center gap-1.5 ${
                      isEyeCare ? 'text-stone-900' : 'text-slate-800 dark:text-slate-100'
                    }`}>
                      <span className="w-1.5 h-3 bg-blue-500 rounded-full inline-block shrink-0" />
                      <span className="truncate">{kp.title}</span>
                    </h3>
                    <p className={`text-[13px] line-clamp-2 leading-relaxed mb-1.5 ${
                      isEyeCare ? 'text-stone-700' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      {kp.definition}
                    </p>

                    {/* 核心工具或公式 */}
                    {kp.formulaOrRule && (
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[12px] text-blue-700 dark:text-blue-300 mb-1.5 line-clamp-2">
                        <strong>📌 重點：</strong><MathText text={kp.formulaOrRule} />
                      </div>
                    )}

                    {/* 實用性與防雷標籤列 */}
                    <div className="flex items-center justify-between text-[10.5px] pt-1 border-t border-slate-100 dark:border-slate-800/80 text-slate-400">
                      <span className="truncate max-w-[200px] text-emerald-600 dark:text-emerald-400">
                        {kp.practicalUtility.replace('【生活實用】', '🌍 ')}
                      </span>
                      <span className="text-blue-500 font-bold flex items-center gap-0.5 shrink-0">
                        檢視圖卡 <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* 右側：專屬向量 Infographic 與深度五維解析架構面板 (7/12 欄寬) */}
          <div className={`w-full lg:w-7/12 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 ${
            isEyeCare ? 'bg-[#fffdf8]' : 'bg-white dark:bg-slate-900'
          }`}>
            {currentFocusedPoint && (
              <>
                {/* 1. 當前焦點資訊橫幅 */}
                <div className="flex items-start justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="badge badge-accent text-xs font-bold">
                        {currentFocusedPoint.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        第 {currentFocusedPoint.pointIndex + 1} 個重點
                      </span>
                    </div>
                    <h3 className={`text-base sm:text-lg font-black ${
                      isEyeCare ? 'text-stone-900' : 'text-slate-800 dark:text-slate-100'
                    }`}>
                      {currentFocusedPoint.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                    <button
                      onClick={() => { setIsFullscreenSvg(true); playSound('pop'); }}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1 transition-colors"
                      title="全螢幕放大檢視資訊圖卡"
                    >
                      <Maximize2 size={13} />
                      <span className="hidden sm:inline">全螢幕</span>
                    </button>
                    <button
                      onClick={handleDownloadSvg}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1 transition-colors"
                      title="下載高清 SVG 向量圖檔"
                    >
                      <Download size={13} />
                      <span className="hidden sm:inline">下載 SVG</span>
                    </button>
                    <button
                      onClick={handlePrintCurrentCard}
                      className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1 transition-colors"
                      title="列印此知識點卡片"
                    >
                      <Printer size={13} />
                    </button>
                    <button
                      onClick={(e) => handleSpeak(currentFocusedPoint, e)}
                      className="px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center gap-1 hover:bg-blue-100 transition-colors"
                      title="完整朗讀解析"
                    >
                      <Volume2 size={13} />
                      <span>朗讀</span>
                    </button>
                  </div>
                </div>

                {/* 2. 🎨 專屬純向量 SVG Infographic 展示視窗 + 雙軌圖表切換塢 */}
                <div className={`rounded-xl border overflow-hidden p-3.5 shadow-xs ${
                  isEyeCare 
                    ? 'bg-[#fcf8ee] border-[#e7ddc4]' 
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40'
                }`}>
                  <div className="flex items-center justify-between text-xs mb-2 px-1 flex-wrap gap-2">
                    <span className="font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
                      <Sparkles size={14} className="text-amber-500" />
                      {currentInfographic?.title || currentFocusedPoint.title}
                    </span>

                    {/* 雙軌切換開關 (若有單元圖) */}
                    {hasUnitDiagram && (
                      <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px]">
                        <button
                          onClick={() => { setDiagramMode('auto'); playSound('pop'); }}
                          className={`px-2 py-0.5 rounded font-bold transition-colors ${
                            diagramMode === 'auto' || diagramMode === 'tailored'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          🎨 微概念圖
                        </button>
                        <button
                          onClick={() => { setDiagramMode('unit'); playSound('pop'); }}
                          className={`px-2 py-0.5 rounded font-bold transition-colors ${
                            diagramMode === 'unit'
                              ? 'bg-indigo-600 text-white'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          🏛️ 單元全景圖
                        </button>
                      </div>
                    )}
                  </div>

                  {/* SVG 向量圖容器 */}
                  {currentInfographic && (
                    <div 
                      className="w-full flex items-center justify-center py-2"
                      dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
                    />
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                    <span>{currentInfographic?.subtitle || '108 課綱向量圖解'}</span>
                    <span>可放大檢視、下載或列印</span>
                  </div>
                </div>

                {/* 3. 五維知識架構快捷抽屜 Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none border-b border-slate-100 dark:border-slate-800">
                  {[
                    { id: 'all', label: '全部維度', icon: <Layers size={12} /> },
                    { id: 'essence', label: '🧠 白話解釋', icon: <Target size={12} /> },
                    { id: 'formula', label: '📌 重點規則', icon: <Zap size={12} /> },
                    { id: 'trap', label: '⚠️ 易錯提醒', icon: <ShieldAlert size={12} /> },
                    { id: 'life', label: '🌍 生活實用', icon: <Compass size={12} /> },
                    { id: 'network', label: '🔗 相關知識', icon: <Network size={12} /> }
                  ].map(dim => (
                    <button
                      key={dim.id}
                      onClick={() => { setActiveDimension(dim.id); playSound('ios_tap'); }}
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold flex items-center gap-1 transition-colors whitespace-nowrap ${
                        activeDimension === dim.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {dim.icon}
                      <span>{dim.label}</span>
                    </button>
                  ))}
                </div>

                {/* 4. 五維深層架構卡片 */}
                <div className="grid grid-cols-1 gap-2.5">
                  {/* 維度 1: 定義與核心原理 */}
                  {(activeDimension === 'all' || activeDimension === 'essence') && (
                    <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                      <div className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 mb-1.5">
                        <Target size={14} />
                        <span>白話解釋・這個知識點在說什麼？</span>
                      </div>
                      <p className={`text-sm leading-relaxed font-sans ${
                        isEyeCare ? 'text-stone-800' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        <MathText text={currentFocusedPoint.definition} />
                      </p>
                      {currentFocusedPoint.example && (
                        <div className="mt-2.5 p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/60 border border-emerald-200/70 dark:border-emerald-800/40 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                          <strong className="block mb-0.5">🌱 舉個例子</strong>
                          <MathText text={currentFocusedPoint.example} />
                        </div>
                      )}
                      {currentFocusedPoint.keyFact && (
                        <div className="mt-2 text-[13px] leading-relaxed text-blue-800 dark:text-blue-200">
                          <strong>📘 課本重點：</strong><MathText text={currentFocusedPoint.keyFact} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* 維度 2: 算理公式與審題雷達 */}
                  {(activeDimension === 'all' || activeDimension === 'formula') && (
                    <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                      <div className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                        <Sparkles size={14} />
                        <span>重點規則・解題小撇步</span>
                      </div>
                      {currentFocusedPoint.formulaOrRule && (
                        <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/60 border border-amber-200/60 dark:border-amber-800/40 text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">
                          <strong>📌 一定要記：</strong><MathText text={currentFocusedPoint.formulaOrRule} />
                        </div>
                      )}
                      <p className={`text-[13px] leading-relaxed ${
                        isEyeCare ? 'text-stone-800' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        <MathText text={currentFocusedPoint.strategyTip} />
                      </p>
                    </div>
                  )}

                  {/* 維度 3: 避雷防錯警訊 */}
                  {(activeDimension === 'all' || activeDimension === 'trap') && (
                    <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40">
                      <div className="text-xs font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5 mb-1.5">
                        <ShieldAlert size={14} />
                        <span>小心別犯錯・常見錯誤提醒</span>
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isEyeCare ? 'text-stone-800' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        <MathText text={currentFocusedPoint.trapAlert} />
                      </p>
                    </div>
                  )}

                  {/* 維度 4: 生活實用性與國中銜接 */}
                  {(activeDimension === 'all' || activeDimension === 'life') && (
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
                        <Compass size={14} />
                        <span>生活實用性與素養實踐</span>
                      </div>
                      <p className={`text-[13px] leading-relaxed mb-2 ${
                        isEyeCare ? 'text-stone-800' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        {currentFocusedPoint.practicalUtility}
                      </p>
                      <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                        <GraduationCap size={13} />
                        <span>升國中七年級銜接：{currentFocusedPoint.juniorHighBridge}</span>
                      </div>
                    </div>
                  )}

                  {/* 教科書版本比對 */}
                  {activeDimension === 'all' && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                        📚 三大教科書版本（康軒・翰林・南一）命題焦點比對：
                      </span>
                      <MathText text={currentFocusedPoint.textbookFocus} />
                    </div>
                  )}

                  {/* 維度 5: 🔗 相關知識點與概念拓撲網絡 */}
                  {(activeDimension === 'all' || activeDimension === 'network') && currentFocusedPoint.relatedPoints && currentFocusedPoint.relatedPoints.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <Network size={14} />
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                              <span>🔗 和它有關的知識點</span>
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
                  <span className="text-xs text-slate-400">108 課綱圖解卡</span>
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
              style={{ minHeight: '380px' }}
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
