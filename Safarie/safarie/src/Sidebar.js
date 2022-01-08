import React, {useState} from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Nosidebar from "./Nosidebar";
import { GoSettings } from 'react-icons/go';
import { AiOutlineLeft } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { MdPhoneAndroid } from 'react-icons/md';
import { BiBasketball } from 'react-icons/bi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaBaby } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import {FcElectronics} from 'react-icons/fc';


function Sidebar() {

  return (
    
    <div className="sidebar">
         
         <div className="bigbody__left__content">
                <button type="button" className="filter__search"> <GoSettings  size="1.2rem" className="settings"/><span className="filter__content">FILTER SEARCH </span >  < AiOutlineLeft className="arrowleft" /> </button>

                <div >
                    <div className="price__range">Price Range</div>

                    <form>
                        <input className="price__range__line" type="range" name="price-min" id="price-min" value="700" min="0" max="1000" />
                    </form>

                    <div className="price">300k</div>
                </div>
            </div>
            
            <div className="straight__line"></div>

            <div className="bigbody__left__content__one">
                <div className="categories">Categories</div>

                <div className="sub__categories">
                    <div className="sub__categories__one">
                        <GiConverseShoe size="2rem" color="gray" className="sub__categories__shoe" />
                        <div className="fashion">Fashion</div>
                    </div>
                    <div className="sub__categories__two">
                        <MdPhoneAndroid size="2rem" color="gray" className="sub__categories__phone"/>
                        <div className="fashion">Phones & Gadgets</div>
                    </div>
                    <div className="sub__categories__three">
                        <BiBasketball size="2rem" color="gray" className="sub__categories__sport"/>
                        <div className="fashion">Sport</div>
                    </div>
                </div>

                <div className="sub__categories">
                    <div className="sub__categories__one">
                        <MdOutlineHealthAndSafety size="2rem" color="gray" className="sub__categories__shoe" />
                        <div className="fashion">Health</div>
                    </div>
                    <div className="sub__categories__two">
                        <FaBaby size="2rem" color="gray" className="sub__categories__phone"/>
                        <div className="fashion">Baby</div>
                    </div>
                    <div className="sub__categories__three">
                        <GiSofa size="2rem" color="gray" className="sub__categories__sport"/>
                        <div className="fashion">Furniture</div>
                    </div>
                </div>

                <div className="sub__categories">
                    <div className="sub__categories__one">
                        <Link style={{textDecoration: 'none'}} to ="/Electronics"><FcElectronics size="2rem" color="gray" className="sub__categories__shoe" />
                        <div className="fashion">Electronics</div></Link>
                    </div>
                </div>

            </div>
    </div>

  );
}

export default Sidebar;
