import React from "react";
import "./HomeProfile.css";
import { BellIcon } from "lucide-react";
import user from "../assest/Group 34537.svg";
import EditButton from "./EditButton.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import Sidebar from "./ProfileCompnentSlider.jsx"; // ✅ استدعاء المكون الجديد
import SearchProfile from "./searchProfile.jsx";

const HomeProfile = () => {
  return (
    <div className="dashboardProfil">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
      <SearchProfile/>
        <div className="hello-section">
          <img src={user} alt="User Avatar" />
          <h3>
            Hello,
            <br className="brhello" /> <strong>Mohamed Ali</strong>
          </h3>
        </div>

        {/* User Info */}
        <div className="user-info">
          <div className="section-header">
            <h3>User information</h3>
            <EditButton
              text="Edit"
              onClick={() => console.log("Edit clicked")}
            />
          </div>
          <div className="info-grid">
            <div className="info-item item-first">
              <div className="info-label">First Name:</div>
              <div className="info-value">Mohamed</div>
            </div>
            <div className="info-item item-last">
              <div className="info-label">Last Name:</div>
              <div className="info-value">Ali</div>
            </div>
            <div className="info-item item-birth">
              <div className="info-label">Birth of date:</div>
              <div className="info-value">12/10/1996</div>
            </div>
            <div className="info-item item-email">
              <div className="info-label">Email Address:</div>
              <div className="info-value">moali99@gmail.com</div>
            </div>
            <div className="info-item item-phone">
              <div className="info-label">Phone Number:</div>
              <div className="info-value">20+ 105-749-724</div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="user-info2">
          <div className="user-info">
            <div className="section-header">
              <h3>Addresses</h3>
              <PrimaryButton
                text="Add"
                onClick={() => console.log("Add clicked")}
              />
            </div>
            <table className="address-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Postal Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Egypt</td>
                  <td>Assiut, city</td>
                  <td>ERT 1572</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Egypt</td>
                  <td>Assiut, city</td>
                  <td>ERT 1572</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
