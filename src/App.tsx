import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Make sure Footer.tsx exists!
import Home from './pages/HomePage';      // Updated to match HomePage.tsx
import Contact from './pages/Contact';    // Make sure Contact.tsx exists!
import ThemeShowcase from './pages/ThemeShowcase'; // Make sure ThemeShowcase.tsx exists!

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theme/:themeId" element={<ThemeShowcase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
