import React, { useState, useRef } from "react";
import Sidebar from "./ProfileCompnentSlider.jsx";
import SearchProfile from "./searchProfile.jsx";
import imgedit from "./Vecto).svg";
import imgeyye from "./Vector2.svg";
import pimgprofilesiting from "./Ellipse 1928.svg";
import { useNavigate } from "react-router-dom";
import "./AccountSettings.css";

const AccountSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [ordersEnabled, setOrdersEnabled] = useState(false);
  const [offersEnabled, setOffersEnabled] = useState(false);
  const [newsEnabled, setNewsEnabled] = useState(false);

  const [profileImage, setProfileImage] = useState(pimgprofilesiting); // صورة البروفايل
  const fileInputRef = useRef(null); // ريفرنس للفايل انبوت

  const navigate = useNavigate();

  const toggleNotification = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleOrders = () => {
    setOrdersEnabled((prev) => !prev);
  };

  const toggleOffers = () => {
    setOffersEnabled((prev) => !prev);
  };

  const toggleNews = () => {
    setNewsEnabled((prev) => !prev);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleEditPicture = () => {
    fileInputRef.current.click(); // يفتحلك اختيار فايل
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // يعرضلك الصورة المختارة
    }
  };

  const handleDeletePicture = () => {
    setProfileImage(pimgprofilesiting); // يرجع الصورة الأصلية (أو تخليها صورة فاضية لو حبيت)
  };

  return (
    <div>
      <div className="AccountSettings">
        <Sidebar />
        <div className="AccountSettingsContint">
          <div className="HistoryProfileContintserch">
            <SearchProfile />
          </div>

          <div className="AccountSettingsContintCard">
            <h2>Profile Picture</h2>
            <div className="AccountSettingsContintCardline"></div>

            <div className="AccountSettingsContintCardgroup2">
              <img
                className="AccountSettingsContintCardgroup2imaa"
                src={profileImage}
                alt="Profile"
              />
              <button
                className="AccountSettingsbutton1"
                onClick={handleEditPicture}
              >
                Edit Profile Picture <img src={imgedit} alt="" />
              </button>
              <button
                className="AccountSettingsbutton2"
                onClick={handleDeletePicture}
              >
                Delete Picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="AccountSettingsContintCard2">
            <div className="AccountSettingsContintCard2Data1">
              <div className="AccountSettingsContintCard2Data1hero">
                <h2>Change Password</h2>
                <div className="AccountSettingsContintCardline"></div>
                <div className="AccountSettingsContintCardinputseyys">
                  <img
                    className="AccountSettingspassinptueyye"
                    src={imgeyye}
                    alt=""
                  />
                  <img
                    className="AccountSettingspassinptueyye2"
                    src={imgeyye}
                    alt=""
                  />
                  <img
                    className="AccountSettingspassinptueyye3"
                    src={imgeyye}
                    alt=""
                  />
                </div>

                <div className="AccountSettingsContintCardinputs">
                  <input type="password" placeholder="Old Password" />
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Confirm Password" />
                </div>

                <button onClick={handleBackToHome}>Back to Home</button>
              </div>
              <div></div>
            </div>

            <div className="AccountSettingsContintCard2Data2">
              <div className="AccountSettingsContintCard2Data2Hero">
                <h2>Notification</h2>
                <div className="AccountSettingsContintCardline"></div>
                <div className="AccountSettingsContintCardtitrlswitch">
                  <div className="AccountSettingsContintCardSwitchtitel">
                    <h2>Notification</h2>
                    <h2>Orders</h2>
                    <h2>Offers</h2>
                    <h2>News</h2>
                  </div>

                  <div className="AccountSettingsContintCardSwitch">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={toggleNotification}
                      />
                      <span className="slider round"></span>
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={ordersEnabled}
                        onChange={toggleOrders}
                      />
                      <span className="slider round"></span>
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={offersEnabled}
                        onChange={toggleOffers}
                      />
                      <span className="slider round"></span>
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={newsEnabled}
                        onChange={toggleNews}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
