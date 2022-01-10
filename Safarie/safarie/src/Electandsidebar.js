import React, { useEffect, useState } from "react";
import './Electandsidebar.css';
import { Link } from 'react-router-dom';
import products from "./Products";
import Header from "./Header";
import Footerone from "./Footerone";
import Footertwo from "./Footertwo";
import Footerthree from "./Footerthree";
import Bodysearch from "./Bodysearch";
import { IoMdArrowDropright } from 'react-icons/io';
import { GoSettings } from 'react-icons/go';
import { AiOutlineLeft } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { MdPhoneAndroid } from 'react-icons/md';
import { BiBasketball } from 'react-icons/bi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaBaby } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import {FcElectronics} from 'react-icons/fc';


function Electandsidebar() {


    const Sidebar = () => {
        return(
            <div className="sidebar">
         
            <div className="bigbody__left__content">
                   <button type="button" className="filter__search"> <GoSettings  size="1.2rem" className="settings"/><span className="filter__content">FILTER SEARCH </span >  <Link style={{textDecoration: 'none',}} to="/Electronics"><AiOutlineLeft className="arrowleft" /></Link> </button>
    
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
                       <Link to="/Electronics" style={{textDecoration: 'none'}}><div className="sub__categories__one">
                           <FcElectronics size="2rem" color="gray" className="sub__categories__shoe" />
                           <div className="fashion">Electronics</div>
                       </div></Link>
                   </div>
    
               </div>
       </div>
    
        );
    }


    return (
      
    <div className="electronics">
        <Header />
         <Sidebar />
        <div className="electandsidebar__body">
            <Bodysearch />
            <div className="sub__electronics__body">
              <div className="sub__electronics__body__content">
                <div className="electronics__label">
                  <div className="home__label">Home</div> <span> <IoMdArrowDropright style={{marginTop: '0px'}} color="#a6c0c9" size="1rem" />  </span>  <div className="elect__label">Electronics</div>
                </div>
                <div className="electronics__biglabel">
                  Electronics
                </div>
                <div className="electronics__products">
                   {products.map((product) => {
                     const {id, image, title, rating, price} = product;
                     return (
                        <div key={id} className="product">
                          <img src={image} alt={title} className="product__image"/>
                          <p className="text">{title}</p>
                          <span>{rating}</span>
                          <span className="item__price">{price}</span>
                        </div>
                     );
                   })}
                </div>
              </div>
            </div>
        </div>

        <Footerone />
          <Footertwo />
          <Footerthree />
    </div>

    );
  }
  
  export default Electandsidebar;