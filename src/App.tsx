import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThemePage from './pages/ThemePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Gallery / Selection Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Individual Theme Pages (e.g., /theme/obsidian) */}
        <Route path="/theme/:slug" element={<ThemePage />} />
        
        {/* Fallback to Home for unknown routes */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
