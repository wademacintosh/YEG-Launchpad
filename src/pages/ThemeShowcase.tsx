import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Palette, Sparkles } from 'lucide-react';
import { themes } from '../themes';

export default function ThemeShowcase() {
  // 1. Get the theme ID from the URL (e.g., /theme/prism-auto-works)
  const { themeId } = useParams<{ themeId: string }>();
  
  // 2. Find the matching theme data from your themes.ts
  const theme = themeId ? themes[themeId] : null;

  // 3. Fallback if the theme doesn't exist
  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
        <h2 className="text-2xl font-bold mb-4">Style Not Found</h2>
        <Link to="/" className="text-ignition underline font-medium">Return to Launchpad</Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-all duration-700 ${theme.containerClass.includes('bg-') ? '' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation / Header */}
        <div className="flex justify-between items-center mb-12 animate-fade-in">
          <Link to="/" className="flex items-center text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft size={18} className="mr-2" /> Back
          </Link>
          <div className="px-4 py-1 rounded-full border border-current text-xs font-bold uppercase tracking-tighter opacity-50">
            {theme.id} // v4.2.4
          </div>
        </div>

        {/* Hero Preview Card */}
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2rem] transition-all duration-1000 ${theme.containerClass}`}>
          <div className="relative z-10 max-w-3xl">
            <h1 className={`text-5xl md:text-8xl font-black mb-8 leading-[0.9] ${theme.id === 'prism-auto-works' ? 'glitch-text' : ''}`}>
              {theme.name}
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-xl">
              {theme.description || "A custom-engineered visual identity optimized for high-performance YEG business growth."}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-10 py-5 text-lg font-black transition-all hover:scale-105 active:scale-95 ${theme.buttonClass}`}>
                Launch This Style
              </button>
              <button className="px-10 py-5 text-lg font-bold border-2 border-current opacity-40 hover:opacity-100 transition-all rounded-xl">
                View Project Files
              </button>
            </div>
          </div>

          {/* Decorative background icon for flair */}
          <Sparkles className="absolute top-10 right-10 opacity-10" size={200} />
        </div>

        {/* Feature Grid - Reusing your styles for secondary items */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up [animation-delay:400ms]">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center mb-4">
              <Palette className="mr-3 text-ignition" />
              <h3 className="font-black text-xl uppercase italic">Color Palette</h3>
            </div>
            <div className="flex gap-2">
              <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: theme.accentColor }}></div>
              <div className="h-16 flex-1 rounded-lg bg-asphalt"></div>
              <div className="h-16 flex-1 rounded-lg bg-silver"></div>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-mono">PRIMARY ACCENT: {theme.accentColor}</p>
          </div>

          <div className="p-8 rounded-3xl bg-asphalt text-white flex flex-col justify-between">
            <div>
              <h3 className="font-black text-xl uppercase italic mb-2">Technical SEO</h3>
              <p className="opacity-60 text-sm">Every theme in the Launchpad is pre-configured for Core Web Vitals and Edmonton local search authority.</p>
            </div>
            <button className="mt-6 flex items-center text-ignition font-bold hover:underline">
              Check Specs <ExternalLink size={16} className="ml-2" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
