import { Link, useLocation } from 'react-router-dom';
import { BookOpen, HelpCircle, Globe, GraduationCap, Zap, Timer, Bookmark } from 'lucide-react';
import GamificationWidget from '../common/GamificationWidget';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header" style={{ borderBottom: '1px solid var(--border-light)', padding: '12px 0', marginBottom: '20px', backgroundColor: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(8px)' }}>
      <div className="container flex justify-between items-center flex-wrap gap-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
          <div style={{ backgroundColor: 'hsl(215, 80%, 95%)', padding: '6px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BookOpen size={22} />
          </div>
          <div>
            <span className="h3" style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>小六學習護照</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', display: 'block', lineHeight: 1 }}>108課綱・全科自主學習</span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="flex gap-4 items-center flex-wrap" style={{ fontSize: '0.88rem' }}>
          <Link 
            to="/" 
            style={{ 
              fontWeight: location.pathname === '/' ? 700 : 500,
              color: location.pathname === '/' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            八大學習領域
          </Link>
          <Link 
            to="/flashcards" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/flashcards' ? 700 : 500,
              color: location.pathname === '/flashcards' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <Zap size={15} />
            速記翻翻卡
          </Link>
          <Link 
            to="/mock-exam" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/mock-exam' ? 700 : 500,
              color: location.pathname === '/mock-exam' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <Timer size={15} />
            計時模擬考
          </Link>
          <Link 
            to="/mistakes" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/mistakes' ? 700 : 500,
              color: location.pathname === '/mistakes' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <Bookmark size={15} />
            錯題本
          </Link>
          <Link 
            to="/question-bank" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/question-bank' ? 700 : 500,
              color: location.pathname === '/question-bank' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <HelpCircle size={15} />
            段考題庫
          </Link>
          <Link 
            to="/resources" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/resources' ? 700 : 500,
              color: location.pathname === '/resources' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <Globe size={15} />
            全臺教育資源
          </Link>
          <Link 
            to="/prep" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/prep' ? 700 : 500,
              color: location.pathname === '/prep' ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
          >
            <GraduationCap size={15} />
            升國中先修
          </Link>
        </nav>

        {/* Right Gamification Widget */}
        <div style={{ position: 'relative' }}>
          <GamificationWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
