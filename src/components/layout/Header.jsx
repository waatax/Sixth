import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="header" style={{ borderBottom: '1px solid var(--border-light)', padding: '16px 0', marginBottom: '32px' }}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
          <BookOpen size={28} />
          <span className="h3" style={{ margin: 0 }}>小六學習護照</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link to="/" style={{ fontWeight: 500 }}>首頁 Course</Link>
          <Link to="/question-bank" style={{ fontWeight: 500 }} className="flex items-center gap-1">
            <HelpCircle size={18} />
            模擬試題庫
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
