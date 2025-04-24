// HeaderMobileUser.jsx
import React, { useState, useEffect } from "react";
import "./HeaderMobileUser.css";
import { useNavigate, useLocation } from 'react-router-dom';

import profileHeader1 from './Vector (3).svg';
import profileHeader2 from './Vector (4).svg';
import profileHeader3 from './material-symbols_settings-rounded.svg';
import profileHeader5 from './solar_heart-bold.svg';

const HeaderMobileUser = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
      case "/OrderFavProfile":
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
      if (onClose) onClose(); // ← هنا بنقفل الـ alert بعد التنقل
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
              <img src={profileHeader1} alt="" />
              <h2>General</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'History' ? 'active' : ''}`}
              onClick={() => handleClick('History', '/history')}
            >
              <img src={profileHeader2} alt="" />
              <h2>History</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Account settings' ? 'active' : ''}`}
              onClick={() => handleClick('Account settings', '/settings')}
            >
              <img src={profileHeader3} alt="" />
              <h2>Account settings</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Favorite' ? 'active' : ''}`}
              onClick={() => handleClick('Favorite', '/OrderFavProfile')}
            >
              <img src={profileHeader5} alt="" />
              <h2>Favorite</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileUser;
