import React, { useState, useEffect } from "react";
import "./HeaderMobileUser.css";
import { useNavigate, useLocation } from 'react-router-dom';
import profileHeader1 from './Vector (3).svg' ;
import profileHeader2 from './Vector (4).svg';
import profileHeader3 from './material-symbols_settings-rounded.svg' ;
import profileHeader4 from './Vector (5).svg' ;
import profileHeader5 from './solar_heart-bold.svg' ;


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
              <img src={profileHeader1} alt="" />
              <h2>General</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'History' ? 'active' : ''}`}
              onClick={() => handleClick('History', '/history')}
            >
              <img src={profileHeader2}alt="" />
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
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Rating' ? 'active' : ''}`}
              onClick={() => handleClick('Rating', '/rating')}
            >
              <img src={profileHeader4} alt="" />
              <h2>Rating</h2>
            </div>

            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Favorite' ? 'active' : ''}`}
              onClick={() => handleClick('Favorite', '/favorite')}
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
