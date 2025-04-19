import React, { useEffect, useState } from "react";
import "./alertChiefRedy.css";
import foodIcon from "./Vector (3).svg";
import timerIcon from "./Vector (4).svg";
import imgalert from "./Rectangle 1153.svg";
import axios from "axios";

const AlertChiefRedy = ({ orderId, onClose }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("http://flavorhaven.runasp.net/api/Order/GetGroupedActiveOrders");
        const readyOrders = response.data.Ready || [];
        const foundOrder = readyOrders.find((o) => o.id.toString() === orderId.toString());
        setOrder(foundOrder || null);
      } catch (err) {
        console.error("Error fetching order:", err);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (!order) {
    return (
      <div className="order-containerfrist">
        <div className="order-container">
          <h2>Loading order...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="order-containerfrist">
      <div className="order-container">
        <div className="heade">
          <span className="status-dot" onClick={onClose}></span>
          <div className="lif">
            <span className="lbel">Expected time:</span>
            <span className="time">45 min</span>
          </div>
          <div className="righ">
            <span className="labl">Order date:</span>
            <span className="order-date">
              {new Date(order.createdAt || Date.now()).toLocaleString()}
            </span>
          </div>
          <div className="icons">
            <img src={foodIcon} alt="Food Icon" className="iconn" />
            <img src={timerIcon} alt="Timer Icon" className="icoon" />
          </div>
        </div>

        <div className="order-list">
          {order.orderItems.map((item, index) => (
            <div key={index} className="order-item">
              <div className="order-image-container">
                <img src={imgalert} alt="Food" className="order-image" />
              </div>
              <div className="order-detilsgrop">
                <div className="order-detils">
                  <p className="order-labl">Item code</p>
                  <p className="ordr-value">{item.code || "N/A"}</p>
                </div>
                <div className="order-details">
                  <p className="order-lbel">Time</p>
                  <pre className="order-vale">20 min</pre>
                </div>
                <div className="order-details notes">
                  <p className="order-label">Notes</p>
                  <ul className="order-value">
                    {item.notes ? (
                      <li>{item.notes}</li>
                    ) : (
                      <li>No notes</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="progress-container2">
                <div className="progress-bar">
                  <span className="progress"></span>
                </div>
              </div>
              <div className="order-steps">
                <span className="order-step">Prepare ingredients</span>
                <span className="ordr-step">Cook</span>
                <span>Decorate</span>
              </div>
            </div>
          ))}
        </div>

        <div className="order-actions">
          {/* Add buttons/actions here if needed */}
        </div>
      </div>
    </div>
  );
};

export default AlertChiefRedy;
