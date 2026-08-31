import { useState } from 'react';
import { Award, Flame, Zap, Trophy, Star, CheckCircle, X, Sparkles, Heart } from 'lucide-react';
import { useGamification, getXpForNextLevel } from '../../context/GamificationContext';
import PetSanctuaryModal from '../gamification/PetSanctuaryModal';

const GamificationWidget = () => {
  const { 
    xp, 
    level, 
    coins, 
    gems, 
    streak, 
    badges, 
    currentTitle, 
    activePetTemplate, 
    currentPetStats,
    unitStars
  } = useGamification();

  const [isOpen, setIsOpen] = useState(false);
  const [isSanctuaryOpen, setIsSanctuaryOpen] = useState(false);

  const nextLevelXp = getXpForNextLevel(level);
  const currentLevelProgress = Math.min(100, Math.round((xp % 100) / 100 * 100));
  const completedUnitCount = Object.keys(unitStars || {}).length;

  const currentEvolution = activePetTemplate?.evolutions.slice().reverse().find(e => (currentPetStats?.level || 1) >= e.minLevel) || activePetTemplate?.evolutions[0];

  return (
    <div className="gamification-widget" style={{ position: 'relative' }}>
      {/* Mini Status Pill on Header */}
      <div 
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          padding: '5px 12px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-light)',
          fontSize: '0.82rem',
          transition: 'all var(--transition-fast)'
        }}
        title="點擊查看學習護照成就與等級"
        role="button"
        tabIndex={0}
      >
        {/* Flame Streak */}
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-warning)', fontWeight: 800 }}>
          <Flame size={15} />
          <span>{streak}天</span>
        </div>
        <span style={{ color: 'var(--border-strong)', opacity: 0.5 }}>|</span>

        {/* Level */}
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>
          <Zap size={15} />
          <span>Lv.{level}</span>
        </div>

        {/* Gold Coins */}
        <div className="flex items-center gap-1" style={{ color: '#d97706', fontWeight: 800 }}>
          <span>🪙</span>
          <span>{coins}</span>
        </div>

        {/* Active Pet Icon */}
        <div 
          style={{ 
            fontSize: '1rem',
            marginLeft: '2px',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))'
          }}
        >
          {currentEvolution?.emoji || '🦊'}
        </div>
      </div>

      {/* Modal Dropdown */}
      {isOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 998
            }}
            onClick={() => setIsOpen(false)}
          />
          <div 
            className="card animate-fade-in"
            style={{
              position: 'absolute',
              top: '48px',
              right: '0',
              width: '340px',
              maxWidth: 'calc(100vw - 32px)',
              zIndex: 999,
              padding: '20px',
              boxShadow: 'var(--shadow-lg)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-strong)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.3rem' }}>🎓</span>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                    學習護照・榮譽神殿
                  </h4>
                  <span className="text-[11px] text-secondary font-bold">
                    {currentTitle}
                  </span>
                </div>
              </div>
              <button
                style={{ padding: '4px', color: 'var(--text-tertiary)', cursor: 'pointer' }}
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Wallet Row */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <span className="text-xs text-secondary">星光金幣</span>
                <div className="font-extrabold text-amber-500 text-sm">🪙 {coins}</div>
              </div>
              <div className="p-2 rounded-lg text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <span className="text-xs text-secondary">智慧水晶</span>
                <div className="font-extrabold text-pink-500 text-sm">💎 {gems}</div>
              </div>
            </div>

            {/* Level Progress Bar */}
            <div className="mb-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>等級 Lv.{level} ({currentTitle})</span>
                <span>{xp} / {nextLevelXp} XP</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${currentLevelProgress}%`, 
                    height: '100%', 
                    backgroundColor: 'var(--accent-primary)', 
                    borderRadius: '4px',
                    transition: 'width 0.5s ease-out'
                  }} 
                />
              </div>
            </div>

            {/* Active Pet Companion Quick Card */}
            <div 
              className="p-3 mb-3 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--accent-soft)', border: '1px solid var(--accent-primary)' }}
              onClick={() => { setIsOpen(false); setIsSanctuaryOpen(true); }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.8rem' }}>{currentEvolution?.emoji || '🦊'}</span>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
                    守護神獸：{activePetTemplate?.name.split(' ')[0]} (Lv.{currentPetStats?.level})
                  </div>
                  <div className="text-[11px] text-secondary">
                    {activePetTemplate?.buffText}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-amber-500">培育 →</span>
            </div>

            {/* Badges Collection */}
            <div className="mb-3">
              <div className="text-xs font-bold mb-2 text-secondary flex items-center justify-between">
                <span>🏆 已解鎖榮譽勳章 ({badges.length})：</span>
                <span className="text-[11px] text-emerald-500 font-bold">已通關 {completedUnitCount} 單元</span>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {badges.map((b, i) => (
                  <span 
                    key={i} 
                    className="badge text-xs" 
                    style={{ 
                      backgroundColor: 'var(--accent-warning-soft)', 
                      color: 'var(--accent-warning-text)', 
                      fontWeight: 700, 
                      padding: '4px 8px',
                      border: '1px solid var(--accent-warning)'
                    }}
                  >
                    ⭐ {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2.5 border-t text-[11px] text-secondary" style={{ borderTop: '1px solid var(--border-light)', lineHeight: 1.6 }}>
              💡 <strong>經驗金幣攻略</strong>：答對測驗獲 <strong>+20 XP/+5🪙</strong>，通關魔王城堡獲 <strong>+180~650 XP</strong>！
            </div>
          </div>
        </>
      )}

      {/* Sanctuary Modal */}
      <PetSanctuaryModal
        isOpen={isSanctuaryOpen}
        onClose={() => setIsSanctuaryOpen(false)}
      />
    </div>
  );
};

export default GamificationWidget;
