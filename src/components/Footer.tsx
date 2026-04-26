export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Ready to launch?
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Let's build your detailing site.
          </h3>
          <p className="mt-2 text-sm text-accent">
            YEG Launchpad · Edmonton, Alberta
          </p>
        </div>
        <a
          href="mailto:hello@yeglaunchpad.com"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Contact Us
        </a>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-accent/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} YEG Launchpad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
