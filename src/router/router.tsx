// src/router.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import NotFoundPage from '@/pages/not-found';
import SidebarLayout from '@/layouts/sidebar-layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.about} element={<AboutPage />} />
        </Route>
        <Route path={routes.not_found} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
