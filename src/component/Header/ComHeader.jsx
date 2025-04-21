import React, { useState, useEffect, useRef } from "react";
import "./ComHeader.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link, useNavigate } from "react-router-dom"; // ✅ ضفنا useNavigate

const ComHeader = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);
  const cardRef = useRef(null);
  const navigate = useNavigate(); // ✅ تهيئة التنقل

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

  // ✅ دالة التنقل إلى صفحة البروفايل
  const handleProfileClick = () => {
    onClose();
    navigate('/HomeProfile');
  };

  return (
    <div className="ComHeader">
      <div className="ComHeader1">
        <div className="ComHeaderCard23" ref={cardRef}>
          
          {/* ✅ الصورة والاسم مع التنقل */}
          <div className="ComHeaderCardPro" onClick={handleProfileClick}>
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
