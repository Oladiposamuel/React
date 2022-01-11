import React from "react";
import './Item.css';
import Rating from "./Rating";

  
function Item( {image, title, rating, price} ) {
    return (
      
      <div className="big__item">
          <div className="item">

              <img src= {image} alt="img"
              style={{  
                backgroundImage: "url(" + {image} + ")", 
                backgroundPosition: 'center', 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: 180,
                height: 150,
                borderRadius: 10,
                marginRight: 20,
                marginBottom: 0,
              }}

              /> 
              <div className="display">

              <span className="text">{title}</span>
              <span><Rating /> </span>
              <span className="item__price">{price}</span>

              </div> 

          </div>
      </div>
    );
    };


  export default Item;