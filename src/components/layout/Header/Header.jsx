import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="header-right">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/planejamento">Planejamento</Link>
        <Link to="/retrospectiva">Retrospectiva</Link>
        <Link to="/material-apoio">Material de Apoio</Link>
      </nav>
    </header>
  );
}
