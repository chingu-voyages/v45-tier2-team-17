import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import ExampleNavbar from "../../Components/Navbar/ExampleNavbar";
const Layout = () => {
  return (
    <div className="layout">
      {/* Navbar goes here */}
      <div className="navbar">
        <ExampleNavbar />
      </div>
      <Outlet />
      {/* Footer goes here */}
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
