import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const TrackSpecLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#222629] text-white font-sans p-4 md:p-8 bg-track-grid relative overflow-hidden">
    {/* Decorative Diagonal Slash */}
    <div className="absolute top-0 right-0 w-[500px] h-[200vh] bg-[#474B4F]/10 transform rotate-45 translate-x-1/2 -translate-y-1/4 pointer-events-none" />

    <div className="border border-[#474B4F] min-h-[90vh] flex flex-col relative z-10 bg-[#222629]/90 backdrop-blur-sm">
      <nav className="p-6 border-b border-[#474B4F] flex justify-between items-center bg-[#222629]">
        <button
          onClick={onBack}
          className="text-[#86C232] font-mono text-[10px] hover:text-white tracking-[0.2em] uppercase transition-colors"
        >
          &lt; System_Return
        </button>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-[#86C232] rounded-full animate-pulse" />
          <span className="text-[#6B6E70] font-mono text-[10px] tracking-widest uppercase">
            Telemetry: Online
          </span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col justify-center p-10 md:p-24 max-w-5xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#86C232]" />
          <span className="text-[#86C232] tracking-[0.4em] uppercase text-[10px] font-bold font-mono">
            Aero-Dynamic Surface Prep
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-[0.9] transform -skew-x-6">
          Precision <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86C232] to-[#61892F]">
            Performance.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#6B6E70] max-w-2xl leading-relaxed mb-12 font-medium">
          {item.tagline || "Engineered for the track. We apply high-tolerance decontamination and ultra-slick ceramic barriers designed to reduce drag and repel high-heat brake dust."}
        </p>
        
        <div className="flex flex-wrap gap-6">
          <button className="bg-[#86C232] text-[#222629] px-8 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors transform -skew-x-6">
            Book Track Prep
          </button>
          <button className="border border-[#474B4F] text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:border-[#86C232] hover:text-[#86C232] transition-colors transform -skew-x-6">
            View Specs
          </button>
        </div>
      </main>
    </div>
  </div>
);

export default TrackSpecLayout;
