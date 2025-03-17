import React from "react";
import "./alert.css";
import foodIcon from "./Vector (3).svg";
import timerIcon from "./Vector (4).svg";
const orders = [
 
  {
    id: 2,
    code: "s6fd5",
    time: "20 min",
    notes: (
      <div>
        <li>;sdkjf s sdfsd pfj gl;kfjg soi0fhdg</li>
        <li>osd hifo s;jodf jsodif juaf</li>
      </div>
    ),
  },
  {
    id: 3,
    code: "s6fd5",
    time: "20 min",
    notes: (
      <div>
        <li>;sdkjf s sdfsd pfj gl;kfjg soi0fhdg</li>
        <li>osd hifo s;jodf jsodif juaf</li>
      </div>
    ),
  },
  {
    id: 4,
    code: "s6fd5",
    time: "20 min",
    notes: (
      <div>
        <li>;sdkjf s sdfsd pfj gl;kfjg soi0fhdg</li>
        <li>osd hifo s;jodf jsodif juaf</li>
      </div>
    ),
  },
  {
    id: 5,
    code: "s6fd5",
    time: "20 min",
    notes:(
      <div>
        <li>;sdkjf s sdfsd pfj gl;kfjg soi0fhdg</li>
        <li>osd hifo s;jodf jsodif juaf</li>
      </div>
    ),
  },
 
];

const OrderPage = () => {
  return (
    <div className="order-containerfrist">
    <div className="order-container">
 <div className="heade">
      <span className="status-dot"></span>
    <div className="lif">
    <span className="lbel">Expected time:</span>
    <span className="time"> 45 min</span>
    </div>
    <div className="righ">
    <span className="labl">Order date:</span>
    <span className="order-date"> 9:15 AM, February 1, 2025</span>
    </div>
    <div className="icons">
    <img src={foodIcon} alt="Food Icon" className="iconn" />
    <img src={timerIcon} alt="Timer Icon" className="icoon" />
    </div>
    </div>

      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-image-container">
              <img
                src="src/chiefUiPage/alertChief/Rectangle 1153.svg"
                alt="Food"
                className="order-image"
              />
            </div>
            <div className="order-detils">
              <p className="order-labl">Item code</p>
              <p className="ordr-value">{order.code}</p>
            </div>
            <div className="order-details">
              <p className="order-lbel">Time</p>
              <pre className="order-vale">{order.time}</pre>
            </div>
            <div className="order-details notes">
              <p className="order-label">Notes</p>
              <p className="order-value">{order.notes}</p>
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
        <button className="StartCooking">Start Cooking</button>
        <button className="DelayOrder">Delay Order</button>
        <button className="cancel">Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default OrderPage;
