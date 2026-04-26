import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 px-6 bg-[#2C2C2C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6 animate-fade-in-up">
          Launch Your <span className="text-[#FF6600]">Brand</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl opacity-80 mb-10 leading-tight">
          Premium detailing visual identities for Edmonton's elite automotive shops.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-[#FF6600] font-bold uppercase tracking-widest hover:bg-orange-600 transition">
            View Gallery
          </button>
        </div>
      </div>
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
