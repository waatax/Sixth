import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const MainLayout = () => {
  return (
    <div className="layout-wrapper flex flex-col min-h-screen">
      <Header />
      <main className="layout-main flex-grow container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
