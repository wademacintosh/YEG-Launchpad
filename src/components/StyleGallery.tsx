import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { themes } from '../themes';

const StyleGallery = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase italic tracking-tight">
          Choose Your Vibe
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a design language tailored for the Edmonton business landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.values(themes).map((theme) => (
          <Link
            key={theme.id}
            to={`/theme/${theme.id}`}
            className={`group relative p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[250px] ${theme.containerClass}`}
          >
            <div>
              {/* Color Swatch */}
              <div 
                className="w-12 h-12 rounded-full mb-6 shadow-inner border border-black/5"
                style={{ backgroundColor: theme.accentColor }}
              />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-ignition transition-colors">
                {theme.name}
              </h3>
              <p className="text-sm opacity-80 line-clamp-3">
                {theme.description}
              </p>
            </div>

            <div className="mt-6 flex items-center font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
              Explore Style <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StyleGallery;
