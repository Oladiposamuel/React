import React from "react";
import Bodysearch from "./Bodysearch";
import './Productbody.css';
import products from "./Products";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Bigrating from "./Bigrating";

function Productbody() {
    return (
      <div className="productbody">
          <Bodysearch />
          <div className="sub__productbody__body">
          <div className="sub__productbody__body__content">
            <div className="electronics__label">
              <div className="home__label">Home</div> <span> <IoMdArrowDropright style={{marginTop: '0px'}} color="#a6c0c9" size="1rem" />  </span>  <div className="elect__label">Electronics</div>
            </div>

            <div className="sub__productbody__one">
                <div className="productbody__one__img">
                    <img src="https://i.ibb.co/0QVTb7K/1-2x.png" alt = "oraimo headphones" />
                </div>
                <div className="productbody__one__text">
                    <div className="productbody__one__text1">
                        <span>Oraimo head phones</span>
                    </div>

                    <div className="productbody__one__text2">
                        <Bigrating />
                    </div>

                    <div className="productbody__one__text3">
                        
                    </div>

                    <div className="productbody__one__text4">
                        
                    </div>

                    <div className="productbody__one__text5">
                        
                    </div>

                    <div className="productbody__one__text6">
                        
                    </div>

                    <div className="productbody__one__text7">
                        
                    </div>

                    <div className="productbody__one__text8">
                        
                    </div>
                </div>
            </div>
          </div>

        </div>  
      </div>

    );
  }
  
  export default Productbody;