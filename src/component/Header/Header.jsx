import React from "react";
import "./Header.css";
import Headerimg1 from "/public/logo.png";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="Headerall">
      <header className="Header">
        <div className="HeaderContinent">
          <div className="HeaderContinentlogo">
            <div className="HeaderContinentlogoImgTitel">
              <img src={Headerimg1} alt="notEror" />
              <h2>Flavor Haven</h2>
            </div>
            <div className="HeaderContinentNavBar">
              <nav className="navbar">
                <ul className="navbar-list">
                  <li>
                    <Link
                      to="/"
                      className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/menu"
                      className={`navbar-item ${location.pathname === "/menu" ? "active" : ""}`}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reservation"
                      className={`navbar-item ${location.pathname === "/reservation" ? "active" : ""}`}
                    >
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      className={`navbar-item ${location.pathname === "/About" ? "active" : ""}`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`navbar-item ${location.pathname === "/contact" ? "active" : ""}`}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="HeaderContinentlogoButton">
            <Link to="/#">
              <img
                className="HeaderContinentlogoButton2"
                src={Headerimg2}
                alt=""
              />
            </Link>
            <button className="HeaderContinentlogoButton1">login</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;