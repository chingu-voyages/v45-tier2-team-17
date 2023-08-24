import React from "react";
import { Link } from "react-router-dom";
import meteorosLogo from "../../assets/MeteorosLogo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={meteorosLogo} alt="MeteorosLogo" />
      <ul>
        <li >
          <Link to="/" className="active-btn">Home</Link>
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
