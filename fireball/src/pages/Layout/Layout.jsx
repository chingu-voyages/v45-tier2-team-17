import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Layout = () => {
  return (
    <div className="layout" >
        <Navbar />
        <Outlet />
      {/* Footer goes here */}
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
