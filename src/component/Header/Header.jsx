import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Headerimg1 from "/public/Logo 1.svg";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import Headerimguser from "./Ellipse 33.svg";
import Headerimgusernet from "./Vecto221.svg";
import ComHeader from "./ComHeader";
import HeaderMobileUser from "../HeaderMobile/HeaderMobileUser/HeaderMobileUser.jsx";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const comHeaderRef = useRef(null);

  const [showModel, setShowModel] = useState(false);
  const [showMobileUser, setShowMobileUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comHeaderRef.current && !comHeaderRef.current.contains(event.target)) {
        setShowModel(false);
        setShowMobileUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
            <div
              className="HeaderContinentlogoImgTitel"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              <img src={Headerimg1} alt="Flavor Haven Logo" />
              <h2>Flavor Haven</h2>
            </div>

            <div className="HeaderContinentNavBar">
              <nav className="navbar">
                <ul className="navbar-list">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/MenuItems", label: "Menu" },
                    { path: "/reservation", label: "Reservation" },
                    { path: "/About", label: "About" },
                    { path: "/Contautus", label: "Contact us" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`navbar-item ${
                          location.pathname.toLowerCase() === item.path.toLowerCase()
                            ? "active"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="HeaderContinentlogoButton">
         {isLoggedIn ? (
              <>
                <Link to="/HomeProfile">
                  <img
                    className="HeaderContinentlogoButtonuserNet"
                    src={Headerimgusernet}
                    alt="Profile Icon"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <Link to="/HomeProfile">
                  <img
                    className="HeaderContinentlogoButtonuser"
                    src={Headerimguser}
                    alt="Profile Icon"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </>
            ) : (
              <button
                className="HeaderContinentlogoButton1"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}

            <Link to="/SalesPages">
              <img
                className="HeaderContinentlogoButton2"
                src={Headerimg2}
                alt="Cart"
              />
            </Link>


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
