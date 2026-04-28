import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Make sure to create this
import Home from './pages/HomePage';
import Contact from './pages/Contact';
import ThemeShowcase from './pages/ThemeShowcase';

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
