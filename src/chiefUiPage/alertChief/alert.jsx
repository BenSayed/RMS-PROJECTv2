import React, { useEffect, useState } from "react";
import "./alert.css";
import foodIcon from "./Vector (3).svg";
import timerIcon from "./Vector (4).svg";
import imgalert from "./Rectangle 1153.svg";
import axios from "axios";
import * as signalR from "@microsoft/signalr";

const OrderPage = ({ orderId, onClose }) => {
  const [order, setOrder] = useState(null);
  const [connection, setConnection] = useState(null);

  // Fetch order data
  useEffect(() => {
    const fetchOrderById = async () => {
      try {
        const response = await axios.get("http://flavorhaven.runasp.net/api/Order/GetGroupedActiveOrders");
        const allOrders = [
          ...(response.data.Paid || []),
          ...(response.data.InProgress || []),
          ...(response.data.ReadyToServe || [])
        ];
        const foundOrder = allOrders.find((o) => o.id.toString() === orderId.toString());
        setOrder(foundOrder || null);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    if (orderId) {
      fetchOrderById();
    }
  }, [orderId]);

  // Setup SignalR connection
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://flavorhaven.runasp.net/orderHub")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("✅ SignalR connected");

          connection.on("OrderStatusUpdated", (updatedOrder) => {
            console.log("📡 Received update via SignalR:", updatedOrder);
            if (updatedOrder.id === orderId) {
              setOrder(updatedOrder);
            }
          });
        })
        .catch((error) => console.error("SignalR error:", error));
    }
  }, [connection, orderId]);

  const handleStartCooking = async () => {
    try {
      await axios.put(
        `http://flavorhaven.runasp.net/api/Order/UpdateStatus/${order.id}`,
        { status: "InProgress" }
      );

      setTimeout(() => {
        onClose(); // Close after SignalR catches up
      }, 1000);

    } catch (error) {
      console.error("❌ Error updating order status:", error);
      alert("حدث خطأ أثناء تحديث حالة الطلب");
    }
  };

  const handleCancelOrder = async () => {
    if (!order) return;

    const confirmDelete = window.confirm("هل أنت متأكد أنك تريد إلغاء هذا الطلب؟");

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://flavorhaven.runasp.net/api/Order/DeleteOrder/${order.id}`);
      console.log("🗑️ Order cancelled");

      onClose(); // Close the modal
    } catch (error) {
      console.error("❌ Error deleting order:", error);
      alert("حدث خطأ أثناء حذف الطلب");
    }
  };

  if (!order) {
    return (
      <div className="order-containerfrist">
        <div className="order-container">
          <h2>Loading order details...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="overlayAlert"> 
      <div> 
        <div className="order-containerfrist">
          <div className="order-container">
            <div className="heade">
              <span className="status-dot" onClick={onClose}></span>
              <div className="lif">
                <span className="lbel">Expected time:</span>
                <span className="time">{order.estimatedPreparationTime || "45 min"}</span>
              </div>
              <div className="righ">
                <span className="labl">Order date:</span>
                <span className="order-date">
                  {new Date(order.createdAt || Date.now()).toLocaleString()}
                </span>
              </div>
              <div className="icons">
                <img src={foodIcon} alt=" " className="iconn" />
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
                      <p className="ordr-value">{item.code || "No Code"}</p>
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
                  <div className="progress-container">
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
              <button className="StartCooking" onClick={handleStartCooking}>
                Start Cooking
              </button>
             
              <button className="cancel" onClick={handleCancelOrder}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
