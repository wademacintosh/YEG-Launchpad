import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const MidnightSyndicateLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#2D283E] text-[#D1D7E0] font-sans p-6 md:p-12">
    <div className="border border-[#564F6F] rounded-3xl min-h-[85vh] flex flex-col relative overflow-hidden shadow-midnight-neon bg-[#2D283E]">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#802BB1]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <nav className="relative z-10 flex justify-between items-center p-8 border-b border-[#564F6F]/50">
        <button
          onClick={onBack}
          className="bg-[#564F6F]/30 hover:bg-[#802BB1] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all"
        >
          Exit Studio
        </button>
        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#802BB1]">
          <span className="w-2 h-2 rounded-full bg-[#802BB1] shadow-[0_0_10px_#802BB1]" />
          VIP Bay Active
        </span>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-10 max-w-4xl mx-auto">
        <span className="text-[#802BB1] text-sm font-bold uppercase tracking-[0.4em] mb-6">Exotic Wrapping</span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight uppercase leading-[0.9]">
          Midnight <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#802BB1] to-[#D1D7E0]">Syndicate.</span>
        </h1>
        <p className="text-xl text-[#D1D7E0]/80 leading-relaxed max-w-2xl mx-auto mb-12">
          {item.tagline || "Exclusive aesthetics for the elite. Specializing in color-change vinyl, starlight headliners, and custom lighting integration."}
        </p>
        <button className="bg-[#802BB1] text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(128,43,177,0.5)] transition-all">
          Consultation Request
        </button>
      </main>
    </div>
  </div>
);

export default MidnightSyndicateLayout;
