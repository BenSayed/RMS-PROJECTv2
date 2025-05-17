import React from "react";
import "./Waiter.css";
import NotificationBell from './NotificationBell';

const WaiterDashboard = () => {
  
  const statuses = [
    { label: 'Empty', color: '#FFF4E6' },
    { label: 'Weighting', color: '#FFCE8A' },
    { label: 'Reserved', color: '#FF9500' },
  ];
  
  
  return (
    <div className="waiter-dashboard">
      {/* Header */}
      <div className="waiter-header">
        <div className="waiter-logo-name">
          <img
            src="/src/WaiterPage/Logo 1.svg"
            alt="Logo"
            className="waiter-logo"
          />
          <span className="waiter-brand">Flavor Haven</span>
        </div>
        <div className="waiter-user-section">
          <img
            src="/src/WaiterPage/Ellipse 1928.svg"
            alt="User"
            className="waiter-user-img"
          />
          <span className="waiter-user-text">
            Hello, <strong>Mohamed Ali</strong>
          </span>

          <NotificationBell />

        </div>
      </div>

      {/* Main content */}
      <div className="waiter-main">
        {/* Tables Layout */}
        <div className="waiter-tables">
          <p className="waiter-table-count">
            Number of occupied tables: <span>6/20</span>
          </p>
          <div className="waiter-tables-grid">
            <img
              src="src\WaiterPage\1.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\2.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\3.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\4.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\5.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\6.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\7.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\8.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\9.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\10.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\11.svg"
              alt="Table"
              className="waiter-chair-img"
            />
            <img
              src="src\WaiterPage\12.svg"
              alt="Table"
              className="waiter-chair-img"
            />
          </div>
          <div className="legend-container">
      {statuses.map((status, index) => (
        <div className="legend-item" key={index}>
          <span
            className="legend-color"
            style={{ backgroundColor: status.color }}
          ></span>
          <span className="legend-label">{status.label}</span>
        </div>
      ))}
    </div>
        </div>

        {/* Orders Section */}
        <div className="waiter-orders">
          <h2 className="waiter-orders-title">Completed Orders</h2>
          <div className="waiter-orders-list">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="waiter-order-card">
                <div className="waiter-order-header">
                  <span className="waiter-order-table"><img src="src\WaiterPage\Vector.svg" alt="" className="victor" />Table: <span className="colornum">5</span></span>
                  <span className="waiter-order-persons"><img src="src\WaiterPage\Vector (1).svg" alt="" className="victor"/>Persons: <span className="colornum">4</span></span>
                </div>
                <div className="waiter-order-body">
                  <img
                    src="/src/WaiterPage/Rectangle 1153.svg"
                    alt="Order"
                    className="waiter-order-image"
                  />
                  <div className="waiter-order-info">
                    <div className="waiter-order-list">
                      <h3>Order</h3>
                      <ul>
                        <li>Steak</li>
                        <li>Hot souse</li>
                        <li>Coffee</li>
                        <li>Croissant</li>
                      </ul>
                    </div>
                    <div className="waiter-order-notes">
                      <h3>Notes</h3>
                      <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
               <div className="button-con">
               <button className="waiter-confirm-btn">
                  Confirm delivery 
                  <span className="check-icon"><img src="src\WaiterPage\Vector3.svg" alt="" /></span>
                </button>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaiterDashboard;
