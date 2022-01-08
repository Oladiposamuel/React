import React from "react";
import './Bodysearch.css';

function Bodysearch() {
    return (
          <div className="body__right__one">
                    <input type="text" className="body__right__search" placeholder="What do you want?" />
                    <button type="button"className="market__place" >MARKET PLACE</button>
                    <button type="button" className="auction">AUCTION</button>
                </div>

    );
  }
  
  export default Bodysearch;