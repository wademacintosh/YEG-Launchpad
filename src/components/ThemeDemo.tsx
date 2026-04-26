import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeDefinition } from '../lib/themes';

interface ThemeDemoProps {
  theme: ThemeDefinition;
}

export default function ThemeDemo({ theme }: ThemeDemoProps) {
  
  // ==========================================
  // 02: NIGHT VISION ARMOR - CUSTOM LAYOUT
  // ==========================================
  if (theme.slug === 'night-vision') {
    return (
      <div className="min-h-screen bg-[#111315] text-white selection:bg-[#4ECDC4] selection:text-[#111315] font-sans relative overflow-hidden">
        
        {/* Custom Theme Navigation */}
        <nav className="border-b border-[#2C3539] px-8 py-6 flex justify-between items-center relative z-10">
          <Link 
            to="/" 
            className="text-xs font-bold tracking-[0.2em] hover:text-[#4ECDC4] transition-colors flex items-center gap-3 uppercase"
          >
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-300">
            Night Vision
          </span>
          <button className="bg-[#4ECDC4] text-[#111315] px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
            Contact
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-8 pt-24 pb-32 relative z-10">
          
          {/* Terminal Subhead */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse"></div>
            <span className="text-[#4ECDC4] font-mono text-[11px] tracking-[0.3em] uppercase">
              // 02_NIGHT_VISION_ARMOR
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] uppercase tracking-tighter">
            Armor your paint. <br /> 
            Run silent. <br className="md:hidden" /> Run dark.
          </h1>

          {/* Body Copy */}
          <p className="font-mono text-gray-400 text-sm md:text-base max-w-2xl mb-14 leading-relaxed">
            Nano-ceramic coatings and self-healing paint <br className="hidden md:block" />
            protection film, calibrated by certified installers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-32">
            <button className="bg-[#4ECDC4] text-[#111315] font-mono font-bold px-8 py-5 tracking-[0.2em] text-[11px] hover:bg-[#3dbdb4] transition-colors flex items-center gap-4">
              [ INITIALIZE QUOTE ] <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#2C3539] text-white font-mono font-bold px-10 py-5 tracking-[0.2em] text-[11px] hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-colors">
              See Results
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl border-t border-[#2C3539] pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3">12+</div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3">2.4k</div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3 flex items-start">
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Rating</div>
            </div>
          </div>

        </main>

        {/* Ambient Bottom Glow (from screenshot) */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#4ECDC4]/10 to-transparent pointer-events-none blur-2xl"></div>
      </div>
    );
  }

  // ==========================================
  // DEFAULT / FALLBACK LAYOUT
  // ==========================================
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: theme.tokens.bg, color: theme.tokens.fg }}>
      <Link to="/" className="mb-8 opacity-50 hover:opacity-100 uppercase tracking-widest text-xs font-bold transition-opacity">
        &larr; Back to Gallery
      </Link>
      <h1 className="text-5xl font-black mb-4 uppercase" style={{ fontFamily: theme.tokens.fontHeading }}>
        {theme.title}
      </h1>
      <p className="text-xl opacity-70">Custom layout pending construction...</p>
    </div>
  );
}
