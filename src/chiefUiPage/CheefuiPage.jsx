import "/src/chiefUiPage/CheefuiPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as signalR from "@microsoft/signalr";
import OrderPage from "./alertChief/alert.jsx";
import OrderPageProssesing from "./alertChief - Prosessing/alertProsessing.jsx";
import AlertChiefReady from "./alertChief - Redy/alertChiefRedy.jsx";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h3 className="currentTime1">{currentTime}</h3>;
};

const CheefuiPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [newOrdersData, setNewOrdersData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [readyToServeData, setReadyToServeData] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedInProgressOrderId, setSelectedInProgressOrderId] = useState(null);
  const [selectedReadyOrderId, setSelectedReadyOrderId] = useState(null);

  const token = localStorage.getItem("token");
  const baseUrl = localStorage.getItem("baseUrl");

  const handleCardClick = (id) => setSelectedOrderId(id);
  const closeOrderPage = () => setSelectedOrderId(null);

  const handleInProgressCardClick = (id) => setSelectedInProgressOrderId(id);
  const closeInProgressAlert = () => setSelectedInProgressOrderId(null);

  const handleReadyCardClick = (id) => setSelectedReadyOrderId(id);
  const closeReadyAlert = () => setSelectedReadyOrderId(null);

  const handleButtonClick = () => setShowSelect(!showSelect);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/Order/GetGroupedActiveOrders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { Paid = [], InProgress = [], Ready = [] } = response.data;

      const mapOrderToCard = (order, iconSrc) => ({
        id: order.id,
        image: "src/chiefUiPage/Rectangle 1153.svg",
        title: order.transactionId || "Order",
        items: order.orderItems.length,
        icon: iconSrc,
      });

      setNewOrdersData(Paid.map((order) => mapOrderToCard(order, "src/chiefUiPage/Vector (3).svg")));
      setInProgressData(InProgress.map((order) => mapOrderToCard(order, "src/chiefUiPage/Vector (4).svg")));
      setReadyToServeData(Ready.map((order) => mapOrderToCard(order, "src/chiefUiPage/Vector (6).svg")));
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();

    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${baseUrl}/orderHub`, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
        console.log("✅ SignalR connected.");
      })
      .catch((err) => {
        console.error("❌ SignalR connection error:", err);
      });

    connection.on("ReceiveNewOrder", (order) => {
      console.log("📦 New order received:", order);
      fetchOrders();
    });

    connection.on("OrderStatusUpdated", (order) => {
      console.log("🟢 Order status updated:", order);
      fetchOrders();
    });

    connection.onclose((err) => {
      console.warn("⚠️ SignalR connection closed:", err);
    });

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div className="CheefuiPage">
      <div className="CheefuiPageContint">
        <div className="CheefuiPageContintHeader">
          <div className="CheefuiPageContintHeaderLogo">
            <img src="src/chiefUiPage/Logo Header.svg" alt="Logo" />
          </div>
          <div className="CheefuiPageContintHeaderTimer">
            <TimeDisplay />
          </div>
        </div>

        <div className="CheefuiPageContintHearobutton">
          <div className="buttonchifpage">
            <button className="button1chifpage" onClick={handleButtonClick}>
              <img src="src/chiefUiPage/Vector (2).svg" alt="Button Icon" />
            </button>
            {showSelect && (
              <>
                <select className="chifSelectpage" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                  <option value="" disabled>Order Type</option>
                  <option value="option1">In Restaurant</option>
                  <option value="option2">Delivery</option>
                </select>
                <select className="chifSelectpage" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                  <option value="" disabled>Dish Type</option>
                  <option value="option1">Dessert</option>
                  <option value="option2">Appetizers</option>
                  <option value="option3">Main</option>
                </select>
              </>
            )}
          </div>
        </div>

        <div className="CheefuiPageContintCared">
          {/* New Orders */}
          <div className="NewOrders">
            <div className="chifNewOrders">
              <div className="chifNewOrdersText"><h2>New Orders</h2></div>
              <div className="chifNewOrderscardsContainer">
                {newOrdersData.map((card) => (
                  <div key={card.id} className="cardallchifuipageprosser" onClick={() => handleCardClick(card.id)} style={{ cursor: "pointer" }}>
                    <div className="cardchifuipageprosser">
                      <div className="cardchifuipageprosserImg"><img src={card.image} alt={card.title} /></div>
                      <div className="cardchifuipageprosserTextt"><h3>{card.title}</h3><p>{card.items} items</p></div>
                      <div className="cardchifuipageprosserIcon"><img src={card.icon} alt="Icon" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="NewOrderslines"></div>

          {/* In Progress */}
          <div className="InProgress">
            <div className="chifInProgress">
              <div className="chifInProgressText"><h2>In Progress</h2></div>
              <div className="chifNewOrderscardsContainer">
                {inProgressData.map((card) => (
                  <div key={card.id} className="cardchifuipageprosser" onClick={() => handleInProgressCardClick(card.id)} style={{ cursor: "pointer" }}>
                    <div className="cardchifuipageprosserImg"><img src={card.image} alt={card.title} /></div>
                    <div className="cardchifuipageprosserTextt"><h3>{card.title}</h3><p>{card.items} items</p></div>
                    <div className="cardchifuipageprosserIcon"><img src={card.icon} alt="Icon" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="InProgresslines"></div>

          {/* Ready to Serve */}
          <div className="ReadytoServe">
            <div className="chifReadytoServe">
              <div className="chifReadytoServeText"><h2>Ready to Serve</h2></div>
              <div className="chifNewOrderscardsContainer">
                {readyToServeData.map((card) => (
                  <div key={card.id} className="cardchifuipageprosser" onClick={() => handleReadyCardClick(card.id)} style={{ cursor: "pointer" }}>
                    <div className="cardchifuipageprosserImg"><img src={card.image} alt={card.title} /></div>
                    <div className="cardchifuipageprosserTextt"><h3>{card.title}</h3><p>{card.items} items</p></div>
                    <div className="cardchifuipageprosserIcon"><img src={card.icon} alt="Icon" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Alerts */}
        {selectedOrderId && <div className="orderPageOverlay"><OrderPage orderId={selectedOrderId} onClose={closeOrderPage} /></div>}
        {selectedInProgressOrderId && <div className="orderPageOverlay"><OrderPageProssesing orderId={selectedInProgressOrderId} onClose={closeInProgressAlert} /></div>}
        {selectedReadyOrderId && <div className="orderPageOverlay"><AlertChiefReady orderId={selectedReadyOrderId} onClose={closeReadyAlert} /></div>}
      </div>
    </div>
  );
};

export default CheefuiPage;
