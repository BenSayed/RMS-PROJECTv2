import React, { useState } from "react";
import "./ComHeader.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link } from "react-router-dom";

const ComHeader = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    onClose(); // تنفيذ onClose بعد تحديد اللينك النشط
  };

  return (
    <div className="ComHeader">
      <div className="ComHeader1">
        <div className="ComHeaderCard">
          <div className="ComHeaderCardPro">
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
                  to="/menu"
                  onClick={() => handleLinkClick("Menu")}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Reservation" ? "active" : ""}`}
                  to="/reservation"
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