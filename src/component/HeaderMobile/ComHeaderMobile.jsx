import React, { useState, useEffect, useRef } from "react";
import "./ComHeader.Mobil.css";
import imgcar from "./Ellipse 1924.svg"; // صورة افتراضية لو مفيش من اليوزر
import imgcar22 from "./akar-icons_cart.svg";
import { Link } from "react-router-dom";

const ComHeaderMobile = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);
  const cardRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(null);

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

  // تحميل بيانات المستخدم من localStorage
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      const fullName = `${userInfo.firstName || ""} ${userInfo.lastName || ""}`.trim();
      setUserName(fullName || userInfo.userName); // fallback للايميل لو الاسم مش موجود
      setUserImage(userInfo.imagePath); // ممكن يكون null
    }
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    onClose();
  };

  return (
    <div className="ComHeader">
      <div className="ComHeader12">
        <div className="ComHeaderCard2" ref={cardRef}>
          <div className="ComHeaderCardPro">
            <img src={userImage || imgcar} alt="user" />
            <h2>{userName}</h2>
          </div>
          <div className="ComHeaderCardNav">
            <ul className="ComHeaderCardNavUi">
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Home" ? "active" : ""}`}
                  to="/DeliveryHome"
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "History" ? "active" : ""}`}
                  to="/DeliveryHistory"
                  onClick={() => handleLinkClick("History")}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Chat" ? "active" : ""}`}
                  to="/reservation"
                  onClick={() => handleLinkClick("Chat")}
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  className={`linkmodel ${activeLink === "Map" ? "active" : ""}`}
                  to="/DeliveryMap"
                  onClick={() => handleLinkClick("Map")}
                >
                  Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComHeaderMobile;
