import React, { useEffect, useState } from "react";
import "./HistoryProfile.css";
import Sidebar from "./ProfileCompnentSlider.jsx";
import SearchProfile from "./searchProfile.jsx";
import imgcardes from "./Rectangle (1).svg";
import imgcardes2 from "./Rec(1).svg";

import imgtable from "./material-symbols_table-bar.svg";
import imgtask from "./Group.svg";
import imgdlivry from "./ic_baseline-delivery-dining.svg";

// ✅ مكون الكارد الواحد
const OrderCard = ({ type, orderDate, total, title, description }) => {
  const iconSrc = type === "table" ? imgtable : imgdlivry;

  const [imageSrc, setImageSrc] = useState(window.innerWidth <= 425 ? imgcardes2 : imgcardes);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth <= 425 ? imgcardes2 : imgcardes);
    };

    window.addEventListener("resize", handleResize);

    // تنظيف الـ event عند إلغاء المكون
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="HistoryProfileContintCardAlliteam">
      <div className="HistoryProfileContintCardAlliteamImg">
        <img src={imageSrc} alt="Order" />
      </div>
      <div className="HistoryProfileContintCardAlliteamContint">
        <div className="HistoryProfileContintCardAlliteamContintData">
          <img src={iconSrc} alt="Type Icon" />
          <h2>
            Order date: <span>{orderDate}</span>
          </h2>
          <h3>
            Total: <span>{total}</span>
          </h3>
        </div>
        <div className="HistoryProfileContintCardAlliteamContintData2">
          <div className="ContintCardAlliteamContintData2">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="ContintCardAlliteamContintData2line"> </div>
          <div className="ContintCardAlliteamContintData2button">
            <button>
              Order Details <img src={imgtask} alt="Task Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ مكون الصفحة الرئيسية
const HistoryProfile = () => {
  return (
    <div className="HistoryProfile">
      <Sidebar />
      <div className="HistoryProfileContint">
        <div className="HistoryProfileContintserch">
          <SearchProfile />
        </div>

        <div className="HistoryProfileContintCard">
          <div className="OrderFavProfileeFAVContintHeder">
            <h2>My Orders</h2>
            <div className="OrderFavProfileeFAVContintHederline"> </div>
          </div>

          <div className="HistoryProfileContintCardAll">
            <OrderCard
              type="table"
              orderDate="9:15 AM, February 1, 2025"
              total="68$"
              title="Wagyu Steak"
              description="Wagyu Steak & Ice coffee & Cup cake"
            />
                <OrderCard
              type="delivery"
              orderDate="9:15 AM, February 1, 2025"
              total="68$"
              title="Wagyu Steak"
              description="Wagyu Steak & Ice coffee & Cup cake"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryProfile;
