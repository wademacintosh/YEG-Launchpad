import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StyleGallery from '../components/StyleGallery';
import BridgeDivider from '../components/BridgeDivider';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BridgeDivider />
      <StyleGallery />
    </div>
  );
}
