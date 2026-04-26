import { Button } from "@/components/ui/button";
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
          <span className="sr-only">YEG Launchpad — Style Selector</span>
          <span
            aria-hidden="true"
            className="hidden h-8 w-px bg-border sm:block"
          />
          <span
            aria-hidden="true"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:block"
          >
            Style Selector
          </span>
        </a>

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
