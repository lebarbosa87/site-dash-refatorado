import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Retrospectiva from "../pages/Retrospectiva";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retrospectiva" element={<Retrospectiva />} />
      </Routes>
    </BrowserRouter>
  );
}
