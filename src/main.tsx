import React from 'react';
import { createRoot } from 'react-dom/client'; // FIXED: Use named import to avoid 'Identifier.bind' error
import App from './App';
import './styles.css'; // FIXED: Matches your actual filename on GitHub

/**
 * CONFIGURATION: Root Element ID
 * Defined here for easy adjustment if the index.html template changes.
 */
const ROOT_ID = 'root';
const rootElement = document.getElementById(ROOT_ID);

/**
 * ARCHITECTURAL NOTE: Removal of TanStack Router
 * We use a simplified entry point to ensure the SPA bundle is always 
 * served correctly on Vercel deployments.
 */

if (!rootElement) {
  // Providing a descriptive error helps debug issues where the HTML 
  // might not match the expected entry point.
  throw new Error(
    `Failed to find the root element with ID "${ROOT_ID}". ` +
    `Please ensure your index.html contains an element with this ID.`
  );
}

// Initialize the React 19 Root with the confirmed element
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
