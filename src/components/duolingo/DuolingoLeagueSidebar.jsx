import { useMemo } from 'react';
import {
  Flame,
  Heart,
  Trophy,
  Zap,
  Shield,
  Target,
  Crown,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import { REFERENCE_BOOK_SERIES_108 } from '../../data/curriculumCatalog108';
import { playSound } from '../../utils/soundEffects';

const DuolingoLeagueSidebar = ({ onOpenCompendiumOverview, onQuickPractice }) => {
  const {
    xp = 180,
    todayXp = 80,
    dailyXpGoal = 50,
    setDailyXpGoal,
    streak = 5,
    hearts = 5,
    maxHearts = 5,
    refillHearts,
    unitCrowns = {},
    currentLeague,
    currentTitle,
    activePetTemplate
  } = useGamification();

  const totalCrowns = Object.values(unitCrowns).reduce((acc, c) => acc + c, 0);
  const dailyProgress = Math.min(100, Math.round((todayXp / (dailyXpGoal || 50)) * 100));

  // Simulated dynamic League Leaderboard classmates (100% safe & motivating)
  const leaderboard = useMemo(() => {
    const rivals = [
      { id: 'npc-1', name: '子軒 (康軒學霸)', avatar: '🦁', xp: Math.max(240, xp + 45), badge: '👑 18冠' },
      { id: 'npc-2', name: '宥蓁 (南一滿分王)', avatar: '🦄', xp: Math.max(195, xp + 15), badge: '👑 15冠' },
      { id: 'player', name: `你 (${currentTitle})`, avatar: activePetTemplate?.emoji || '🦊', xp, badge: `👑 ${totalCrowns}冠`, isUser: true },
      { id: 'npc-3', name: '品妍 (翰林小博士)', avatar: '🦉', xp: Math.max(120, xp - 25), badge: '👑 11冠' },
      { id: 'npc-4', name: '宇恩 (雙語小達人)', avatar: '🐬', xp: Math.max(90, xp - 60), badge: '👑 9冠' }
    ];
    return rivals.sort((a, b) => b.xp - a.xp);
  }, [xp, currentTitle, activePetTemplate, totalCrowns]);

  return (
    <div className="flex flex-col gap-4">
      {/* ============================================================ */}
      {/* 1. ❤️ Hearts, Streak & Crown Top Stats Card */}
      {/* ============================================================ */}
      <div
        className="card p-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '22px',
          border: '1.5px solid var(--border-light)'
        }}
      >
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-2xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
            <div className="text-lg font-black text-amber-500 flex items-center justify-center gap-1">
              <Flame size={18} className="fill-amber-500" />
              <span>{streak}</span>
            </div>
            <div className="text-[11px] font-bold text-secondary">連勝天數</div>
          </div>

          <div className="p-2.5 rounded-2xl" style={{ backgroundColor: 'rgba(234, 179, 8, 0.12)' }}>
            <div className="text-lg font-black text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-1">
              <span>👑</span>
              <span>{totalCrowns}</span>
            </div>
            <div className="text-[11px] font-bold text-secondary">榮譽皇冠</div>
          </div>

          <div className="p-2.5 rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
            <div className="text-lg font-black text-red-500 flex items-center justify-center gap-1">
              <Heart size={17} className="fill-red-500" />
              <span>{hearts}/{maxHearts}</span>
            </div>
            <div className="text-[11px] font-bold text-secondary">闖關愛心</div>
          </div>
        </div>

        {hearts < maxHearts && (
          <button
            onClick={() => refillHearts(5)}
            className="w-full mt-3 py-2 px-3 rounded-xl font-black text-xs text-white cursor-pointer"
            style={{ backgroundColor: '#10b981', border: 'none' }}
          >
            💖 點擊免費溫習回滿 5 顆愛心
          </button>
        )}

        {onQuickPractice && (
          <button
            onClick={onQuickPractice}
            className="w-full mt-3 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 cursor-pointer transition-transform active:translate-y-0.5"
            style={{
              backgroundColor: '#58cc02',
              border: 'none',
              boxShadow: '0 4px 0 #3f9102'
            }}
          >
            <span>🏋️ 隨機進階特訓（強化記憶）</span>
          </button>
        )}
      </div>

      {/* ============================================================ */}
      {/* 2. 🎯 Daily XP Goal Ring & Target Switcher */}
      {/* ============================================================ */}
      <div
        className="card p-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '22px',
          border: '1.5px solid var(--border-light)'
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 font-black text-sm text-primary">
            <Target size={17} className="text-emerald-500" />
            <span>每日 XP 學習目標</span>
          </div>
          <span className="badge badge-success text-xs font-black">
            {todayXp} / {dailyXpGoal} XP
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
          <div
            style={{
              width: `${dailyProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #22c55e 0%, #10b981 100%)',
              borderRadius: '999px',
              transition: 'width 0.4s ease'
            }}
          />
        </div>

        {/* Daily Goal Tier Selector */}
        <div className="flex items-center justify-between gap-1.5">
          {[
            { xp: 20, label: '輕鬆 20' },
            { xp: 50, label: '標準 50' },
            { xp: 100, label: '狂熱 100' },
            { xp: 150, label: '學霸 150' }
          ].map((g) => (
            <button
              key={g.xp}
              onClick={() => {
                setDailyXpGoal(g.xp);
                playSound('ios_tap');
              }}
              className="flex-1 py-1.5 px-1 rounded-xl text-[11px] font-black transition-all cursor-pointer"
              style={{
                backgroundColor: dailyXpGoal === g.xp ? 'rgba(16, 185, 129, 0.16)' : 'var(--bg-tertiary)',
                color: dailyXpGoal === g.xp ? '#059669' : 'var(--text-secondary)',
                border: dailyXpGoal === g.xp ? '1.5px solid #10b981' : '1px solid transparent'
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. 🏆 Duolingo League Leaderboard (聯賽晉級榜) */}
      {/* ============================================================ */}
      <div
        className="card p-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '22px',
          border: '1.5px solid var(--border-light)'
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentLeague?.icon || '🥇'}</span>
            <div>
              <div className="text-sm font-black text-primary">
                {currentLeague?.name || '黃金聯賽'}
              </div>
              <div className="text-[11px] text-secondary">
                每闖關 1 單元即可超越學伴晉級！
              </div>
            </div>
          </div>
          <span
            className="badge font-black text-[11px]"
            style={{ backgroundColor: `${currentLeague?.color || '#eab308'}20`, color: currentLeague?.color || '#eab308' }}
          >
            本週晉級區
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {leaderboard.map((member, idx) => (
            <div
              key={member.id}
              className="p-2.5 rounded-2xl flex items-center justify-between gap-2 text-xs"
              style={{
                backgroundColor: member.isUser ? 'rgba(34, 197, 94, 0.12)' : 'var(--bg-tertiary)',
                border: member.isUser ? '1.5px solid #22c55e' : '1px solid transparent'
              }}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[11px] flex-shrink-0"
                  style={{
                    backgroundColor: idx === 0 ? '#fbbf24' : idx === 1 ? '#94a3b8' : idx === 2 ? '#d97706' : 'var(--bg-secondary)',
                    color: idx < 3 ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {idx + 1}
                </span>
                <span className="text-base flex-shrink-0">{member.avatar}</span>
                <div className="truncate">
                  <div className="font-black text-primary truncate">{member.name}</div>
                  <div className="text-[10px] text-secondary">{member.badge}</div>
                </div>
              </div>
              <span className="font-black text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                {member.xp} XP
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. 📚 108 課綱參考書四大系列快速圖鑑 */}
      {/* ============================================================ */}
      <div
        className="card p-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '22px',
          border: '1.5px solid var(--border-light)'
        }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5 font-black text-sm text-primary">
            <BookOpen size={16} className="text-indigo-500" />
            <span>108課綱參考書完整收錄</span>
          </div>
          {onOpenCompendiumOverview && (
            <button
              onClick={onOpenCompendiumOverview}
              className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              style={{ background: 'none', border: 'none' }}
            >
              展開總表 ➔
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {REFERENCE_BOOK_SERIES_108.map((s) => (
            <div
              key={s.id}
              className="p-2.5 rounded-xl text-xs"
              style={{ backgroundColor: 'var(--bg-tertiary)', borderLeft: `3.5px solid ${s.color}` }}
            >
              <div className="font-black text-primary">{s.title.split('（')[0]}</div>
              <div className="text-[11px] text-secondary mt-0.5">
                {s.books.map(b => b.name).join('・')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuolingoLeagueSidebar;
