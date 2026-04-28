import React from 'react';
import Hero from '../components/Hero';
import BridgeDivider from '../components/BridgeDivider';
import StyleGallery from '../components/StyleGallery';
import { useThemePreview } from '../context/ThemeContext'; // Import the hook

export default function HomePage() {
  const { activePreview } = useThemePreview(); // Listen for active previews

  return (
    <div className={`min-h-screen transition-all duration-700 animate-fade-in
      ${activePreview ? 'bg-transparent' : 'bg-white'}`}> 
      
      <Hero />
      
      {/* The Walterdale Bridge SVG Divider */}
      <BridgeDivider />
      
      <main className="max-w-7xl mx-auto py-12">
        <StyleGallery />
      </main>
    </div>
  );
}
