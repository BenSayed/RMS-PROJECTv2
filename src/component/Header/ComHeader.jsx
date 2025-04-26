import React, { useState, useEffect, useRef } from "react";
import "./ComHeader.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ComHeader = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ حالة تسجيل الدخول

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    onClose();
  };

  const handleProfileClick = () => {
    onClose();
    navigate('/HomeProfile');
  };

  return (
    <div className="ComHeader">
      <div className="ComHeader1">
        <div className="ComHeaderCard23" ref={cardRef}>

          {/* ✅ صورة واسم البروفايل */}
          <div className="ComHeaderCardPro" onClick={handleProfileClick}>
            <img src={imgcar} alt="Profile" />
            <h2>Ronald Richards</h2>
          </div>

          <div className="ComHeaderCardNav">
            <ul className="ComHeaderCardNavUi">
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? "linkmodel active" : "linkmodel"}
                  to="/"
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? "linkmodel active" : "linkmodel"}
                  to="/MenuItems"
                  onClick={() => handleLinkClick("Menu")}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? "linkmodel active" : "linkmodel"}
                  to="/Reservation"
                  onClick={() => handleLinkClick("Reservation")}
                >
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? "linkmodel active" : "linkmodel"}
                  to="/about"
                  onClick={() => handleLinkClick("About")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? "linkmodel active" : "linkmodel"}
                  to="/Contautus"
                  onClick={() => handleLinkClick("Contact us")}
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            {/* ✅ مكان السلة أو اللوجين كـ NavLink */}
            <div className="cart-or-login">
              {isLoggedIn ? (
                <NavLink
                  to="/SalesPages"
                  onClick={() => handleLinkClick("SalesPages")}
                >
                  <img src={imgcar22} alt="Cart Icon" />
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) => isActive ? "login-text active" : "login-text"}
                  onClick={() => handleLinkClick("Login")}
                >
                  Login
                </NavLink>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ComHeader;
