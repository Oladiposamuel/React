import React, {useState, useEffect} from "react";
import './Electronics.css';
import Footerone from "./Footerone";
import Footertwo from "./Footertwo";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Nosidebar from './Nosidebar';
import Footerthree from "./Footerthree";
import { GoSettings } from 'react-icons/go';
import { AiOutlineLeft } from 'react-icons/ai';
import Electandsidebar from "./Electandsidebar";
import Electbody from "./Electbody";


function Electronics() {  

  const Nosidebar = () => {
    return(
      <div className="sidebar">
      <div className="bigbody__left__content">
         <button  type="button" className="filter__search"> <Link to="/Electandsidebar"><GoSettings size="1.2rem" className="settings"/></Link> </button>
       </div>
      </div>

    );
  }

    return (
        
      <div className="electronics">
        <Header />
         <Nosidebar/>
        
        <Electbody />
          
          <Footerone />
          <Footertwo />
          <Footerthree />
      </div>

    );
  }
  
  export default Electronics;