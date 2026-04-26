import { useParams, Link } from "react-router-dom";
import { ThemeDemo } from "@/components/ThemeDemo";
import { THEMES, type ThemeSlug } from "@/lib/themes";
import { Toaster } from "@/components/ui/sonner";

const VALID_SLUGS = Object.keys(THEMES) as ThemeSlug[];

function isThemeSlug(value: string): value is ThemeSlug {
  return (VALID_SLUGS as string[]).includes(value);
}

export default function ThemePage() {
  const { slug } = useParams();
  
  if (!slug || !isThemeSlug(slug)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Theme not found</h1>
          <p className="mt-2 text-muted-foreground">
            That style isn&apos;t part of the lineup.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            See all 8 styles
          </Link>
        </div>
      </div>
    );
  }

  const theme = THEMES[slug];

  return (
    <>
      <ThemeDemo theme={theme} />
      <Toaster richColors position="top-right" />
    </>
  );
}