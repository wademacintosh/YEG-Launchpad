import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const KineticLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-white text-black font-black overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-blue-600 animate-speed-streak"
          style={{
            top: `${Math.random() * 100}%`,
            left: "-100%",
            width: `${Math.random() * 300 + 100}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 0.5 + 0.3}s`,
          }}
        />
      ))}
    </div>
    <nav className="relative z-10 flex justify-between p-6 bg-blue-600 text-white">
      <button onClick={onBack} className="italic text-xs tracking-tighter hover:underline">← BACK</button>
      <span className="italic text-xs tracking-tighter font-bold uppercase">
        Polymer Bonding: Live
      </span>
    </nav>
    <main className="relative z-10 p-10 md:p-20">
      <h1 className="text-[12vw] italic leading-[0.8] tracking-tighter uppercase mb-10 transform -skew-x-12">
        Kinetic <br /> <span className="text-blue-600">Coatings.</span>
      </h1>
      <div className="max-w-xl bg-black text-white p-8 transform -skew-x-12">
        <p className="text-xl italic font-bold leading-tight transform skew-x-12">{item.tagline}</p>
      </div>
      <button className="mt-12 group flex items-center gap-4 text-3xl italic uppercase hover:text-blue-600 transition-colors">
        Start Detail <span className="group-hover:translate-x-4 transition-transform">→</span>
      </button>
    </main>
    <div className="absolute bottom-0 w-full bg-blue-600 py-4 border-t-4 border-black whitespace-nowrap overflow-hidden">
      <div className="inline-block animate-marquee uppercase italic text-sm text-white tracking-[0.5em]">
        POLYMER SEALANT • CERAMIC BOOST • RAPID APPLICATION • INSTANT BOND •
      </div>
    </div>
    <style>{`
      @keyframes speed-streak {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(400vw);
        }
      }
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-speed-streak {
        animation: speed-streak linear infinite;
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `}</style>
  </div>
);

export default KineticLayout;
