import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import GrowthDiagnosticianPage from './pages/GrowthDiagnosticianPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname]);
  return null;
}

function SiteLayout() {
  return <><ScrollToTop /><Header /><main><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/:slug" element={<ServiceDetailPage />} />
    <Route path="/growth-diagnostician" element={<GrowthDiagnosticianPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></main><Footer /></>;
}

export default function App() {
  return <SiteLayout />;
}
