import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import imgsuin1 from "./mdi_eye-outline (1).svg";
import imgsuin2 from "./Rectangle 1162 (1).svg";
import imgegoogel from "./google .svg";
import imgiphone from "./apple .svg";
import imgline from "./Line 17.svg";
import imgline2 from "./Line 16.svg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://flavorhaven.runasp.net/api/User/Register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );

      const user = response.data;

      // تخزين بيانات المستخدم في localStorage
      localStorage.setItem("userInfo", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

      alert("Account created successfully!");
      navigate("/login"); // التوجيه لصفحة اللوجن بعد التسجيل
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        // لو السيرفر رجع رسالة خطأ نعرضها
        setErrorMessage(error.response.data.message || "Failed to create account.");
      } else {
        setErrorMessage("Failed to create account.");
      }
    }
  };

  return (
    <div>
      <section className="SignUpPage">
        <div className="containerSignUp">
          <div className="form-sectionSignUp">
            <div className="sectionSignUptexttt">
              <h1 style={{ fontFamily: "'Cormorant Upright'" }}>Create an Account</h1>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>

            <div className="sectionSignUpbuttonandform">
              <form onSubmit={handleSubmit}>
                <div className="input-groupsuinuo">
                  <div className="input-group">
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      type="text"
                      required
                    />
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      type="text"
                      required
                    />
                  </div>

                  <div className="full-width showPassword">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="full-width showPassword" style={{ position: "relative" }}>
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <img
                      alt={showPassword ? "Hide Password" : "Show Password"}
                      src={imgsuin1}
                      onClick={toggleShowPassword}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div className="full-width showPassword" style={{ position: "relative" }}>
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <img
                      alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                      src={imgsuin1}
                      onClick={toggleShowConfirmPassword}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div className="checkbox-group">
                    <input
                      id="terms"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      type="checkbox"
                      required
                    />
                    <label htmlFor="terms">You agree to our friendly privacy policy</label>
                  </div>

                  {errorMessage && (
                    <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
                  )}
                </div>

                <div className="buutonandlinesuinuo">
                  <div className="lineDive">
                    <img src={imgline} alt="" />
                    <h3>or login with</h3>
                    <img src={imgline2} alt="" />
                  </div>

                  <div className="social-buttons">
                    <button type="button">
                      <img src={imgegoogel} alt="Google Icon" /> Google
                    </button>
                    <button type="button">
                      <img src={imgiphone} alt="Apple Icon" /> Apple
                    </button>
                  </div>
                </div>

                <button className="submit-btn" type="submit">
                  Create an account
                </button>
              </form>
            </div>
          </div>

          <div className="image-section3">
            <img src={imgsuin2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
