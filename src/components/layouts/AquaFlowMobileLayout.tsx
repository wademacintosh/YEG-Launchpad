import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const AquaFlowMobileLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#C1C8E4] font-sans flex justify-center items-center p-4">
    {/* Mimicking a sleek mobile app view or clean landing page */}
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl rounded-[3rem] shadow-[0_20px_50px_rgba(86,128,233,0.15)] border border-white overflow-hidden min-h-[85vh] flex flex-col relative">
      
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#84CEEB]/40 to-transparent pointer-events-none" />

      <nav className="relative z-10 p-8 flex justify-between items-center">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#5680E9] shadow-sm hover:scale-105 transition-transform text-xl"
        >
          ←
        </button>
        <div className="w-10 h-10 rounded-full bg-[#5680E9] flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </nav>

      <main className="relative z-10 flex-1 p-8 flex flex-col justify-end">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#84CEEB]/20 mt-auto">
          <span className="inline-block px-3 py-1 bg-[#84CEEB]/20 text-[#5680E9] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            Waterless Eco-Wash
          </span>
          <h1 className="text-4xl font-extrabold text-[#5680E9] mb-4 tracking-tight">
            AquaFlow.
          </h1>
          <p className="text-[#5680E9]/70 text-sm leading-relaxed mb-8 font-medium">
            {item.tagline || "We bring the clean to your driveway. Tap below to summon a mobile detailer instantly."}
          </p>
          <button className="w-full bg-[#5680E9] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#84CEEB] hover:text-[#5680E9] transition-colors shadow-[0_8px_20px_rgba(86,128,233,0.3)]">
            Book Mobile Wash
          </button>
        </div>
      </main>
    </div>
  </div>
);

export default AquaFlowMobileLayout;
