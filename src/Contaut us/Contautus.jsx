import React, { useState } from 'react';
import axios from 'axios';
import "./Contautus.css";
import imgcont from "./Frame 38191.svg";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // مكتبة لتوليد UUID

const Contautus = () => {
  const navigate = useNavigate(); // استخدام useNavigate للتنقل بين الصفحات

  // State لتخزين البيانات المدخلة
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    isPrivacyPolicyAccepted: false,
  });

  // Handler لتحديث بيانات الفورم
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handler لإرسال البيانات للـ API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // إضافة معرّف فريد (UUID)
    const dataToSend = {
      id: uuidv4(),  // توليد UUID فريد
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      isPrivacyPolicyAccepted: formData.isPrivacyPolicyAccepted,
    };

    // طباعة البيانات المرسلة للتحقق منها
    console.log('Data to be sent:', dataToSend);

    try {
      const response = await axios.post('http://flavorhaven.runasp.net/api/Contact', dataToSend);

      if (response.status === 200) {
        console.log('Success:', response.data);
        // عرض رسالة نجاح
        alert('Your message has been sent successfully!');
        // إعادة التوجيه للصفحة الرئيسية بعد الإرسال
        navigate('/');
      } else {
        console.error('Error:', response.statusText);
        // عرض رسالة فشل
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Request failed', error);
      // عرض رسالة خطأ في الاتصال
      alert('An error occurred. Please check your connection and try again.');
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className='FormContautusIndex1'>
                  <input
                    type='text'
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='FormContautusIndex2'>
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    placeholder="Enter your phone number"
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <div className='checkboxform'>
                    <input
                      className='checkboxform1'
                      type="checkbox"
                      name="isPrivacyPolicyAccepted"
                      checked={formData.isPrivacyPolicyAccepted}
                      onChange={handleChange}
                    />
                    <label htmlFor="">You agree to our friendly privacy policy</label>
                  </div>
                </div>

                <button type="submit" style={{ color: 'black' }}>Send Message</button>
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
