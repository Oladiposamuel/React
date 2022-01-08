import React, {useState} from "react";
import './Nosidebar.css';
import { Link } from 'react-router-dom';
import { GoSettings } from 'react-icons/go';


function Nosidebar() {
  return (

    <div className="sidebar">
         <div className="bigbody__left__content">
            <button type="button" className="filter__search"> <GoSettings size="1.2rem" className="settings"/> </button>
          </div>
    </div>


  );
}

export default Nosidebar;
