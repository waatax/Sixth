import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EyeCareToolbar from '../common/EyeCareToolbar';
import './Layout.css';

const MainLayout = () => {
  return (
    <div className="layout-wrapper flex flex-col min-h-screen">
      <Header />
      <main className="layout-main flex-grow container animate-fade-in" style={{ paddingBottom: '32px' }}>
        <Outlet />
      </main>
      <Footer />
      {/* Global Floating Eye-Care & Accessibility Dock */}
      <EyeCareToolbar isCompact={false} />
    </div>
  );
};

export default MainLayout;
