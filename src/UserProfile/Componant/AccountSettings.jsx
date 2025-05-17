import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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

  const [profileImage, setProfileImage] = useState(pimgprofilesiting);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImagePath");
    if (savedImage) {
      setProfileImage(savedImage);
    } else if (userInfo?.imagePath) {
      setProfileImage(userInfo.imagePath);
    }
  }, [userInfo]);

  const toggleNotification = () => setNotificationsEnabled((prev) => !prev);
  const toggleOrders = () => setOrdersEnabled((prev) => !prev);
  const toggleOffers = () => setOffersEnabled((prev) => !prev);
  const toggleNews = () => setNewsEnabled((prev) => !prev);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleEditPicture = () => {
    fileInputRef.current.click();
  };

  const updateImageOnly = async (newImagePath) => {
    if (!userInfo || !userInfo.id) {
      console.error("❌ userInfo أو id مش موجودين في localStorage");
      return;
    }

    try {
      await axios.put(
        `/api/User/UpdateUserImage/${userInfo.id}`,
        { imagePath: newImagePath },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updatedUser = { ...userInfo, imagePath: newImagePath };
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("❌ خطأ أثناء تحديث صورة المستخدم:", error);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/Upload/UploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const { filePath } = response.data;
      if (filePath) {
        localStorage.setItem("profileImagePath", filePath);
        setProfileImage(filePath);
        await updateImageOnly(filePath);

        // إعادة تحميل الصفحة تلقائيًا بعد رفع الصورة
        window.location.reload();
      } else {
        alert("⚠️ لم يتم الحصول على رابط الصورة من الخادم.");
      }
    } catch (error) {
      console.error("❌ خطأ أثناء رفع الصورة:", error);
      alert(
        "حدث خطأ أثناء رفع الصورة. حاول مرة أخرى.\n" +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleDeletePicture = () => {
    setProfileImage(pimgprofilesiting);
    localStorage.removeItem("profileImagePath");
    updateImageOnly("");
  };

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("❌ من فضلك املأ جميع الحقول.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("❌ تأكيد كلمة المرور غير متطابق.");
      return;
    }

    try {
      await axios.post(
        "/api/User/ChangePassword",
        {
          email: userInfo?.email,
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("✅ تم تغيير كلمة المرور بنجاح.");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("❌ خطأ أثناء تغيير كلمة المرور:", error);
      alert(
        "حدث خطأ أثناء تغيير كلمة المرور. حاول مرة أخرى.\n" +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
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
            <button className="AccountSettingsbutton1" onClick={handleEditPicture}>
              Edit Profile Picture <img src={imgedit} alt="" />
            </button>
            <button className="AccountSettingsbutton2" onClick={handleDeletePicture}>
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
                <img className="AccountSettingspassinptueyye" src={imgeyye} alt="" />
                <img className="AccountSettingspassinptueyye2" src={imgeyye} alt="" />
                <img className="AccountSettingspassinptueyye3" src={imgeyye} alt="" />
              </div>
              <div className="AccountSettingsContintCardinputs">
                <input
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleChangePassword();
                    }
                  }}
                />
              </div>
              <button onClick={handleBackToHome}>Back to Home</button>
            </div>
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
  );
};

export default AccountSettings;
