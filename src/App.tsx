import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Contact from './pages/Contact';
import ThemeShowcase from './pages/ThemeShowcase';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-ignition selection:text-white">
        {/* The Navbar will now have access to all 8 styles via the dropdown */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Landing Page with Hero & Features */}
            <Route path="/" element={<Home />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic Theme Route 
                Handles: eco-clean, night-vision-armour, the-vantage-collective, 
                mud-sweat-gears, detailflow-pro, aero-shine-labs, 
                route-66-review, prism-auto-works
            */}
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
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
