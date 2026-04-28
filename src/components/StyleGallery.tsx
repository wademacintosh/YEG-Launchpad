import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Sparkles, Gauge } from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext';

const StyleGallery = () => {
  const { setPreview, activePreview } = useThemePreview();

  // Helper to determine if we need light or dark text based on the active preview
  const isDark = activePreview?.id === 'aero-shine-labs' || 
                 activePreview?.id === 'night-vision-armour' || 
                 activePreview?.id === 'prism-auto-works' || 
                 activePreview?.id === 'detailflow-pro';

  return (
    <section className={`px-4 py-20 transition-all duration-700 ${activePreview ? 'bg-transparent' : 'bg-white'}`}>
      {/* 🎯 Centralized Header */}
      <div className="text-center mb-16 animate-fade-up">
        <h2 className={`text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter transition-colors
          ${activePreview ? (isDark ? 'text-white' : 'text-asphalt') : 'text-asphalt'}`}>
          The <span className="text-ignition">Style</span> Gallery
        </h2>
        <p className={`max-w-2xl mx-auto font-medium transition-colors
          ${activePreview ? (isDark ? 'text-white/70' : 'text-asphalt/70') : 'text-gray-600'}`}>
          Choose a visual identity below to instantly re-skin the entire Launchpad interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {Object.values(themes).map((theme) => {
          const isCurrentlyActive = activePreview?.id === theme.id;
          
          return (
            <div
              key={theme.id}
              className={`group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 flex flex-col min-h-[420px]
                ${isCurrentlyActive 
                  ? 'border-ignition ring-4 ring-ignition/20 shadow-2xl scale-[1.02] bg-white/10 backdrop-blur-2xl' 
                  : activePreview 
                    ? `shadow-lg hover:-translate-y-2 ${isDark 
                        ? 'border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10' 
                        : 'border-black/10 bg-black/5 backdrop-blur-md hover:bg-black/10'}`
                    : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2'}`}
            >
              {/* 🎨 Theme Visual Preview Box */}
              <div className={`h-32 w-full p-6 transition-all duration-500 ${theme.containerClass} flex items-start justify-between`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                  {theme.id === 'aero-shine-labs' ? <Gauge className="text-white" size={20} /> : <Sparkles className={isCurrentlyActive ? "text-ignition" : "text-white"} size={20} />}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                  ID: {theme.id.split('-')[0]}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`text-2xl font-black mb-3 transition-colors uppercase tracking-tighter
                    ${isCurrentlyActive 
                      ? 'text-ignition' 
                      : activePreview 
                        ? (isDark ? 'text-white' : 'text-asphalt') 
                        : 'text-asphalt group-hover:text-ignition'}`}>
                    {theme.name}
                  </h3>
                  <p className={`text-sm line-clamp-3 font-medium leading-relaxed transition-colors
                    ${isCurrentlyActive 
                      ? (isDark ? 'text-white/80' : 'text-asphalt/80') 
                      : activePreview 
                        ? (isDark ? 'text-white/60' : 'text-asphalt/60') 
                        : 'text-gray-500'}`}>
                    {theme.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={() => setPreview(isCurrentlyActive ? null : theme.id)}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all
                      ${isCurrentlyActive 
                        ? 'bg-ignition text-white shadow-lg shadow-orange-500/40' 
                        : activePreview
                          ? `${isDark ? 'bg-white/20 text-white' : 'bg-black/10 text-asphalt'} backdrop-blur-md hover:bg-ignition hover:text-white border border-current/10`
                          : 'bg-asphalt text-white hover:bg-ignition shadow-md active:scale-95'}`}
                  >
                    <Eye size={16} />
                    {isCurrentlyActive ? 'Style Active' : 'Test Drive'}
                  </button>

                  <Link
                    to={`/theme/${theme.id}`}
                    className={`flex items-center justify-center font-black text-[10px] uppercase tracking-[0.2em] py-3 transition-all
                      ${isCurrentlyActive 
                        ? (isDark ? 'text-white opacity-80' : 'text-asphalt opacity-80') 
                        : activePreview 
                          ? (isDark ? 'text-white opacity-60' : 'text-asphalt opacity-60') 
                          : 'text-asphalt opacity-40 hover:opacity-100 hover:text-ignition'}`}
                  >
                    View Style Guide <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StyleGallery;
