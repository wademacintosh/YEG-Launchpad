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
  Monitor 
} from 'lucide-react';
import { themes } from '../themes';

export default function ThemeShowcase() {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = themeId ? themes[themeId] : null;

  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 px-4 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-black text-asphalt mb-2 uppercase">Style Not Found</h2>
          <Link to="/" className="inline-flex items-center text-blue-600 font-bold mt-4">
            <ArrowLeft size={18} className="mr-2" /> Return to Launchpad
          </Link>
        </div>
      </div>
    );
  }

  const isBrutal = theme.id === 'mud-sweat-gears';
  const isRetro = theme.id === 'route-66-review';
  const isPrism = theme.id === 'prism-auto-works';
  const isAero = theme.id === 'aero-shine-labs';

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-all duration-700 ${isPrism ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className={`flex items-center text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity ${isPrism ? 'text-white' : ''}`}>
            <ArrowLeft size={18} className="mr-2" /> Back to All Styles
          </Link>
          <div className={`px-4 py-1 rounded-full border border-current text-[10px] font-black uppercase tracking-tighter opacity-50 ${isPrism ? 'text-pink-500' : ''}`}>
            SYSTEM_ID: {theme.id}
          </div>
        </div>

        {/* Hero Preview Card - Prism Color Fix applied here */}
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2.5rem] transition-all duration-1000 
          ${theme.containerClass} 
          ${isBrutal ? 'border-4 border-black shadow-brutal' : ''} 
          ${isRetro ? 'shadow-sticker rotate-1' : ''}`}>
          
          {/* Prism-Specific Background Glow */}
          {isPrism && (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-black to-cyan-500/10 pointer-events-none" />
          )}

          <div className="relative z-10 max-w-3xl">
            <h1 className={`text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter
              ${isPrism ? 'glitch-text text-white' : ''} 
              ${isBrutal ? 'uppercase italic' : ''}
              ${isRetro ? 'font-retro' : ''}`}>
              {theme.name}
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-xl font-medium">
              {theme.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-10 py-5 text-lg font-black transition-all active:scale-95 
                ${theme.buttonClass} 
                ${isBrutal ? 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_#000]' : 'hover:scale-105'}`}>
                Launch With This Style
              </button>
            </div>
          </div>

          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            {isBrutal && <Zap size={240} className="rotate-12" />}
            {isAero && <Gauge size={240} className="-rotate-12" />}
            {isRetro && <Camera size={240} className="rotate-3" />}
            {isPrism && <Monitor size={240} className="text-cyan-400" />}
            {!isBrutal && !isAero && !isRetro && !isPrism && <Sparkles size={240} />}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up">
          
          {/* Palette Card */}
          <div className={`p-8 bg-white border border-gray-100 shadow-sm transition-all
            ${isBrutal ? 'border-4 border-black shadow-brutal rounded-none' : 'rounded-[3rem]'}`}>
            <div className="flex items-center mb-6">
              <Palette className={`mr-3 ${isBrutal ? 'text-black' : 'text-blue-600'}`} />
              <h3 className="font-black text-xl uppercase tracking-tight">Design Token: Color</h3>
            </div>
            <div className="flex gap-3 h-24">
              <div className="flex-1 rounded-2xl shadow-inner border border-black/5" style={{ backgroundColor: theme.accentColor }}></div>
              <div className="flex-1 rounded-2xl bg-[#2C2C2C]"></div> 
              <div className="flex-1 rounded-2xl bg-[#BDC3C7]"></div>
            </div>
            <div className="mt-6 flex justify-between items-end font-mono text-[10px] uppercase opacity-50">
              <span>Primary: {theme.accentColor}</span>
              <span>Secondary: Asphalt & Silver</span>
            </div>
          </div>

          {/* Strategic Fit Card - Updated to use unique strategy text */}
          <div className={`p-8 flex flex-col justify-between transition-all
            ${isBrutal ? 'bg-yellow-400 text-black border-4 border-black shadow-brutal rounded-none' : 'bg-slate-900 text-white rounded-[3rem] shadow-xl'}`}>
            
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className={`mr-3 ${isBrutal ? 'text-black' : 'text-pink-400'}`} size={24} />
                <h3 className="font-black text-xl uppercase tracking-tight text-white">Strategic Fit</h3>
              </div>
              
              {/* This is the key change: dynamically pulling unique strategy */}
              <p className="opacity-80 text-sm leading-relaxed mb-6">
                {theme.strategy}
              </p>

              <ul className="space-y-2 text-xs font-semibold uppercase tracking-wide opacity-90">
                <li className="flex items-center text-white">
                  <div className="w-1.5 h-1.5 rounded-full mr-2 bg-pink-500" /> High-Conversion Layout
                </li>
                <li className="flex items-center text-white">
                  <div className="w-1.5 h-1.5 rounded-full mr-2 bg-pink-500" /> Local Search Optimized
                </li>
              </ul>
            </div>

            <Link to="/contact" className={`mt-8 flex items-center font-bold text-sm uppercase tracking-widest group ${isBrutal ? 'text-black' : 'text-cyan-400'}`}>
              Request This Build <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
