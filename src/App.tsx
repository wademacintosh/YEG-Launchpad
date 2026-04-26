import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThemePage from './pages/ThemePage';
import RootLayout from './pages/RootLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* This MUST match the link in StyleGallery */}
          <Route path="/theme/:slug" element={<ThemePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
