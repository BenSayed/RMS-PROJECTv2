import React from 'react';
import "./Footer.css";
import Headerimg1 from  "/public/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      
      <footer>
      <div className="newsletter0">
        <div className="logo-container0">
          <img
            src={Headerimg1}
            alt="Flavor Haven Logo"
            className="logoo"
          />
          <h1 className="restaurant-name0">Flavor Haven</h1>
        </div> 
        <p> Don &apos;t forget to join us for our   <br/> newsletters</p>
        <div className="email-subscribe00">
          <input type="email" placeholder="Enter Your Email" />
          <button>Notify me</button>
        </div>
      </div>
      <nav className="footer-menu0">
      <ul className="navbar-list">
                  <li>
                    <Link to="#" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="navbar-item">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="navbar-item">
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="navbar-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="navbar-item">
                      Contact us
                    </Link>
                  </li>
                </ul>
      </nav>
      <div className="copyright0">
        <p>
          &copy; 2025 Flavor Haven. All rights reserved. No content from this
          website may be copied, reproduced, or distributed for commercial
          purposes without prior written permission from Flavor Haven.
        </p>
      </div>
    </footer>

    </div>
  );
}

export default Footer;
