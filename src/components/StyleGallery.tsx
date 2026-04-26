import React from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div 
            key={theme.id} 
            className="border border-black/10 p-8 transition-all hover:shadow-2xl" 
            style={{ backgroundColor: theme.colors.background }}
          >
            <h3 className="text-4xl font-black mb-4 italic uppercase leading-none" style={{ color: theme.colors.text }}>
              {theme.name}
            </h3>
            <p className="text-sm mb-10 opacity-80 leading-relaxed min-h-[60px]">
              {theme.description}
            </p>
            <Link 
              to={`/theme/${theme.id}`} 
              className="inline-flex items-center gap-3 font-bold uppercase text-sm tracking-tighter" 
              style={{ color: theme.colors.primary }}
            >
              Preview Style <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
