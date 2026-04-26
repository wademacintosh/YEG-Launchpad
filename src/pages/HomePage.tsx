import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BridgeDivider } from "@/components/BridgeDivider";
import { StyleGallery } from "@/components/StyleGallery";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BridgeDivider />
        <StyleGallery />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}