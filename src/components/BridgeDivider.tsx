import React from 'react';

export default function BridgeDivider() {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        {/* The Walterdale Arch */}
        <svg 
          width="320" 
          height="60" 
          viewBox="0 0 200 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xs md:max-w-md"
        >
          <path 
            d="M0 35 C 50 0, 150 0, 200 35" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
          />
          {/* Support Cables */}
          <path 
            d="M20 35 L 20 28 M 60 35 L 60 15 M 100 35 L 100 10 M 140 35 L 140 15 M 180 35 L 180 28" 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
        </svg>
        
        {/* Text Label */}
        <div className="flex flex-col items-center mt-6">
          <div className="h-[1px] w-8 bg-current mb-4 opacity-20" />
          <span className="text-[9px] uppercase tracking-[0.6em] font-bold">
            Walterdale · Edmonton
          </span>
        </div>
      </div>
    </div>
  );
}
