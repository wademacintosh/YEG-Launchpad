import React from 'react';

export default function BridgeDivider() {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
        {/* The Walterdale Arch SVG */}
        <svg 
          width="400" 
          height="80" 
          viewBox="0 0 200 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xs md:max-w-lg transition-all duration-500"
        >
          {/* Main Arch */}
          <path 
            d="M0 35 C 50 0, 150 0, 200 35" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            fill="none"
          />
          {/* Vertical Support Cables */}
          <path 
            d="M30 35 L 30 22 M 65 35 L 65 12 M 100 35 L 100 8 M 135 35 L 135 12 M 170 35 L 170 22" 
            stroke="currentColor" 
            strokeWidth="0.4"
          />
          {/* Ground Line */}
          <line x1="0" y1="35" x2="200" y2="35" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        </svg>
        
        {/* Text Label */}
        <div className="flex flex-col items-center mt-8">
          <div className="h-[1px] w-12 bg-current mb-5 opacity-20" />
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold">
            Walterdale · Edmonton
          </span>
        </div>
      </div>
    </div>
  );
}
