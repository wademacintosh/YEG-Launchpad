import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        {/* Main Heading with fade-up animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 animate-fade-up">
          Launch Your Vision in <span className="text-blue-600">Edmonton</span>
        </h1>
        
        {/* Subtext with slight delay for a staggered feel */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          We build high-performance web applications tailored to the YEG business landscape.
        </p>
        
        {/* CTAs with hover scale and press effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [animation-delay:400ms]">
          <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 hover:bg-blue-700 shadow-lg hover:shadow-blue-200">
            See Styles <ArrowRight className="ml-2" size={20} />
          </button>
          
          <button className="flex items-center justify-center bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 hover:border-blue-600 hover:text-blue-600 shadow-sm">
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator with floating animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
          <div className="flex flex-col items-center animate-float">
            <span className="text-xs font-semibold mb-2 uppercase tracking-widest text-gray-400">Scroll</span>
            <MousePointer2 size={24} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* Optional: Subtle background glow for extra polish */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-0" />
    </section>
  );
};

export default Hero;
