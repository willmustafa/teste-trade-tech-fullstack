import Navbar from "components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
