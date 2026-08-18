import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        marginTop: '64px',
        padding: '32px 0 24px 0',
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      <div className="container flex flex-col gap-5">
        {/* Footer Main Links & Info */}
        <div className="flex justify-between items-center flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen size={16} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>小六學習護照</span>
            <span className="text-tertiary">|</span>
            <span>教育部 108 課綱・八大學習領域深度自主學習平台</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-secondary flex-wrap">
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>學習領域</Link>
            <Link to="/flashcards" style={{ color: 'var(--text-secondary)' }}>速記閃卡</Link>
            <Link to="/mock-exam" style={{ color: 'var(--text-secondary)' }}>計時模擬</Link>
            <Link to="/mistakes" style={{ color: 'var(--text-secondary)' }}>錯題筆記</Link>
            <Link to="/question-bank" style={{ color: 'var(--text-secondary)' }}>段考題庫</Link>
            <Link to="/resources" style={{ color: 'var(--text-secondary)' }}>教育資源</Link>
            <Link to="/prep" style={{ color: 'var(--text-secondary)' }}>國中先修</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center text-xs text-tertiary pt-3 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p>© 2026 國小六年級 108 課綱學習平台 (Eye-Care Ergonomics Edition)</p>
          <p>整合 均一教育平台、因材網 與 開放試題庫</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
