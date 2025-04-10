import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Headerimg1 from "/public/Logo 1.svg";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ComHeader from "./ComHeader";

const Header = () => {
  const location = useLocation();
  const [showModel, setShowModel] = useState(false); // state لإظهار/إخفاء ComHeader
  const navigate = useNavigate();
  const comHeaderRef = useRef(null); // ref لتتبع ComHeader

  // دالة للانتقال إلى صفحة تسجيل الدخول
  const handleLoginClick = () => {
    navigate("/login");
  };

  // دالة لإغلاق ComHeader عند النقر خارج المكون
  const handleClickOutside = (event) => {
    if (comHeaderRef.current && !comHeaderRef.current.contains(event.target)) {
      setShowModel(false);
    }
  };

  // إضافة event listener لتتبع النقر خارج المكون
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <Link to="/SalesPages">
              <img
                className="HeaderContinentlogoButton2"
                src={Headerimg2}
                alt=""
              />
            </Link>
            <button
              className="HeaderContinentlogoButton1"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              onClick={() => setShowModel(!showModel)} // تبديل حالة showModel
              className="icon-menu"
            ></button>

            {/* إظهار ComHeader إذا كانت showModel تساوي true */}
            {showModel && (
              <div ref={comHeaderRef}>
                <ComHeader onClose={() => setShowModel(false)} />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;