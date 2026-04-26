import { createFileRoute, notFound } from "@tanstack/react-router";
import { ThemeDemo } from "@/components/ThemeDemo";
import { THEMES, type ThemeSlug } from "@/lib/themes";
import { Toaster } from "@/components/ui/sonner";

const VALID_SLUGS = Object.keys(THEMES) as ThemeSlug[];

function isThemeSlug(value: string): value is ThemeSlug {
  return (VALID_SLUGS as string[]).includes(value);
}

export const Route = createFileRoute("/theme/$slug")({
  loader: ({ params }) => {
    if (!isThemeSlug(params.slug)) throw notFound();
    return { theme: THEMES[params.slug] };
  },
  head: ({ loaderData }) => {
    const theme = loaderData?.theme;
    if (!theme) {
      return {
        meta: [{ title: "Theme not found — YEG Launchpad" }],
      };
    }
    return {
      meta: [
        { title: `${theme.title} — YEG Launchpad` },
        { name: "description", content: theme.tagline },
        { property: "og:title", content: `${theme.title} — YEG Launchpad` },
        { property: "og:description", content: theme.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold text-secondary">Theme not found</h1>
        <p className="mt-2 text-muted-foreground">
          That style isn't part of the lineup.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          See all 8 styles
        </a>
      </div>
    </div>
  ),
  component: ThemePage,
});

function ThemePage() {
  const { theme } = Route.useLoaderData();
  return (
    <>
      <ThemeDemo theme={theme} />
      <Toaster richColors position="top-right" />
    </>
  );
}
