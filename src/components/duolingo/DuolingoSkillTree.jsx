import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  BookOpen,
  Trophy,
  Star,
  CheckCircle2,
  Layers,
  Gift,
  Dumbbell
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGamification } from '../../context/GamificationContext';
import { getUnitCompleteCatalog } from '../../data/curriculumCatalog108';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

// Duolingo S-curve horizontal offset pattern (pixels from center)
const ZIGZAG_OFFSETS = [0, -48, -76, -42, 0, 48, 76, 42];

const UNIT_BANNER_PALETTES = [
  { bg: 'linear-gradient(135deg, #58cc02 0%, #16a34a 100%)', border: '#15803d', btnBg: '#16a34a', shadow: '#15803d' },
  { bg: 'linear-gradient(135deg, #1cb0f6 0%, #0284c7 100%)', border: '#0369a1', btnBg: '#0284c7', shadow: '#0369a1' },
  { bg: 'linear-gradient(135deg, #ce82ff 0%, #9333ea 100%)', border: '#7e22ce', btnBg: '#9333ea', shadow: '#7e22ce' },
  { bg: 'linear-gradient(135deg, #ff9600 0%, #ea580c 100%)', border: '#c2410c', btnBg: '#ea580c', shadow: '#c2410c' },
  { bg: 'linear-gradient(135deg, #ff4b4b 0%, #e11d48 100%)', border: '#be123c', btnBg: '#e11d48', shadow: '#be123c' },
  { bg: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', border: '#0f766e', btnBg: '#0d9488', shadow: '#0f766e' }
];

const DuolingoSkillTree = ({
  units = [],
  subject,
  selectedVersion = 'all',
  onStartLesson,
  onOpenCompendium
}) => {
  const {
    unitCrowns = {},
    unitStars = {},
    addCoins,
    addXp
  } = useGamification();

  const [activePopoverKey, setActivePopoverKey] = useState(
    units[0] ? `${units[0].id}-lesson` : null
  );
  const [openedChests, setOpenedChests] = useState(() => {
    try {
      const raw = localStorage.getItem('sixth_duolingo_chests_v1');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [chestToast, setChestToast] = useState(null);

  if (!units || units.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-secondary">目前篩選條件下尚無單元。</p>
      </div>
    );
  }

  const handleOpenChest = (unit) => {
    const chestKey = `${unit.id}-chest`;
    if (openedChests[chestKey]) {
      setChestToast(`🎁 「${unit.badge || unit.title}」單元寶箱已領取過囉！`);
      setTimeout(() => setChestToast(null), 2400);
      return;
    }
    const next = { ...openedChests, [chestKey]: true };
    setOpenedChests(next);
    try {
      localStorage.setItem('sixth_duolingo_chests_v1', JSON.stringify(next));
    } catch {
      // ignore storage quota errors
    }
    addCoins(25);
    addXp(20, `chest_${unit.id}`);
    playSound('levelup');
    confetti({ particleCount: 70, spread: 65, origin: { y: 0.65 } });
    setChestToast(`🎁 寶箱開啟！獲得 +25 金幣 與 +20 XP！`);
    dispatchDynamicIsland({
      title: '🎁 單元補給寶箱開啟！',
      subtitle: '獲得 +25 金幣 & +20 XP 獎勵',
      icon: '💎'
    });
    setTimeout(() => setChestToast(null), 2800);
  };

  let globalNodeCounter = 0;

  return (
    <div className="duolingo-skill-tree-wrapper flex flex-col gap-8 py-2 relative select-none">
      {/* Floating Chest Reward Toast */}
      {chestToast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl font-black text-xs sm:text-sm text-white shadow-2xl animate-fade-in"
          style={{
            backgroundColor: '#f59e0b',
            boxShadow: '0 6px 0 #b45309, 0 12px 28px rgba(0,0,0,0.35)'
          }}
        >
          {chestToast}
        </div>
      )}

      {units.map((unit, uIdx) => {
        const catalog = unit.catalog || getUnitCompleteCatalog(unit);
        const crowns =
          unitCrowns[unit.id] ?? (unitStars[unit.id] ? Math.min(3, unitStars[unit.id]) : 0);
        const palette = UNIT_BANNER_PALETTES[uIdx % UNIT_BANNER_PALETTES.length];
        const chestOpened = !!openedChests[`${unit.id}-chest`];

        // Version specific chapter title
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

        // 4 Duolingo sub-nodes per unit (modeled after Arch's CoursePath.tsx)
        const subNodes = [
          {
            key: `${unit.id}-lesson`,
            kind: 'lesson',
            stage: 'lesson',
            icon: '⭐',
            label: '新觀念入門',
            subLabel: '重點速覽 + 5題基礎',
            xpText: '+30 XP',
            done: crowns >= 1,
            active: crowns === 0
          },
          {
            key: `${unit.id}-practice`,
            kind: 'practice',
            stage: 'practice',
            icon: '🏋️',
            label: '進階混合練習',
            subLabel: '步驟排序・是非・填空',
            xpText: '+42 XP',
            done: crowns >= 2,
            active: crowns === 1
          },
          {
            key: `${unit.id}-chest`,
            kind: 'chest',
            stage: 'chest',
            icon: chestOpened ? '✨' : '🎁',
            label: chestOpened ? '寶箱已領取' : '單元補給寶箱',
            subLabel: '點擊領取 +25 金幣',
            xpText: '+25 金幣',
            done: chestOpened,
            active: crowns >= 1 && !chestOpened
          },
          {
            key: `${unit.id}-challenge`,
            kind: 'challenge',
            stage: 'challenge',
            icon: crowns >= 3 ? '👑' : '🏆',
            label: '單元王牌挑戰',
            subLabel: '全版本綜合壓軸 (XP×1.5)',
            xpText: '+75 XP',
            done: crowns >= 3,
            active: crowns === 2
          }
        ];

        return (
          <section key={unit.id} className="w-full flex flex-col items-center">
            {/* ============================================================ */}
            {/* 🏳️ Duolingo Colored Unit Header Banner (Arch CoursePath style) */}
            {/* ============================================================ */}
            <div
              className="w-full rounded-3xl p-5 text-white shadow-md transition-all"
              style={{
                background: palette.bg,
                borderBottom: `5px solid ${palette.border}`
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/20 text-[11px] font-black uppercase tracking-wider">
                      {unit.semester === '6A' ? '📘 6上' : '📗 6下'}・第 {uIdx + 1} 單元
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black">
                      👑 皇冠 {crowns} / 5
                    </span>
                    <span className="text-[11px] font-bold opacity-90">
                      {catalog.termLabel}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black m-0 mt-1.5 leading-snug">
                    {unit.title}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90 m-0 mt-1 leading-relaxed">
                    {versionChapterText} — {unit.description}
                  </p>
                </div>

                {/* Right Action Buttons on Unit Banner: Guidebook + Textbook Matrix + Lesson Page */}
                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <button
                    onClick={() => onStartLesson && onStartLesson(unit, 'guide')}
                    className="px-3.5 py-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                    style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}
                  >
                    <BookOpen size={14} />
                    <span>📖 重點指南</span>
                  </button>

                  <button
                    onClick={() => onOpenCompendium && onOpenCompendium(unit)}
                    className="px-3.5 py-2 rounded-2xl bg-black/20 hover:bg-black/30 text-white font-black text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                    style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}
                  >
                    <Layers size={14} />
                    <span>📚 課本參考書</span>
                  </button>

                  <Link
                    to={`/lesson/${unit.linkedUnitId || unit.id}`}
                    className="px-3 py-2 rounded-2xl bg-black/20 hover:bg-black/30 text-white font-black text-xs flex items-center gap-1 transition-colors"
                    style={{
                      textDecoration: 'none',
                      border: '1.5px solid rgba(255,255,255,0.25)'
                    }}
                  >
                    <span>🎓 教學頁</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 🟢 Zig-Zag Winding Path of 4 Sub-Nodes per Unit */}
            {/* ============================================================ */}
            <div className="relative py-6 flex flex-col items-center gap-5 w-full max-w-md mx-auto">
              {subNodes.map((node, nIdx) => {
                const offsetPx = ZIGZAG_OFFSETS[globalNodeCounter % ZIGZAG_OFFSETS.length];
                globalNodeCounter++;
                const isPopoverOpen = activePopoverKey === node.key;

                // Node visual styling
                const isChest = node.kind === 'chest';
                const nodeBg = isChest
                  ? node.done
                    ? 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)'
                    : 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
                  : node.done
                  ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                  : node.active
                  ? palette.bg
                  : 'linear-gradient(135deg, #64748b 0%, #475569 100%)';

                const nodeShadow = isChest
                  ? node.done
                    ? '#64748b'
                    : '#b45309'
                  : node.done
                  ? '#b45309'
                  : node.active
                  ? palette.shadow
                  : '#334155';

                return (
                  <div
                    key={node.key}
                    className="relative flex flex-col items-center"
                    style={{
                      transform: `translateX(${offsetPx}px)`,
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    {/* Floating "START / 開始" Callout Pill on Active Node */}
                    {node.active && !isPopoverOpen && (
                      <button
                        onClick={() => {
                          if (isChest) {
                            handleOpenChest(unit);
                          } else {
                            onStartLesson && onStartLesson(unit, node.stage);
                          }
                        }}
                        className="mb-2 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 shadow-md border-2 animate-bounce cursor-pointer"
                        style={{
                          color: palette.btnBg,
                          borderColor: palette.btnBg
                        }}
                      >
                        START・點此開始 👇
                      </button>
                    )}

                    {/* 3D Tactile Circular Node Button */}
                    <button
                      onClick={() => {
                        playSound('ios_tap');
                        triggerHaptic('light');
                        if (isChest) {
                          handleOpenChest(unit);
                        } else {
                          setActivePopoverKey(isPopoverOpen ? null : node.key);
                        }
                      }}
                      onDoubleClick={() => {
                        if (!isChest && onStartLesson) {
                          onStartLesson(unit, node.stage);
                        }
                      }}
                      className={`w-20 h-20 rounded-full flex flex-col items-center justify-center text-white cursor-pointer transition-transform active:translate-y-1 hover:scale-105 relative ${
                        node.active ? 'ring-8 ring-emerald-400/25' : ''
                      }`}
                      style={{
                        background: nodeBg,
                        border: '4px solid rgba(255, 255, 255, 0.85)',
                        boxShadow: `0 7px 0 ${nodeShadow}, 0 12px 20px rgba(0, 0, 0, 0.18)`
                      }}
                      aria-label={`${unit.title} - ${node.label}`}
                    >
                      <span className="text-2xl sm:text-3xl leading-none">{node.icon}</span>
                      {node.done && !isChest && (
                        <span
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black bg-emerald-500 text-white border-2 border-white shadow"
                          title="已通關"
                        >
                          ✓
                        </span>
                      )}
                    </button>

                    {/* Compact Node Label Below Circle */}
                    <span className="mt-2 text-xs font-black text-primary text-center">
                      {node.label}
                    </span>

                    {/* ============================================================ */}
                    {/* 💬 Duolingo Popover Card Under Node */}
                    {/* ============================================================ */}
                    {isPopoverOpen && !isChest && (
                      <div
                        className="mt-3 w-72 p-4 rounded-2xl shadow-2xl border-2 text-left animate-fade-in z-30"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: palette.btnBg,
                          boxShadow: '0 16px 36px rgba(0,0,0,0.28)'
                        }}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="text-[11px] font-black uppercase tracking-wider"
                            style={{ color: palette.btnBg }}
                          >
                            第 {uIdx + 1} 單元・第 {nIdx + 1} 站
                          </span>
                          <span className="badge badge-warning text-[10px] font-black">
                            {node.xpText}
                          </span>
                        </div>
                        <div className="font-black text-sm text-primary mt-1">
                          {node.icon} {node.label}
                        </div>
                        <div className="text-xs text-secondary mt-0.5 mb-3">
                          {node.subLabel}
                        </div>

                        <button
                          onClick={() => {
                            setActivePopoverKey(null);
                            onStartLesson && onStartLesson(unit, node.stage);
                          }}
                          className="w-full py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 cursor-pointer transition-transform active:translate-y-0.5"
                          style={{
                            backgroundColor: palette.btnBg,
                            border: 'none',
                            boxShadow: `0 4px 0 ${palette.shadow}`
                          }}
                        >
                          <Play size={14} className="fill-white" />
                          <span>
                            {node.done ? '再練一次衝金冠' : '開始闖關'} ({node.xpText})
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DuolingoSkillTree;
