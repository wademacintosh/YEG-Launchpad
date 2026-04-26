import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// We removed the TanStack Router logic to stop the Vercel 404 errors.
// This now uses standard React loading.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
