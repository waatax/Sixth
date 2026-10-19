import { useState, useMemo } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Copy, 
  Check, 
  SlidersHorizontal,
  Flame,
  Target
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { allExamNotes } from '../../data/examNotes';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

/**
 * 🎓 最強小六 (Sixth) 108 課綱 64 單元知識點掌握度總體檢與自律精熟儀表板
 * 幫助學生全面審視八大學科、64 個單元的考點掌握度、三大版本對齊度與必勝口訣
 */
const KnowledgeMasteryModal = ({ isOpen, onClose, onNavigateUnit }) => {
  const [activeSubject, setActiveSubject] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'unmastered' | 'mastered' | 'kangHsuan' | 'hanLin' | 'nanI'
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // 讀取全域所有單元的已勾選自測項目 (localStorage)
  const masteryStats = useMemo(() => {
    let totalCheckpoints = 0;
    let checkedCount = 0;
    let goldCount = 0;
    let silverCount = 0;
    let bronzeCount = 0;

    const unitDetails = [];

    coursesData.subjects.forEach(sub => {
      const sem6A = JSON.parse(localStorage.getItem(`sixth_exam_notes_chk_${sub.id}_6A`) || '{}');
      const sem6B = JSON.parse(localStorage.getItem(`sixth_exam_notes_chk_${sub.id}_6B`) || '{}');
      const allChk = { ...sem6A, ...sem6B };

      const subUnits = coursesData.units[sub.id] || [];
      subUnits.forEach(u => {
        const note = allExamNotes[u.id];
        const list = note?.selfChecklist || [];
        totalCheckpoints += list.length;

        let uChecked = 0;
        list.forEach((_, idx) => {
          if (allChk[`${u.id}_${idx}`]) {
            uChecked++;
            checkedCount++;
          }
        });

        const percent = list.length > 0 ? Math.round((uChecked / list.length) * 100) : 100;
        let level = 'bronze';
        let levelLabel = '初步理解';
        let levelIcon = '🥉';

        if (percent === 100) {
          level = 'gold';
          levelLabel = '奪冠滿分';
          levelIcon = '🥇';
          goldCount++;
        } else if (percent >= 50) {
          level = 'silver';
          levelLabel = '穩固精熟';
          levelIcon = '🥈';
          silverCount++;
        } else {
          bronzeCount++;
        }

        unitDetails.push({
          unitId: u.id,
          title: u.title,
          subjectId: sub.id,
          subjectName: sub.name,
          subjectShort: sub.shortName,
          subjectColor: sub.color,
          semester: note?.semester || (u.term === '6-down' ? '6B' : '6A'),
          termLabel: note?.term || (u.term === '6-down' ? '6下' : '6上'),
          examScopeLabel: note?.examScopeLabel || '段考重點',
          totalChk: list.length,
          checkedChk: uChecked,
          percent,
          level,
          levelLabel,
          levelIcon,
          quickRescue: note?.quickRescue || '',
          hotKeywords: note?.hotKeywords || '',
          versionFocus: note?.versionFocus || null
        });
      });
    });

    const overallPercent = totalCheckpoints > 0 ? Math.round((checkedCount / totalCheckpoints) * 100) : 0;

    return {
      totalCheckpoints,
      checkedCount,
      overallPercent,
      goldCount,
      silverCount,
      bronzeCount,
      unitDetails
    };
  }, [isOpen]);

  // 過濾單元清單
  const filteredUnits = useMemo(() => {
    let list = masteryStats.unitDetails;

    // 依學科篩選
    if (activeSubject !== 'all') {
      list = list.filter(u => u.subjectId === activeSubject);
    }

    // 依掌握狀態或版本偏好篩選
    if (activeFilter === 'unmastered') {
      list = list.filter(u => u.percent < 100);
    } else if (activeFilter === 'mastered') {
      list = list.filter(u => u.percent === 100);
    } else if (activeFilter === 'kangHsuan') {
      list = list.filter(u => u.versionFocus?.kangHsuan);
    } else if (activeFilter === 'hanLin') {
      list = list.filter(u => u.versionFocus?.hanLin);
    } else if (activeFilter === 'nanI') {
      list = list.filter(u => u.versionFocus?.nanI);
    }

    // 關鍵字搜尋
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(u => 
        u.title.toLowerCase().includes(q) ||
        u.subjectName.toLowerCase().includes(q) ||
        u.quickRescue.toLowerCase().includes(q) ||
        u.hotKeywords.toLowerCase().includes(q)
      );
    }

    return list;
  }, [masteryStats, activeSubject, activeFilter, searchQuery]);

  // 複製全科掌握度總結診斷報告
  const handleCopyReport = () => {
    const lines = [
      `📊 最強小六 (Sixth) 108 課綱全科 64 單元【知識點掌握度體檢診斷書】`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🎯 全科考點總數：${masteryStats.totalCheckpoints} 處 | 已精熟：${masteryStats.checkedCount} 處 (${masteryStats.overallPercent}%)`,
      `🥇 奪冠滿分單元：${masteryStats.goldCount} 個 | 🥈 穩固精熟：${masteryStats.silverCount} 個 | 🥉 待衝刺：${masteryStats.bronzeCount} 個`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `⚠️ 待加強單元重點處方：`,
      ...masteryStats.unitDetails
        .filter(u => u.percent < 100)
        .slice(0, 8)
        .map(u => `• [${u.subjectShort}] ${u.title} (${u.checkedChk}/${u.totalChk} 掌握) ➔ 口訣：“${u.quickRescue}”`),
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🎓 適用三大版本教科書（康軒・翰林・南一）完全對齊先修工程`
    ].join('\n');

    try {
      navigator.clipboard.writeText(lines);
      setCopied(true);
      playSound('coin');
      triggerHaptic('medium');
      dispatchDynamicIsland({
        title: '📋 學習掌握度診斷報告已複製！',
        subtitle: '可傳送給家長、老師或貼於自律筆記中',
        icon: '🏆'
      });
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden bg-secondary text-primary"
        style={{ borderColor: 'var(--border-light)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal 頂部 Header */}
        <div className="p-4 sm:p-6 border-b border-light flex items-center justify-between gap-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                  108 課綱全維度檢測
                </span>
                <span className="text-xs text-secondary font-bold">
                  8 大領域 • 64 單元完整覆蓋
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-primary m-0 mt-0.5 flex items-center gap-2">
                <span>全單元知識點掌握度體檢矩陣</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  總掌握 {masteryStats.overallPercent}%
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReport}
              className="btn-outline text-xs font-bold py-1.5 px-3 rounded-xl flex items-center gap-1.5 hidden sm:inline-flex"
              title="一鍵複製全科掌握度總結診斷報告"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? '已複製報告' : '複製診斷報告'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-tertiary transition-colors"
              title="關閉"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 核心進度總覽 Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-light bg-primary/50 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4 flex-wrap text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>全域考點：{masteryStats.checkedCount} / {masteryStats.totalCheckpoints} 處</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <span>🥇 滿分單元：{masteryStats.goldCount}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span>🥈 熟練中：{masteryStats.silverCount}</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-500">
              <span>🥉 待衝刺：{masteryStats.bronzeCount}</span>
            </div>
          </div>

          <div className="w-full sm:w-48 h-2 rounded-full overflow-hidden bg-tertiary border border-light">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${masteryStats.overallPercent}%` }}
            />
          </div>
        </div>

        {/* 篩選與搜尋工具塢 */}
        <div className="p-4 sm:p-5 border-b border-light space-y-3 bg-secondary">
          {/* 學科 Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => { setActiveSubject('all'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeSubject === 'all' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-tertiary text-secondary hover:text-primary'
              }`}
            >
              🌟 全部學科 (64)
            </button>
            {coursesData.subjects.map(s => (
              <button
                key={s.id}
                onClick={() => { setActiveSubject(s.id); playSound('click'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                  activeSubject === s.id 
                    ? 'text-white shadow-sm' 
                    : 'bg-tertiary text-secondary hover:text-primary'
                }`}
                style={activeSubject === s.id ? { backgroundColor: s.color } : {}}
              >
                <span>{s.emoji}</span>
                <span>{s.shortName}</span>
              </button>
            ))}
          </div>

          {/* 狀態過濾與搜尋輸入 */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-xs text-tertiary flex items-center gap-1 mr-1">
                <SlidersHorizontal size={13} />
                <span>篩選：</span>
              </span>
              {[
                { id: 'all', label: '全部狀態' },
                { id: 'unmastered', label: '⚠️ 待加強 (<100%)' },
                { id: 'mastered', label: '🥇 已滿分 (100%)' },
                { id: 'kangHsuan', label: '🟢 康軒重點' },
                { id: 'hanLin', label: '🔵 翰林重點' },
                { id: 'nanI', label: '🟣 南一重點' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => { setActiveFilter(f.id); playSound('click'); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    activeFilter === f.id 
                      ? 'bg-primary text-secondary dark:bg-white dark:text-slate-900 shadow-sm' 
                      : 'bg-tertiary/60 text-secondary hover:text-primary'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-60">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" />
              <input
                type="text"
                placeholder="搜尋單元名稱或口訣..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-light bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* 單元清單內容區域 (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 bg-primary/20">
          {filteredUnits.length === 0 ? (
            <div className="py-12 text-center text-secondary">
              <Sparkles size={24} className="mx-auto text-tertiary mb-2" />
              <p className="text-sm font-bold">沒有符合當前篩選條件的單元</p>
              <button 
                onClick={() => { setActiveFilter('all'); setActiveSubject('all'); setSearchQuery(''); }}
                className="btn-outline text-xs mt-3 px-3 py-1.5 rounded-xl"
              >
                重置所有過濾條件
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredUnits.map(unit => (
                <div 
                  key={unit.unitId}
                  className="p-4 rounded-2xl border transition-all duration-200 hover:shadow-md flex flex-col justify-between bg-primary"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  <div>
                    {/* Top Badges & Level */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span 
                          className="text-[11px] font-black px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${unit.subjectColor}15`, 
                            color: unit.subjectColor,
                            border: `1px solid ${unit.subjectColor}30`
                          }}
                        >
                          {unit.subjectShort}
                        </span>
                        <span className="text-[11px] font-bold text-secondary bg-tertiary px-2 py-0.5 rounded-full">
                          {unit.termLabel} • {unit.examScopeLabel}
                        </span>
                      </div>

                      {/* Mastery Badge */}
                      <div className="flex items-center gap-1 text-xs font-black px-2 py-0.5 rounded-full bg-tertiary border border-light">
                        <span>{unit.levelIcon}</span>
                        <span>{unit.percent}%</span>
                      </div>
                    </div>

                    {/* Unit Title */}
                    <h3 className="text-sm font-black text-primary m-0 mb-2 leading-snug">
                      {unit.title}
                    </h3>

                    {/* Quick Rescue Mnemonic Preview */}
                    {unit.quickRescue && (
                      <div className="p-2.5 rounded-xl mb-2.5 text-xs font-medium bg-amber-500/8 border border-amber-500/20 text-amber-700 dark:text-amber-300">
                        <div className="flex items-center gap-1 font-bold text-[11px] text-amber-600 dark:text-amber-400 mb-0.5">
                          <Flame size={12} />
                          <span>考前 5 秒瞬解口訣：</span>
                        </div>
                        <p className="m-0 leading-relaxed font-bold">“{unit.quickRescue}”</p>
                      </div>
                    )}

                    {/* Version Pills */}
                    {unit.versionFocus && (
                      <div className="flex items-center gap-1.5 text-[11px] text-secondary font-bold flex-wrap mb-3">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/25">
                          康軒情境
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 border border-blue-500/25">
                          翰林圖解
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 border border-purple-500/25">
                          南一防雷
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action & Checklist Progress */}
                  <div className="pt-3 border-t border-light flex items-center justify-between gap-2">
                    <div className="text-xs text-secondary font-bold flex items-center gap-1.5">
                      <Target size={13} className="text-indigo-500" />
                      <span>自測：{unit.checkedChk} / {unit.totalChk} 考點</span>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onNavigateUnit(unit.subjectId, unit.semester, unit.unitId);
                      }}
                      className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>前往複習講義</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMasteryModal;
