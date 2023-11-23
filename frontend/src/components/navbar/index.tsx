import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/app">
          <img src="logo.png" alt="" width={30} />
          <span className="ms-2">Meu Campeonato</span>
        </NavLink>
      </div>
    </nav>
  );
}
