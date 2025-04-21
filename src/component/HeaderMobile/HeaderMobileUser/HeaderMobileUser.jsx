import React, { useState } from "react";
import "./HeaderMobileUser.css";
import { useNavigate } from 'react-router-dom'; // استيراد هوك التنقل

const HeaderMobileUser = () => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate(); // تهيئة هوك التنقل

  const handleClick = (tabName, path) => {
    setActiveTab(tabName);
    if (path) {
      navigate(path); // الانتقال إلى مسار محدد
    }
  };

  const handleGroupClick = (url) => {
   };

  return (
    <div className="HeaderMobileUseraber">
      <div className="HeaderMobileUser    " onClick={() => handleGroupClick('https://example.com/group-link')}> {/* مثال لرابط المجموعة */}
        <div className="HeaderMobileUserContint">
          <div className="HeaderMobileUserContintData">
            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'General' ? 'active' : ''}`}
              onClick={() => handleClick('General', '/general')} // مثال لمسار صفحة General
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (3).svg" alt="" />
              <h2>General</h2>
            </div>
            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'History' ? 'active' : ''}`}
              onClick={() => handleClick('History', '/history')} // مثال لمسار صفحة History
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (4).svg" alt="" />
              <h2>History</h2>
            </div>
            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Account settings' ? 'active' : ''}`}
              onClick={() => handleClick('Account settings', '/settings')} // مثال لمسار صفحة Account settings
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/material-symbols_settings-rounded.svg" alt="" />
              <h2>Account settings</h2>
            </div>
            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Rating' ? 'active' : ''}`}
              onClick={() => handleClick('Rating', '/rating')} // مثال لمسار صفحة Rating
            >
              <img src="src/component/HeaderMobile/HeaderMobileUser/Vector (5).svg" alt="" />
              <h2>Rating</h2>
            </div>
            <div
              className={`HeaderMobileUserContintDataGE ${activeTab === 'Favorite' ? 'active' : ''}`}
              onClick={() => handleClick('Favorite', '/favorite')} // مثال لمسار صفحة Favorite
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