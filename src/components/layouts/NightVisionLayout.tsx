import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const NightVisionLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#22d3ee] font-mono p-4">
    <div className="border border-[#22d3ee]/30 min-h-[95vh] relative overflow-hidden">
      <nav className="p-6 border-b border-[#22d3ee]/30 flex justify-between text-[10px]">
        <button
          onClick={onBack}
          className="hover:bg-[#22d3ee] hover:text-black px-2 uppercase underline"
        >
          Back_to_Studio
        </button>
        <span className="animate-pulse text-cyan-400">• COATING_ACTIVE</span>
      </nav>
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-12 lg:col-span-7 p-12 border-b lg:border-b-0 lg:border-r border-[#22d3ee]/30">
          <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
            {item.title}
          </h1>
          <p className="text-lg opacity-80 max-w-md italic">{item.tagline}</p>
        </div>
        <div className="col-span-12 lg:col-span-5 p-12 bg-[#22d3ee]/5">
          <div className="space-y-6">
            <div className="h-1 bg-[#22d3ee] w-full" />
            <p className="text-[10px] uppercase tracking-widest">
              Nano-Ceramic Surface Shield Installed
            </p>
            <button className="w-full py-4 bg-[#22d3ee] text-black font-bold uppercase text-xs shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              Initiate Shield
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NightVisionLayout;
