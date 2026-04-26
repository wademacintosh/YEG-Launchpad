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
          Auto Detailing · Web Catalog
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Pick Your Finish:{" "}
          <span className="text-primary">8 Signature</span> Website Styles
        </h1>

        <p className="mt-6 max-w-2xl text-base text-accent sm:text-lg lg:text-xl">
          Select the digital aesthetic that matches your shop's horsepower.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wider text-accent/80">
          <span>· Conversion-Tuned</span>
          <span>· Mobile-First</span>
          <span>· Built in Edmonton</span>
        </div>
      </div>
    </section>
  );
}
