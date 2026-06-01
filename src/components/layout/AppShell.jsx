import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import HomeHeader from './HomeHeader.jsx';
import Footer from './Footer.jsx';
import { ROUTES } from '@/constants/routes.js';

export default function AppShell({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;
  const ActiveHeader = isHome ? HomeHeader : Header;

  return (
    <div className="flex min-h-screen w-full bg-bg">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <ActiveHeader />
        <main className="min-w-0 flex-1 px-4 md:px-6 lg:px-8 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
