import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemePreview } from '../context/ThemeContext'; // Import the hook

const Hero = () => {
  const { activePreview } = useThemePreview(); // Listen for active previews

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-all duration-700 
      ${activePreview ? 'bg-transparent' : 'bg-white'}`}>
      
      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        {/* Main Heading with fade-up animation */}
        <h1 className={`text-5xl md:text-8xl font-black mb-6 animate-fade-up leading-[0.85] tracking-tighter transition-colors
          ${activePreview ? 'text-current' : 'text-asphalt'}`}>
          Launch Your Vision in <span className="text-ignition uppercase italic">Edmonton</span>
        </h1>
        
        {/* Subtext with slight delay for a staggered feel */}
        <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] font-medium transition-colors
          ${activePreview ? 'text-current opacity-80' : 'text-gray-600'}`}>
          We build high-performance web applications tailored to the YEG business landscape.
        </p>
        
        {/* CTAs with hover scale and press effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-up [animation-delay:400ms]">
          <Link to="/#styles" className="btn-primary flex items-center justify-center gap-2 group">
            See Styles <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </Link>
          
          <Link to="/contact" className={`flex items-center justify-center border-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-sm
            ${activePreview 
              ? 'bg-transparent text-current border-current' 
              : 'bg-white border-silver text-asphalt hover:border-ignition hover:text-ignition'}`}>
            Contact Us
          </Link>
        </div>

        {/* Scroll Indicator with floating animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
          <div className="flex flex-col items-center animate-float">
            <span className={`text-[10px] font-black mb-2 uppercase tracking-[0.2em] transition-colors
              ${activePreview ? 'text-current' : 'text-gray-400'}`}>Scroll</span>
            <MousePointer2 size={24} className={activePreview ? 'text-current' : 'text-ignition'} />
          </div>
        </div>
      </div>

      {/* Subtle background glow - Fades out when a preview is active to avoid color clashing */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ignition/5 via-transparent to-transparent -z-0 transition-opacity duration-700
        ${activePreview ? 'opacity-0' : 'opacity-100'}`} />
    </section>
  );
};

export default Hero;
