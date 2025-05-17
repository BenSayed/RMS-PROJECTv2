import React, { useState } from "react";
import "./PasswordRecovery.css";
function PasswordRecovery() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <section className="sectionRecovery">
        <div className="PageRecovery">
          <div className="PageRecoverycontainer">
            <div className="PageRecoveryform-section">
              <h1 className="Password-recovery">Password recovery</h1>
     
                <div className="password-ctainer">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <img
                    className="eye-ion"
                    src="src/PasswordRecovery/Vector (11).svg"
                    alt="eye icon"
                    onClick={togglePassword}
                  />
                </div>
                <div className="password-ctainer">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  <img
                    className="eye-ion"
                    src="src/PasswordRecovery/Vector (11).svg"
                    alt="eye icon"
                    onClick={togglePassword}
                  />
                </div>
           

              <button className="logn-btn">Login</button>
            </div>

            <div className="image-section2">
              {" "}
              <img
                style={{ borderRadius: "48px" }}
                src="src/PasswordRecovery/Rectangle 1162 (2).svg"
                alt=" not eror "
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PasswordRecovery;
