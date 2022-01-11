import React from "react";
import './Electproduct.css';
import { Link } from 'react-router-dom';
import Footerone from "./Footerone";
import Footertwo from "./Footertwo";
import Header from "./Header";
import Footerthree from "./Footerthree";
import { GoSettings } from 'react-icons/go';
import Productbody from "./Productbody.js";
import Bodysearch from "./Bodysearch";

function Electproduct() {

    const Nosidebar = () => {
        return(
          <div className="sidebar">
          <div className="bigbody__left__content">
             <button  type="button" className="filter__search"> <Link to="/Electproductsidebar"><GoSettings size="1.2rem" className="settings"/></Link> </button>
           </div>
          </div>
    
        );
      }

    return (
      <div className="electproduct">
           <Header />
         <Nosidebar/>
        
        <Productbody />
          
          <Footerone />
          <Footertwo />
          <Footerthree />
      </div>

    );
  }
  
  export default Electproduct;