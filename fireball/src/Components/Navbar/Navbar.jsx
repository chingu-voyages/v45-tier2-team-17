import React from "react";
import { Link } from "react-router-dom";
import meteorosLogo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={meteorosLogo} alt="MeteorosLogo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/summary">
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
