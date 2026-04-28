import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 animate-fade-up">
          Launch Your Vision in <span className="text-blue-600">Edmonton</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
          We build high-performance web applications tailored to the YEG business landscape.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
          <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105">
            See Styles <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="flex items-center justify-center bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 transition-all">
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold mb-2 uppercase tracking-widest">Scroll</span>
            <MousePointer2 size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
