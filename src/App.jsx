import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/intro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
}