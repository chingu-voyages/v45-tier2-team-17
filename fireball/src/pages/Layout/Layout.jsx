import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      {/* Footer goes here */}
      <Footer />
    </div>
  );
};

export default Layout;
