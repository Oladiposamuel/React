import React, {useState, useEffect} from "react";
import './Electronics.css';
import products from "./Products";
import Footerone from "./Footerone";
import Footertwo from "./Footertwo";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Nosidebar from './Nosidebar';
import Footerthree from "./Footerthree";
import Bodysearch from "./Bodysearch";
import { IoMdArrowDropright } from 'react-icons/io';
import { GoSettings } from 'react-icons/go';
import { AiOutlineLeft } from 'react-icons/ai';
import Electandsidebar from "./Electandsidebar";


function Electronics() {
  const[showsidebar, Setshowsidebar] =useState(false);

  useEffect(() => {
    Setshowsidebar(() => {});
}, [])

  const Nosidebar = () => {
    return(
      <div className="sidebar">
      <div className="bigbody__left__content">
         <button  type="button" className="filter__search"> <GoSettings onClick={() => {Setshowsidebar(!showsidebar)}} size="1.2rem" className="settings"/> </button>
       </div>
      </div>

    );
  }

    return (
        
      <div className="electronics">
        <Header />
        {showsidebar ? <Electandsidebar /> : <Nosidebar/>}
        <div className="electronics__body">
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
  
  export default Electronics;