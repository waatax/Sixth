import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EyeCareToolbar from '../common/EyeCareToolbar';
import DynamicIsland from '../common/DynamicIsland';
import CupertinoTabBar from './CupertinoTabBar';
import './Layout.css';

const MainLayout = () => {
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
        <Outlet />
      </main>
      <Footer />

      {/* Global Floating Eye-Care & Accessibility Dock */}
      <EyeCareToolbar isCompact={false} />

      {/* iOS Cupertino Bottom Frosted TabBar for Mobile */}
      <CupertinoTabBar />
    </div>
  );
};

export default MainLayout;
