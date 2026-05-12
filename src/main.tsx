import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const ROOT_ID = 'root';
const rootElement = document.getElementById(ROOT_ID);

if (!rootElement) {
  throw new Error(
    `Failed to find the root element with ID "${ROOT_ID}". ` +
      'Please ensure your index.html contains an element with this ID.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

