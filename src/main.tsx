import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css' // FIXED: Changed from styles.css to style.css

/**
 * CONFIGURATION: Root Element ID
 * Defined here for easy adjustment if the index.html template changes.
 */
const ROOT_ID = 'root';
const rootElement = document.getElementById(ROOT_ID);

/**
 * ARCHITECTURAL NOTE: Removal of TanStack Router
 * * We have shifted away from TanStack Router to a standard React entry pattern.
 * This change resolves "404 Not Found" errors encountered on Vercel deployments
 * during hard refreshes or direct URL navigation. 
 * * By using a simplified entry point, we ensure the SPA (Single Page Application) 
 * bundle is always served correctly, relying on standard React rendering 
 * while Vercel handles the static file serving.
 */

if (!rootElement) {
  // Providing a descriptive error helps debug issues where the HTML 
  // might not match the expected entry point.
  throw new Error(
    `Failed to find the root element with ID "${ROOT_ID}". ` +
    `Please ensure your index.html contains an element with this ID.`
  );
}

// Initialize the React Root with the confirmed element
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
