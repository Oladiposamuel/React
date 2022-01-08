import React from "react";
import './Item.css';

  
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
              <p className="text">{title}</p>
              <span>{rating}</span>
              <span className="item__price">{price}</span>

          </div>
      </div>
    );
    };


  export default Item;