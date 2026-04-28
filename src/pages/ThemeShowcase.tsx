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
          <Link to="/" className="inline-flex items-center text-ignition font-bold mt-4">
            <ArrowLeft size={18} className="mr-2" /> Return to Launchpad
          </Link>
        </div>
      </div>
    );
  }

  // Helper flags for design logic
  const isBrutal = theme.id === 'mud-sweat-gears';
  const isRetro = theme.id === 'route-66-review';
  const isPrism = theme.id === 'prism-auto-works';
  const isAero = theme.id === 'aero-shine-labs';

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-all duration-700 ${isPrism ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className={`flex items-center text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity ${isPrism ? 'text-white' : 'text-asphalt'}`}>
            <ArrowLeft size={18} className="mr-2" /> Back to All Styles
          </Link>
          <div className={`px-4 py-1 rounded-full border border-current text-[10px] font-black uppercase tracking-tighter opacity-50 ${isPrism ? 'text-pink-500' : 'text-slate-400'}`}>
            SYSTEM_ID: {theme.id}
          </div>
        </div>

        {/* Hero Preview Card */}
        <div className={`relative overflow-hidden p-8 md:p-20 rounded-[2.5rem] transition-all duration-1000 
          ${theme.containerClass} 
          ${isBrutal ? 'border-4 border-black shadow-brutal' : ''} 
          ${isRetro ? 'shadow-sticker rotate-1' : ''}`}>
          
          {/* Prism Glow Fix */}
          {isPrism && (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-cyan-500/20 pointer-events-none" />
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
                ${isBrutal ? 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_#000]' : 'hover:scale-105 shadow-lg shadow-black/10'}`}>
                Launch With This Style
              </button>
            </div>
          </div>

          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            {isBrutal && <Zap size={240} className="rotate-12 text-black" />}
            {isAero && <Gauge size={240} className="-rotate-12 text-white" />}
            {isRetro && <Camera size={240} className="rotate-3 text-red-600" />}
            {isPrism && <Monitor size={240} className="text-cyan-400" />}
            {!isBrutal && !isAero && !isRetro && !isPrism && <Sparkles size={240} className="text-current" />}
          </div>
        </div>

        {/* Strategic Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 animate-fade-up">
          
          {/* Palette Card */}
          <div className={`p-8 bg-white border border-gray-100 shadow-sm transition-all
            ${isBrutal ? 'border-4 border-black shadow-brutal rounded-none' : 'rounded-[3rem]'}`}>
            <div className="flex items-center mb-6">
              <Palette className="mr-3 text-ignition" />
              <h3 className="font-black text-xl uppercase tracking-tight text-asphalt">High-Contrast Palette</h3>
            </div>
            <div className="flex gap-3 h-24">
              {/* Primary Accent */}
              <div className="flex-1 rounded-2xl shadow-inner border border-black/5" style={{ backgroundColor: theme.accentColor }}></div>
              {/* Edmonton Asphalt */}
              <div className="flex-1 rounded-2xl bg-[#2C2C2C]"></div> 
              {/* High Level Silver */}
              <div className="flex-1 rounded-2xl bg-[#BDC3C7]"></div>
            </div>
            <div className="mt-6 flex justify-between items-end font-mono text-[10px] uppercase opacity-50 text-asphalt">
              <span>Primary Accent: {theme.accentColor}</span>
              <span>Asphalt & Silver</span>
            </div>
          </div>

          {/* Updated Strategic Fit Card */}
          <div className={`p-8 flex flex-col justify-between transition-all border border-white/5 shadow-2xl
            ${isBrutal ? 'bg-yellow-400 text-black border-4 border-black shadow-brutal rounded-none' : 'bg-asphalt text-white rounded-[3rem]'}`}>
            
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className={`mr-3 ${isBrutal ? 'text-black' : 'text-ignition'}`} size={24} />
                <h3 className="font-black text-xl uppercase tracking-tight">The "Ignition" Strategy</h3>
              </div>
              
              <p className="opacity-80 text-sm leading-relaxed mb-6 italic">
                {theme.strategy}
              </p>

              <ul className="space-y-2 text-xs font-semibold uppercase tracking-wide opacity-90">
                <li className="flex items-center">
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isBrutal ? 'bg-black' : 'bg-ignition'}`} />
                  High-Visibility Aesthetic
                </li>
                <li className={`flex items-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isBrutal ? 'bg-black' : 'bg-ignition'}`} />
                  Signals Premium Detail Finish
                </li>
                <li className={`flex items-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isBrutal ? 'bg-black' : 'bg-ignition'}`} />
                  Professional Detailing Authority
                </li>
              </ul>
            </div>

            <Link to="/contact" className={`mt-8 flex items-center font-bold text-sm uppercase tracking-widest group ${isBrutal ? 'text-black' : 'text-ignition'}`}>
              Request This Build <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
