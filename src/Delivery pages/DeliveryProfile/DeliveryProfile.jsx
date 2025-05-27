import React, { useEffect, useState } from "react";
import imgeprof1 from "./Vector (2).svg";
import imgeprof2 from "./Vector 223.svg";
import "./DeliveryProfile.css";

const DeliveryProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  if (!userInfo) {
    return <div>Loading profile...</div>;
  }

  const fullName = `${userInfo.firstName || ""} ${userInfo.lastName || ""}`.trim();

  const handleChangePassword = async () => {
    setMessage(null);
    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }

    try {
      const response = await fetch(`${localStorage.getItem("baseUrl")}/api/User/ChangePassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          email: userInfo.email,
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error details: ", errorData);
        setMessage(errorData.title || "Failed to change password.");
        return;
      }

      setMessage("Password changed successfully.");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("An error occurred while changing password.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login"; // تعديل لو الصفحة مختلفة
  };

  return (
    <div className="profile-container">
      <div className="head">
        <img
          src={userInfo.imagePath || "default-profile.svg"}
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h2 className="profile-name">{fullName || userInfo.userName || "User"}</h2>
          <p className="profile-phone">{userInfo.phoneNumber || "No phone number"}</p>
        </div>
      </div>

      <div className="linee"></div>

      <div className="statistics-title">
        <h4>Statistics</h4>
        <img
          className="mo"
          src="src/page-index/DileviryPage/DeliveryProfile/Vector 223.svg"
          alt=""
        />
      </div>

      <div className="ccards-container">
        <div className="ccard">
          <h4 className="ccard-title">Monthly revenue</h4>
          <div className="ccard-content">
            <span className="ccard-value">5485.5</span>
            <span className="ccard-icon">$</span>
          </div>
          <button className="butto">Show all</button>
        </div>

        <div className="ccard">
          <h4 className="ccard-title">Complete Orders</h4>
          <div className="ccard-contet">
            <span className="orders-badge">52</span>
          </div>
          <button className="butto">Show all</button>
        </div>

        <div className="ccard">
          <h4 className="ccard-title">Canseled Orders</h4>
          <div className="ccard-contt">
            <span className="orders-badg">3</span>
          </div>
          <button className="butto">Show all</button>
        </div>
      </div>

      <div className="change-password-container">
        <div className="change-password-header">
          <h3>Change Password</h3>
          <span className="arrow-icon"><img src={imgeprof2} alt="" /></span>
        </div>

        <div className="password-fields">
          <div className="profilepassword-input">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <span
              className="profileeye-icon"
              onClick={() => setShowOldPassword(!showOldPassword)}
              style={{ cursor: "pointer" }}
            >
              <img src={imgeprof1} alt="Toggle visibility" />
            </span>
          </div>
          <div className="profilepassword-input">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              className="profileeye-icon"
              onClick={() => setShowNewPassword(!showNewPassword)}
              style={{ cursor: "pointer" }}
            >
              <img src={imgeprof1} alt="Toggle visibility" />
            </span>
          </div>
          <div className="profilepassword-input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="profileeye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: "pointer" }}
            >
              <img src={imgeprof1} alt="Toggle visibility" />
            </span>
          </div>
        </div>

        {message && <p style={{ color: message.includes("successfully") ? "green" : "red" }}>{message}</p>}

        <button className="save-button" onClick={handleChangePassword}>Save</button>
        <hr className="divider" />
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default DeliveryProfile;
