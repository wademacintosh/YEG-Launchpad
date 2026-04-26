import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>YEG Launchpad — Pick Your Finish: 8 Signature Website Styles</title>
        <meta name="description" content="Browse 8 signature website styles built for Edmonton auto detailing shops. Find the digital aesthetic that matches your horsepower." />
        <meta property="og:title" content="YEG Launchpad — Style Selector" />
        <meta property="og:description" content="8 signature website styles for auto detailing shops. Pick the finish that fits your brand." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link rel="stylesheet" href={appCss} />
      </head>
      <body>
        <Navbar />
        <Outlet />
      </body>
    </html>
  );
}

export { NotFoundComponent };