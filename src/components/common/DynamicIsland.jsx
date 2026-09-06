import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Eye, 
  Flame, 
  Zap, 
  X, 
  ShieldCheck, 
  ChevronRight,
  Award
} from 'lucide-react';
import { useGamification, getXpForNextLevel } from '../../context/GamificationContext';
import { useTheme } from '../../context/ThemeContext';
import { toggleMute, getMuteState, triggerHaptic, playSound } from '../../utils/soundEffects';

const DynamicIsland = () => {
  const { 
    level, 
    xp, 
    coins, 
    gems, 
    currentTitle, 
    streak, 
    activePetTemplate, 
    currentPetStats 
  } = useGamification();

  const { theme, setTheme } = useTheme();

  // Dynamic Island notification state
  const [notification, setNotification] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(getMuteState());
  const timerRef = useRef(null);

  // Listen to global dynamic island events
  useEffect(() => {
    const handleEvent = (e) => {
      const detail = e.detail;
      if (!detail) return;

      if (timerRef.current) clearTimeout(timerRef.current);

      setNotification(detail);
      triggerHaptic('light');

      timerRef.current = setTimeout(() => {
        setNotification(null);
      }, detail.duration || 3200);
    };

    window.addEventListener('sixth_dynamic_island', handleEvent);
    return () => {
      window.removeEventListener('sixth_dynamic_island', handleEvent);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const xpNeeded = getXpForNextLevel(level);
  const xpPercent = Math.min(100, Math.round((xp / xpNeeded) * 100));

  const handleToggleMute = (e) => {
    e.stopPropagation();
    const muted = toggleMute();
    setIsMuted(muted);
  };

  const handleCycleTheme = (e) => {
    e.stopPropagation();
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'sepia' : 'light';
    setTheme(nextTheme);
    triggerHaptic('selection');
    playSound('ios_toggle');
  };

  return (
    <>
      {/* Top Floating Dynamic Island Capsule */}
      <aside aria-label="系統動態資訊島" className="dynamic-island-wrapper">
        <div
          className="dynamic-island-capsule ios-pressable"
          onClick={() => {
            setIsSheetOpen(true);
            triggerHaptic('selection');
            playSound('ios_tap');
          }}
          style={{
            height: notification ? '44px' : '32px',
            minWidth: notification ? '270px' : '124px',
            maxWidth: '92vw',
            padding: notification ? '0 16px' : '0 10px',
            backgroundColor: '#000000',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}
        >
          {notification ? (
            /* Active Notification State */
            <div className="flex items-center justify-between w-full animate-dynamic-island">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
                  {notification.icon || '✨'}
                </span>
                <div style={{ lineHeight: 1.15, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {notification.title}
                  </div>
                  {notification.subtitle && (
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {notification.subtitle}
                    </div>
                  )}
                </div>
              </div>
              <span 
                style={{
                  fontSize: '0.68rem',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  fontWeight: 800,
                  flexShrink: 0
                }}
              >
                HUD
              </span>
            </div>
          ) : (
            /* Compact Idle State */
            <div className="flex items-center justify-between w-full select-none">
              <div className="flex items-center gap-1.5">
                <span style={{ fontSize: '0.9rem' }}>🎓</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                  Lv.{level}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#34c759',
                    boxShadow: '0 0 6px #34c759' 
                  }} 
                />
                <span style={{ fontSize: '0.7rem', color: '#cbd5e1', fontWeight: 700 }}>
                  {coins}🪙
                </span>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Expanded Agent HUD Sheet (When tapped) */}
      {isSheetOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1001,
            backgroundColor: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 'calc(env(safe-area-inset-top, 20px) + 50px)'
          }}
          onClick={() => setIsSheetOpen(false)}
        >
          <div
            className="animate-dynamic-island"
            style={{
              width: '92%',
              maxWidth: '380px',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '28px',
              padding: '20px',
              boxShadow: '0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.18)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Agent Info */}
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="flex items-center gap-2.5">
                <div 
                  style={{ 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '12px', 
                    backgroundColor: '#1e293b', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {activePetTemplate?.emoji || '🎓'}
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 900, letterSpacing: '-0.01em' }}>
                    {currentTitle}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    Lv.{level} 冒險先鋒特務
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="ios-pressable flex items-center justify-center"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  border: 'none'
                }}
                aria-label="關閉"
              >
                <X size={16} />
              </button>
            </div>

            {/* XP Level Progress Bar */}
            <div className="my-3">
              <div className="flex justify-between items-center mb-1 text-xs" style={{ color: '#cbd5e1' }}>
                <span className="flex items-center gap-1 font-semibold">
                  <Zap size={12} style={{ color: '#38bdf8' }} /> 成長經驗值
                </span>
                <span style={{ fontWeight: 800 }}>{xp} / {xpNeeded} XP ({xpPercent}%)</span>
              </div>
              <div style={{ height: '7px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${xpPercent}%`, 
                    height: '100%', 
                    background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                    borderRadius: '4px',
                    transition: 'width 0.4s ease'
                  }} 
                />
              </div>
            </div>

            {/* Stats Pills Grid */}
            <div className="grid grid-cols-3 gap-2 my-3 text-center">
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '10px 4px' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>星光金幣</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#fbbf24', marginTop: '2px' }}>{coins} 🪙</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '10px 4px' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>傳奇鑽石</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#60a5fa', marginTop: '2px' }}>{gems} 💎</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '10px 4px' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>連勝天數</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#f87171', marginTop: '2px' }}>{streak} 天 🔥</div>
              </div>
            </div>

            {/* Quick iOS System Controls */}
            <div className="pt-2 border-t flex justify-between items-center" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <button
                onClick={handleToggleMute}
                className="ios-pressable flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: isMuted ? '#f87171' : '#34c759',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '16px',
                  fontSize: '0.76rem',
                  fontWeight: 700
                }}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? '靜音中' : '原聲開啟'}</span>
              </button>

              <button
                onClick={handleCycleTheme}
                className="ios-pressable flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '16px',
                  fontSize: '0.76rem',
                  fontWeight: 700
                }}
              >
                {theme === 'light' ? <Sun size={15} style={{ color: '#fbbf24' }} /> : theme === 'dark' ? <Moon size={15} style={{ color: '#818cf8' }} /> : <Eye size={15} style={{ color: '#b45309' }} />}
                <span>{theme === 'light' ? '日光舒適' : theme === 'dark' ? '夜幕極黑' : '暖色羊皮紙'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicIsland;
