import React, { useState } from "react";
import "./Login.css";
import Header from "/src/Component/Header/Header";
import axios from "axios";

import eyeImage from "./Mdi_eye-outline.svg";
import imgegoogel from "./google .svg";
import imgiphone from "./apple .svg";
import imgline from "./Line 17.svg";
import Recting from "./Rectangle 1162.svg";


function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://flavorhaven.runasp.net/api/User/Login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!!  "); // يظهر اليرت لما ينجح تسجيل الدخول
      window.location.href = "/home"; // غيرها لو عايز يروح لصفحة تانية

    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <div  className="sectionlogin1">
      <section className="sectionlogin">
        <div className="PageLogin">
          <div className="PageLogincontainer">
            <div className="PageLoginform-section  ">

              <div className="welcome-text  ">
              <h1 >Welcome again!</h1>
              <p>
                Don’t have an account? <a href="#">Sign up</a>
              </p>
              </div>  
        <form action=" " className="formatcontentee "> 
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="formatcontenteeInput"> 
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="eye-icon"
                  src={eyeImage}
                  alt="eye icon"
                  onClick={togglePassword}
                />
                <h3>Forget password </h3>
              </div>
              <div className="remember">
                <input className="InputRem" type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              </div>
              <div className="lineDive  ">
                <img src={imgline} alt="" />
                <h3>or login with</h3>
                <img src={imgline} alt="" />
              </div>

              <div className="social-buttons  ">
                <button>
                  <img src={imgegoogel} alt="Google Icon" />
                  Google
                </button>
                <button>
                  <img src={imgiphone} alt="Apple Icon" />
                  Apple
                </button>
              </div>

              <button className="login-btn" onClick={handleLogin}>Login</button>
              </form>
            </div>

            <div className="image-section020  ">
           <img src={Recting} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;