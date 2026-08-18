import { Heart, Eye, ShieldCheck, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        marginTop: '64px',
        padding: '36px 0 28px 0',
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      <div className="container flex flex-col gap-6">
        {/* Eye Care & Health Banner */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 p-4"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-primary)',
                padding: '8px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Eye size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                👀 國民健康署 & 視力保健專家 20-20-20 溫馨守則
              </div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px' }}>
                近距離用眼 30 分鐘，請休息 5 分鐘並遠眺 6 公尺放鬆睫狀肌；適度調節字體大小保護學童雙眼！
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="badge badge-success">✓ 柔和低眩光</span>
            <span className="badge badge-accent">✓ 4段字級縮放</span>
            <span className="badge badge-warning">✓ 直橫雙向適配</span>
          </div>
        </div>

        {/* Footer Main Links & Info */}
        <div className="flex justify-between items-center flex-wrap gap-4 pt-2 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen size={16} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>小六學習護照</span>
            <span className="text-tertiary">|</span>
            <span>教育部 108 課綱・八大學習領域深度自主學習平台</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-secondary flex-wrap">
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>八大學習領域</Link>
            <Link to="/flashcards" style={{ color: 'var(--text-secondary)' }}>速記翻翻卡</Link>
            <Link to="/mock-exam" style={{ color: 'var(--text-secondary)' }}>計時模擬考</Link>
            <Link to="/mistakes" style={{ color: 'var(--text-secondary)' }}>錯題筆記本</Link>
            <Link to="/resources" style={{ color: 'var(--text-secondary)' }}>全臺教育資源</Link>
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
