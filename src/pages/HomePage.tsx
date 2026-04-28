import React from 'react';
import Hero from '../components/Hero';
import BridgeDivider from '../components/BridgeDivider';
import StyleGallery from '../components/StyleGallery';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white animate-fade-in"> 
      <Hero />
      {/* The Walterdale Bridge SVG Divider */}
      <BridgeDivider />
      
      <main className="max-w-7xl mx-auto py-12">
        <StyleGallery />
      </main>
    </div>
  );
}
