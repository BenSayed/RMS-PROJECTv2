import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import eyeImage from "./Mdi_eye-outline.svg";
import imgegoogel from "./google .svg";
import imgiphone from "./apple .svg";
import imglin6 from "./Line 16.svg";
import imgline from "./Line 17.svg";
import Recting from "./Rectangle 1162.svg";
import { Link, useNavigate } from "react-router-dom"; // استيراد useNavigate

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // تهيئة الدالة navigate

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();  // منع التحميل التلقائي للصفحة عند الضغط على الزر

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://flavorhaven.runasp.net/api/User/Login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!!");
        navigate("/"); // استخدام navigate للتوجيه إلى الصفحة الرئيسية
      } else {
        setError("Login failed. Please check your credentials.");
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="sectionlogin1">
      <section className="sectionlogin">
        <div className="PageLogin">
          <div className="PageLogincontainer">
            <div className="PageLoginform-section">
              <div className="welcome-text">
                <h1>Welcome again!</h1>
                <p>
                  Don’t have an account? <Link to="/SignUp">Sign up</Link>
                </p>
              </div>
              <form onSubmit={handleLogin} className="formatcontentee">
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
                <div className="lineDive">
                  <img src={imgline} alt="" />
                  <h3>or login with</h3>
                  <img src={imglin6} alt="" />
                </div>

                <div className="social-buttons">
                  <button>
                    <img src={imgegoogel} alt="Google Icon" />
                    Google
                  </button>
                  <button>
                    <img src={imgiphone} alt="Apple Icon" />
                    Apple
                  </button>
                </div>

                <button className="login-btn" type="submit">Login</button>
              </form>
            </div>

            <div className="image-section020">
              <img src={Recting} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
