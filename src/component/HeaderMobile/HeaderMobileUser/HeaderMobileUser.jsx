import React, { useState, useEffect } from "react";
import "./HeaderMobileUser.css";
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderMobileUser = () => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // لما يفتح الكمبوننت، حدث الـ activeTab بناءً على الـ path
  useEffect(() => {
    switch (location.pathname) {
      case "/HomeProfile":
        setActiveTab("General");
        break;
      case "/history":
        setActiveTab("History");
        break;
      case "/settings":
        setActiveTab("Account settings");
        break;
      case "/rating":
        setActiveTab("Rating");
        break;
      case "/favorite":
        setActiveTab("Favorite");
        break;
      default:
        setActiveTab(null);
    }
  }, [location.pathname]);

  const handleClick = (tabName, path) => {
    setActiveTab(tabName);
    if (path) {
      navigate(path);
    }
  };

  const handleGroupClick = (url) => {
    // Placeholder for group link logic
  };

  return (
    <div className="HeaderMobileUseraber">
      <div className="HeaderMobileUser" onClick={() => handleGroupClick('https://example.com/group-link')}>
        <div className="HeaderMobileUserContint">
          <div className="HeaderMobileUserContintData">

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'General' ? 'active' : ''}`}
              onClick={() => handleClick('General', '/HomeProfile')}
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (3).svg" alt="" />
              <h2>General</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'History' ? 'active' : ''}`}
              onClick={() => handleClick('History', '/history')}
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (4).svg" alt="" />
              <h2>History</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Account settings' ? 'active' : ''}`}
              onClick={() => handleClick('Account settings', '/settings')}
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/material-symbols_settings-rounded.svg" alt="" />
              <h2>Account settings</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Rating' ? 'active' : ''}`}
              onClick={() => handleClick('Rating', '/rating')}
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (5).svg" alt="" />
              <h2>Rating</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Favorite' ? 'active' : ''}`}
              onClick={() => handleClick('Favorite', '/favorite')}
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/solar_heart-bold.svg" alt="" />
              <h2>Favorite</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileUser;
