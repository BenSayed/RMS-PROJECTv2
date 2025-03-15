import React from 'react';
import  "./DeliveryLogin.css";
const DeliveryLogin = () => {
  return (
    <div className="DeliveryLoginpage">
      <div className="DeliveryLoginpagecontiner">
        <h2>Login</h2>
        <div className="DeliveryLoginpagecontinerform">
          <input type="text" />
          <input type="password" />
          <h4>Forget password</h4>
        </div>
        <button>Back to Home</button>
      </div>
    </div>
  );
}

export default DeliveryLogin;
