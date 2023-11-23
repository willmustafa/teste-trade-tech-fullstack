import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="d-flex flex-shrink-0 p-4" style={{ width: "280px" }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue w-100">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/app/resultados"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-center active"
                  : "nav-link text-center"
              }
              aria-current="page"
            >
              Resultados
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/app/historico"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-center active"
                  : "nav-link text-center"
              }
              aria-current="page"
            >
              Histórico
            </NavLink>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="#" className="nav-link text-center" aria-current="page">
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
