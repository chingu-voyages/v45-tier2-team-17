import React ,{useState} from "react";
import { Link } from "react-router-dom";
import meteorosLogo from "../assets/MeteorosLogo.svg";
import {HiMenu} from 'react-icons/hi'


const Navbar = () => {

  const [showLink ,setShowLink] = useState(false);
  
  const menuButtonHandler = ()=>{
       setShowLink(!showLink);
  }

  return (
    <div className="navbar">    
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
        <img src={meteorosLogo} alt="MeteorosLogo" />
        </div>
      </div>
      <div className="nav-btn" onClick={menuButtonHandler}><HiMenu/></div>
      <div className={showLink ? `nav-links nav-visible` : 'nav-links'}>
          <Link to="/" >Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/summary">Summary</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
