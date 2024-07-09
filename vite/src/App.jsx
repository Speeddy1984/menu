import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";

export default function App() {
  return (
    <div className="page">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </div>
  );
}
