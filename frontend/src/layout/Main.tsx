import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="App">
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
