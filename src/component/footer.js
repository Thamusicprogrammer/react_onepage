import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return(
        <div className="footer">
            <p>We Are Social</p>
            <div className="icons">
              <a href="#" className="social-icons">
                <FontAwesomeIcon className="fa-brands fa-facebook fa" icon={faFacebook} />
              </a>
              <a href="#" className="social-icons">
                <FontAwesomeIcon className="fa-brands fa-twitter" icon={faTwitter} />
              </a>
              <a href="#" className="social-icons">
                <FontAwesomeIcon className="fa-brands fa-instagram fa" icon={faInstagram} />
              </a>
              <a href="#" className="social-icons">
                <FontAwesomeIcon className="fa-brands fa-youtube fa" icon={faYoutube}/>
              </a>
            </div>
            <hr id="footerHr" />
            <div>
              <p className="footer-p">
                © 2024 Imomotimi Foundation. All Rights Reserved.
              </p>
              <div className="footer-line">
                {" "}
                <a href="#">
                  <FontAwesomeIcon className="fa-solid fa-arrow-up fa" icon={faArrowUp}/>
                </a>
              </div>
              <a href="#"></a>
            </div>
            <a href="#"></a>
          </div>

    )
}