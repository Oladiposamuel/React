import React from "react";
import './Cart.css';
import { Link } from 'react-router-dom';
import Footerone from "./Footerone";
import Footertwo from "./Footertwo";
import Header from "./Header";
import Footerthree from "./Footerthree";
import { GoSettings } from 'react-icons/go';
import Bodysearch from "./Bodysearch";
import { IoMdArrowDropright } from 'react-icons/io';

function Cart() {
    const Nosidebar = () => {
        return(
          <div className="sidebar">
          <div className="bigbody__left__content">
             <button  type="button" className="filter__search"> <Link to="/"><GoSettings size="1.2rem" className="settings"/></Link> </button>
           </div>
          </div>
    
        );
      }

    return (
      <div className="cart">
           <Header />
         <Nosidebar/>
        <div className="cartbody">
             <Bodysearch />
            <div className="sub__cartbody__body">
                <div className="sub__cartbody__body__content">
                    <div className="electronics__label">
                        <div className="home__label">Home</div> <span> <IoMdArrowDropright style={{marginTop: '0px'}} color="#a6c0c9" size="1rem" />  </span>  <div className="elect__label">Cart</div>
                    </div>
                </div>
                <div className="cartbody__content2">
                    <div className="itemsin">2 items in cart</div> <div className="summary">Summary</div>
                </div>
                <div className="cartbody__content3">
                    <div className="content3__one">
                        <div className="content3__one__div">
                          <div>
                            <div className="content3__one__div1">
                              <div className="itemdiv">Item</div> 
                              <div className="content3__one__div2">
                                <div className="iphonediv">
                                    <img src ="https://i.ibb.co/Z2g6ns5/1.png" alt="oraimo headphones" className="iphonediv__img" />
                                    
                                </div>
                                <div className="iphonetext">
                                  iPhone X Max
                                  <div className="iphoneqty">
                                    <span className="span__qty">Qty</span>
                                      <div ><button type="buttton" className="button1">-</button></div>
                                      <div className="button2">1</div>
                                      <div ><button type="buttton" className="button3"><span className="add">+</span></button></div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>

                            <div className="content3__one__div1">
                              <div className="content3__one__div2">
                                <div className="iphonediv">
                                    <img src ="https://i.ibb.co/Z2g6ns5/1.png" alt="oraimo headphones" className="iphonediv__img" />
                                    
                                </div>
                                <div className="iphonetext">
                                  iPhone X Max
                                  <div className="iphoneqty">
                                    <span className="span__qty">Qty</span>
                                      <div ><button type="buttton" className="button1">-</button></div>
                                      <div className="button2">1</div>
                                      <div ><button type="buttton" className="button3"><span className="add">+</span></button></div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div className="content3__one__div3">
                            <div className="content3__one__div1">
                              <div className="itemdiv">Unit Price</div> 
                              <div className="content3__one__div2">
                               
                                <div className="pricetext">
                                  <del>N</del>255,000
                                  
                                </div>
                                
                              </div>
                            </div>

                            <div className="content3__one__div1a">
                              <div className="content3__one__div2">
                               
                                <div className="pricetext">
                                <del>N</del>255,000
                                  
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="content3__two">
                        
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
  
  export default Cart;