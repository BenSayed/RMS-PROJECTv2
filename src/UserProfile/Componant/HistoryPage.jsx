import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assest/Logo 1.svg';
import Vector from '../assest/Vector.svg';
import fa6SolidUser from '../assest/fa6-solid_user.svg';
import flowbiteEditOutline from '../assest/material-symbols_history-rounded.svg';
import materialSymbolsSettingsRounded from '../assest/material-symbols_settings-rounded.svg';
import solarHeartBold from '../assest/solar_heart-bold.svg';
import solarStarBold from '../assest/material-symbols_star-rate-rounded.svg';
import '../Componant/History.css';
import Rectangle from'../assest/Rectangle 1153.svg';
import dineInIcon from '../assest/Frame 38319.svg';
import deliveryIcon from '../assest/Frame 38319.svg';
const orders = [
  {
    id: 1,
    image: Rectangle,
    icon: dineInIcon,
    type: "Dine-in",
    title: "Wagyu Steak",
    desc: "Wagye Steak & Ice coffee & Cup cake",
    date: "9:15 AM, February 1, 2025",
    total: "68$",
  },
  {
    id: 2,
    image: Rectangle,
    icon: deliveryIcon,
    type: "Delivery",
    title: "Wagyu Steak",
    desc: "Wagye Steak & Ice coffee & Cup cake",
    date: "9:15 AM, February 1, 2025",
    total: "68$",
  },
  {
    id: 3,
    image: Rectangle,
    icon: dineInIcon,
    type: "Dine-in",
    title: "Wagyu Steak",
    desc: "Wagye Steak & Ice coffee & Cup cake",
    date: "9:15 AM, February 1, 2025",
    total: "68$",
  },
  {
    id: 4,
    image: Rectangle,
    icon: deliveryIcon,
    type: "Delivery",
    title: "Wagyu Steak",
    desc: "Wagye Steak & Ice coffee & Cup cake",
    date: "9:15 AM, February 1, 2025",
    total: "68$",
  },
];

function HistoryPage() {
  return (
    <div className="page-container flex">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Flavor Haven Logo" width="48" height="48" />
          <h2 className="logo-text">Flavor Haven</h2>
        </div>

        <div className="nav-links">
          <Link to="/general" className="nav-item">
            <img src={fa6SolidUser} width="24" height="24" alt="User Icon" />
            <span>General</span>
          </Link>
          <Link to="/history" className="nav-item active">
            <img src={flowbiteEditOutline} width="24" height="24" alt="History Icon" />
            <span>History</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <img src={materialSymbolsSettingsRounded} width="24" height="24" alt="Settings Icon" />
            <span>Account settings</span>
          </Link>
          <Link to="/rating" className="nav-item">
            <img src={solarStarBold} width="24" height="24" alt="Rating Icon" />
            <span>Rating</span>
          </Link>
          <Link to="/favorite" className="nav-item">
            <img src={solarHeartBold} width="24" height="24" alt="Favorite Icon" />
            <span>Favorite</span>
          </Link>
        </div>
        <div className="logout">
          <img src={Vector} width="24" height="24" alt="Logout Icon" />
          <span>Logout</span>
        </div>
      </div>
      <div className="main-content">
      <div className="search-bar">
          <input className="search-input" placeholder="Search..." />
          <div className="search-icon">🔔</div>
        </div>
       
<section>    
  <h2 className="text-2xl font-bold mb-4 border-b border-orange-300 pb-2">
          My Orders
        </h2>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex bg-white rounded-3xl overflow-hidden shadow-md">
              <div className="w-32 h-24">
                <img
                  src={order.image}
                  alt="steak"
                  className="object-cover w-full h-full rounded-l-3xl"
                />
              </div>
              <div className="flex flex-1 items-center justify-between p-4">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <img src={order.icon} alt="icon" width={20} height={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Order date: <span className="text-orange-500">{order.date}</span>
                    </p>
                    <h3 className="text-lg font-semibold mt-1">{order.title}</h3>
                    <p className="text-sm text-gray-500">{order.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-lg font-semibold">Total: {order.total}</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
                    Order Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section> 
        </div>
          </div>
    
  );
}

export default HistoryPage;
