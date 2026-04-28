import React from 'react';
import Hero from '../components/Hero';
import StyleGallery from '../components/StyleGallery';
import { useThemePreview } from '../context/ThemeContext';

export default function HomePage() {
  const { activePreview } = useThemePreview();

  return (
    <div className={`min-h-screen transition-all duration-700 animate-fade-in
      ${activePreview ? 'bg-transparent' : 'bg-white'}`}> 
      
      {/* 🏎️ Hero Section */}
      <Hero />
      
      {/* NOTE: BridgeDivider removed per request.
        NOTE: Duplicate "Style Gallery" header removed. 
        The StyleGallery component now manages its own dynamic header.
      */}
      
      <main className={`max-w-7xl mx-auto py-12 px-4 transition-colors duration-700 
        ${activePreview ? 'bg-transparent' : 'bg-white'}`}>
        <StyleGallery />
      </main>
    </div>
  );
}
