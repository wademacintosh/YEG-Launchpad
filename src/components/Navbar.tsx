import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="YEG Launchpad home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2 4 14h6l-2 8 10-14h-6l2-6z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-secondary">
              YEG Launchpad
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Style Selector
            </span>
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
