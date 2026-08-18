import { useState, useEffect } from 'react';
import { Award, Flame, Zap, Trophy, Star, CheckCircle, X } from 'lucide-react';

const GamificationWidget = () => {
  const [stats, setStats] = useState({
    xp: 150,
    completedUnits: 3,
    streak: 5,
    badges: ['數學小博士', '氣象小偵探']
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sixth_student_stats');
    if (saved) {
      try {
        setStats(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const level = Math.floor(stats.xp / 100) + 1;
  const nextLevelXp = level * 100;
  const currentLevelProgress = stats.xp % 100;

  return (
    <div className="gamification-widget" style={{ position: 'relative' }}>
      {/* Mini Status Pill on Header */}
      <div 
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-light)',
          fontSize: '0.82rem',
          transition: 'all var(--transition-fast)'
        }}
        title="點擊查看學習護照成就與等級"
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-warning)', fontWeight: 700 }}>
          <Flame size={15} />
          <span>{stats.streak}天</span>
        </div>
        <span style={{ color: 'var(--border-strong)', opacity: 0.6 }}>|</span>
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
          <Zap size={15} />
          <span>Lv.{level}</span>
        </div>
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-success)', fontWeight: 700 }}>
          <Trophy size={15} />
          <span className="badge-count-text">{stats.badges.length}獎章</span>
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
              width: '320px',
              maxWidth: 'calc(100vw - 32px)',
              zIndex: 999,
              padding: '20px',
              boxShadow: 'var(--shadow-lg)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.2rem' }}>🎓</span>
                <h4 style={{ margin: 0, fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>我的小六學習護照</h4>
              </div>
              <button
                style={{ padding: '4px', color: 'var(--text-tertiary)', cursor: 'pointer' }}
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Level Progress Bar */}
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>等級 Lv.{level} (知識探索家)</span>
                <span>{stats.xp} / {nextLevelXp} XP</span>
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

            {/* Badges Collection */}
            <div className="mb-3">
              <div className="text-xs font-bold mb-2 text-secondary">🏆 已獲得學習榮譽勳章：</div>
              <div className="flex gap-2 flex-wrap">
                {stats.badges.map((b, i) => (
                  <span 
                    key={i} 
                    className="badge" 
                    style={{ 
                      backgroundColor: 'var(--accent-warning-soft)', 
                      color: 'var(--accent-warning-text)', 
                      fontWeight: 700, 
                      padding: '5px 10px',
                      border: '1px solid var(--accent-warning)'
                    }}
                  >
                    ⭐ {b}
                  </span>
                ))}
                <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', padding: '5px 10px' }}>
                  🔒 英語達人 (待解鎖)
                </span>
                <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', padding: '5px 10px' }}>
                  🔒 模考狀元 (待解鎖)
                </span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t text-xs text-secondary" style={{ borderTop: '1px solid var(--border-light)', lineHeight: 1.6 }}>
              💡 <strong>經驗值攻略</strong>：每完成 1 個教學單元與測驗即獲 <strong>+50 XP</strong>，模擬考滿分獲 <strong>+100 XP</strong>！
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GamificationWidget;
