import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const JDMTokyoLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#2A1B3D] text-white font-sans p-6 relative overflow-hidden">
    {/* Abstract geometric background elements */}
    <div className="absolute top-10 right-10 w-64 h-64 border-4 border-[#D83F87]/20 rotate-45 pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-96 h-96 border-4 border-[#E98074]/10 rotate-12 pointer-events-none" />

    <div className="max-w-5xl mx-auto border-2 border-[#D83F87] min-h-[90vh] flex flex-col relative z-10 shadow-jdm-glow bg-[#2A1B3D]/90 backdrop-blur-sm">
      
      <nav className="p-6 border-b-2 border-[#D83F87] flex justify-between bg-[#D83F87]/10">
        <button
          onClick={onBack}
          className="text-[#E98074] font-bold text-[11px] hover:text-white uppercase tracking-[0.3em] transition-colors"
        >
          &lt; Garage
        </button>
        <span className="text-[#D83F87] text-[10px] uppercase font-mono tracking-widest animate-pulse">
          // DRIFT_SPEC_LOADED
        </span>
      </nav>

      <main className="flex-1 flex flex-col justify-center p-10 md:p-20 relative">
        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-none text-jdm-glow">
          Tokyo <br />
          <span className="text-[#D83F87]">Nights.</span>
        </h1>
        
        <div className="border-l-4 border-[#E98074] pl-6 mb-12 max-w-xl bg-[#2A1B3D]/80 py-4">
          <p className="text-lg md:text-xl text-[#D1D7E0] leading-relaxed font-mono uppercase tracking-wide text-sm">
            {item.tagline || "Vibrant paint correction and show-car prep for the import scene. Get noticed."}
          </p>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-[#D83F87] text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#E98074] transition-colors shadow-jdm-glow">
            Start Build
          </button>
          <button className="border-2 border-[#E98074] text-[#E98074] px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#E98074] hover:text-white transition-colors">
            Gallery
          </button>
        </div>
      </main>

      {/* Cyberpunk style footer bar */}
      <div className="p-4 border-t-2 border-[#D83F87] bg-[#D83F87]/10 flex justify-end">
        <div className="flex gap-2">
          <div className="w-8 h-2 bg-[#D83F87]" />
          <div className="w-4 h-2 bg-[#E98074]" />
          <div className="w-2 h-2 bg-white" />
        </div>
      </div>
    </div>
  </div>
);

export default JDMTokyoLayout;
