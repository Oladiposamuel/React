import React from "react";
import './Electbody.css';
import products from "./Products";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Bodysearch from "./Bodysearch";

function Electbody() {
    return (
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
                      <Link to ="/Electproduct"><img src={image} alt={title} className="product__image"/></Link> 
                      <div className="display">
                      <span className="text">{title}</span>
                      <span>{rating}</span>
                      <span className="item__price">{price}</span>
                      </div>
                    </div>
                 );
               })}
            </div>
          </div>
        </div>
        
    </div>

    );
  }
  
  export default Electbody;