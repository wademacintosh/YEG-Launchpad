import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Palette, 
  Sparkles, 
  Zap, 
  Gauge, 
  Camera, 
  Monitor,
  Eye,
  RotateCcw
} from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext'; // Import the hook

export default function ThemeShowcase() {
  const { themeId } = useParams<{ themeId: string }>();
  const { setPreview, activePreview } = useThemePreview(); // Get the theme state
  const theme = themeId ? themes[themeId] : null;

  if (!theme) return null;

  const isPrism = theme.id === 'prism-auto-works';
  const isBrutal = theme.id === 'mud-sweat-gears';
  const isCurrentlyPreviewing = activePreview?.id === theme.id;

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-all duration-700 ${isPrism ? 'bg-asphalt' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className={`flex items-center text-sm font-bold uppercase opacity-60 hover:opacity-100 transition-opacity ${isPrism ? 'text-white' : 'text-asphalt'}`}>
            <ArrowLeft size={18} className="mr-2" /> Back to All Styles
          </Link>
          
          {/* Reset Button (only shows if a preview is active) */}
          {activePreview && (
            <button 
              onClick={() => setPreview(null)}
              className="flex items-center text-[10px] font-black uppercase tracking-widest text-ignition hover:underline"
            >
              <RotateCcw size={12} className="mr-1" /> Reset Global Style
            </button>
          )}
        </div>

        {/* Main Preview Card */}
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2.5rem] transition-all duration-1000 ${theme.containerClass}`}>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
              {theme.name}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-xl font-medium">
              {theme.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* The Magic Preview Button */}
              <button 
                onClick={() => setPreview(theme.id)}
                className={`flex items-center px-10 py-5 text-lg font-black transition-all active:scale-95 shadow-xl hover:scale-105
                  ${isCurrentlyPreviewing ? 'bg-white text-asphalt ring-4 ring-ignition' : theme.buttonClass}`}
              >
                <Eye className="mr-2" size={20} />
                {isCurrentlyPreviewing ? 'Currently Previewing' : 'Preview This Style'}
              </button>

              <Link 
                to="/contact"
                className={`px-10 py-5 text-lg font-bold border-2 border-current transition-all rounded-xl opacity-60 hover:opacity-100`}
              >
                Launch This Build
              </Link>
            </div>
          </div>
        </div>

        {/* Branding & Strategy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up">
          
          {/* Palette Card */}
          <div className="p-8 bg-white border border-gray-100 rounded-[3rem] shadow-sm">
            <div className="flex items-center mb-6">
              <Palette className="mr-3 text-ignition" />
              <h3 className="font-black text-xl uppercase tracking-tight text-asphalt">Color Palette</h3>
            </div>
            <div className="flex gap-3 h-24">
              <div className="flex-1 rounded-2xl shadow-inner" style={{ backgroundColor: theme.accentColor }}></div>
              <div className="flex-1 rounded-2xl bg-asphalt"></div> 
              <div className="flex-1 rounded-2xl bg-silver"></div>
            </div>
            <div className="mt-6 flex justify-between items-end font-mono text-[10px] uppercase opacity-50 text-asphalt">
              <span>Primary: {theme.accentColor}</span>
              <span>Asphalt & Silver</span>
            </div>
          </div>

          {/* Strategic Fit Card */}
          <div className="p-8 flex flex-col justify-between bg-asphalt text-white rounded-[3rem] shadow-2xl border border-white/5">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="mr-3 text-ignition" size={24} />
                <h3 className="font-black text-xl uppercase tracking-tight">The "Ignition" Strategy</h3>
              </div>
              <p className="opacity-80 text-sm leading-relaxed mb-6 italic">
                {theme.strategy}
              </p>
            </div>
            <Link to="/contact" className="mt-8 flex items-center font-bold text-sm uppercase tracking-widest text-ignition group">
              Get Started with {theme.name} <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
