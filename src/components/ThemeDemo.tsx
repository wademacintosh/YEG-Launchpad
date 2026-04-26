import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowLeft } from 'lucide-react';

export default function ThemeDemo() {
  const { slug } = useParams();
  const theme = themes.find((t) => t.id === slug) || themes[0];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text, fontFamily: theme.fonts.sans }}>
      <nav className="p-6 flex justify-between items-center border-b border-black/10">
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition">
          <ArrowLeft size={20} /> Back to Gallery
        </Link>
        <h1 className="text-xl font-bold uppercase tracking-tighter" style={{ color: theme.colors.primary }}>{theme.name}</h1>
      </nav>
      <main className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none" style={{ fontFamily: theme.fonts.display || theme.fonts.sans }}>
          {theme.description}
        </h2>
        <button className="mt-8 px-8 py-4 text-lg font-bold" style={{ backgroundColor: theme.colors.primary, color: '#fff' }}>
          Book This Style
        </button>
      </main>
    </div>
  );
}
