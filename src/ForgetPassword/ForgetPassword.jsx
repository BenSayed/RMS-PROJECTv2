import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // نستورد useNavigate
import "./ForgetPassword.css";

function ForgetPassword() {
  const navigate = useNavigate(); // تهيئة دالة الانتقال
  const [email, setEmail] = useState(""); // حفظ الإيميل لو حابب تستخدمه مستقبلا

  const handleSendCode = () => {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    // هنا ممكن تبعت كود تأكيد للإيميل قبل التنقل لو حابب
    navigate("/EmailConfirmation"); // توجيه لصفحة تأكيد الإيميل
  };

  return (
    <section className="sectionForgetPassword">
      <div className="PageForgetPassword">
        <div className="PageForgetPasswordcontainer">
          <div className="PageForgetPasswordform-section">
            <h1 className="Forget-password">Forget password</h1>
            <div className="PageForgetPasswordinput">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="send-btn" onClick={handleSendCode}>
                Send Code
              </button>
            </div>
          </div>

          <div className="image-section0">
            <img
              className="forget-password-img"
              src="src/ForgetPassword/Rectangle 1162.svg"
              alt="forget password"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
