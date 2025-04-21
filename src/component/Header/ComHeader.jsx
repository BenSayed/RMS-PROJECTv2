import React, { useState, useEffect, useRef } from "react";
import "./ComHeader.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link } from "react-router-dom";

const ComHeader = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);
  const cardRef = useRef(null);

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

  return (
    <div className="ComHeader">
      <div className="ComHeader1">
        <div className="ComHeaderCard23" ref={cardRef}>
          
          {/* ✅ التعديل هنا */}
          <div className="ComHeaderCardPro" onClick={() => {
            onClose();
            window.location.href = '/HomeProfile';
          }}>
            <img src={imgcar} alt="" />
            <h2>Ronald Richards</h2>
          </div>

          <div className="ComHeaderCardNav">
            <ul className="ComHeaderCardNavUi">
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Home" ? "active" : ""}`}
                  to="/"
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Menu" ? "active" : ""}`}
                  to="/MenuItems"
                  onClick={() => handleLinkClick("Menu")}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Reservation" ? "active" : ""}`}
                  to="/Reservation"
                  onClick={() => handleLinkClick("Reservation")}
                >
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "About" ? "active" : ""}`}
                  to="/about"
                  onClick={() => handleLinkClick("About")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Contact us" ? "active" : ""}`}
                  to="/Contautus"
                  onClick={() => handleLinkClick("Contact us")}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <Link
              to="/SalesPages"
              onClick={() => handleLinkClick("SalesPages")}
            >
              <img src={imgcar22} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComHeader;
