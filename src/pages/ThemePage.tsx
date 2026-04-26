import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { themes } from '../lib/themes';
import ThemeDemo from '../components/ThemeDemo';

export default function ThemePage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find theme by slug instead of id
  const theme = themes.find(t => t.slug === slug);

  if (!theme) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{ backgroundColor: theme.tokens.bg, minHeight: '100vh' }}>
      <ThemeDemo theme={theme} />
    </div>
  );
}
