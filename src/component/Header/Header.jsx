import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Headerimg1 from "/public/Logo 1.svg";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import HeaderimguserDefault from "./Ellipse 33.svg";
import Headerimgusernet from "./Vecto221.svg";
import imgselscar from "./Untitled-1 copy.png";

import ComHeader from "./ComHeader";
import HeaderMobileUser from "../HeaderMobile/HeaderMobileUser/HeaderMobileUser.jsx";
import axios from "axios";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const comHeaderRef = useRef(null);

  const [showModel, setShowModel] = useState(false);
  const [showMobileUser, setShowMobileUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showImgSelScar, setShowImgSelScar] = useState(false);
  const [profileImage, setProfileImage] = useState(HeaderimguserDefault);

  const userId = localStorage.getItem("userId");
  const baseUrl = localStorage.getItem("baseUrl");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const storedProfileImage = localStorage.getItem("profileImagePath");

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    } else {
      const fetchProfileImage = async () => {
        try {
          if (userId && baseUrl) {
            const response = await axios.get(`${baseUrl}/api/User/UpdateUser/${userId}`);
            const imagePath = response.data.imagePath;
            if (imagePath) {
              setProfileImage(imagePath);
              localStorage.setItem("profileImagePath", imagePath);
            } else {
              setProfileImage(HeaderimguserDefault);
            }
          }
        } catch (error) {
          console.error("Failed to fetch profile image:", error);
          setProfileImage(HeaderimguserDefault);
        }
      };
      fetchProfileImage();
    }
  }, [userId, baseUrl]);

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

  const checkCartAndUpdateImage = () => {
    try {
      const cartRaw = localStorage.getItem("card");
      if (cartRaw) {
        const cart = JSON.parse(cartRaw);
        setShowImgSelScar(Array.isArray(cart) && cart.length > 0);
      } else {
        setShowImgSelScar(false);
      }
    } catch {
      setShowImgSelScar(false);
    }
  };

  useEffect(() => {
    checkCartAndUpdateImage();

    const handleStorageChange = (e) => {
      if (e.key === "card") {
        checkCartAndUpdateImage();
      }
    };

    const handleCartChanged = () => checkCartAndUpdateImage();

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartChanged", handleCartChanged);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartChanged", handleCartChanged);
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
                    src={profileImage}
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

            {/* ✅ صورة تظهر تلقائياً لو فيه عناصر بالكارت بشرط ألا تكون في SalesPages */}
            {showImgSelScar && !location.pathname.startsWith("/SalesPages") && (
              <img className="imgselscar" src={imgselscar} alt="added to cart" />
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
