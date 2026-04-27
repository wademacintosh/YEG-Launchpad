import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const VanguardLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#111] text-[#eee] font-mono p-4 md:p-10">
    <div className="border-4 border-stone-800 min-h-[90vh] flex flex-col">
      <nav className="p-6 border-b-4 border-stone-800 flex justify-between bg-stone-900">
        <button
          onClick={onBack}
          className="bg-stone-800 px-4 py-1 text-[10px] hover:bg-white hover:text-black tracking-widest"
        >
          RETURN_TO_STUDIO
        </button>
        <span className="text-red-600 animate-pulse font-bold tracking-widest uppercase">
          [ Armor Shield Active ]
        </span>
      </nav>
      <main className="flex-1 flex flex-col justify-center p-10 md:p-20">
        <span className="text-stone-500 mb-4 tracking-[0.3em] uppercase text-xs font-bold">
          10-MIL BALLISTIC PPF
        </span>
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-10 tracking-tighter leading-none text-white italic">
          Vanguard <br /> Armor.
        </h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed border-l-4 border-red-600 pl-8 mb-12 italic font-bold">
          {item.tagline}
        </p>
        <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white self-start">
          Protect Build
        </button>
      </main>
    </div>
  </div>
);

export default VanguardLayout;
