import React from 'react';
import "./Contautus.css";

import imgcont from "./Frame 38191.svg";
import { useNavigate } from 'react-router-dom';

const Contautus = () => {
  const navigate = useNavigate(); // استخدام useNavigate للتنقل بين الصفحات

  const handleBackToHome = () => {
    navigate('/'); // التوجه إلى الصفحة الرئيسية
  };

  return (
    <div className='ContautusPage'>
      <div className='ContautusPagecontint'>
        <div className='ContautusPagecontinttextandform'>
          <div className='ContautusPagecontinttextandformgroup'>
            <div className='TextBoxContautus'>
              <h2>We’d love to help</h2>
              <p> Get in Touch with Us, We'd Love to Hear From You! </p>
            </div>

            <div className='TextBoxContautusForm'>
              <form action=" ">
                <div className='FormContautusIndex1'>
                  <input type='text' placeholder=" Name" />
                  <input type='text' placeholder=" Last name" />
                </div>
                <div className='FormContautusIndex2'>
                  <input placeholder="Enter your email" type="email" />
                  <input placeholder="Enter a number" type="number" />
                  <textarea placeholder="Your Massege" rows="6" />

                  <div className='checkboxform'>
                    <input className='checkboxform1' type="checkbox" />
                    <label htmlFor=""> You agree to our friendly privacy policy </label>
                  </div>
                </div>

                <button style={{color : 'black' }} type="button" onClick={handleBackToHome}>Back to Home</button> {/* إضافة الحدث عند الضغط */}
              </form>
            </div>
          </div>

        </div>
        <div className='ContautusPagecontintimg'>
          <img src={imgcont} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contautus;
