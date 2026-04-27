import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const ObsidianLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#eef2ec] text-[#1f2a22] font-serif p-8">
    <nav className="flex justify-between border-b border-black/10 pb-4 mb-20 font-sans text-[10px] tracking-widest uppercase">
      <button onClick={onBack}> Back</button>
      <span>Ceramic Concept / 01</span>
    </nav>
    <main className="max-w-3xl mx-auto text-center space-y-12">
      <h1 className="text-8xl font-medium leading-none tracking-tighter italic">Pure Detail.</h1>
      <p className="text-2xl leading-relaxed opacity-80 max-w-xl mx-auto">{item.tagline}</p>
      <div className="pt-10">
        <button className="px-12 py-4 border border-[#1f2a22] rounded-full hover:bg-[#1f2a22] hover:text-white transition-all uppercase text-xs tracking-[0.3em]">
          Request Quote
        </button>
      </div>
    </main>
  </div>
);

export default ObsidianLayout;
