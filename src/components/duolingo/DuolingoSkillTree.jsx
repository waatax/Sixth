import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  BookOpen,
  FileText,
  Trophy,
  Star,
  Sparkles,
  Swords,
  CheckCircle2,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import { getUnitCompleteCatalog } from '../../data/curriculumCatalog108';
import { playSound, triggerHaptic } from '../../utils/soundEffects';

// Duolingo S-curve horizontal offset pattern (percentage from center)
const WAVE_OFFSETS = [0, -56, -84, -42, 16, 68, 86, 42, -16, -68, -40, 0];

const DuolingoSkillTree = ({
  units = [],
  subject,
  selectedVersion = 'all',
  onStartLesson,
  onOpenCompendium
}) => {
  const { unitCrowns = {}, unitStars = {}, readLessons = {} } = useGamification();
  const [activePopoverUnitId, setActivePopoverUnitId] = useState(units[0]?.id || null);

  if (!units || units.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-secondary">目前篩選條件下尚無單元。</p>
      </div>
    );
  }

  return (
    <div className="duolingo-skill-tree-wrapper flex flex-col items-center py-4 relative select-none">
      {units.map((unit, idx) => {
        const catalog = unit.catalog || getUnitCompleteCatalog(unit);
        const crowns = unitCrowns[unit.id] ?? (unitStars[unit.id] ? Math.min(3, unitStars[unit.id]) : 0);
        const isLegendary = crowns >= 5;
        const isMastered = crowns >= 3;
        const isStarted = crowns > 0 || !!readLessons[unit.id];
        const isSelected = activePopoverUnitId === unit.id;
        const offsetPx = WAVE_OFFSETS[idx % WAVE_OFFSETS.length];

        // Version specific subtitle
        const versionChapterText =
          selectedVersion === 'kangHsuan'
            ? catalog.textbooks.kangHsuan.chapterTitle
            : selectedVersion === 'nanI'
            ? catalog.textbooks.nanI.chapterTitle
            : selectedVersion === 'hanLin'
            ? catalog.textbooks.hanLin.chapterTitle
            : selectedVersion === 'hessLongman'
            ? catalog.textbooks.hessLongman.chapterTitle
            : `${catalog.semesterLabel}・${unit.title}`;

        const versionFocusText =
          selectedVersion === 'kangHsuan'
            ? catalog.textbooks.kangHsuan.focus
            : selectedVersion === 'nanI'
            ? catalog.textbooks.nanI.focus
            : selectedVersion === 'hanLin'
            ? catalog.textbooks.hanLin.focus
            : selectedVersion === 'hessLongman'
            ? catalog.textbooks.hessLongman.focus
            : catalog.quickRescue.replace(/\$/g, '');

        // Node visual theme
        const nodeBg = isLegendary
          ? 'linear-gradient(135deg, #f59e0b 0%, #eab308 50%, #9333ea 100%)'
          : isMastered
          ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
          : isStarted
          ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
          : `linear-gradient(135deg, ${subject?.color || '#6366f1'} 0%, #4f46e5 100%)`;

        const nodeShadowColor = isLegendary
          ? '#b45309'
          : isMastered
          ? '#15803d'
          : isStarted
          ? '#1d4ed8'
          : '#3730a3';

        // Show semester divider banner when switching from 6A to 6B or at index 0
        const prevUnit = idx > 0 ? units[idx - 1] : null;
        const showSemesterBanner = idx === 0 || (prevUnit && prevUnit.semester !== unit.semester);
        // Show Midterm / Final Castle Checkpoint after every 3rd unit
        const showCastleCheckpoint = (idx + 1) % 3 === 0;

        return (
          <div key={unit.id} className="w-full flex flex-col items-center">
            {/* ============================================================ */}
            {/* 🏳️ Semester Section Banner (6上 / 6下 分水嶺) */}
            {/* ============================================================ */}
            {showSemesterBanner && (
              <div
                className="w-full max-w-xl mb-7 mt-2 p-4 rounded-3xl flex items-center justify-between gap-3 text-white shadow-md"
                style={{
                  background:
                    unit.semester === '6A'
                      ? 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)'
                      : 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                  boxShadow:
                    unit.semester === '6A'
                      ? '0 6px 0 #1e3a8a'
                      : '0 6px 0 #065f46'
                }}
              >
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider opacity-90">
                    108 課綱 {unit.semester === '6A' ? '六年級上學期 (6上)' : '六年級下學期 (6下)'}・{subject?.name}
                  </div>
                  <div className="text-base sm:text-lg font-black mt-0.5">
                    {unit.semester === '6A'
                      ? '📘 上學期核心技能樹（期中 & 期末全版本）'
                      : '📗 下學期進階與畢業總複習技能樹'}
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-2xl bg-white/20 text-xs font-black backdrop-blur-sm">
                  {unit.semester === '6A' ? '6上學程' : '6下學程'}
                </span>
              </div>
            )}

            {/* ============================================================ */}
            {/* 🟢 3D Circular Duolingo Skill Node */}
            {/* ============================================================ */}
            <div
              className="flex flex-col items-center relative my-3"
              style={{
                transform: `translateX(${offsetPx}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Floating Callout Pill on Current Node */}
              {idx === 0 && !isSelected && (
                <button
                  onClick={() => onStartLesson && onStartLesson(unit)}
                  className="mb-2 px-3 py-1 rounded-full text-xs font-black bg-white dark:bg-slate-800 text-emerald-600 shadow-md border border-emerald-500 animate-bounce cursor-pointer"
                >
                  🎮 點此立即玩第 1 關 👇
                </button>
              )}

              {/* Outer Mastery Progress Ring + 3D Button */}
              <div className="relative flex items-center justify-center">
                <button
                  onClick={() => {
                    playSound('ios_tap');
                    triggerHaptic('medium');
                    setActivePopoverUnitId(isSelected ? null : unit.id);
                  }}
                  onDoubleClick={() => onStartLesson && onStartLesson(unit)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-white cursor-pointer transition-transform active:translate-y-1 hover:scale-105 relative"
                  style={{
                    background: nodeBg,
                    border: '4px solid rgba(255, 255, 255, 0.85)',
                    boxShadow: `0 8px 0 ${nodeShadowColor}, 0 14px 24px rgba(0, 0, 0, 0.22)`
                  }}
                  aria-label={unit.title}
                >
                  <span className="text-2xl sm:text-3xl leading-none">
                    {isLegendary ? '👑' : subject?.emoji || '⭐'}
                  </span>
                  <span className="text-[10px] font-black mt-1 tracking-tight opacity-95">
                    第 {idx + 1} 關
                  </span>

                  {/* Crown Level Badge on Bottom-Right of Circle */}
                  <div
                    className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full text-[11px] font-black flex items-center gap-0.5 shadow"
                    style={{
                      backgroundColor: isLegendary ? '#9333ea' : '#fbbf24',
                      color: isLegendary ? '#ffffff' : '#78350f',
                      border: '2px solid #ffffff'
                    }}
                  >
                    <span>👑</span>
                    <span>{crowns}/5</span>
                  </div>
                </button>
              </div>

              {/* Compact Label Underneath Node + 1-Click Direct Play Pill */}
              <div
                onClick={() => setActivePopoverUnitId(isSelected ? null : unit.id)}
                className="mt-3 max-w-[230px] text-center cursor-pointer flex flex-col items-center gap-1"
              >
                <div className="text-xs sm:text-sm font-black text-primary leading-snug">
                  {unit.badge || unit.title}
                </div>
                <div className="text-[11px] text-secondary font-semibold truncate max-w-[210px]">
                  {versionChapterText}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartLesson && onStartLesson(unit);
                  }}
                  className="mt-1 px-3 py-1 rounded-full text-[11px] font-black text-white flex items-center gap-1 cursor-pointer transition-transform hover:scale-105"
                  style={{
                    backgroundColor: '#16a34a',
                    border: 'none',
                    boxShadow: '0 2px 0 #15803d'
                  }}
                >
                  <Play size={11} className="fill-white" />
                  <span>🎮 開始學習遊戲</span>
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 💬 Interactive Duolingo Node Action Card (Popover Drawer) */}
            {/* ============================================================ */}
            {isSelected && (
              <div
                className="w-full max-w-lg my-3 p-5 rounded-3xl animate-fade-in shadow-xl relative z-20"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: `2.5px solid ${subject?.color || '#22c55e'}`,
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.22)'
                }}
              >
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className="badge font-black text-xs"
                      style={{
                        backgroundColor: unit.semester === '6A' ? 'rgba(37, 99, 235, 0.14)' : 'rgba(5, 150, 105, 0.14)',
                        color: unit.semester === '6A' ? '#2563eb' : '#059669'
                      }}
                    >
                      {unit.semester === '6A' ? '📘 6上' : '📗 6下'}・{catalog.termLabel}
                    </span>
                    <span className="badge badge-warning text-xs font-black">
                      👑 皇冠等級 {crowns} / 5 {isLegendary ? '(傳奇金冠)' : ''}
                    </span>
                    <span className="badge text-[11px] font-bold bg-indigo-500/15 text-indigo-600">
                      {catalog.competencyCode}
                    </span>
                  </div>
                </div>

                {/* Title & Version Mapping */}
                <h3 className="text-base sm:text-lg font-black text-primary m-0">
                  {unit.title}
                </h3>
                <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
                  📌 {versionChapterText}
                </div>
                <p className="text-xs text-secondary mt-1.5 mb-3 leading-relaxed">
                  {versionFocusText}
                </p>

                {/* Textbook & Reference Quick Chips */}
                <div
                  className="p-3 rounded-2xl mb-3.5 text-xs"
                  style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}
                >
                  <div className="font-black text-primary mb-1 flex items-center justify-between">
                    <span>📚 對應課本與參考書重點：</span>
                    <button
                      onClick={() => onOpenCompendium && onOpenCompendium(unit)}
                      className="text-blue-600 dark:text-blue-400 font-black hover:underline cursor-pointer"
                      style={{ background: 'none', border: 'none', padding: 0 }}
                    >
                      查看完整三版本與參考書 ➔
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {(unit.keyConcepts || []).map((kc, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-lg text-[11px] font-bold"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                      >
                        #{kc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Duolingo Start Button + Secondary Links */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onStartLesson && onStartLesson(unit)}
                    className="w-full py-3 px-4 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      border: 'none',
                      boxShadow: '0 4px 0 #15803d'
                    }}
                  >
                    <Play size={16} className="fill-white" />
                    <span>
                      {crowns === 0
                        ? '🎮 開始互動學習遊戲 (+40 XP)'
                        : crowns < 5
                        ? `🎮 繼續學習遊戲升冠 (Lv.${crowns} ➔ Lv.${crowns + 1} 👑)`
                        : '🎮 傳奇金冠巔峰學習遊戲 (+50 XP)'}
                    </span>
                  </button>

                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <button
                      onClick={() => onOpenCompendium && onOpenCompendium(unit)}
                      className="btn-outline py-2 px-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Layers size={13} className="text-indigo-500" />
                      <span>課本參考書</span>
                    </button>
                    <Link
                      to={`/lesson/${unit.linkedUnitId || unit.id}`}
                      className="btn-outline py-2 px-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      <BookOpen size={13} className="text-blue-500" />
                      <span>圖解精讀</span>
                    </Link>
                    <Link
                      to={`/quiz/${unit.linkedUnitId || unit.id}`}
                      className="btn-outline py-2 px-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>題庫測驗</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* 🏰 Unit Checkpoint Castle (段考守門員魔王塔) */}
            {/* ============================================================ */}
            {showCastleCheckpoint && (
              <div
                className="my-5 px-5 py-3.5 rounded-3xl flex items-center justify-between gap-4 w-full max-w-md border-2 border-dashed"
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderColor: 'rgba(245, 158, 11, 0.45)'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏰</span>
                  <div>
                    <div className="text-xs font-black text-amber-600 dark:text-amber-400">
                      段考守門員檢定站 #{Math.floor((idx + 1) / 3)}
                    </div>
                    <div className="text-[11px] text-secondary font-semibold">
                      綜合檢驗前 3 關課本與評量必考題型
                    </div>
                  </div>
                </div>
                <Link
                  to="/boss-battle"
                  className="px-3.5 py-2 rounded-xl font-black text-xs text-white flex items-center gap-1 flex-shrink-0"
                  style={{
                    backgroundColor: '#f59e0b',
                    textDecoration: 'none',
                    boxShadow: '0 3px 0 #b45309'
                  }}
                >
                  <Swords size={13} />
                  <span>挑戰守門員</span>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DuolingoSkillTree;
