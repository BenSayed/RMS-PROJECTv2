import React from 'react';
import  "./DeliveryLogin.css";
const DeliveryLogin = () => {
  return (
  <div>
      <div className="DeliveryLoginpage">
        <div className="DeliveryLoginpagecontiner">

          <div className='DeliveryLoginpagecontinerimg'>
            <img src="/public/Logo 1.svg " alt="" />
            <h2>Flavor Haven</h2>
            <p>Elgance on Every Plate</p>
             </div>
           <div className="DeliveryLoginpagecontinerform">
            <input placeholder='ahmed' type="text" />
            <input type="password" />
            <h4>Forget password</h4>
          </div>
          <button>login</button>
        </div>
      </div>
  </div>
  );
}

export default DeliveryLogin;
