import React, { useState, useEffect } from "react";
import "./HomeProfile.css";
import { BellIcon } from "lucide-react";
import defaultUser from "../assest/Group 34537.svg";
import EditButton from "./EditButton.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import Sidebar from "./ProfileCompnentSlider.jsx";
import SearchProfile from "./searchProfile.jsx";
import axios from "axios";

const HomeProfile = () => {
  const [isEditingUserInfo, setIsEditingUserInfo] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phone: "",
    token: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [userImage, setUserImage] = useState(defaultUser);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    const storedAddresses = JSON.parse(localStorage.getItem("addresses"));
    const storedUserImage = localStorage.getItem("profileImagePath");

    if (storedUserInfo) setUserInfo(storedUserInfo);
    if (storedAddresses) setAddresses(storedAddresses);
    if (storedUserImage) setUserImage(storedUserImage);
  }, []);

  const handleUserInfoEdit = () => setIsEditingUserInfo(true);

  const handleUserInfoSave = async () => {
    setIsEditingUserInfo(false);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("email", userInfo.email);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      // تحديث بيانات المستخدم - رابط نسبي
      await axios.put(
        `/api/User/UpdateUser/${userInfo.id}`,
        {
          email: userInfo.email,
          birthDate: userInfo.birthDate,
          lastName: userInfo.lastName,
          firstName: userInfo.firstName,
          phone: userInfo.phone,
        },
        config
      );

      console.log("User info updated successfully.");

      // تحديث رقم الهاتف باستخدام PUT (نص فقط) - رابط نسبي
      await axios.put(
        `/api/User/AddPhoneNumber/${userInfo.id}`,
        userInfo.phone,
        config
      );

      console.log("Phone number updated successfully.");
    } catch (error) {
      console.error("Failed to update user info or phone number:", error);
    }
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ********* عناوين ************

  const handleAddressesEditToggle = () => {
    if (!isEditingAddresses) {
      // لو هبدأ التعديل، وفارغ الـ addresses، حط القيم الافتراضية عشان تعدل عليها
      if (!addresses || addresses.length === 0) {
        setAddresses([
          { country: "Egypt", city: "Assiut, city", postalCode: "ERT 1572" },
          { country: "Egypt", city: "Assiut, city", postalCode: "ERT 1572" },
        ]);
      }
    } else {
      // لما تضغط Save - خزّن البيانات وعدل الـ API
      handleAddressesSave();
    }

    setIsEditingAddresses(!isEditingAddresses);
  };

  // حفظ العناوين وتحديثها عبر API
  const handleAddressesSave = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      // إرسال كل عنوان لوحده - رابط نسبي
      for (const address of addresses) {
        await axios.post(
          `/api/User/AddAddress/${userInfo.id}`,
          address,
          config
        );
      }

      localStorage.setItem("addresses", JSON.stringify(addresses));
      console.log("Addresses updated successfully.");
    } catch (error) {
      console.error("Failed to update addresses:", error);
    }
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
          <img className="UserAvatar" src={userImage} alt="User Avatar" />
          <h3>
            Hello,
            <br className="brhello" />
            <strong>
              {userInfo.firstName} {userInfo.lastName}
            </strong>
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

            <div className="info-item item-birth">
              <div className="info-label">Birth Date:</div>
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
              <PrimaryButton
                text={isEditingAddresses ? "Save" : "Add"}
                onClick={handleAddressesEditToggle}
              />
            </div>

            <table className="address-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Postal Code</th>
                </tr>
              </thead>
              <tbody>
                {(addresses && addresses.length > 0) || isEditingAddresses ? (
                  (addresses.length > 0
                    ? addresses
                    : [
                        {
                          country: "Egypt",
                          city: "Assiut, city",
                          postalCode: "ERT 1572",
                        },
                        {
                          country: "Egypt",
                          city: "Assiut, city",
                          postalCode: "ERT 1572",
                        },
                      ]
                  ).map((address, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        {isEditingAddresses ? (
                          <input
                            type="text"
                            value={address.country || ""}
                            onChange={(e) =>
                              handleAddressChange(idx, "country", e.target.value)
                            }
                            className="input-edit"
                          />
                        ) : (
                          address.country || "N/A"
                        )}
                      </td>
                      <td>
                        {isEditingAddresses ? (
                          <input
                            type="text"
                            value={address.city || ""}
                            onChange={(e) =>
                              handleAddressChange(idx, "city", e.target.value)
                            }
                            className="input-edit"
                          />
                        ) : (
                          address.city || "N/A"
                        )}
                      </td>
                      <td>
                        {isEditingAddresses ? (
                          <input
                            type="text"
                            value={address.postalCode || ""}
                            onChange={(e) =>
                              handleAddressChange(idx, "postalCode", e.target.value)
                            }
                            className="input-edit"
                          />
                        ) : (
                          address.postalCode || "N/A"
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
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
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
