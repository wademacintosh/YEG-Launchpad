import React, { useState } from 'react';
import { themes, ThemeDefinition } from '../lib/themes';
import PreviewModal from './PreviewModal'; // Ensure this matches your Lovable file name

export default function StyleGallery() {
  // State to handle which theme is currently active in the modal
  const [selectedTheme, setSelectedTheme] = useState<ThemeDefinition | null>(null);

  // Helper to safely grab themes
  const getTheme = (slug: string) => themes.find(t => t.slug === slug);
  
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
      <div className="mb-16">
        <h2 className="text-5xl font-black mb-4">Browse the lineup</h2>
        <p className="text-xl text-gray-600">Distinct directions for your detailing brand. Click any card to open its full demo.</p>
        
        {/* Filter Tags */}
        <div className="flex gap-4 mt-8 border border-gray-200 rounded-lg p-1 w-max">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium text-sm">All</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Luxury</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Rugged</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Modern</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 01: OBSIDIAN ECO-CLEAN */}
        {getTheme('obsidian-eco') && (
          <div onClick={() => setSelectedTheme(getTheme('obsidian-eco')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded-2xl p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 border border-gray-100 shadow-sm hover:shadow-xl" style={{ backgroundColor: '#F5F5F1' }}>
              <div className="w-full flex justify-between items-start">
                <span className="bg-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#7C8982] uppercase">Eco / Spa</span>
              </div>
              <div className="text-center mt-auto mb-8">
                <h3 className="text-4xl font-bold mb-2 text-[#2A2C2B]" style={{ fontFamily: '"Playfair Display", serif' }}>Obsidian</h3>
                <p className="text-sm text-[#5C6661] font-medium">Minimal & Quiet</p>
              </div>
              <button className="w-full border border-[#D1D4CD] rounded-full py-4 text-xs font-bold tracking-[0.2em] text-[#7C8982] uppercase group-hover:bg-[#7C8982] group-hover:text-white transition-colors">
                Preview Style
              </button>
            </div>
          </div>
        )}

        {/* 02: NIGHT VISION ARMOR */}
        {getTheme('night-vision') && (
          <div onClick={() => setSelectedTheme(getTheme('night-vision')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded-xl p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 relative" style={{ backgroundColor: '#1A1D20', border: '1px solid #2C3539' }}>
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#4ECDC4] tracking-widest">// NIGHT_VISION</span>
              </div>
              <div className="mt-auto mb-8">
                <h3 className="text-2xl font-mono text-white mb-2 font-bold uppercase tracking-tighter">Night Vision</h3>
                <p className="text-xs font-mono text-gray-400">High-contrast dark UI.</p>
              </div>
              <button className="w-full border border-[#4ECDC4]/30 py-4 text-[10px] font-mono text-[#4ECDC4] tracking-[0.3em] uppercase group-hover:bg-[#4ECDC4]/10 transition-colors">
                [ PREVIEW STYLE ]
              </button>
            </div>
          </div>
        )}

        {/* 03: DETAILFLOW */}
        {getTheme('detail-flow') && (
          <div onClick={() => setSelectedTheme(getTheme('detail-flow')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 relative" style={{ backgroundColor: '#0B1221', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="w-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8BB0F9]"></div>
                <span className="text-[10px] font-bold text-[#8BB0F9] tracking-widest uppercase">SaaS / Modern</span>
              </div>
              <div className="mt-auto mb-8">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">DetailFlow</h3>
                <p className="text-sm text-gray-400 font-light">Clean software aesthetic.</p>
              </div>
              <button className="w-full bg-[#8BB0F9]/10 rounded-full py-4 text-xs font-semibold text-[#8BB0F9] group-hover:bg-[#8BB0F9] group-hover:text-[#0B1221] transition-colors">
                Preview Style
              </button>
            </div>
          </div>
        )}

        {/* 04: AERO SHINE */}
        {getTheme('aero-shine') && (
          <div onClick={() => setSelectedTheme(getTheme('aero-shine')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 relative" style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(229,57,53,0.2)' }}>
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-bold text-[#E53935] tracking-[0.2em] uppercase">Motorsport</span>
              </div>
              <div className="mt-auto mb-8">
                <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Aero Shine</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Race-Team Precision.</p>
              </div>
              <button className="w-full border border-[#E53935] py-4 text-[10px] font-bold text-white tracking-[0.2em] uppercase group-hover:bg-[#E53935] transition-colors rounded">
                Preview Style &rarr;
              </button>
            </div>
          </div>
        )}

        {/* 05: PRISM */}
        {getTheme('prism') && (
          <div onClick={() => setSelectedTheme(getTheme('prism')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded-xl p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 relative" style={{ backgroundColor: '#0A0510', border: '1px solid rgba(255,90,159,0.3)' }}>
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#FF5A9F] tracking-[0.2em] drop-shadow-[0_0_5px_rgba(255,90,159,0.5)]">PRISM_OS</span>
              </div>
              <div className="mt-auto mb-8">
                <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(255,90,159,0.4)]">Prism</h3>
                <p className="text-xs font-mono text-[#FF5A9F]/80">Neon Synthwave vibes.</p>
              </div>
              <button className="w-full bg-[#FF5A9F]/10 border border-[#FF5A9F]/50 py-4 text-[10px] font-bold text-[#FF5A9F] tracking-[0.2em] uppercase group-hover:bg-[#FF5A9F] group-hover:text-[#0A0510] transition-colors rounded-md">
                Preview Style
              </button>
            </div>
          </div>
        )}

        {/* 06: VANTAGE */}
        {getTheme('vantage') && (
          <div onClick={() => setSelectedTheme(getTheme('vantage')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] rounded-lg p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 border border-[#E8E4D9] shadow-sm hover:shadow-xl" style={{ backgroundColor: '#F5F2EB' }}>
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#C2A476] uppercase">Members Only</span>
              </div>
              <div className="text-center mt-auto mb-8">
                <h3 className="text-4xl font-bold mb-2 text-[#1A1A1A]" style={{ fontFamily: '"Playfair Display", serif' }}>Vantage</h3>
                <p className="text-xs text-[#6B6B6B] font-medium tracking-widest uppercase">Heritage / Luxury</p>
              </div>
              <button className="w-full bg-[#C2A476] text-[#1A1A1A] py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#A88C5E] transition-colors rounded-sm">
                Preview Style
              </button>
            </div>
          </div>
        )}

        {/* 07: MUD, SWEAT & GEARS */}
        {getTheme('mud-sweat-gears') && (
          <div onClick={() => setSelectedTheme(getTheme('mud-sweat-gears')!)} className="group block h-full cursor-pointer">
            <div className="h-[450px] p-8 flex flex-col justify-between transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FFD600]">
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-black tracking-[0.3em] text-black uppercase block">
                  ★ YEG Heavy Duty
                </span>
              </div>
              <div className="mt-auto mb-8">
                <h3 className="text-4xl font-black text-black mb-2 uppercase tracking-tighter">Mud, Sweat <br/>& Gears</h3>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">Brutalist. Loud. Industrial.</p>
              </div>
              <button className="w-full bg-black text-[#FFD600] py-4 text-[10px] font-black tracking-widest uppercase border-2 border-black hover:bg-gray-800 transition-colors">
                Preview Style &rarr;
              </button>
            </div>
          </div>
        )}
        
      </div>

      {/* Mount the Modal outside the grid */}
      {selectedTheme && (
        <PreviewModal 
          isOpen={!!selectedTheme} 
          onClose={() => setSelectedTheme(null)} 
          theme={selectedTheme} 
        />
      )}
    </section>
  );
}
