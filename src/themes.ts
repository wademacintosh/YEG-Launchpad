import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Palette, Sparkles, Zap } from 'lucide-react';
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

  // --- Dynamic Style Helpers based on Theme ID ---

  // Is it the Neobrutalist theme? (Mud, Sweat & Gears)
  const isBrutal = theme.id === 'mud-sweat-gears';
  // Is it the Retro Sticker theme? (Route 66 Review)
  const isRetro = theme.id === 'route-66-review';

  // Apply extra brutal/retro classes to the main card
  const cardSpecialEffects = `
    ${isBrutal ? 'border-4 border-black shadow-brutal animate-bounce-slow' : ''} 
    ${isRetro ? 'shadow-sticker rotate-2' : ''}
  `;

  // Apply brutal/retro classes to the feature grid items
  const gridSpecialEffects = `
    ${isBrutal ? 'border-4 border-black shadow-brutal transition-all hover:-translate-y-1' : ''} 
    ${isRetro ? 'shadow-sticker -rotate-1' : ''}
  `;

  // Define the 'Glitch' title logic specifically for Prism
  const titleClasses = `
    text-5xl md:text-8xl font-black mb-8 leading-[0.9] 
    ${theme.id === 'prism-auto-works' ? 'glitch-text' : ''} 
    ${isBrutal ? 'uppercase' : ''}
    ${isRetro ? 'font-retro' : ''}
  `;

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
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2rem] transition-all duration-1000 ${theme.containerClass} ${cardSpecialEffects}`}>
          <div className="relative z-10 max-w-3xl">
            <h1 className={titleClasses}>
              {theme.name}
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-xl">
              {theme.description || "A custom-engineered visual identity optimized for high-performance YEG business growth."}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-10 py-5 text-lg font-black transition-all ${theme.buttonClass} ${isBrutal ? 'hover:-translate-y-1' : 'hover:scale-105'} active:scale-95`}>
                Launch This Style
              </button>
              <button className={`px-10 py-5 text-lg font-bold border-2 border-current transition-all rounded-xl ${isBrutal ? 'bg-black text-white' : 'opacity-40 hover:opacity-100'}`}>
                View Project Files
              </button>
            </div>
          </div>

          {/* Decorative background icon for flair */}
          {isBrutal ? (
            <Zap className="absolute top-10 right-10 opacity-20 text-yellow-400 rotate-12" size={200} />
          ) : (
            <Sparkles className="absolute top-10 right-10 opacity-10" size={200} />
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up [animation-delay:400ms]">
          
          {/* Color Palette Box */}
          <div className={`p-8 bg-white ${gridSpecialEffects} ${isBrutal ? 'rounded-lg' : 'rounded-3xl'}`}>
            <div className="flex items-center mb-4">
              <Palette className={`mr-3 ${isBrutal ? 'text-black' : 'text-ignition'}`} />
              <h3 className={`font-black text-xl uppercase ${isBrutal ? 'italic' : ''}`}>Color Palette</h3>
            </div>
            <div className={`flex gap-2 ${isRetro ? 'rotate-1' : ''}`}>
              <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: theme.accentColor }}></div>
              <div className="h-16 flex-1 rounded-lg bg-asphalt"></div>
              <div className="h-16 flex-1 rounded-lg bg-silver"></div>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-mono">PRIMARY ACCENT: {theme.accentColor}</p>
          </div>

          {/* Technical Box */}
          <div className={`p-8 flex flex-col justify-between ${gridSpecialEffects} ${isBrutal ? 'bg-yellow-400 text-black rounded-lg shadow-brutal' : 'bg-asphalt text-white rounded-3xl'}`}>
            <div>
              <h3 className={`font-black text-xl uppercase ${isBrutal ? 'italic' : ''} mb-2`}>Technical SEO</h3>
              <p className="opacity-70 text-sm">Every theme in the Launchpad is pre-configured for Core Web Vitals and Edmonton local search authority.</p>
            </div>
            <button className={`mt-6 flex items-center font-bold hover:underline ${isBrutal ? 'text-black' : 'text-ignition'}`}>
              Check Specs <ExternalLink size={16} className="ml-2" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
