import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header" >
      <header >
        <div className="HeaderContinent border">
          <div className="HeaderContinentlogo  ">
            <div className="HeaderContinentlogoImgTitel">
              <img src="public/logo.png" alt="notEror" />
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
          <img  className="HeaderContinentlogoButton2" src="public/Header/akar-icons_cart.svg" alt="" /> 

      </Link>
            <button className="HeaderContinentlogoButton1">login</button>
            
              </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
