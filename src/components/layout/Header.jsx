import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, HelpCircle, Globe, GraduationCap, Zap, Timer, Menu, X, Sun, Moon, Eye, Type, Volume2, VolumeX, Sparkles } from 'lucide-react';
import GamificationWidget from '../common/GamificationWidget';
import EyeCareToolbar from '../common/EyeCareToolbar';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const location = useLocation();
  const { theme, setTheme, fontSize, FONT_SIZES, increaseFontSize, decreaseFontSize } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: '學習領域', icon: BookOpen },
    { path: '/flashcards', label: '速記閃卡', icon: Zap },
    { path: '/mock-exam', label: '計時模擬', icon: Timer },
    { path: '/mistakes', label: '錯題本', icon: CheckCircle2 },
    { path: '/question-bank', label: '試卷庫', icon: HelpCircle },
    { path: '/gept', label: '全民英檢', icon: Sparkles },
    { path: '/resources', label: '教育資源', icon: Globe },
    { path: '/prep', label: '國中先修', icon: GraduationCap },
  ];

  return (
    <>
      <header
        className="header"
        style={{
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-backdrop)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
        }}
      >
        <div className="container flex justify-between items-center py-2" style={{ minHeight: 'var(--header-height)', gap: '12px' }}>
          {/* Left Brand Logo */}
          <Link to="/" className="flex items-center gap-3 select-none" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                color: 'white',
                width: '42px',
                height: '42px',
                borderRadius: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)',
                position: 'relative',
                fontSize: '1.35rem',
                flexShrink: 0
              }}
            >
              <span>🎓</span>
              <span 
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-3px',
                  fontSize: '0.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              >
                ✨
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  style={{
                    margin: 0,
                    fontSize: 'calc(1.15rem * var(--font-scale))',
                    fontWeight: 900,
                    background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-purple) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                    display: 'block',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap'
                  }}
                >
                  最強小六
                </span>
                <span className="badge badge-accent" style={{ fontSize: '0.68rem', padding: '1px 6px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                  108課綱 🌱
                </span>
                <span className="badge badge-success" style={{ fontSize: '0.65rem', padding: '1px 6px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                  v2.0 旗艦版
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'block', marginTop: '1px', whiteSpace: 'nowrap' }}>
                全科目圖解自主學習平台
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Hidden on mobile < 1024px) */}
          <nav 
            className="desktop-nav items-center" 
            style={{ 
              display: 'none',
              gap: '4px',
              flexShrink: 0
            }}
          >
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-1.5"
                  style={{
                    padding: '7px 10px',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: 'calc(0.86rem * var(--font-scale))',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    textDecoration: 'none'
                  }}
                >
                  <Icon size={15} style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Area: EyeCare Controls + Gamification Widget + Mobile Hamburger */}
          <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
            {/* Inline Desktop EyeCare Toolbar */}
            <div className="desktop-controls" style={{ display: 'none' }}>
              <EyeCareToolbar isCompact={true} />
            </div>

            {/* Gamification XP Pill */}
            <GamificationWidget />

            {/* Mobile Hamburger Button (Visible on <= 1024px) */}
            <button
              className="mobile-hamburger-btn flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-light)'
              }}
              aria-label={mobileMenuOpen ? '關閉選單' : '開啟選單'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="animate-fade-in"
            style={{
              width: '85%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '1px solid var(--border-light)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>選單導航</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: '6px', color: 'var(--text-tertiary)' }}
                  aria-label="關閉選單"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Eye-Care Quick Switch in Mobile Drawer */}
              <div className="p-3 mb-4 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-xs font-bold text-secondary mb-2">👁️ 視覺護眼與字級：</div>
                <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <button
                    onClick={() => setTheme('light')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'light' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'light' ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                  >
                    ☀️ 淨柔
                  </button>
                  <button
                    onClick={() => setTheme('sepia')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'sepia' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'sepia' ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                  >
                    🌿 暖陽
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                  >
                    🌙 夜讀
                  </button>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary font-bold">字級：{FONT_SIZES[fontSize]?.label}</span>
                  <div className="flex gap-2">
                    <button className="btn-outline" style={{ padding: '4px 10px', minHeight: '32px' }} onClick={decreaseFontSize} disabled={fontSize === 'sm'}>A-</button>
                    <button className="btn-primary" style={{ padding: '4px 10px', minHeight: '32px' }} onClick={increaseFontSize} disabled={fontSize === 'xl'}>A+</button>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3"
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '1rem',
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                        backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer info */}
            <div className="pt-4 border-t text-xs text-secondary text-center" style={{ borderTop: '1px solid var(--border-light)' }}>
              教育部 108 課綱自主學習平台<br />
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>適配直式、橫式、手機與平板</span>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query styling rules for navigation */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .desktop-controls { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
