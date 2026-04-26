import { useState } from "react";
import { Button } from "@/components/ui/button";
import { themes, type ThemeSlug } from "@/lib/themes";
import logo from "@/assets/yeg-launchpad-logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="YEG Launchpad — High Level Business Solutions">
          <img
            src={logo}
            alt="YEG Launchpad logo"
            className="h-12 w-auto sm:h-14"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only">YEG Launchpad</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {themes.map((theme) => (
            <a
              key={theme.slug}
              href={`/theme/${theme.slug}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              {theme.title}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden sm:flex h-10 rounded-md bg-primary px-5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          <a href="#contact">Contact Us</a>
        </Button>

        {/* Mobile hamburger button */}
        <button
          className="flex items-center justify-center p-2 sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {themes.map((theme) => (
              <a
                key={theme.slug}
                href={`/theme/${theme.slug}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {theme.title}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-center text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
