import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { themes } from '../lib/themes';
import ThemeDemo from '../components/ThemeDemo';

export default function ThemePage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Important: Find the theme by slug, not by ID
  const theme = themes.find(t => t.slug === slug);

  // If the theme isn't found, go back home instead of showing a blank error
  if (!theme) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.tokens.bg }}>
      <ThemeDemo theme={theme} />
    </div>
  );
}
