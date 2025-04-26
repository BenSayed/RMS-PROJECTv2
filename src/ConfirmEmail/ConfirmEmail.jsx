import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./ConfirmEmail.css";

const EmailConfirmation = () => {
  const [code, setCode] = useState(new Array(6).fill(""));
  const navigate = useNavigate(); // تهيئة دالة الانتقال

  const handleChange = (index, e) => {
    if (isNaN(e.target.value)) return;
    let newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleLogin = () => {
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      alert("Please enter the full 6-digit code.");
      return;
    }

    // هنا ممكن تتحقق من الكود مع السيرفر لو عايز
    // لو الكود صح
    navigate("/"); // توجيه للصفحة الرئيسية
  };

  return (
    <div className="coniner">
      <div className="box">
        <h2>Confirm email</h2>
        <div className="code-inputs">
          {code.map((num, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="code-input"
              value={num}
              onChange={(e) => handleChange(index, e)}
            />
          ))}
        </div>
        <p className="resend-text">Resend code after 3:12</p>
        <button className="lin-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="image-section1">
        <img
          src="src/ConfirmEmail/Rectangle 1162 (1).svg"
          alt="Confirm Email"
          style={{ borderRadius: "48px" }}
        />
      </div>
    </div>
  );
};

export default EmailConfirmation;
