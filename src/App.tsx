import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Contact from './pages/Contact';
import ThemeShowcase from './pages/ThemeShowcase';
import { ThemeProvider, useThemePreview } from './context/ThemeContext';

/**
 * ScrollToTop Helper
 * Ensures that when you click a new theme, the page starts at the top.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Layout Wrapper
 * Listens for the active preview and applies theme classes globally.
 * We use 'bg-white' as the fallback so original branding looks clean.
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { activePreview } = useThemePreview();
  
  return (
    <div className={`min-h-screen flex flex-col transition-all duration-700 selection:bg-ignition selection:text-white ${activePreview?.containerClass || 'bg-white'}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic Theme Showcase (Eco-Clean, Prism, Aero, etc.) */}
            <Route path="/theme/:themeId" element={<ThemeShowcase />} />
            
            {/* Catch-all 404 Route */}
            <Route 
              path="*" 
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] pt-20">
                  <h2 className="text-4xl font-black text-asphalt uppercase tracking-tighter">404</h2>
                  <p className="text-gray-500 mb-6 font-medium">This page hasn't launched yet.</p>
                  <Link to="/" className="btn-primary">Take Me Home</Link>
                </div>
              } 
            />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
