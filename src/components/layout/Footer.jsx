const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-light)', padding: '32px 0', marginTop: '64px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
      <div className="container flex justify-between items-center text-sm">
        <p>© 2026 國小六年級 108課綱 學習平台 (Arch Theme)</p>
        <p>整合 均一教育平台 資源與開放試題庫</p>
      </div>
    </footer>
  );
};

export default Footer;
