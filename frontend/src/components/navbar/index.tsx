import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/app">
          <img src="logo.png" alt="" width={30} />
          <span className="ms-2">Meu Campeonato</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-4">
            <NavItem
              to="/resultados"
            >
              Resultado
            </NavItem>
            <NavItem
              to="/historico"
            >
              Histórico
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface INavItem extends React.PropsWithChildren {
  to: string;
}

function NavItem({ children, to }: INavItem) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "nav-item active text-decoration-none"
          : "nav-item text-decoration-none"
      }
      to={to}
    >
      <span className="nav-link">{children}</span>
    </NavLink>
  );
}
