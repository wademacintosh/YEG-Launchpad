import React from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div key={theme.id} className="border border-black/10 p-8" style={{ backgroundColor: theme.colors.background }}>
            <h3 className="text-3xl font-black mb-4 uppercase" style={{ color: theme.colors.text }}>{theme.name}</h3>
            <p className="text-sm mb-8 opacity-70">{theme.description}</p>
            <Link to={`/theme/${theme.id}`} className="font-bold uppercase text-sm" style={{ color: theme.colors.primary }}>
              Preview Style <ArrowRight className="inline" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
