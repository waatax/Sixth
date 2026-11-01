import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EyeCareToolbar from '../common/EyeCareToolbar';
import DynamicIsland from '../common/DynamicIsland';
import CupertinoTabBar from './CupertinoTabBar';
import GlobalCommandPalette from '../common/GlobalCommandPalette';
import './Layout.css';

const MainLayout = () => {
  const { pathname } = useLocation();
  if (pathname === '/' || pathname === '/practice') return <main style={{background:'#f8f9f2', minHeight:'100vh'}}><Suspense fallback={<p role="status">載入練習室…</p>}><Outlet /></Suspense></main>;
  return (
    <div className="layout-wrapper flex flex-col min-h-screen relative">
      {/* iOS 18 Dynamic Island Pill (Top HUD) */}
      <DynamicIsland />

      <Header />
      <main 
        className="layout-main flex-grow container animate-fade-in" 
        style={{ 
          paddingBottom: 'calc(88px + env(safe-area-inset-bottom, 20px))' 
        }}
      >
        {/* 各頁面分開載入：切換頁面時先顯示提示，避免手機第一次開啟要等整包程式下載 */}
        <Suspense fallback={<div className="flex items-center justify-center py-20 text-secondary font-bold" role="status">📖 頁面載入中，請稍候…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      {/* Global Floating Eye-Care & Accessibility Dock */}
      <EyeCareToolbar isCompact={false} />

      {/* iOS Cupertino Bottom Frosted TabBar for Mobile */}
      <CupertinoTabBar />

      {/* Global Spotlight Omnisearch Command Palette */}
      <GlobalCommandPalette />
    </div>
  );
};

export default MainLayout;
