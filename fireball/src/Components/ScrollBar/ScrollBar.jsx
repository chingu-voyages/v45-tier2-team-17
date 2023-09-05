import React from "react";
import "../../sass/_scrollBar.scss";
const ScrollBar = () => {
  return (
    <div className="scrollbar-container">
      <div className="left-scrollbar"></div>
      <div className="mid-scrollbar"></div>
      <div className="right-scrollbar"></div>
    </div>
  );
};

export default ScrollBar;
