import React from "react";
import "../../sass/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className="nasa-credits">
          <p>
            <a href="https://data.nasa.gov/Earth-Science/Meteorite-Landings-API/c2vx-j9ed" target="_blank" className="api-link">Public API</a> by NASA
          </p>
        </div>

        <div className="team-credits">
          <p>
            This project was developed by <a href="https://github.com/Aditi002-holo" target="_blank" className="github-link">Aditi</a>, <a href="https://github.com/Paulette-Zaldivar-Flores" target="_blank" className="github-link">Paulette</a>, <a href="https://github.com/Shivangi020" target="_blank" className="github-link">Shivangi</a>, <a href="https://github.com/zavedhussain" target="_blank" className="github-link">Zaved</a> & <a href="https://github.com/rakharan" target="_blank" className="github-link">Rakha</a>
         </p>
        </div>
    </div>
  );
};

export default Footer;
