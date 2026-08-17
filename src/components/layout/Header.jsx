import { Link, useLocation } from 'react-router-dom';
import { BookOpen, HelpCircle, Globe, GraduationCap } from 'lucide-react';
import GamificationWidget from '../common/GamificationWidget';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header" style={{ borderBottom: '1px solid var(--border-light)', padding: '14px 0', marginBottom: '24px', backgroundColor: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(8px)' }}>
      <div className="container flex justify-between items-center flex-wrap gap-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
          <div style={{ backgroundColor: 'hsl(215, 80%, 95%)', padding: '6px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <span className="h3" style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>小六學習護照</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', lineHeight: 1 }}>108課綱・全科目自主學習</span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="flex gap-4 items-center flex-wrap">
          <Link 
            to="/" 
            style={{ 
              fontWeight: location.pathname === '/' ? 700 : 500,
              color: location.pathname === '/' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '0.92rem'
            }}
          >
            八大學習領域
          </Link>
          <Link 
            to="/question-bank" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/question-bank' ? 700 : 500,
              color: location.pathname === '/question-bank' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '0.92rem'
            }}
          >
            <HelpCircle size={16} />
            模擬試題庫
          </Link>
          <Link 
            to="/resources" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/resources' ? 700 : 500,
              color: location.pathname === '/resources' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '0.92rem'
            }}
          >
            <Globe size={16} />
            全臺教育資源
          </Link>
          <Link 
            to="/prep" 
            className="flex items-center gap-1"
            style={{ 
              fontWeight: location.pathname === '/prep' ? 700 : 500,
              color: location.pathname === '/prep' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '0.92rem'
            }}
          >
            <GraduationCap size={16} />
            升國中銜接
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
