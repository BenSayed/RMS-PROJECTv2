import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import eyeImage from "./Mdi_eye-outline.svg";
import googleIcon from "./google .svg";
import appleIcon from "./apple .svg";
import line2 from "./Line 16.svg";
import line1 from "./Line 17.svg";
import sideImage from "./Rectangle 1162.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // امسح الخطأ السابق

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://flavorhaven.runasp.net/api/User/Login",
        {
          email,
          password,
        }
      );

      const { token, userId } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("baseUrl", "http://flavorhaven.runasp.net");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const userRes = await axios.get(
            `http://flavorhaven.runasp.net/api/User/GetUserById/${userId}`,
            config
          );

          const user = userRes.data;

          localStorage.setItem("email", user.email);
          localStorage.setItem("firstName", user.firstName);
          localStorage.setItem("lastName", user.lastName);
          localStorage.setItem("profileImage", user.profileImage);
          localStorage.setItem("userInfo", JSON.stringify(user));

          const addressRes = await axios.get(
            `http://flavorhaven.runasp.net/api/User/GetAddress/${userId}`,
            config
          );

          localStorage.setItem("addresses", JSON.stringify(addressRes.data));
        } catch (userError) {
          console.error("Error fetching user info or address:", userError);
          setError("Login succeeded, but failed to load user data.");
        }

        // لا تستخدم alert، نعيد التوجيه فقط
        navigate("/");
        window.location.reload();
      } else {
        setError("Login failed. Please check your password.");
      }
    } catch (err) {
      console.error("Login error:", err);

      // جرب نعرض رسالة الخطأ من السيرفر إذا متوفرة
      const serverMessage =
        err.response?.data?.message || err.response?.data || err.message;

      setError(
        "Login failed: " +
          (typeof serverMessage === "string" ? serverMessage : JSON.stringify(serverMessage))
      );
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
                {/* رسالة الخطأ تظهر هنا */}
                {error && (
                  <p
                    style={{
                      color: "red",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {error}
                  </p>
                )}

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
                    <Link to="/ForgetPassword">
                      <h3 style={{ cursor: "pointer" }}>Forget password</h3>
                    </Link>
                  </div>

                  <div className="remember">
                    <input className="InputRem" type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>

                <div className="lineDive">
                  <img src={line1} alt="" />
                  <h3>or login with</h3>
                  <img src={line2} alt="" />
                </div>

                <div className="social-buttons">
                  <button type="button">
                    <img src={googleIcon} alt="Google Icon" />
                    Google
                  </button>
                  <button type="button">
                    <img src={appleIcon} alt="Apple Icon" />
                    Apple
                  </button>
                </div>

                <button className="login-btn" type="submit">
                  Login
                </button>
              </form>
            </div>

            <div className="image-section020">
              <img src={sideImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
