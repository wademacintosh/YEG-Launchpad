import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Diamond,
  Droplets,
  Flame,
  Gauge,
  Mail,
  MapPin,
  Mountain,
  PaintBucket,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ServiceItem, ThemeDefinition } from "../lib/themes";

const ICON_MAP: Record<ServiceItem["icon"], LucideIcon> = {
  Sparkles,
  ShieldCheck,
  Droplets,
  Wrench,
  Gauge,
  Car,
  PaintBucket,
  Zap,
  Diamond,
  Mountain,
  Wind,
  Star,
  Flame,
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  vehicle: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us about your project").max(1000),
});
type ContactValues = z.infer<typeof contactSchema>;

interface ThemeDemoProps {
  theme: ThemeDefinition;
}

export default function ThemeDemo({ theme }: ThemeDemoProps) {
  const t = theme.tokens;

  // Theme tokens exposed to children via CSS variables.
  const cssVars: CSSProperties = {
    ["--t-bg" as string]: t.bg,
    ["--t-surface" as string]: t.surface,
    ["--t-fg" as string]: t.fg,
    ["--t-fg-muted" as string]: t.fgMuted,
    ["--t-accent" as string]: t.accent,
    ["--t-accent-fg" as string]: t.accentFg,
    ["--t-border" as string]: t.border,
    ["--t-radius" as string]: t.radius,
    fontFamily: t.fontBody,
    color: t.fg,
    backgroundColor: t.bg,
  };

  return (
    <div style={cssVars} className="min-h-screen">
      <ThemeNav theme={theme} />
      <ThemeHero theme={theme} />
      <ThemeServices theme={theme} />
      <ThemeResults theme={theme} />
      <ThemeContact theme={theme} />
      <ThemeFooter theme={theme} />
    </div>
  );
}

/* ---------------- Shared themed bits ---------------- */

function buttonClasses(shape: ThemeDefinition["tokens"]["buttonShape"]) {
  switch (shape) {
    case "pill":
      return "rounded-full";
    case "sticker":
      return "rounded-full border-2 border-[var(--t-fg)] shadow-[3px_4px_0_0_var(--t-fg)] hover:shadow-[5px_6px_0_0_var(--t-fg)] hover:-translate-y-0.5 hover:-translate-x-0.5";
    case "brutal":
      return "rounded-none border-4 border-[var(--t-fg)] shadow-[6px_6px_0_0_var(--t-fg)] hover:shadow-[10px_10px_0_0_var(--t-fg)] hover:-translate-x-0.5 hover:-translate-y-0.5";
    case "square":
    default:
      return "rounded-[var(--t-radius)]";
  }
}

function PrimaryButton({
  children,
  theme,
  type = "button",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: ThemeDefinition;
}) {
  const t = theme.tokens;
  return (
    <button
      type={type}
      {...rest}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all ${buttonClasses(
        t.buttonShape,
      )} ${t.uppercaseHeadings ? "uppercase tracking-[0.18em]" : "tracking-wide"} ${rest.className ?? ""}`}
      style={{
        backgroundColor: t.accent,
        color: t.accentFg,
        fontFamily: t.fontHeading,
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({
  children,
  theme,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: ThemeDefinition;
}) {
  const t = theme.tokens;
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors ${buttonClasses(
        t.buttonShape === "brutal" ? "brutal" : "square",
      )} ${rest.className ?? ""}`}
      style={{
        borderColor: t.border,
        color: t.fg,
        backgroundColor: "transparent",
        fontFamily: t.fontHeading,
      }}
    >
      {children}
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  theme,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  theme: ThemeDefinition;
  align?: "left" | "center";
}) {
  const t = theme.tokens;
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span
        className="text-[11px] font-bold uppercase tracking-[0.3em]"
        style={{ color: t.accent, fontFamily: t.fontHeading }}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          t.uppercaseHeadings ? "uppercase tracking-tight" : "tracking-tight"
        }`}
        style={{ color: t.fg, fontFamily: t.fontHeading }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ---------------- Sections ---------------- */

function ThemeNav({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${t.bg} 88%, transparent)`,
        borderBottom: `1px solid ${t.border}`,
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: t.fg, fontFamily: t.fontHeading }}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className={t.uppercaseHeadings ? "uppercase tracking-widest" : ""}>
            All Styles
          </span>
        </Link>

        <span
          className={`hidden text-base font-bold sm:block ${
            t.uppercaseHeadings ? "uppercase tracking-widest" : ""
          }`}
          style={{ color: t.fg, fontFamily: t.fontHeading }}
        >
          {theme.shortTitle}
        </span>

        <a
          href="#contact"
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold transition-opacity hover:opacity-90 ${buttonClasses(
            t.buttonShape === "brutal" ? "square" : t.buttonShape,
          )}`}
          style={{
            backgroundColor: t.accent,
            color: t.accentFg,
            fontFamily: t.fontHeading,
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function ThemeHero({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  return (
    <section className="relative overflow-hidden">
      {/* Decorative theme-tinted backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(80% 60% at 80% 0%, ${t.accent}33 0%, transparent 60%), radial-gradient(60% 40% at 0% 100%, ${t.accent}22 0%, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <div>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{ color: t.accent, fontFamily: t.fontHeading }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: t.accent }}
            />
            {theme.heroEyebrow}
          </span>
          <h1
            className={`mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl ${
              t.uppercaseHeadings ? "uppercase tracking-tight" : "tracking-tight"
            }`}
            style={{ color: t.fg, fontFamily: t.fontHeading }}
          >
            {theme.heroHeadline}
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: t.fgMuted, fontFamily: t.fontBody }}
          >
            {theme.heroSub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <PrimaryButton
              theme={theme}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {theme.heroCta}
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton
              theme={theme}
              onClick={() =>
                document
                  .getElementById("results")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See Results
            </GhostButton>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ["12+", "Years"],
              ["2.4k", "Vehicles"],
              ["4.9★", "Rating"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt
                  className="text-2xl font-bold"
                  style={{ color: t.accent, fontFamily: t.fontHeading }}
                >
                  {k}
                </dt>
                <dd
                  className="text-[11px] uppercase tracking-widest"
                  style={{ color: t.fgMuted }}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden"
            style={{
              borderRadius: t.radius,
              border: `1px solid ${t.border}`,
              background: `linear-gradient(135deg, ${t.accent} 0%, ${t.surface} 100%)`,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)",
              }}
            />
            {/* fake "shine" reflection */}
            <div
              aria-hidden="true"
              className="absolute -left-1/4 top-0 h-full w-1/2 rotate-12 opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ color: t.accentFg, fontFamily: t.fontHeading }}
              >
                Featured Build
              </span>
              <p
                className={`mt-1 text-xl font-bold ${t.uppercaseHeadings ? "uppercase" : ""}`}
                style={{ color: t.accentFg, fontFamily: t.fontHeading }}
              >
                {theme.shortTitle} Showcase
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 h-full w-full"
            style={{
              borderRadius: t.radius,
              border: `1px solid ${t.border}`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ThemeServices({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  return (
    <section
      id="services"
      className="border-t py-20 sm:py-24"
      style={{ borderColor: t.border, backgroundColor: t.bg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Three signature services."
          theme={theme}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {theme.services.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <article
                key={s.title}
                className="group relative flex flex-col p-7 transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: t.surface,
                  border: `1px solid ${t.border}`,
                  borderRadius: t.radius,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${t.accent} 18%, transparent)`,
                      color: t.accent,
                      borderRadius: t.radius,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: t.fgMuted }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className={`mt-6 text-xl font-bold ${
                    t.uppercaseHeadings ? "uppercase tracking-tight" : ""
                  }`}
                  style={{ color: t.fg, fontFamily: t.fontHeading }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: t.fgMuted, fontFamily: t.fontBody }}
                >
                  {s.description}
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: t.accent, fontFamily: t.fontHeading }}
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ThemeResults({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  return (
    <section
      id="results"
      className="border-t py-20 sm:py-24"
      style={{
        borderColor: t.border,
        backgroundColor: `color-mix(in srgb, ${t.bg} 92%, ${t.fg} 8%)`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Results gallery"
            title="Recent work from the bay."
            theme={theme}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: t.fgMuted, fontFamily: t.fontHeading }}
          >
            {theme.results.length} featured builds
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {theme.results.map((r, i) => (
            <figure
              key={r.label + i}
              className="group relative overflow-hidden transition-all hover:-translate-y-1"
              style={{
                borderRadius: t.radius,
                border: `1px solid ${t.border}`,
              }}
            >
              <div
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                style={{ background: r.gradient }}
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-white"
                    style={{ fontFamily: t.fontHeading }}
                  >
                    {r.label}
                  </p>
                  <p className="text-[11px] text-white/80">{r.caption}</p>
                </div>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: t.accent, color: t.accentFg }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeContact({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", vehicle: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Message sent", {
      description: `Thanks ${values.name} — we'll be in touch about ${theme.shortTitle}.`,
    });
    form.reset();
  };

  const inputBase: CSSProperties = {
    backgroundColor: t.surface,
    border: `1px solid ${t.border}`,
    borderRadius: t.radius,
    color: t.fg,
    fontFamily: t.fontBody,
  };

  return (
    <section
      id="contact"
      className="border-t py-20 sm:py-24"
      style={{ borderColor: t.border, backgroundColor: t.bg }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title={theme.contactHeadline}
            theme={theme}
          />
          <p
            className="mt-4 max-w-md text-base leading-relaxed"
            style={{ color: t.fgMuted, fontFamily: t.fontBody }}
          >
            {theme.contactSub}
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "(780) 555-0142", sub: "Mon–Sat · 9–6 MST" },
              { icon: Mail, label: "hello@yeglaunchpad.com", sub: "Replies under 1 hour" },
              { icon: MapPin, label: "10625 99 St NW, Edmonton, AB", sub: "Walterdale Bridge district" },
            ].map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${t.accent} 18%, transparent)`,
                    color: t.accent,
                    borderRadius: t.radius,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: t.fg, fontFamily: t.fontHeading }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: t.fgMuted }}
                  >
                    {sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="p-6 sm:p-8"
          style={{
            backgroundColor: t.surface,
            border: `1px solid ${t.border}`,
            borderRadius: t.radius,
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Your name"
              error={form.formState.errors.name?.message}
              theme={theme}
            >
              <input
                {...form.register("name")}
                maxLength={100}
                autoComplete="name"
                style={inputBase}
                className="w-full px-4 py-3 text-sm outline-none transition focus:ring-2"
              />
            </Field>
            <Field
              label="Email"
              error={form.formState.errors.email?.message}
              theme={theme}
            >
              <input
                {...form.register("email")}
                type="email"
                maxLength={255}
                autoComplete="email"
                style={inputBase}
                className="w-full px-4 py-3 text-sm outline-none transition focus:ring-2"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field
              label="Vehicle (optional)"
              error={form.formState.errors.vehicle?.message}
              theme={theme}
            >
              <input
                {...form.register("vehicle")}
                maxLength={120}
                placeholder="e.g. 2023 Audi Q5"
                style={inputBase}
                className="w-full px-4 py-3 text-sm outline-none transition focus:ring-2 placeholder:opacity-50"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field
              label="What are you looking for?"
              error={form.formState.errors.message?.message}
              theme={theme}
            >
              <textarea
                {...form.register("message")}
                rows={5}
                maxLength={1000}
                placeholder={`I'd like to book ${theme.shortTitle}…`}
                style={inputBase}
                className="w-full resize-y px-4 py-3 text-sm outline-none transition focus:ring-2 placeholder:opacity-50"
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-[11px]"
              style={{ color: t.fgMuted }}
            >
              We'll never share your info. Promise.
            </p>
            <PrimaryButton theme={theme} type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send Inquiry"}
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  theme,
  children,
}: {
  label: string;
  error?: string;
  theme: ThemeDefinition;
  children: React.ReactNode;
}) {
  const t = theme.tokens;
  return (
    <label className="block">
      <span
        className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: t.fgMuted, fontFamily: t.fontHeading }}
      >
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs" style={{ color: "#dc2626" }}>
          {error}
        </span>
      )}
    </label>
  );
}

function ThemeFooter({ theme }: { theme: ThemeDefinition }) {
  const t = theme.tokens;
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: t.border, backgroundColor: t.bg }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p
          className={`text-sm font-bold ${
            t.uppercaseHeadings ? "uppercase tracking-widest" : ""
          }`}
          style={{ color: t.fg, fontFamily: t.fontHeading }}
        >
          {theme.shortTitle}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: t.fgMuted, fontFamily: t.fontHeading }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all 8 styles
        </Link>
      </div>
    </footer>
  );
}
