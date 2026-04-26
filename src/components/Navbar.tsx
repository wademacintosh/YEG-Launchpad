import { Button } from "@/components/ui/button";
import { themes, type ThemeSlug } from "@/lib/themes";
import logo from "@/assets/yeg-launchpad-logo.png";

export function Navbar() {
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

        <Button
          asChild
          className="h-10 rounded-md bg-primary px-5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </header>
  );
}
