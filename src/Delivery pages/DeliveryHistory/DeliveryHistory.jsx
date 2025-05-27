import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DeliveryHistory.css";

const DeliveryHistory = () => {
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [statusOptions, setStatusOptions] = useState(["All"]);

  const baseUrl = localStorage.getItem("baseUrl");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/Delivery/OrderHistory/${userInfo.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setApiData(response.data);

        // استخراج الحالات المختلفة من الطلبات
        const uniqueStatuses = [
          ...new Set(response.data.map((order) => order.status)),
        ];
        setStatusOptions(["All", ...uniqueStatuses]);
      } catch (error) {
        console.error("Error fetching delivery history:", error);
      }
    };

    fetchHistory();
  }, [baseUrl, userInfo.id, token]);

  const filteredData =
    filter === "All"
      ? apiData
      : apiData.filter((order) => order.status === filter);

  const fallbackImage =
    "src/Delivery pages/DeliveryHistory/Rectangle 1191 (5).svg";

  return (
    <div className="DeliveryHistory">
      <div className="DeliveryHistoryContet">
        <div className="DeliveryHistorhider">
          <h2>History</h2>
        </div>

        <div className="DeliveryHistorbuttonsDivScrole">
          <div className="DeliveryHistorbuttonsDiv">
            {statusOptions.map((status, index) => (
              <button
                key={index}
                className={
                  status === "All"
                    ? "DeliveryHistorbuttonsAll"
                    : "DeliveryHistorbuttonsBUT2"
                }
                onClick={() => setFilter(status)}
              >
                {status === "Done"
                  ? "Complete Orders"
                  : status === "Pending"
                  ? "Pending"
                  : status === "Canceled"
                  ? "Canceled"
                  : status === "All"
                  ? "All"
                  : status}
              </button>
            ))}
          </div>
        </div>

        <div className="DeliveryHistoryCards">
          {filteredData.length > 0 ? (
            filteredData.map((order, index) => (
              <div
                className={`DeliveryHistoryCard${order.status}`}
                key={order.orderId || index}
              >
                <div
                  className={`DeliveryHistoryCard${order.status}Content`}
                >
                  <img
                    src={
                      order.customerImage && order.customerImage !== "string"
                        ? order.customerImage
                        : fallbackImage
                    }
                    alt={order.status}
                  />
                  <div
                    className={`DeliveryHistoryCard${order.status}ContentText`}
                  >
                    <h2>{order.customerName}</h2>
                    <p>
                      {order.address} <br />
                      State: <span>{order.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryHistory;
