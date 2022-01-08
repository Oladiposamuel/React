import React from "react";
import './Footertwo.css';

function Footertwo() {
    return (
          <div className="footer__two">
            <div className="footer__help">
                <span className="help">HELP</span>
                <span className="sub__help">FAQs</span>
                <span className="sub__help">Policies</span>
                <span className="sub__help">Terms and conditions</span>
                <span className="sub__help">Become a seller</span>
                <span className="sub__help">Get a custom domain</span>
            </div>

            <div className="footer__about">
                <span className="about">ABOUT Safarie</span>
                <span className="sub__help">ABOUT Safarie</span>
                <span className="sub__help">ABOUT Safarie</span>
            </div>

            <div className="footer__download">
                <span className="download">DOWNLOAD MOBILE APP</span>
            </div>

            <div className="footer__social">
                <span className="social">WE ARE SOCIAL</span>
                <span className="sub__help">Facebook</span>
                <span className="sub__help">Youtube</span>
                <span className="sub__help">Twitter</span>
                <span className="sub__help">Instagram</span>
            </div>
        </div>

    );
  }
  
  export default Footertwo;