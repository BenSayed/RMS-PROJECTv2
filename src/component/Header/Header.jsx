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
                      to="/menu"
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
                      to="/contact"
                      className={`navbar-item ${location.pathname === "/contact" ? "active" : ""}`}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="HeaderContinentlogoButton">
            <Link to="/#">
              <img
                className="HeaderContinentlogoButton2"
                src={Headerimg2}
                alt=""
              />
            </Link>
            <button className="HeaderContinentlogoButton1"  onClick={handleLoginClick} >login</button>
            <button  
             onClick={ ( ) => {
              setshomodel (true)
              
             } }
              
           className="icon-menu"></button>


            
            {shomodel && (   
              
        <div className="fixed"> 
          <ul className="model">  
            <li>
              <button
                className="icon-clear" 
                onClick={() => {
                  setshomodel(false);
                }}
              ></button>
            </li>
            <li>
              <a className="linkmodel" href=""> Home </a>
            </li>
            <li>
              <a className="linkmodel" href=""> Menu </a>
            </li>
            <li>
              <a className="linkmodel" href="">Reservation</a>
            </li>
            <li>
              <a className="linkmodel" href="">About</a>
            </li>
            <li>
              <a className="linkmodel" href=""> Contact us </a>
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
            <button className="HeaderContinentlogoButton1mpdel">login</button>
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