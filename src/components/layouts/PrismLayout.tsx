import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const PrismLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#0a0014] text-white overflow-hidden relative font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-[#c026d3]/20 via-transparent to-[#ec4899]/20" />
    <nav className="relative z-10 p-8 flex justify-between">
      <button
        onClick={onBack}
        className="text-[10px] uppercase tracking-[0.4em] text-fuchsia-400"
      >
        ← Back
      </button>
      <span className="text-[10px] uppercase tracking-[0.4em] text-cyan-400">
        Prism_OS_v2
      </span>
    </nav>
    <main className="relative z-10 max-w-5xl mx-auto py-32 px-10">
      <h1 className="text-8xl font-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">
        Prism <br /> Auto-Works
      </h1>
      <p className="text-2xl text-fuchsia-100/60 max-w-xl mb-12 italic leading-relaxed">
        {item.tagline}
      </p>
      <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-fuchsia-500 hover:text-white transition-all shadow-[0_0_40px_rgba(192,38,211,0.5)]">
        Request Correction
      </button>
    </main>
  </div>
);

export default PrismLayout;
