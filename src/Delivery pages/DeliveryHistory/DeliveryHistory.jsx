import React from "react";
import "./DeliveryHistory.css";

const DeliveryHistory = () => {
  // بيانات الكروت
  const deliveryData = [
    {
      state: "Ontheway",
      imgSrc: "src/page-index/Delivery pages/DeliveryHistory/Rectangle 1191 (5).svg",
      name: "Mohamed Ahmed",
      address: "Assiut, City, street 24",
      status: "On the way",
    },
    {
      state: "Done",
      imgSrc: "src/page-index/Delivery pages/DeliveryHistory/Rectangle 1191 (6).svg",
      name: "Ahmed Sayed",
      address: "Assiut, City, street 24",
      status: "Done!",
    },
    {
      state: "Canceled",
      imgSrc: "src/page-index/Delivery pages/DeliveryHistory/Rectangle 1191 (7).svg",
      name: "ali",
      address: "Assiut, City, street 24",
      status: "Canceled",
    },
    {
      state: "Canceled",
      imgSrc: "src/page-index/Delivery pages/DeliveryHistory/Rectangle 1191 (7).svg",
      name: "ali",
      address: "Assiut, City, street 24",
      status: "Canceled",
    },
  ];

  return (
    <div className="DeliveryHistory">
      <div className="DeliveryHistoryContet">
        <div className="DeliveryHistorhider">
          <h2>History</h2>
        </div>

        <div className="DeliveryHistorbuttonsDivScrole">
          <div className="DeliveryHistorbuttonsDiv">
            <button className="DeliveryHistorbuttonsAll">All</button>
            <button className="DeliveryHistorbuttonsBUT">Complete Orders</button>
            <button className="DeliveryHistorbuttonsBUT2">On the way</button>
            <button className="DeliveryHistorbuttonsBUT2">Canceled</button>
          </div>
        </div>

        <div className="DeliveryHistoryCards">
          {deliveryData.map((card, index) => (
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
