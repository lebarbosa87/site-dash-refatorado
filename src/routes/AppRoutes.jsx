import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Retrospectiva from "../pages/Retrospectiva";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/retrospectiva" element={<Retrospectiva />} />

      {/* Rotas futuras */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/planejamento" element={<Planejamento />} /> */}
      {/* <Route path="/material-apoio" element={<MaterialApoio />} /> */}
    </Routes>
  );
}
