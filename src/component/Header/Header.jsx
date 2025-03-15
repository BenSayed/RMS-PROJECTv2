import React, { useState } from "react";
import "./Header.css";
import Headerimg1 from "/public/Logo 1.svg";
import Headerimg2 from "/HeaderIMG/akar-icons_cart.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [shomodel, setshomodel] = useState(false);

  const navigate = useNavigate(); // استخدام دالة التنقل

  // دالة للانتقال إلى صفحة تسجيل الدخول
  const handleLoginClick = () => {
    navigate('/login'); // عند الضغط على الزر سيتم الانتقال إلى /login
  };

  // دالة لإغلاق المودال
  const handleLinkClick = () => {
    setshomodel(false); // إغلاق المودال عند النقر على أي رابط
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
                      className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/MenuItems"
                      className={`navbar-item ${location.pathname === "/menu" ? "active" : ""}`}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reservation"
                      className={`navbar-item ${location.pathname === "/reservation" ? "active" : ""}`}
                    >
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      className={`navbar-item ${location.pathname === "/About" ? "active" : ""}`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Contautus"
                      className={`navbar-item ${location.pathname === "/Contautus" ? "active" : ""}`}
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
            <button className="HeaderContinentlogoButton1" onClick={handleLoginClick}>login</button>
            <button
              onClick={() => {
                setshomodel(true);
              }}
              className="icon-menu"
            ></button>

            {shomodel && (
              <div className="fixed">
                <ul className="model">
                  <li>
                    <button
                      className="icon-clear"
                      onClick={() => {
                        setshomodel(false); // إغلاق المودال عند الضغط على زر "icon-clear"
                      }}
                    ></button>
                  </li>
                  <li>
                    <Link className="linkmodel" to="/" onClick={handleLinkClick}>Home</Link>
                  </li>
                  <li>
                    <Link className="linkmodel" to="/MenuItems" onClick={handleLinkClick}>Menu</Link>
                  </li>
                  <li>
                    <Link className="linkmodel" to="/reservation" onClick={handleLinkClick}>Reservation</Link>
                  </li>
                  <li>
                    <Link className="linkmodel" to="/About" onClick={handleLinkClick}>About</Link>
                  </li>
                  <li>
                    <Link className="linkmodel" to="/Contautus" onClick={handleLinkClick}>Contact us</Link>
                  </li>

                  <li>
                    <div className="HeaderContinentlogoButtonModel">
                      <Link to="/#">
                        <img
                          className="HeaderContinentlogoButton2model"
                          src={Headerimg2}
                          alt=""
                        />
                      </Link>
                      <button
                        className="HeaderContinentlogoButton1mpdel"
                        onClick={() => {
                          handleLoginClick();
                          setshomodel(false); // إغلاق المودال بعد النقر على login
                        }}
                      >
                        login
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
