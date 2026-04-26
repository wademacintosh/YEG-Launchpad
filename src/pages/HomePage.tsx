import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StyleGallery from '../components/StyleGallery';
import BridgeDivider from '../components/BridgeDivider';

/**
 * Using a named function before exporting it helps the 
 * bundler avoid the "Temporal Dead Zone" (the 'ig' error).
 */
function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BridgeDivider />
      <StyleGallery />
    </main>
  );
}

export default HomePage;
