import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner"; // IMPORT THE TOASTER
import appCss from "../styles.css?url";

// ... (NotFoundComponent stays the same)

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        {/* ... (Your meta tags stay the same) ... */}
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Toaster position="bottom-right" richColors /> {/* MOUNT IT HERE */}
      </body>
    </html>
  );
}

export { NotFoundComponent };
