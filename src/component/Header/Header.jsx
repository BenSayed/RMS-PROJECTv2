import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Headerimg1 from  "/public/logo.png";
import Headerimg2 from  "/HeaderIMG/akar-icons_cart.svg";

const Header = () => {
  return (
    <div className="Header" >
      <header >
        <div className="HeaderContinent  ">
          <div className="HeaderContinentlogo  ">
            <div className="HeaderContinentlogoImgTitel">
              <img src={Headerimg1} alt="notEror" />
              <h2>Flavor Haven</h2>{" "}
            </div>
            <div className="HeaderContinentNavBar">
              <nav className="navbar">
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
            </div>

          </div>

          <div className="HeaderContinentlogoButton  ">

          <Link to="/#">
          <img  className="HeaderContinentlogoButton2" src={Headerimg2}  alt="" /> 

      </Link>
            <button className="HeaderContinentlogoButton1">login</button>
            
              </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
