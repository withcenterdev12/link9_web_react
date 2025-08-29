import MainPage from "./pages/MainPage";
import CompletePage from "./pages/CompletePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </Router>
  );
}
