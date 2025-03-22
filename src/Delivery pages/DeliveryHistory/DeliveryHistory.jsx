import React, { useState } from "react";
import "./DeliveryHistory.css";

const DeliveryHistory = () => {
  // بيانات الكروت
  const deliveryData = [
    {
      state: "Ontheway",
      imgSrc: "src/Delivery pages/DeliveryHistory/Rectangle 1191 (5).svg",
      name: "Mohamed Ahmed",
      address: "Assiut, City, street 24",
      status: "On the way",
    },
    {
      state: "Done",
      imgSrc: "src/Delivery pages/DeliveryHistory/Rectangle 1191 (5).svg",
      name: "Mohamed Ahmed",
      address: "Assiut, City, street 24",
      status: "Done",
    },
    {
      state: "Canceled",
      imgSrc: "src/Delivery pages/DeliveryHistory/Rectangle 1191 (5).svg",
      name: "Mohamed Ahmed",
      address: "Assiut, City, street 24",
      status: "Canceled",
    },
    // يمكنك إضافة المزيد من البيانات هنا
  ];

  // حالة لتحديد الفلتر النشط (الزر الذي تم الضغط عليه)
  const [filter, setFilter] = useState("All");

  // دالة لتصفية الكروت بناءً على الحالة
  const filteredData =
    filter === "All"
      ? deliveryData
      : deliveryData.filter((card) => card.state === filter);

  return (
    <div className="DeliveryHistory">
      <div className="DeliveryHistoryContet">
        <div className="DeliveryHistorhider">
          <h2>History</h2>
        </div>

        <div className="DeliveryHistorbuttonsDivScrole">
          <div className="DeliveryHistorbuttonsDiv">
            <button
              className="DeliveryHistorbuttonsAll"
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className="DeliveryHistorbuttonsBUT"
              onClick={() => setFilter("Done")}
            >
              Complete Orders
            </button>
            <button
              className="DeliveryHistorbuttonsBUT2"
              onClick={() => setFilter("Ontheway")}
            >
              On the way
            </button>
            <button
              className="DeliveryHistorbuttonsBUT2"
              onClick={() => setFilter("Canceled")}
            >
              Canceled
            </button>
          </div>
        </div>

        <div className="DeliveryHistoryCards">
          {filteredData.map((card, index) => (
            <div
              className={`DeliveryHistoryCard${card.state}`}
              key={index}
            >
              <div className={`DeliveryHistoryCard${card.state}Content`}>
                <img
                  src={card.imgSrc}
                  alt={card.state}
                />
                <div className={`DeliveryHistoryCard${card.state}ContentText`}>
                  <h2>{card.name}</h2>
                  <p>
                    {card.address} <br />
                    State: <span>{card.status}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryHistory;
