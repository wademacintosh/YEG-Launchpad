import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themes as themeData } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  const [themes, setThemes] = useState<any[]>([]);

  useEffect(() => {
    // Setting state after mount prevents the "ig before initialization" error
    setThemes(themeData);
  }, []);

  if (themes.length === 0) return null;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div 
            key={theme.id} 
            className="border border-black/10 p-8 transition-transform hover:scale-[1.02]" 
            style={{ backgroundColor: theme.colors.background }}
          >
            <h3 className="text-3xl font-black mb-4 uppercase" style={{ color: theme.colors.text }}>
              {theme.name}
            </h3>
            <p className="text-sm mb-8 opacity-70" style={{ color: theme.colors.text }}>
              {theme.description}
            </p>
            <Link 
              to={`/theme/${theme.id}`} 
              className="font-bold uppercase text-sm flex items-center gap-2" 
              style={{ color: theme.colors.primary }}
            >
              Preview Style <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
