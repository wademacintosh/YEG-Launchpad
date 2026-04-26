import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BridgeDivider } from "@/components/BridgeDivider";
import { StyleGallery } from "@/components/StyleGallery";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YEG Launchpad — Pick Your Finish: 8 Signature Website Styles" },
      {
        name: "description",
        content:
          "Browse 8 signature website styles built for Edmonton auto detailing shops. Find the digital aesthetic that matches your horsepower.",
      },
      { property: "og:title", content: "YEG Launchpad — Style Selector" },
      {
        property: "og:description",
        content:
          "8 signature website styles for auto detailing shops. Pick the finish that fits your brand.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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

