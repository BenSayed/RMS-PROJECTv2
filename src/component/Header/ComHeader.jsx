import React from "react";
import "./ComHeader.css";
import imgcar from "./Ellipse 1924.svg";
import imgcar22 from "./akar-icons_cart.svg";
import { Link } from "react-router-dom";

const ComHeader = ({ onClose }) => {
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
                <Link className="linkmodel" to="/" onClick={onClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="linkmodel" to="/" onClick={onClose}>
                  Menu
                </Link>
              </li>
              <li>
                <Link className="linkmodel" to="/" onClick={onClose}>
                  Reservation
                </Link>
              </li>
              <li>
                <Link className="linkmodel" to="/about" onClick={onClose}>
                  About
                </Link>
              </li>
              <li>
                <Link className="linkmodel" to="/Contautus" onClick={onClose}>
                  Contact us
                </Link>
              </li>
            </ul>
            <Link to="/SalesPages" onClick={onClose}>
              <img src={imgcar22} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComHeader;