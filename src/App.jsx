import { Routes, Route } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell.jsx';
import AppRoutes from '@/routes/index.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import RegisterPage from '@/pages/RegisterPage.jsx';
import { SidebarProvider } from '@/context/SidebarContext.jsx';
import { LibraryProvider } from '@/context/LibraryContext.jsx';
import { ToastProvider } from '@/context/ToastContext.jsx';
import { SearchProvider } from '@/context/SearchContext.jsx';
import { AuthProvider } from '@/context/AuthContext.jsx';

export default function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <LibraryProvider>
          <ToastProvider>
            <SearchProvider>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/*"
                  element={
                    <AppShell>
                      <AppRoutes />
                    </AppShell>
                  }
                />
              </Routes>
            </SearchProvider>
          </ToastProvider>
        </LibraryProvider>
      </SidebarProvider>
    </AuthProvider>
  );
}
