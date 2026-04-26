import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index'; // Ensure this matches your file path
import ThemePage from './pages/theme/$slug'; // Adjust to match your theme page file

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme/:slug" element={<ThemePage />} />
      </Routes>
    </BrowserRouter>
  );
}
