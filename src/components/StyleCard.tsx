import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface StyleCardProps {
  theme: any;
}

export default function StyleCard({ theme }: StyleCardProps) {
  return (
    <div className="p-6 border border-black/10" style={{ backgroundColor: theme.colors.background }}>
      <h3 className="text-2xl font-bold uppercase mb-4" style={{ color: theme.colors.text }}>{theme.name}</h3>
      <Link to={`/theme/${theme.id}`} className="flex items-center gap-2 font-bold" style={{ color: theme.colors.primary }}>
        View Style <ArrowRight size={16} />
      </Link>
    </div>
  );
}
