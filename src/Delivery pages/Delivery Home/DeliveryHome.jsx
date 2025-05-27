import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryHome.css";

// DeliveryCard component
const DeliveryCard = ({ name, location, status, imgSrc }) => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/DeliverypageDeteils");
  };

  return (
    <div className="DeliveryHomeCard">
      <div className="DeliveryHomeCardContintCircel">
        <img
          src="src/page-index/Delivery pages/Delivery Home/Ellipse 1919.svg"
          alt=""
        />
      </div>
      <div className="DeliveryHomeCardContint">
        <div className="DeliveryHomeCardContintttttt">
          <img src={imgSrc} alt={name} />
          <div className="DeliveryHomeCardContintText">
            <h2>{name}</h2>
            <p>
              {location} <br /> State: <span>{status}</span>
            </p>
          </div>
        </div>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

const DeliveryHome = () => {
  const [fullName, setFullName] = useState("Loading...");
  const [profileImage, setProfileImage] = useState(null);
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [readyOrders, setReadyOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = localStorage.getItem("token");
    const baseUrl = localStorage.getItem("baseUrl");

    if (userInfo) {
      const fullName = `${userInfo.firstName || ""} ${userInfo.lastName || ""}`.trim();
      setFullName(fullName);

      if (userInfo.imagePath) {
        setProfileImage(userInfo.imagePath);
      }
    }

    if (userInfo && token && baseUrl) {
      const id = userInfo.id;

      fetch(`${baseUrl}/api/Delivery/Details/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setDeliveryDetails(data);
        })
        .catch((err) => {
          console.error("Failed to fetch delivery details:", err);
        });

      fetch(`${baseUrl}/api/Order/GetReadyDeliveryOrders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReadyOrders(data);
        })
        .catch((err) => {
          console.error("Failed to fetch ready orders:", err);
        });
    }
  }, []);

  const handleProfileClick = () => {
    navigate("/DeliveryProfile");
  };

  return (
    <div className="DeliveryHome">
      <div
        className="DeliveryHomeHeader"
        onClick={handleProfileClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src={profileImage || "src/Delivery pages/Delivery Home/Rectangle 1191.png"}
          alt="Profile"
        />
        <h2>{fullName}</h2>
      </div>

      <div className="DeliveryHomeCards">
        {readyOrders.map((order, index) => (
          <DeliveryCard
            key={index}
            name={order.customerName || "Unknown"}
            location={order.address || "Unknown address"}
            status="Ready to deliver"
            imgSrc={order.imagePath || "src/Delivery pages/Delivery Home/Rectangle 1191 (1).svg"}
          />
        ))}
      </div>

      <div className="DeliveryHomeCardTakawey">
        <div className="DeliveryHomeCardTakaweytext">
          <h2>On The way</h2>
        </div>
        <div className="DeliveryHomeCards2">
          {/* You can dynamically load these from API as well later */}
        </div>
      </div>

      <div className="DeliveryHomeCardDone">
        <div className="DeliveryHomeCardTakaweytext">
          <h2>Done</h2>
        </div>
        <div className="DeliveryHomeCards3">
          {/* You can dynamically load these from API as well later */}
        </div>
      </div>
    </div>
  );
};

export default DeliveryHome;
