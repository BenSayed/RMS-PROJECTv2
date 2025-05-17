import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assest/Logo 1.svg";
import fa6SolidUser from "../assest/fa6-solid_user.svg";
import flowbiteEditOutline from "../assest/material-symbols_history-rounded.svg";
import materialSymbolsSettingsRounded from "../assest/material-symbols_settings-rounded.svg";
import solarHeartBold from "../assest/solar_heart-bold.svg";
import Vector from "../assest/Vector.svg";
import "./HomeProfile.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // قائمة بأسماء العناصر اللي عايز تمسحها من localStorage
      // const itemsToRemove = [
      //   "token",
      //   "email",
      //   "firstName",
      //   "lastName",
      //   "profileImage",
      //   "profileImagePath",
      //   "userInfo",
      //   "activeCategory",
      //   "addresses",
      //   "baseUrl",
      //   "userId", // لو كنت بتخزن الـ userId بشكل منفصل
      //   // أضف أي عناصر تانية خاصة بالحساب هنا
      // ];

      // // قم بمسح كل عنصر في القائمة من localStorage
      // itemsToRemove.forEach((itemKey) => {
      //   localStorage.removeItem(itemKey);
      // });

      // إعادة التوجيه لصفحة تسجيل الدخول
      navigate("/login");

      // إعادة تحميل الصفحة (اختياري، لكن ممكن يكون مفيد لتنظيف الـ state)
      window.location.reload();
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo-containerProfile">
          <img
            className="logo-containerProfileimg"
            src={logo}
            alt="Flavor Haven Logo"
            width="48px"
            height="48px"
          />
          <h2 className="logo-text">Flavor Haven</h2>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/HomeProfile" className="nav-item" activeClassName="active">
          <img src={fa6SolidUser} width="24" height="24" alt="User Icon" />
          <span>General</span>
        </NavLink>
        <NavLink
          to="/HistoryProfile"
          className="nav-item"
          activeClassName="active"
        >
          <img
            src={flowbiteEditOutline}
            width="24"
            height="24"
            alt="History Icon"
          />
          <span>History</span>
        </NavLink>
        <NavLink
          to="/AccountSettings"
          className="nav-item"
          activeClassName="active"
        >
          <img
            src={materialSymbolsSettingsRounded}
            width="24"
            height="24"
            alt="Settings Icon"
          />
          <span>Account settings</span>
        </NavLink>
        <NavLink
          to="/OrderFavProfile"
          className="nav-item"
          activeClassName="active"
        >
          <img src={solarHeartBold} width="24" height="24" alt="Favorite Icon" />
          <span>Favorite</span>
        </NavLink>
      </div>

      <div
        className="logout"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <img src={Vector} width="24" height="24" alt="Logout Icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;