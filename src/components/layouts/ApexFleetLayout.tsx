import React from 'react';
import { StyleItem } from "../StyleCard";

interface Props {
  item: StyleItem;
  onBack: () => void;
}

const ApexFleetLayout: React.FC<Props> = ({ item, onBack }) => (
  <div className="min-h-screen bg-[#022140] text-[#D1D7E0] font-sans p-4 md:p-12 relative">
    <div className="absolute inset-0 bg-apex-corporate pointer-events-none" />
    
    <div className="max-w-6xl mx-auto relative z-10 border-t-4 border-[#265077] bg-[#022140]/80 backdrop-blur-md shadow-2xl min-h-[85vh] flex flex-col">
      <nav className="flex justify-between items-center p-8 border-b border-[#265077]/50">
        <button
          onClick={onBack}
          className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2D5F5D] hover:text-white transition-colors"
        >
          ← Client Portal
        </button>
        <span className="text-[10px] uppercase tracking-widest font-serif text-white/50">
          Executive Maintenance Protocol
        </span>
      </nav>

      <main className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight" style={{ fontFamily: "serif" }}>
              Apex Fleet <br />
              <span className="font-bold text-[#265077]">Solutions.</span>
            </h1>
            <div className="w-16 h-1 bg-[#2D5F5D] mb-8" />
            <p className="text-lg text-[#D1D7E0]/90 leading-relaxed font-light mb-10 max-w-md">
              {item.tagline || "Discreet, high-volume maintenance for commercial fleets and executive vehicles. Fully insured. Exceptionally reliable."}
            </p>
            <button className="bg-[#265077] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#2D5F5D] transition-all shadow-lg">
              Request B2B Proposal
            </button>
          </div>
          
          <div className="hidden md:block p-10 border border-[#265077]/30 bg-[#265077]/10">
            <h4 className="text-white font-serif text-xl mb-4">Service Level Agreement</h4>
            <ul className="space-y-4 text-sm text-[#D1D7E0]/80">
              <li className="flex justify-between border-b border-[#265077]/30 pb-2">
                <span>Account Tier:</span> <span className="text-white">Enterprise</span>
              </li>
              <li className="flex justify-between border-b border-[#265077]/30 pb-2">
                <span>Volume Discount:</span> <span className="text-white">Active</span>
              </li>
              <li className="flex justify-between border-b border-[#265077]/30 pb-2">
                <span>Response Time:</span> <span className="text-white">&lt; 4 Hours</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default ApexFleetLayout;
