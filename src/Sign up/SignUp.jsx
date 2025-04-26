import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import imgsuin1 from "./mdi_eye-outline (1).svg";
import imgsuin2 from "./Rectangle 1162 (1).svg";
import imgegoogel from "./google .svg";
import imgiphone from "./apple .svg";
import imgline from "./Line 17.svg";
import imgline2 from "./Line 16.svg";
import { Link, useNavigate } from "react-router-dom";  // استيراد useNavigate

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const navigate = useNavigate();  // تهيئة الدالة navigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("/api/User/Register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log("Success:", response.data);
      alert("Account created successfully!");
      navigate("/login");  // التوجيه إلى الصفحة الرئيسية بعد التسجيل
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create account.");
    }
  };

  return (
    <div>
      <section className="SignUpPage">
        <div className="containerSignUp">
          <div className="form-sectionSignUp  ">
            <div className="sectionSignUptexttt">
              <h1 style={{ fontFamily: "'Cormorant Upright'" }}>
                Create an Account
              </h1>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>

            <div className="sectionSignUpbuttonandform">
              <form className="" onSubmit={handleSubmit}>
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

                  <div className="full-width showPassword">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      type="password"
                      required
                    />
                    <img alt="Show Password" src={imgsuin1} />
                  </div>

                  <div className="full-width showPassword">
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      type="password"
                      required
                    />
                    <img alt="Show Password" src={imgsuin1} />
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
                    <label htmlFor="terms">
                      You agree to our friendly privacy policy
                    </label>
                  </div>
                </div>

                <div className="buutonandlinesuinuo">
                  <div className="lineDive">
                    <img src={imgline} alt="" />
                    <h3>or login with</h3>
                    <img src={imgline2} alt="" />
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
                </div>

                <button className="submit-btn " type="submit">
                  Create an account
                </button>
              </form>
            </div>
          </div>
          <div className="image-section3  ">
            <img src={imgsuin2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
