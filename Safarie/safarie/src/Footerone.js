import React from "react";
import './Footerone.css';
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import { BsPaypal } from'react-icons/bs';

function Footerone() {
    return (
      <div className="footerone">
            <div className="footerone__atm__cards">
                <span> <FaCcMastercard color="#1434A4" size="2rem" className="master__card" /> </span>
                <span> <RiVisaLine color="#1434A4" size="2rem" /> </span>
                <span> <BsPaypal color="#1434A4" size="2rem" /> </span>
                <span> <FaCcMastercard color="#1434A4" size="2rem" /> </span>
            </div>
      </div>

    );
  }
  
  export default Footerone;
  