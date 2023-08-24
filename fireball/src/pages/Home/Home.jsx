import React from "react";
import { useNavigate } from 'react-router-dom';
import {MdOutlineArrowOutward} from 'react-icons/md';


const Home = () => {

  const navigate = useNavigate();
  
  // This function will navigate the user to explore page on clicking 'Explore now' Button 
  const navigateExplore = ()=>{
         navigate('/explore')
  }

  return <div className="home-cn"> 
     <div className="home-tg"> <h1>Meteroite Explorer</h1></div>
    <div className="home-p"><div className="home-title"><p>How many Meteroite Landings in the 21st Century ?</p><div><p>123xx</p></div> </div>
    <p>Want to Find out MORE? </p></div>
    <div className="cut-button"><button onClick={navigateExplore}>Explore now <MdOutlineArrowOutward/></button></div>
  </div>
};

export default Home;
