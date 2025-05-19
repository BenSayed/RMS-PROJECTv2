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
    setError(null);

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://flavorhaven.runasp.net/api/User/Login",
        { email, password }
      );

      const data = response.data;
      console.log("Login response data:", data);

      if (data.token) {
        // حفظ البيانات في localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("baseUrl", "http://flavorhaven.runasp.net");
        localStorage.setItem("userInfo", JSON.stringify(data));

        if (data.imagePath) {
          localStorage.setItem("profileImagePath", data.imagePath);
        } else {
          localStorage.removeItem("profileImagePath");
        }

        // إعداد الهيدر بشكل مركزي في axios
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        try {
          const addressRes = await axios.get(
            `http://flavorhaven.runasp.net/api/User/GetUserAddresses/${data.id}`
          );
          localStorage.setItem("addresses", JSON.stringify(addressRes.data));
          console.log("Addresses fetched:", addressRes.data);
        } catch (userError) {
          console.error("Error fetching user address:", userError);
        }

        // الدور يتم تحويله للحروف الصغيرة عشان الـ RequireRole يعتمد على lowercase
        const role = (data.roles?.[1] || data.roles?.[0] || "").toLowerCase();

        if (!role) {
          setError("Login failed: No role assigned to your account. Please contact support.");
          return;
        }

        switch (role) {
          case "admin":
            navigate("/admin");
            break;
          case "customer":
            navigate("/");
            break;
          case "cashier":
            navigate("/cashier");
            break;
          case "chef":
            navigate("/CheefuiPage");
            break;
          case "delivery":
            navigate("/DeliveryHome");
            break;
          case "waiter":
            navigate("/WaiterDashboard");
            break;
          default:
            setError("Unknown role. Contact support.");
            return;
        }
      } else {
        setError("Login failed. Please check your password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      const serverMessage =
        err.response?.data?.message || err.response?.data || err.message;

      setError(
        "Login failed: " +
          (typeof serverMessage === "string"
            ? serverMessage
            : JSON.stringify(serverMessage))
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
                {error && (
                  <p style={{ color: "red", marginBottom: "10px", fontWeight: "bold" }}>
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
