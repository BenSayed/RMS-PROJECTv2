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
    }
  }, []);

  // If you want to use deliveryDetails to show actual cards, you can replace below dummy data with that

  const cardData = [
    {
      name: "Mohamed Ali",
      location: "Assiut, City, street 24",
      status: "Ready to deliver",
      imgSrc: "src/Delivery pages/Delivery Home/Rectangle 1191 (1).svg",
    },
    {
      name: "Mohamed Ali",
      location: "Assiut, City, street 24",
      status: "Ready to deliver",
      imgSrc: "src/Delivery pages/Delivery Home/Rectangle 1191 (1).svg",
    },
    {
      name: "Mohamed Ali",
      location: "Assiut, City, street 24",
      status: "Ready to deliver",
      imgSrc: "src/Delivery pages/Delivery Home/Rectangle 1191 (1).svg",
    },
  ];

  const takaweyData = [
    {
      name: "Mohamed Ali",
      location: "Assiut, City, street 24",
      status: "On the way",
      imgSrc: "src/Delivery pages/Delivery Home/Rectangle 1191 (2).svg",
    },
  ];

  const doneData = [
    {
      name: "Ali Ali",
      location: "Assiut, City, street 24",
      status: "Done",
      imgSrc: "src/Delivery pages/Delivery Home/Rectangle 1191 (1).svg",
    },
  ];

  return (
    <div className="DeliveryHome">
      <div className="DeliveryHomeHeader">
        <img
          src={profileImage || "src/Delivery pages/Delivery Home/Rectangle 1191.png"}
          alt="Profile"
        />
        <h2>{fullName}</h2>
      </div>

      <div className="DeliveryHomeCards">
        {cardData.map((card, index) => (
          <DeliveryCard key={index} {...card} />
        ))}
      </div>

      <div className="DeliveryHomeCardTakawey">
        <div className="DeliveryHomeCardTakaweytext">
          <h2>On The way</h2>
        </div>
        <div className="DeliveryHomeCards2">
          {takaweyData.map((card, index) => (
            <div className="DeliveryHomeCardTakaweyCard" key={index}>
              <img src={card.imgSrc} alt={card.name} />
              <div className="DeliveryHomeCardTakaweyCardContenttext">
                <h2>{card.name}</h2>
                <p>
                  {card.location} <br />
                  State: <span>{card.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="DeliveryHomeCardDone">
        <div className="DeliveryHomeCardTakaweytext">
          <h2>Done</h2>
        </div>
        <div className="DeliveryHomeCards3">
          {doneData.map((card, index) => (
            <div className="DeliveryHomeCardDoneCard" key={index}>
              <img src={card.imgSrc} alt={card.name} />
              <div className="DeliveryHomeCardDoneCardContenttext">
                <h2>{card.name}</h2>
                <p>
                  {card.location} <br />
                  State: <span>{card.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryHome;
