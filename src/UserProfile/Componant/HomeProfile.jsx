import React, { useState } from "react";
import "./HomeProfile.css";
import { BellIcon } from "lucide-react";
import user from "../assest/Group 34537.svg";
import EditButton from "./EditButton.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import Sidebar from "./ProfileCompnentSlider.jsx";
import SearchProfile from "./searchProfile.jsx";

const HomeProfile = () => {
  const [isEditingUserInfo, setIsEditingUserInfo] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: "Mohamed",
    lastName: "Ali",
    birthDate: "1996-10-12",
    email: "moali99@gmail.com",
    phone: "20+ 105-749-724",
  });

  const [addresses, setAddresses] = useState([
    { id: 1, country: "Egypt", city: "Assiut, city", postalCode: "ERT 1572" },
    { id: 2, country: "Egypt", city: "Assiut, city", postalCode: "ERT 1572" },
  ]);

  // User Info Handlers
  const handleUserInfoEdit = () => setIsEditingUserInfo(true);
  const handleUserInfoSave = () => {
    setIsEditingUserInfo(false);
    console.log("Saved User Info:", userInfo);
  };
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Addresses Handlers
  const handleAddressesEdit = () => setIsEditingAddresses(true);
  const handleAddressesSave = () => {
    setIsEditingAddresses(false);
    console.log("Saved Addresses:", addresses);
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  return (
    <div className="dashboardProfil">
      <Sidebar />
      <div className="main-content">
        <SearchProfile />

        <div className="hello-section">
          <img src={user} alt="User Avatar" />
          <h3>
            Hello,
            <br className="brhello" />
            <strong>{userInfo.firstName} {userInfo.lastName}</strong>
          </h3>
        </div>

        {/* User Info */}
        <div className="user-info">
          <div className="section-header">
            <h3>User Information</h3>
            {!isEditingUserInfo ? (
              <EditButton text="Edit" onClick={handleUserInfoEdit} />
            ) : (
              <PrimaryButton text="Save" onClick={handleUserInfoSave} />
            )}
          </div>

          <div className="info-grid">
            {/* First Name */}
            <div className="info-item item-first">
              <div className="info-label">First Name:</div>
              {isEditingUserInfo ? (
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleUserInputChange}
                  className="info-value input-edit"
                />
              ) : (
                <div className="info-value">{userInfo.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="info-item item-last">
              <div className="info-label">Last Name:</div>
              {isEditingUserInfo ? (
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleUserInputChange}
                  className="info-value input-edit"
                />
              ) : (
                <div className="info-value">{userInfo.lastName}</div>
              )}
            </div>

            {/* Birth Date */}
            <div className="info-item item-birth">
              <div className="info-label">Birth of date:</div>
              {isEditingUserInfo ? (
                <input
                  type="date"
                  name="birthDate"
                  value={userInfo.birthDate}
                  onChange={handleUserInputChange}
                  className="info-value input-edit"
                />
              ) : (
                <div className="info-value">{userInfo.birthDate}</div>
              )}
            </div>

            {/* Email */}
            <div className="info-item item-email">
              <div className="info-label">Email Address:</div>
              {isEditingUserInfo ? (
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleUserInputChange}
                  className="info-value input-edit"
                />
              ) : (
                <div className="info-value">{userInfo.email}</div>
              )}
            </div>

            {/* Phone */}
            <div className="info-item item-phone">
              <div className="info-label">Phone Number:</div>
              {isEditingUserInfo ? (
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleUserInputChange}
                  className="info-value input-edit"
                />
              ) : (
                <div className="info-value">{userInfo.phone}</div>
              )}
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="user-info2">
          <div className="user-info">
            <div className="section-header">
              <h3>Addresses</h3>
              {!isEditingAddresses ? (
                <EditButton text="Edit" onClick={handleAddressesEdit} />
              ) : (
                <PrimaryButton text="Save" onClick={handleAddressesSave} />
              )}
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
                {addresses.map((address, index) => (
                  <tr key={address.id}>
                    <td>{index + 1}</td>
                    <td>
                      {isEditingAddresses ? (
                        <input
                          type="text"
                          value={address.country}
                          onChange={(e) =>
                            handleAddressChange(index, "country", e.target.value)
                          }
                          className="input-edit"
                        />
                      ) : (
                        address.country
                      )}
                    </td>
                    <td>
                      {isEditingAddresses ? (
                        <input
                          type="text"
                          value={address.city}
                          onChange={(e) =>
                            handleAddressChange(index, "city", e.target.value)
                          }
                          className="input-edit"
                        />
                      ) : (
                        address.city
                      )}
                    </td>
                    <td>
                      {isEditingAddresses ? (
                        <input
                          type="text"
                          value={address.postalCode}
                          onChange={(e) =>
                            handleAddressChange(index, "postalCode", e.target.value)
                          }
                          className="input-edit"
                        />
                      ) : (
                        address.postalCode
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeProfile;
