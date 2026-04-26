import React from 'react';
import Hero from '../components/Hero';
import BridgeDivider from '../components/BridgeDivider';
import StyleGallery from '../components/StyleGallery';
// import Footer from '../components/Footer'; (if you have it here)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {/* The new Walterdale Bridge SVG sits right here */}
      <BridgeDivider />
      <StyleGallery />
    </div>
  );
}
