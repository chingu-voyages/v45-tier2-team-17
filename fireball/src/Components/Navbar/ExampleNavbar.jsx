import React from "react";
import { Link } from "react-router-dom";

const ExampleNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/summary" summary>
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ExampleNavbar;
