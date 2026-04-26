export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--silver) 1px, transparent 1px), linear-gradient(90deg, var(--silver) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--ignition)" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          PREMIUM DIGITAL DETAILING
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
          Give Your Shop a <span className="text-primary relative">
            Showroom-Ready
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-50" />
          </span> Digital Presence.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-accent sm:text-lg lg:text-xl">
          You wouldn't hand over a car with streaks—don't settle for a messy website. Choose from 8 signature styles crafted for elite detailers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#styles"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            See Styles
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white/5 px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:bg-white/10 hover:shadow-md"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wider text-accent/80">
          <span>· CONVERSION-TUNED</span>
          <span>· MOBILE-OPTIMIZED</span>
          <span>· EDMONTON BORN</span>
        </div>

        {/* scroll indicator */}
        <a
          href="#styles"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent/60 hover:text-accent transition-colors"
          aria-label="Scroll to styles"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
