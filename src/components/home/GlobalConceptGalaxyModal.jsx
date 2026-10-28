import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Network, 
  X, 
  Search, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  GraduationCap,
  Radio 
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { getConceptBridge } from '../../data/conceptBridges';
import { triggerHaptic, playSound } from '../../utils/soundEffects';
import SubjectIconBadge from '../common/SubjectIconBadge';

export const GlobalConceptGalaxyModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUnitId, setActiveUnitId] = useState(null);

  // Flatten all units with subject info
  const allUnitsWithBridges = useMemo(() => {
    const list = [];
    coursesData.subjects.forEach(sub => {
      const uList = coursesData.units[sub.id] || [];
      uList.forEach(u => {
        const bridge = getConceptBridge(u.id, sub.id);
        list.push({
          ...u,
          subjectId: sub.id,
          subjectName: sub.name,
          subjectShort: sub.shortName,
          subjectColor: sub.color,
          subjectEmoji: sub.emoji,
          bridge
        });
      });
    });
    return list;
  }, []);

  // Filtered list
  const filteredUnits = useMemo(() => {
    return allUnitsWithBridges.filter(u => {
      const matchSub = selectedSubject === 'all' || u.subjectId === selectedSubject;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchSub;
      const matchText = 
        u.title.toLowerCase().includes(q) ||
        u.description.toLowerCase().includes(q) ||
        (u.keyConcepts && u.keyConcepts.some(kc => kc.toLowerCase().includes(q))) ||
        (u.bridge?.coreMentalModel && u.bridge.coreMentalModel.toLowerCase().includes(q)) ||
        (u.bridge?.juniorHighBridge && u.bridge.juniorHighBridge.toLowerCase().includes(q));
      return matchSub && matchText;
    });
  }, [allUnitsWithBridges, selectedSubject, searchQuery]);

  // Active selected detail
  const currentDetail = useMemo(() => {
    if (!activeUnitId) return filteredUnits[0] || allUnitsWithBridges[0];
    return allUnitsWithBridges.find(u => u.id === activeUnitId) || filteredUnits[0];
  }, [activeUnitId, filteredUnits, allUnitsWithBridges]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="card w-full max-w-5xl h-[92vh] flex flex-col p-4 sm:p-6 animate-scale-up relative overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '28px',
          border: '1.5px solid var(--border-light)',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.45)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-light gap-2">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)'
              }}
            >
              <Network size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-black text-primary m-0 tracking-tight">
                  🌌 知識星空・看看知識怎麼連在一起
                </h2>
                <span className="badge badge-accent text-[11px] font-bold px-2 py-0.5">
                  8 領域 • 64 單元 • 跨學段銜接
                </span>
              </div>
              <p className="text-xs text-secondary m-0 mt-0.5 hidden sm:block">
                看見知識怎麼連起來：以前學過的 ➔ 這一課的重點 ➔ 解題關鍵字 ➔ 國中會學到的
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Subject Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 py-3 border-b border-light">
          {/* Subject buttons */}
          <div className="flex gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 mobile-scroll-row">
            <button
              onClick={() => { setSelectedSubject('all'); playSound('ios_tap'); }}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all flex-shrink-0 ${
                selectedSubject === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-tertiary text-secondary hover:text-primary'
              }`}
            >
              全部 (64)
            </button>
            {coursesData.subjects.map(sub => (
              <button
                key={sub.id}
                onClick={() => { setSelectedSubject(sub.id); playSound('ios_tap'); }}
                className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all flex items-center gap-1 flex-shrink-0 ${
                  selectedSubject === sub.id
                    ? 'text-white shadow-sm'
                    : 'bg-tertiary text-secondary hover:text-primary'
                }`}
                style={{
                  backgroundColor: selectedSubject === sub.id ? sub.color : undefined
                }}
              >
                <span>{sub.emoji}</span>
                <span>{sub.shortName}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" />
            <input
              type="text"
              placeholder="搜尋概念或關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-8 pr-7 py-1 text-xs w-full rounded-full"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-tertiary hover:text-primary"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Main Split Layout: Left Unit Explorer / Right Knowledge Bridge Canvas */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 overflow-hidden">
          {/* Left: Unit Nodes List (5 cols) */}
          <div className="md:col-span-5 overflow-y-auto pr-1 space-y-1.5 max-h-[35vh] md:max-h-full border-r border-light">
            <div className="text-[11px] font-bold text-tertiary mb-1 px-1">
              找到 {filteredUnits.length} 個知識節點（點一下看詳細）：
            </div>

            {filteredUnits.length === 0 ? (
              <div className="text-center py-10 text-secondary text-xs">
                無匹配知識節點，請嘗試其他關鍵字。
              </div>
            ) : (
              filteredUnits.map((u) => {
                const isSelected = currentDetail?.id === u.id;

                return (
                  <div
                    key={u.id}
                    onClick={() => {
                      setActiveUnitId(u.id);
                      triggerHaptic('light');
                      playSound('ios_tap');
                    }}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 select-none ${
                      isSelected
                        ? 'border-indigo-500 shadow-sm'
                        : 'border-light hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                    style={{
                      backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.08)' : 'var(--bg-card)'
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <SubjectIconBadge id={u.subjectId} size="xs" />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-primary truncate">
                          {u.title}
                        </div>
                        <div className="text-[10px] text-secondary flex items-center gap-1.5 mt-0.5">
                          <span>{u.subjectShort}</span>
                          <span>•</span>
                          <span>{u.semester === '6A' ? '6上' : '6下'}</span>
                          {u.keyConcepts?.[0] && (
                            <span className="text-indigo-600 dark:text-indigo-400 truncate">
                              #{u.keyConcepts[0]}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <ArrowRight 
                      size={14} 
                      className={`flex-shrink-0 transition-transform ${isSelected ? 'text-indigo-500 translate-x-0.5' : 'text-slate-300 opacity-60'}`} 
                    />
                  </div>
                );
              })
            )}
          </div>

          {/* Right: Selected Node Detailed Bridge Visualizer (7 cols) */}
          {currentDetail && (
            <div className="md:col-span-7 overflow-y-auto px-1 sm:px-3 space-y-3 max-h-[45vh] md:max-h-full">
              {/* Unit Title Banner */}
              <div 
                className="p-3.5 rounded-2xl border border-light flex justify-between items-center flex-wrap gap-2"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span 
                      className="badge text-[10px] font-bold"
                      style={{ backgroundColor: `${currentDetail.subjectColor}20`, color: currentDetail.subjectColor }}
                    >
                      {currentDetail.subjectName}
                    </span>
                    <span className="badge badge-success text-[10px] font-bold">
                      {currentDetail.semester === '6A' ? '📘 6年級上學期' : '📗 6年級下學期'}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-primary m-0">
                    {currentDetail.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onClose();
                      navigate(`/quiz/${currentDetail.id}`);
                    }}
                    className="btn-outline text-xs px-2.5 py-1 rounded-lg font-bold"
                  >
                    隨堂測驗
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      navigate(`/lesson/${currentDetail.id}`);
                    }}
                    className="btn-primary text-xs px-3 py-1 rounded-lg font-bold flex items-center gap-1"
                  >
                    <span>進入課堂</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* 3-Step Topology Cards */}
              <div className="space-y-2.5">
                {/* 1. Prerequisite */}
                <div 
                  className="p-3 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', borderColor: 'rgba(59, 130, 246, 0.25)' }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                    <Compass size={14} />
                    <span>① 先備知識回溯（喚醒舊經驗・零基礎起步）</span>
                  </div>
                  <p className="text-xs text-secondary m-0 leading-relaxed">
                    {currentDetail.bridge?.prerequisite || '具備國小高年級基礎知識。'}
                  </p>
                </div>

                {/* 2. Core Mental Model */}
                <div 
                  className="p-3 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.25)' }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    <Sparkles size={14} />
                    <span>② 這一課最重要的想法</span>
                  </div>
                  <p className="text-xs text-primary font-medium m-0 leading-relaxed">
                    {currentDetail.bridge?.coreMentalModel || currentDetail.description}
                  </p>
                </div>

                {/* 3. Junior High Bridge */}
                <div 
                  className="p-3 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.25)' }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    <GraduationCap size={14} />
                    <span>③ 國中七年級先修與會考延伸（融會貫通）</span>
                  </div>
                  <p className="text-xs text-secondary m-0 leading-relaxed">
                    {currentDetail.bridge?.juniorHighBridge || '對齊 108 課綱國中七年級第一學期單元。'}
                  </p>
                </div>

                {/* Keyword Radars */}
                {currentDetail.bridge?.keywordRadar && currentDetail.bridge.keywordRadar.length > 0 && (
                  <div 
                    className="p-3 rounded-2xl border border-light"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-primary mb-2">
                      <Radio size={14} className="text-rose-500" />
                      <span>審題關鍵字破題雷達：</span>
                    </div>
                    <div className="space-y-1.5">
                      {currentDetail.bridge.keywordRadar.map((kr, kIdx) => (
                        <div key={kIdx} className="text-[11px] flex items-center justify-between gap-2 p-1.5 rounded-lg bg-card border border-light">
                          <span className="text-secondary truncate">
                            🎯 題幹出現：<strong>「{kr.trigger}」</strong>
                          </span>
                          <span className="badge badge-accent text-[10px] flex-shrink-0 font-bold">
                            ➔ 工具：{kr.tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalConceptGalaxyModal;
