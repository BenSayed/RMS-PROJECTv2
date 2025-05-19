// HomeProfile.jsx
import React, { useState, useEffect } from "react";
import "./HomeProfile.css";
import defaultUser from "../assest/Group 34537.svg";
import PrimaryButton from "./PrimaryButton.jsx";
import Sidebar from "./ProfileCompnentSlider.jsx";
import SearchProfile from "./searchProfile.jsx";
import axios from "axios";

const baseUrl = "http://flavorhaven.runasp.net";
axios.defaults.baseURL = baseUrl;

const HomeProfile = () => {
  const [isEditingUserInfo, setIsEditingUserInfo] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    token: "",
    imagePath: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [userImage, setUserImage] = useState(defaultUser);

  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (!stored) return;
    const storedUserInfo = JSON.parse(stored);
    setUserInfo(storedUserInfo);

    if (storedUserInfo.imagePath) {
      if (
        storedUserInfo.imagePath.startsWith("http://") ||
        storedUserInfo.imagePath.startsWith("https://")
      ) {
        setUserImage(storedUserInfo.imagePath);
      } else {
        setUserImage(`${baseUrl}/${storedUserInfo.imagePath}`);
      }
    }

    const fetchAddresses = async () => {
      try {
        const resp = await axios.get(
          `/api/User/GetUserAddresses/${storedUserInfo.id}`,
          {
            headers: {
              Authorization: `Bearer ${storedUserInfo.token}`,
            },
          }
        );
        setAddresses(resp.data);
        localStorage.setItem("addresses", JSON.stringify(resp.data)); // تحديث localStorage بعد جلب العناوين
      } catch (err) {
        console.error("❌ Error fetching addresses:", err);
        const cached = localStorage.getItem("addresses");
        if (cached) {
          setAddresses(JSON.parse(cached));
        }
      }
    };
    fetchAddresses();
  }, []);

  // كل مرة العناوين تتغير يحدث تخزين جديد في localStorage
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // تحرير معلومات المستخدم
  const handleUserInfoEdit = () => setIsEditingUserInfo(true);

  // حفظ معلومات المستخدم
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

      await axios.put(
        `/api/User/UpdateUser/${userInfo.id}`,
        {
          email: userInfo.email,
          birthDate: userInfo.birthDate,
          lastName: userInfo.lastName,
          firstName: userInfo.firstName,
          phone: userInfo.phoneNumber,
        },
        config
      );

      await axios.put(
        `/api/User/AddPhoneNumber/${userInfo.id}`,
        userInfo.phoneNumber,
        config
      );

      console.log("✅ User info and phone updated.");
    } catch (error) {
      console.error("❌ Failed to update user info or phone number:", error);
    }
  };

  // تعديل حقل في بيانات المستخدم
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // تفعيل وضع تحرير العناوين
  const handleAddressesEditToggle = () => {
    setIsEditingAddresses(true);
  };

  // إضافة عنوان جديد فارغ
  const handleAddAddress = () => {
    setAddresses((prev) => [...prev, { country: "", city: "", postalCode: "" }]);
  };

  // حذف عنوان معين
  const handleDeleteAddress = async (idx) => {
    const toDel = addresses[idx];
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    try {
      if (toDel.id) {
        await axios.delete(`/api/User/DeleteAddress/${toDel.id}`, config);
      }
      const newAddresses = addresses.filter((_, i) => i !== idx);
      setAddresses(newAddresses);
      localStorage.setItem("addresses", JSON.stringify(newAddresses)); // تحديث localStorage بعد الحذف
      console.log("✅ Address deleted.");
    } catch (error) {
      console.error("❌ Failed to delete address:", error);
    }
  };

  // تعديل بيانات عنوان معيّن
  const handleAddressChange = (idx, field, val) => {
    const newAddresses = addresses.map((a, i) => (i === idx ? { ...a, [field]: val } : a));
    setAddresses(newAddresses);
    localStorage.setItem("addresses", JSON.stringify(newAddresses)); // تحديث localStorage بعد التعديل
  };

  // حفظ العناوين (حذف القديم وإضافة الجديد)
  const handleAddressesSave = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      // حذف العناوين القديمة المخزنة في السيرفر
      for (const addr of addresses) {
        if (addr.id) {
          await axios.delete(`/api/User/DeleteAddress/${addr.id}`, config);
        }
      }

      // التأكد من تعبئة كل الحقول
      for (const addr of addresses) {
        if (!addr.country || !addr.city || !addr.postalCode) {
          alert("Please fill out all address fields.");
          return;
        }
      }

      // إضافة كل العناوين الجديدة
      for (const addr of addresses) {
        await axios.post(`/api/User/AddAddress/${userInfo.id}`, addr, config);
      }

      console.log("✅ Addresses saved.");
      setIsEditingAddresses(false);
      localStorage.setItem("addresses", JSON.stringify(addresses)); // تحديث localStorage عند الحفظ النهائي
    } catch (error) {
      console.error("❌ Failed to save addresses:", error);
    }
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
              <PrimaryButton text="Edit" onClick={handleUserInfoEdit} />
            ) : (
              <PrimaryButton text="Save" onClick={handleUserInfoSave} />
            )}
          </div>
          <div className="info-grid">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Birth Date", name: "birthDate", type: "date" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phoneNumber", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className={`info-item item-${name}`}>
                <div className="info-label">{label}:</div>
                {isEditingUserInfo ? (
                  <input
                    type={type}
                    name={name}
                    value={userInfo[name] || ""}
                    onChange={handleUserInputChange}
                    className="info-value input-edit"
                  />
                ) : (
                  <div className="info-value">{userInfo[name]}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Addresses */}
        <div className="user-info2">
          <div className="user-info">
            <div className="section-header">
              <h3>Addresses</h3>
              {isEditingAddresses ? (
                <>
                  <PrimaryButton text="Add" onClick={handleAddAddress} />
                  <PrimaryButton text="Save" onClick={handleAddressesSave} />
                </>
              ) : (
                <PrimaryButton text="Add" onClick={handleAddressesEditToggle} />
              )}
            </div>
            <table className="address-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Country</th>
                  <th>City</th>
                   {isEditingAddresses && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {addresses.length ? (
                  addresses.map((addr, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      {["country", "city", "postalCode"].map((f) => (
                        <td key={f}>
                          {isEditingAddresses ? (
                            <input
                              type="text"
                              value={addr[f] || ""}
                              onChange={(e) =>
                                handleAddressChange(i, f, e.target.value)
                              }
                              className="input-edit"
                            />
                          ) : (
                            addr[f]
                          )}
                        </td>
                      ))}
                      {isEditingAddresses && (
                        <td>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteAddress(i)}
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={isEditingAddresses ? 5 : 4}>
                      No addresses available
                    </td>
                  </tr>
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
