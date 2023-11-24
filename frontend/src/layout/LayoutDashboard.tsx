import Sidebar from "components/sidebar";
import React from "react";
import styles from "./LayoutDashboard.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "components/navbar";
import { ToastContainer } from "react-toastify";

export default function LayoutDashboard() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className="d-flex w-100">
        <Sidebar />
        <div className="p-5 w-100">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
