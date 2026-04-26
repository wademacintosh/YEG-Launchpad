import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ThemeDefinition } from "../lib/themes";

interface PreviewModalProps {
  theme: ThemeDefinition | null;
  isOpen: boolean;
  onClose: () => void;
}

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255, "Email must be under 255 characters"),
  shop: z
    .string()
    .trim()
    .max(120, "Shop name must be under 120 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Tell us a bit about your project")
    .max(1000, "Message must be under 1000 characters"),
});

type InquiryValues = z.infer<typeof inquirySchema>;

interface ThemePalette {
  bg: string;
  fg: string;
  accent: string;
  line: string;
  surface: string;
  font: string;
}

const THEME_PALETTES: Record<string, ThemePalette> = {
  "obsidian-eco": {
    bg: "#eef2ec",
    fg: "#1f2a22",
    accent: "#7A8C7E",
    line: "rgba(31,42,34,0.15)",
    surface: "#ffffff",
    font: "'Cormorant Garamond', serif",
  },
  "night-vision": {
    bg: "#1a1a1a",
    fg: "#e6f9ff",
    accent: "#22d3ee",
    line: "rgba(34,211,238,0.25)",
    surface: "#111111",
    font: "'JetBrains Mono', monospace",
  },
  "vantage": {
    bg: "#f5f1ea",
    fg: "#0a1628",
    accent: "#B89766",
    line: "rgba(10,22,40,0.18)",
    surface: "#ffffff",
    font: "'Playfair Display', serif",
  },
  "mud-sweat-gears": {
    bg: "#FFD400",
    fg: "#000000",
    accent: "#000000",
    line: "rgba(0,0,0,0.85)",
    surface: "#ffffff",
    font: "'Archivo Black', sans-serif",
  },
  "detail-flow": {
    bg: "linear-gradient(135deg,#1e3a8a,#0f172a)",
    fg: "#ffffff",
    accent: "#60a5fa",
    line: "rgba(255,255,255,0.18)",
    surface: "rgba(255,255,255,0.08)",
    font: "'Inter', sans-serif",
  },
  "aero-shine": {
    bg: "#0d0f12",
    fg: "#ffffff",
    accent: "#e10600",
    line: "rgba(255,255,255,0.15)",
    surface: "#16191f",
    font: "'Space Grotesk', sans-serif",
  },
  "route66": {
    bg: "#f7eed7",
    fg: "#1f1f1f",
    accent: "#0d8a8a",
    line: "rgba(31,31,31,0.2)",
    surface: "#ffffff",
    font: "'Pacifico', cursive",
  },
  "prism": {
    bg: "linear-gradient(180deg,#1a0030 0%,#0a0014 100%)",
    fg: "#ffffff",
    accent: "#ec4899",
    line: "rgba(236,72,153,0.3)",
    surface: "rgba(124,58,237,0.15)",
    font: "'Space Grotesk', sans-serif",
  },
};

function ThemeScreenshot({ theme }: { theme: ThemeDefinition }) {
  // Use the theme's slug to find the palette, fallback to obsidian if missing
  const palette = THEME_PALETTES[theme.slug] || THEME_PALETTES["obsidian-eco"];
  
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border shadow-inner"
      style={{ background: palette.bg, color: palette.fg }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 truncate text-[10px] opacity-70">
          {theme.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.com
        </span>
      </div>

      {/* Faux nav */}
      <div
        className="flex items-center justify-between px-6 py-4 text-[10px] uppercase tracking-[0.25em]"
        style={{ borderBottom: `1px solid ${palette.line}` }}
      >
        <span style={{ fontFamily: palette.font }}>{theme.title}</span>
        <span className="flex gap-4 opacity-70">
          <span>Services</span>
          <span>Gallery</span>
          <span>Book</span>
        </span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-5 gap-4 px-6 py-6">
        <div className="col-span-3 flex flex-col justify-center gap-3">
          <div
            className="h-2 w-24 rounded"
            style={{ backgroundColor: palette.accent }}
          />
          <div
            className="text-2xl font-bold leading-tight sm:text-3xl"
            style={{ fontFamily: palette.font, color: palette.fg }}
          >
            Premium detailing,
            <br />
            <span style={{ color: palette.accent }}>{theme.title}.</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded" style={{ backgroundColor: palette.line }} />
            <div className="h-1.5 w-5/6 rounded" style={{ backgroundColor: palette.line }} />
            <div className="h-1.5 w-2/3 rounded" style={{ backgroundColor: palette.line }} />
          </div>
          <div className="mt-1 flex gap-2">
            <div
              className="h-7 w-24 rounded-md"
              style={{ backgroundColor: palette.accent }}
            />
            <div
              className="h-7 w-20 rounded-md border"
              style={{ borderColor: palette.line }}
            />
          </div>
        </div>
        <div className="col-span-2">
          <div
            className="aspect-[4/5] rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${palette.accent}, ${palette.line})`,
            }}
          />
        </div>
      </div>

      {/* Service cards row */}
      <div className="grid grid-cols-3 gap-3 px-6 pb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-md p-3"
            style={{
              backgroundColor: palette.surface,
              border: `1px solid ${palette.line}`,
            }}
          >
            <div
              className="mb-2 h-1.5 w-10 rounded"
              style={{ backgroundColor: palette.accent }}
            />
            <div
              className="h-1 w-full rounded"
              style={{ backgroundColor: palette.line }}
            />
            <div
              className="mt-1 h-1 w-3/4 rounded"
              style={{ backgroundColor: palette.line }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PreviewModal({ theme, isOpen, onClose }: PreviewModalProps) {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", shop: "", message: "" },
  });

  const onSubmit = async (values: InquiryValues) => {
    setSubmitting(true);
    // Simulate request — replace with real backend call when wired up.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Inquiry sent", {
      description: `We'll be in touch about ${theme?.title} shortly, ${values.name}.`,
    });
    form.reset();
    onClose();
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      form.reset();
      onClose();
    }
  };

  if (!theme) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto p-0">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_1fr]">
          {/* Left: full-page preview */}
          <div className="bg-secondary p-5 sm:p-7">
            <DialogHeader className="space-y-1 text-left">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                {theme.category || "Style"} · Theme Preview
              </span>
              <DialogTitle className="text-xl font-bold text-secondary-foreground sm:text-2xl">
                {theme.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-accent">
                {theme.tagline}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5">
              <ThemeScreenshot theme={theme} />
            </div>

            <p className="mt-3 text-[11px] text-accent/70">
              Representative full-page mock — final design is tailored to your shop.
            </p>
          </div>

          {/* Right: inquiry form */}
          <div className="border-t border-border bg-background p-6 sm:p-8 lg:border-l lg:border-t-0">
            <h3 className="text-lg font-bold text-secondary">
              Inquire about this style
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your shop and we'll send a tailored proposal.
            </p>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-4"
              noValidate
            >
              <div className="space-y-1.5">
                <Label htmlFor="inq-name">Your name</Label>
                <Input
                  id="inq-name"
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={!!form.formState.errors.name}
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="inq-email">Email</Label>
                <Input
                  id="inq-email"
                  type="email"
                  autoComplete="email"
                  maxLength={255}
                  aria-invalid={!!form.formState.errors.email}
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="inq-shop">
                  Shop name <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="inq-shop"
                  maxLength={120}
                  aria-invalid={!!form.formState.errors.shop}
                  {...form.register("shop")}
                />
                {form.formState.errors.shop && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.shop.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="inq-message">What are you looking for?</Label>
                <Textarea
                  id="inq-message"
                  rows={4}
                  maxLength={1000}
                  placeholder={`I'm interested in ${theme.title} for my detailing shop…`}
                  aria-invalid={!!form.formState.errors.message}
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="h-11 w-full rounded-md bg-primary font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
              >
                {submitting ? "Sending…" : `Inquire about ${theme.title}`}
              </Button>

              <p className="text-[11px] text-muted-foreground">
                By submitting you agree to be contacted by YEG Launchpad.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
