import React from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div key={theme.id} className="group relative overflow-hidden border border-black/10 p-6 transition-all hover:shadow-xl" style={{ backgroundColor: theme.colors.background }}>
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">{theme.category}</span>
            <h3 className="text-3xl font-black mb-2 italic uppercase leading-none mt-4" style={{ color: theme.colors.text }}>{theme.name}</h3>
            <p className="text-sm mb-8 opacity-70 leading-relaxed">{theme.description}</p>
            <Link to={`/theme/${theme.id}`} className="inline-flex items-center gap-2 font-bold uppercase text-sm group-hover:gap-4 transition-all" style={{ color: theme.colors.primary }}>
              Preview Style <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
