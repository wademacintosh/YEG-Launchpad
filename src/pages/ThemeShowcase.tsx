import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Palette, Sparkles, Zap, Gauge, Camera, Monitor } from 'lucide-react';
import { themes } from '../themes';

export default function ThemeShowcase() {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = themeId ? themes[themeId] : null;

  if (!theme) return null;

  const isPrism = theme.id === 'prism-auto-works';
  const isBrutal = theme.id === 'mud-sweat-gears';

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-all duration-700 ${isPrism ? 'bg-asphalt' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <Link to="/" className={`flex items-center text-sm font-bold uppercase mb-12 opacity-60 hover:opacity-100 ${isPrism ? 'text-white' : 'text-asphalt'}`}>
          <ArrowLeft size={18} className="mr-2" /> Back to All Styles
        </Link>

        {/* Main Preview Card */}
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2.5rem] transition-all duration-1000 ${theme.containerClass}`}>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
              {theme.name}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-xl font-medium">
              {theme.description}
            </p>
            <button className={`px-10 py-5 text-lg font-black transition-all ${theme.buttonClass} hover:scale-105 active:scale-95 shadow-xl`}>
              Launch With This Style
            </button>
          </div>
        </div>

        {/* Branding & Strategy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up">
          
          {/* Palette Card - Using Ignition Orange as the Label Color */}
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

          {/* Strategic Fit Card - Using Asphalt and Ignition Orange */}
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
              Request This Build <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
