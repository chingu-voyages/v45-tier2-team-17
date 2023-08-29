import React from "react";
import {MdOutlineArrowOutward} from 'react-icons/md';
import { Link } from "react-router-dom";

const Home = () => {

  return <div className="home-cn"> 
     <div className="home-tg"> <h1>Meteroite Explorer</h1></div>
    <div className="home-p"><div className="home-title"><p>How many Meteroite Landings in the 21st Century ?</p><div><p>123xx</p></div> </div>
    <p>Want to Find out MORE? </p></div>
    <div className="cut-button"><Link to='/explore'>Explore now <MdOutlineArrowOutward/></Link></div>
  </div>
};

export default Home;
