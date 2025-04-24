import React from "react";
import "./OrderFavProfile.css";
import logo from "../assest/Logo 1.svg";
import user from "../assest/Group 34537.svg";
import cardimg from "./Rectangle 1153.svg";
import cardimgsoild from "./Vector (6).svg";
import SearchProfile from "./searchProfile.jsx";

import Vector from "../assest/Vector.svg";
import fa6SolidUser from "../assest/fa6-solid_user.svg";
import flowbiteEditOutline from "../assest/material-symbols_history-rounded.svg";
import materialSymbolsSettingsRounded from "../assest/material-symbols_settings-rounded.svg";
import solarHeartBold from "../assest/solar_heart-bold.svg";
import solarStarBold from "../assest/material-symbols_star-rate-rounded.svg";
import { Link } from "react-router-dom";
import { BellIcon } from "lucide-react";
import Sidebar from "./ProfileCompnentSlider.jsx"; // ✅ استدعاء المكون الجديد


// مكون الكارد
const FavCard = ({ image, title, description, price, category }) => {
  return (
    <div className="itemcard" data-category={category}>
      <div className="itemcardimg">
        <img src={image} alt={title} />
      </div>
      <div className="itemcardtextcont">
        <div className="itemcardtextconttitel">
          <h2>{title}</h2>
          <img src={cardimgsoild} alt="" />
        </div>
        <div className="itemcardtextdiscrib">
          <h2>{description}</h2>
        </div>
        <div className="itemcardtextprise">
          <h3>★ ★ ★ ★ ★</h3>
          <h2>{price}$</h2>
        </div>
      </div>
    </div>
  );
};

const OrderFavProfile = () => {
  // بيانات الكروت
  const favOrders = [
    {
      id: 1,
      image: cardimg,
      title: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 64,
      category: "Steak",
    },
    {
      id: 2,
      image: cardimg,
      title: "Ahmed Cake",
      description: "Rich dark chocolate with a creamy frosting",
      price: 12,
      category: "Dessert",
    },
    {
      id: 3,
      image: cardimg,
      title: "Grid Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce",
      price: 40,
      category: "Seafood",
    },
    {
      id: 4,
      image: cardimg,
      title: "Griln ",
      description: "Fresh Atlantic salmon with lemon butter sauce",
      price: 40,
      category: "Seafood",
    },
  ];

  return (
    <div className="OrderFavProfile">
       <Sidebar />

       

      <div className="OrderFavProfileeFAV">
      <SearchProfile/>

        <div className="OrderFavProfileeFAVContint">
          <div className="OrderFavProfileeFAVContintHeder">
            <h2> My Favorite Orders</h2>
            <div className="OrderFavProfileeFAVContintHederline"></div>
          </div>

          <div className="OrderFavProfileeFAVContintcard">
            {favOrders.map((order) => (
              <FavCard
                key={order.id}
                image={order.image}
                title={order.title}
                description={order.description}
                price={order.price}
                category={order.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFavProfile;
