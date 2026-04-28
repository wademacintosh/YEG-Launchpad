import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Contact from './pages/Contact';
import ThemeShowcase from './pages/ThemeShowcase';
import { ThemeProvider, useThemePreview } from './context/ThemeContext'; // Import the provider

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
 * This component listens for the active preview and applies the 
 * theme classes to the entire application container.
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { activePreview } = useThemePreview();
  
  return (
    <div className={`min-h-screen flex flex-col transition-all duration-700 selection:bg-ignition selection:text-white ${activePreview?.containerClass || ''}`}>
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
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theme/:themeId" element={<ThemeShowcase />} />
            
            {/* Catch-all 404 Route */}
            <Route 
              path="*" 
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] pt-20">
                  <h2 className="text-4xl font-black text-asphalt">404</h2>
                  <p className="text-gray-500 mb-6">This page hasn't launched yet.</p>
                  <a href="/" className="btn-primary">Take Me Home</a>
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
