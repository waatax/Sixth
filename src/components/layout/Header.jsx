import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  HelpCircle, 
  Globe, 
  GraduationCap, 
  Zap, 
  Timer, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Eye, 
  Type, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2,
  Swords,
  Layers,
  FileText,
  Search,
  ChevronDown,
  Award,
  FlaskConical,
  BookmarkCheck
} from 'lucide-react';
import GamificationWidget from '../common/GamificationWidget';
import EyeCareToolbar from '../common/EyeCareToolbar';
import SubjectIconBadge from '../common/SubjectIconBadge';
import { useTheme } from '../../context/ThemeContext';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme, fontSize, FONT_SIZES, increaseFontSize, decreaseFontSize } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [examToolsDropdownOpen, setExamToolsDropdownOpen] = useState(false);

  // Close mobile drawer & dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setExamToolsDropdownOpen(false);
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K shortcut listener to jump to Topic Explorer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleJumpToTopicExplorer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname]);

  const handleJumpToTopicExplorer = () => {
    triggerHaptic('light');
    playSound('ios_tap');
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/#topic-discovery-section');
      setTimeout(() => {
        const el = document.getElementById('topic-discovery-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        const input = document.querySelector('#topic-discovery-section input');
        if (input) input.focus();
      }, 250);
    } else {
      const el = document.getElementById('topic-discovery-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      const input = document.querySelector('#topic-discovery-section input');
      if (input) input.focus();
    }
  };

  // Primary navigation links for desktop
  const primaryNavLinks = [
    { path: '/', label: '學習領域', icon: BookOpen },
    { path: '/exam-notes', label: '章節講義', icon: FileText, badge: 'PDF' },
    { path: '/labs', label: '互動實驗', icon: FlaskConical, badge: 'PhET' },
    { path: '/shorts', label: '知識短影音', icon: Zap, badge: 'HOT' },
    { path: '/boss-battle', label: '魔王城堡', icon: Swords },
  ];

  // Secondary prep & tools links
  const prepToolLinks = [
    { path: '/flashcards', label: '速記閃卡', icon: BookmarkCheck, color: '#f59e0b', desc: '公式與名詞快速複習' },
    { path: '/mock-exam', label: '計時全真模擬', icon: Timer, color: '#ef4444', desc: '10分鐘精準段考檢測' },
    { path: '/mistakes', label: '錯題粉碎本', icon: CheckCircle2, color: '#10b981', desc: '弱點分析與防雷演練' },
    { path: '/gept', label: '全民英檢先修', icon: Award, color: '#8b5cf6', desc: '初級聽力與核心單字' },
    { path: '/prep', label: '國中七年級先修', icon: GraduationCap, color: '#0ea5e9', desc: '負數與方程式銜接' },
    { path: '/memory-game', label: '記憶翻牌對決', icon: Layers, color: '#ec4899', desc: '公式名詞快速連擊' },
  ];

  // Grouped mobile drawer items
  const drawerGroups = [
    {
      title: '🎓 核心學程與段考講義',
      items: [
        { path: '/', label: '八大學科領域', icon: BookOpen, badge: null, color: 'hsl(215, 85%, 52%)' },
        { path: '/exam-notes', label: '章節段考講義 (57份PDF)', icon: FileText, badge: 'PDF', color: '#6366f1' },
      ]
    },
    {
      title: '🔬 探究體驗與多媒體',
      items: [
        { path: '/labs', label: '互動探究實驗室', icon: FlaskConical, badge: 'PhET', color: '#10b981' },
        { path: '/shorts', label: '30秒知識短影音', icon: Zap, badge: 'HOT', color: '#ec4899' },
      ]
    },
    {
      title: '⚔️ 遊戲化實戰挑戰',
      items: [
        { path: '/boss-battle', label: '魔王城堡挑戰賽', icon: Swords, badge: 'RPG', color: '#8b5cf6' },
        { path: '/memory-game', label: '記憶翻牌連擊大賽', icon: Layers, badge: null, color: '#3b82f6' },
      ]
    },
    {
      title: '⚡ 段考衝刺與升學先修',
      items: [
        { path: '/flashcards', label: '速記翻翻閃卡', icon: BookmarkCheck, badge: null, color: '#f59e0b' },
        { path: '/mock-exam', label: '計時全真模擬考', icon: Timer, badge: null, color: '#ef4444' },
        { path: '/mistakes', label: '錯題粉碎本', icon: CheckCircle2, badge: null, color: '#10b981' },
        { path: '/gept', label: '全民英檢先修特訓', icon: Award, badge: 'GEPT', color: '#8b5cf6' },
        { path: '/prep', label: '國中七年級銜接先修', icon: GraduationCap, badge: '會考', color: '#0ea5e9' },
      ]
    }
  ];

  const isPrepToolActive = prepToolLinks.some(link => location.pathname === link.path);

  return (
    <>
      <header
        className="header"
        style={{
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-backdrop)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          position: 'sticky',
          top: 0,
          zIndex: 90,
          transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
        }}
      >
        <div className="container flex justify-between items-center py-2" style={{ minHeight: 'var(--header-height)', gap: '10px' }}>
          {/* Left Brand Logo (信達雅：精緻教育圖騰) */}
          <Link to="/" className="flex items-center gap-2.5 select-none" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #db2777 100%)',
                color: 'white',
                width: '42px',
                height: '42px',
                borderRadius: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
                position: 'relative',
                flexShrink: 0
              }}
            >
              <GraduationCap size={22} strokeWidth={2.4} />
              <Sparkles 
                size={11} 
                strokeWidth={2.5}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  color: '#fef08a'
                }}
              />
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
                  2026 旗艦版 🌱
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'block', marginTop: '1px', whiteSpace: 'nowrap' }}>
                遊戲化全科自主學習護照
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav 
            className="desktop-nav items-center" 
            style={{ 
              display: 'none',
              gap: '4px',
              flexShrink: 0
            }}
          >
            {/* Primary navigation items */}
            {primaryNavLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-1.5 relative ios-pressable"
                  style={{
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: 'calc(0.85rem * var(--font-scale))',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    textDecoration: 'none'
                  }}
                >
                  <Icon size={15} style={{ flexShrink: 0 }} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span 
                      style={{
                        fontSize: '9px',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontWeight: 900,
                        backgroundColor: item.badge === 'HOT' ? '#ef4444' : '#10b981',
                        color: '#ffffff',
                        lineHeight: 1.2
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* 段考利器下拉選單 (Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setExamToolsDropdownOpen(!examToolsDropdownOpen)}
                onBlur={() => setTimeout(() => setExamToolsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 ios-pressable"
                style={{
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: isPrepToolActive ? 800 : 600,
                  fontSize: 'calc(0.85rem * var(--font-scale))',
                  color: isPrepToolActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: isPrepToolActive ? 'var(--accent-soft)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                <Timer size={15} />
                <span>段考利器</span>
                <ChevronDown size={13} style={{ transform: examToolsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {examToolsDropdownOpen && (
                <div
                  className="animate-fade-in shadow-lg"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    width: '260px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--border-light)',
                    padding: '8px',
                    zIndex: 100,
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  <div className="text-[10px] text-tertiary font-bold px-3 py-1">
                    ⚡ 考前衝刺與升學先修工具
                  </div>
                  {prepToolLinks.map(tool => {
                    const ToolIcon = tool.icon;
                    const isSelected = location.pathname === tool.path;
                    return (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        onClick={() => setExamToolsDropdownOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        style={{
                          backgroundColor: isSelected ? 'var(--accent-soft)' : 'transparent',
                          textDecoration: 'none'
                        }}
                      >
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            backgroundColor: `${tool.color}15`,
                            color: tool.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <ToolIcon size={15} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {tool.label}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
                            {tool.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Area: Topic Search Trigger + EyeCare Toolbar + Gamification Widget */}
          <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
            {/* Quick Topic Search Button */}
            <button
              onClick={handleJumpToTopicExplorer}
              className="ios-pressable flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-light)',
                fontSize: 'calc(0.82rem * var(--font-scale))',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                boxShadow: 'var(--shadow-sm)'
              }}
              title="快速搜尋 64 個學習主題 (快捷鍵 ⌘K)"
            >
              <Search size={14} style={{ color: 'var(--accent-primary)' }} />
              <span className="hidden sm:inline">搜尋主題</span>
              <kbd 
                className="hidden md:inline"
                style={{ 
                  fontSize: '9px', 
                  padding: '1px 5px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-light)', 
                  color: 'var(--text-tertiary)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                ⌘K
              </kbd>
            </button>

            {/* Desktop Eyecare Toolbar */}
            <div className="desktop-controls" style={{ display: 'none' }}>
              <EyeCareToolbar isCompact={true} />
            </div>

            {/* Gamification XP & Pet Pill */}
            <GamificationWidget />

            {/* Mobile Hamburger Button */}
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
            backdropFilter: 'blur(6px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="animate-fade-in"
            style={{
              width: '88%',
              maxWidth: '360px',
              height: '100%',
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '1px solid var(--border-light)',
              padding: '20px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-3 mb-3 border-b" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--accent-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>導航選單</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: '6px', color: 'var(--text-tertiary)' }}
                  aria-label="關閉選單"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Drawer: Instant Search Banner */}
              <button
                onClick={handleJumpToTopicExplorer}
                className="w-full mb-3.5 p-2.5 rounded-xl flex items-center justify-between text-left ios-pressable"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  border: '1.5px solid var(--accent-primary)',
                  color: 'var(--accent-primary)'
                }}
              >
                <div className="flex items-center gap-2">
                  <Search size={16} />
                  <span className="text-xs font-bold">智能搜尋 64 個主題</span>
                </div>
                <span className="text-[10px] font-extrabold py-0.5 px-2 rounded bg-white dark:bg-slate-900 shadow-sm">
                  直達課堂 ➔
                </span>
              </button>

              {/* Eye-Care Quick Switch in Mobile Drawer */}
              <div className="p-2.5 mb-3.5 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-xs font-bold text-secondary mb-1.5">👁️ 視覺護眼與字級：</div>
                <div className="grid gap-1.5 mb-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                  <button
                    onClick={() => setTheme('light')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'light' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'light' ? 'var(--accent-primary)' : 'var(--text-secondary)', padding: '4px 2px', fontSize: '0.72rem' }}
                  >
                    ☀️ 淨柔
                  </button>
                  <button
                    onClick={() => setTheme('sepia')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'sepia' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'sepia' ? 'var(--accent-primary)' : 'var(--text-secondary)', padding: '4px 2px', fontSize: '0.72rem' }}
                  >
                    🌿 暖陽
                  </button>
                  <button
                    onClick={() => setTheme('green')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'green' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'green' ? 'var(--accent-primary)' : 'var(--text-secondary)', padding: '4px 2px', fontSize: '0.72rem' }}
                  >
                    🍃 青木
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className="btn-pill justify-center"
                    style={{ backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : 'transparent', color: theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-secondary)', padding: '4px 2px', fontSize: '0.72rem' }}
                  >
                    🌙 夜讀
                  </button>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary font-bold">字級：{FONT_SIZES[fontSize]?.label}</span>
                  <div className="flex gap-1.5">
                    <button className="btn-outline" style={{ padding: '3px 8px', minHeight: '28px', fontSize: '11px' }} onClick={decreaseFontSize} disabled={fontSize === 'xs'}>A-</button>
                    <button className="btn-primary" style={{ padding: '3px 8px', minHeight: '28px', fontSize: '11px' }} onClick={increaseFontSize} disabled={fontSize === 'xl'}>A+</button>
                  </div>
                </div>
              </div>

              {/* Grouped Navigation Items */}
              <div className="flex flex-col gap-3">
                {drawerGroups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <div className="text-[11px] font-extrabold text-tertiary mb-1 px-1">
                      {group.title}
                    </div>
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center justify-between py-2 px-2.5 rounded-xl ios-pressable"
                            style={{
                              fontWeight: isActive ? 800 : 600,
                              fontSize: '0.88rem',
                              color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                              backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                              textDecoration: 'none'
                            }}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: '8px',
                                  backgroundColor: `${item.color}15`,
                                  color: item.color,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}
                              >
                                <Icon size={15} />
                              </div>
                              <span>{item.label}</span>
                            </div>
                            {item.badge && (
                              <span 
                                style={{
                                  fontSize: '9px',
                                  padding: '1px 5px',
                                  borderRadius: '4px',
                                  fontWeight: 900,
                                  backgroundColor: item.badge === 'HOT' ? '#ef4444' : '#10b981',
                                  color: '#ffffff'
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-3 border-t text-[11px] text-secondary text-center" style={{ borderTop: '1px solid var(--border-light)' }}>
              2026 新學期・108 課綱遊戲化自主學習平台<br />
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>信達雅圖騰設計・響應式沉浸體驗</span>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query styling rules for navigation */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-controls { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-controls { display: none !important; }
          .mobile-hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
