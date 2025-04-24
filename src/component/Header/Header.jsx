import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Headerimg1 from "/public/Logo 1.svg";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import Headerimguser from "./Ellipse 33.svg";
import Headerimgusernet from "./Vecto221.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ComHeader from "./ComHeader";
import HeaderMobileUser from "../HeaderMobile/HeaderMobileUser/HeaderMobileUser.jsx";

const Header = () => {
  const location = useLocation();
  const [showModel, setShowModel] = useState(false);
  const [showMobileUser, setShowMobileUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const comHeaderRef = useRef(null);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (
      comHeaderRef.current &&
      !comHeaderRef.current.contains(event.target)
    ) {
      setShowModel(false);
      setShowMobileUser(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token"); // عدل اسم التوكن حسب مشروعك
    setIsLoggedIn(!!token);
  }, []);

  const handleIconMenuClick = () => {
    const profilePaths = [
      "/HomeProfile",
      "/OrderFavProfile",
      "/HistoryProfile",
      "/AccountSettings",
    ];
    if (profilePaths.includes(location.pathname)) {
      setShowMobileUser(true);
    } else {
      setShowModel((prev) => !prev);
    }
  };

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
                      className={`navbar-item ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/MenuItems"
                      className={`navbar-item ${
                        location.pathname === "/MenuItems" ? "active" : ""
                      }`}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reservation"
                      className={`navbar-item ${
                        location.pathname === "/Reservation" ? "active" : ""
                      }`}
                    >
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      className={`navbar-item ${
                        location.pathname === "/About" ? "active" : ""
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Contautus"
                      className={`navbar-item ${
                        location.pathname === "/Contautus" ? "active" : ""
                      }`}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="HeaderContinentlogoButton">
            {isLoggedIn && (
              <>
                <Link to="/HomeProfile">
                  <img
                    className="HeaderContinentlogoButtonuserNet"
                    src={Headerimgusernet}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <Link to="/HomeProfile">
                  <img
                    className="HeaderContinentlogoButtonuser"
                    src={Headerimguser}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </>
            )}

            <Link to="/SalesPages">
              <img
                className="HeaderContinentlogoButton2"
                src={Headerimg2}
                alt=""
              />
            </Link>

            {!isLoggedIn && (
              <button
                className="HeaderContinentlogoButton1"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}

            <button onClick={handleIconMenuClick} className="icon-menu"></button>

            {showModel && (
              <div ref={comHeaderRef}>
                <ComHeader onClose={() => setShowModel(false)} />
              </div>
            )}

            {showMobileUser && (
              <div className="modal-overlay">
                <div className="modal-content" ref={comHeaderRef}>
                  <HeaderMobileUser onClose={() => setShowMobileUser(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
