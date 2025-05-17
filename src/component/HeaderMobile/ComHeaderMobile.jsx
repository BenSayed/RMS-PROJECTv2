import React, { useState, useEffect, useRef } from "react";
import "./ComHeader.Mobil.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link } from "react-router-dom";

const ComHeaderMobile = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);
  const cardRef = useRef(null); // تعريف المرجع للإشارة إلى الكارد

  // التعامل مع النقرات خارج الكارد
  useEffect(() => {
    const handleClickOutside = (event) => {
      // إذا تم النقر خارج الكارد، يتم إغلاقه
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // إضافة مستمع للنقر

    // تنظيف المستمع عند تفكيك المكون
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    onClose(); // تنفيذ onClose بعد تحديد اللينك النشط
  };

  return (
    <div className="ComHeader">
      <div className="ComHeader12">
        <div className="ComHeaderCard2" ref={cardRef}> {/* إضافة المرجع هنا */}
          <div className="ComHeaderCardPro">
            <img src={imgcar} alt="" />
            <h2>Ronald Richards</h2>
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
