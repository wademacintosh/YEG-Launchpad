import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext'; // Import the hook

const StyleGallery = () => {
  const { setPreview, activePreview } = useThemePreview();

  return (
    <section className={`px-4 py-20 transition-all duration-700 ${activePreview ? 'bg-transparent' : 'bg-white'}`}>
      <div className="text-center mb-16 animate-fade-up">
        <h2 className={`text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tight transition-colors
          ${activePreview ? 'text-current' : 'text-asphalt'}`}>
          The <span className="text-ignition">Style</span> Gallery
        </h2>
        <p className={`max-w-2xl mx-auto font-medium transition-colors
          ${activePreview ? 'text-current opacity-70' : 'text-gray-600'}`}>
          Select a visual identity below to instantly re-skin the entire Launchpad interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Object.values(themes).map((theme) => {
          const isCurrentlyActive = activePreview?.id === theme.id;
          
          return (
            <div
              key={theme.id}
              className={`group relative p-8 rounded-[2rem] border transition-all duration-500 flex flex-col justify-between min-h-[320px]
                ${isCurrentlyActive 
                  ? 'border-ignition ring-4 ring-ignition/20 shadow-2xl scale-[1.02] bg-white/10 backdrop-blur-md' 
                  : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2'}`}
            >
              <div>
                {/* Theme Color Swatch */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl shadow-inner border border-black/5" style={{ backgroundColor: theme.accentColor }} />
                  {isCurrentlyActive && <Sparkles className="text-ignition animate-pulse" size={20} />}
                </div>

                <h3 className={`text-2xl font-black mb-2 transition-colors uppercase tracking-tighter
                  ${isCurrentlyActive ? 'text-ignition' : 'text-asphalt group-hover:text-ignition'}`}>
                  {theme.name}
                </h3>
                <p className={`text-sm line-clamp-3 font-medium transition-colors
                  ${isCurrentlyActive ? 'text-white' : 'text-gray-500'}`}>
                  {theme.description}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {/* Link to Detail Page */}
                <Link
                  to={`/theme/${theme.id}`}
                  className={`flex items-center justify-center font-black text-[10px] uppercase tracking-[0.2em] py-3 rounded-xl border transition-all
                    ${isCurrentlyActive 
                      ? 'border-white/20 text-white hover:bg-white/10' 
                      : 'border-gray-100 text-asphalt hover:border-ignition hover:text-ignition'}`}
                >
                  View Details <ArrowRight className="ml-2" size={14} />
                </Link>

                {/* The Magic Preview Button */}
                <button
                  onClick={() => setPreview(isCurrentlyActive ? null : theme.id)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all
                    ${isCurrentlyActive 
                      ? 'bg-ignition text-white shadow-lg shadow-orange-500/40' 
                      : 'bg-asphalt text-white hover:bg-ignition shadow-md'}`}
                >
                  <Eye size={14} />
                  {isCurrentlyActive ? 'Style Active' : 'Test Drive'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StyleGallery;
