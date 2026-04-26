import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ThemePage from "./pages/ThemePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme/:slug" element={<ThemePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}