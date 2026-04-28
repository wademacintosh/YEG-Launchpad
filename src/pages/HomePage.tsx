import React from 'react';
import Hero from '../components/Hero';
import BridgeDivider from '../components/BridgeDivider';
import StyleGallery from '../components/StyleGallery';
import { useThemePreview } from '../context/ThemeContext';

export default function HomePage() {
  const { activePreview } = useThemePreview();

  return (
    <div className={`min-h-screen transition-all duration-700 animate-fade-in
      ${activePreview ? 'bg-transparent' : 'bg-white'}`}> 
      
      <Hero />
      
      {/* The Bridge Divider - We dim it slightly when a dark theme is active */}
      <div className={`transition-opacity duration-700 ${activePreview ? 'opacity-30 grayscale' : 'opacity-100'}`}>
        <BridgeDivider />
      </div>
      
      {/* Main Content Area - Made transparent during preview */}
      <main className={`max-w-7xl mx-auto py-20 px-4 transition-colors duration-700 
        ${activePreview ? 'bg-transparent' : 'bg-white'}`}>
        
        {/* Style Section Header - Text color becomes dynamic */}
        <div className="mb-16 text-center animate-fade-up">
          <h2 className={`text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 transition-colors
            ${activePreview ? 'text-current' : 'text-asphalt'}`}>
            The <span className="text-ignition">Style</span> Gallery
          </h2>
          <p className={`text-xl font-medium max-w-2xl mx-auto transition-colors
            ${activePreview ? 'text-current opacity-70' : 'text-gray-500'}`}>
            Choose a visual identity below to re-skin the entire Launchpad interface.
          </p>
        </div>

        <StyleGallery />
      </main>
    </div>
  );
}
