import { useState, useEffect } from 'react';
import { Award, Flame, Zap, Trophy, Star, CheckCircle } from 'lucide-react';

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
    <div className="gamification-widget">
      {/* Mini Status Pill on Header */}
      <div 
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          padding: '6px 14px',
          borderRadius: '999px',
          border: '1px solid var(--border-light)',
          fontSize: '0.85rem'
        }}
      >
        <div className="flex items-center gap-1" style={{ color: 'hsl(25, 95%, 45%)', fontWeight: 700 }}>
          <Flame size={16} />
          <span>連續 {stats.streak} 天</span>
        </div>
        <span style={{ color: 'var(--border-strong)' }}>|</span>
        <div className="flex items-center gap-1" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
          <Zap size={16} />
          <span>Lv.{level} ({stats.xp} XP)</span>
        </div>
        <div className="flex items-center gap-1" style={{ color: 'hsl(45, 90%, 40%)', fontWeight: 700 }}>
          <Trophy size={16} />
          <span>{stats.badges.length} 勳章</span>
        </div>
      </div>

      {/* Modal Dropdown */}
      {isOpen && (
        <div 
          className="card"
          style={{
            position: 'absolute',
            top: '60px',
            right: '24px',
            width: '320px',
            zIndex: 1000,
            padding: '20px',
            boxShadow: 'var(--shadow-lg)',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1rem' }}>🎓 我的小六學習護照</h4>
            <button className="text-sm text-secondary" onClick={() => setIsOpen(false)}>✕ 關閉</button>
          </div>

          {/* Level Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
              <span>等級 Lv.{level} (探索者)</span>
              <span>{stats.xp} / {nextLevelXp} XP</span>
            </div>
            <div style={{ height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${currentLevelProgress}%`, height: '100%', backgroundColor: 'var(--accent-primary)', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Badges Collection */}
          <div className="mb-2">
            <div className="text-xs font-bold mb-2 text-secondary">🏆 已獲得學習勳章：</div>
            <div className="flex gap-2 flex-wrap">
              {stats.badges.map((b, i) => (
                <span key={i} className="badge" style={{ backgroundColor: 'hsl(45, 90%, 92%)', color: 'hsl(35, 90%, 35%)', fontWeight: 600, padding: '4px 8px' }}>
                  ⭐ {b}
                </span>
              ))}
              <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', padding: '4px 8px' }}>
                🔒 英語達人 (完成Unit4解鎖)
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t text-xs text-secondary" style={{ borderTop: '1px solid var(--border-light)', lineHeight: 1.5 }}>
            每完成一個單元的圖解閱讀與重點測驗，即可獲得 <strong>+50 XP</strong> 與解鎖專屬科目勳章！
          </div>
        </div>
      )}
    </div>
  );
};

export default GamificationWidget;
