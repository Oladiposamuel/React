import React, {useState} from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Bodyandsignin from "./Bodyandsignin";


function Header() {

   const [showsignin, Setshowsignin] = useState(true); 
    
   
    return (
      <div className="header">
         <div className="header__left">
                <div className="header__left__help">Help & FAQ</div> 
                <div className="flag__img">
                   <img className="flag" src="https://cdn.countryflags.com/thumbs/nigeria/flag-round-250.png" alt="" />
                </div>
                <div className="header__left__ngn">NGN</div>
                <div className="dropdown"> <RiArrowDropDownLine  size="2.5rem" /> </div> 
         </div>

         <div className="header__logo">
                <div className="logo__div">
                <Link to ="/"><img className="logo" src="data:image/png;base64,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" alt="img" /></Link> 
                </div>
         </div>

         <div className="header__right">
            <div className="header__heart"><BsFillSuitHeartFill color="#a6a6a6" size="1.2rem" /></div>
            <Link to="/Cart"><div className="header__cart"><FaShoppingCart size="1.3rem" color="#006DB4" /></div></Link>
            <div onClick={() => {Setshowsignin(!showsignin)}} className="header__button">
               <div class="header__person"><BsPerson size="2rem" color="white" /></div>
               <span class="header__signin">Sign In</span>
            </div>
         </div>
         <>{showsignin || <Bodyandsignin />}</>
      </div>

      

    );
  }
  
  export default Header;
  