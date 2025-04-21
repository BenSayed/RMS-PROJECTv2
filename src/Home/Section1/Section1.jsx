import React, { useState, useEffect } from "react";
import "./Section1.css";
import imgeHome1 from "/HomeIMG/Section1IMG/Rectangle 1152.svg"; // صورة سطح المكتب
import imgeHome2 from "/HomeIMG/Section1IMG/Vector.svg";
import imgMobile from "./Rectangle 1152.svg"; // صورة الموبايل (يفترض أن تكون موجودة في نفس المجلد)
import { Link } from "react-router-dom";

const Section1 = () => {
  // تخزين رابط الصورة في حالة (state)
  const [imageSrc, setImageSrc] = useState(imgeHome1); // الصورة الافتراضية (سطح المكتب)

  // دالة لتغيير الصورة بناءً على حجم الشاشة
  const handleResize = () => {
    if (window.innerWidth <= 425) {
      setImageSrc(imgMobile); // إذا كان الحجم أقل من 768px نعرض صورة الموبايل
    } else {
      setImageSrc(imgeHome1); // إذا كان الحجم أكبر من 768px نعرض صورة سطح المكتب
    }
  };

  // استخدام useEffect للاستماع لتغييرات حجم النافذة
  useEffect(() => {
    handleResize(); // تعيين الصورة الافتراضية عند تحميل الصفحة
    
    // إضافة مستمع لحدث تغيير حجم النافذة
    window.addEventListener("resize", handleResize);

    // تنظيف المستمع عند إزالة المكون
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // نقوم فقط بتشغيل هذا التأثير عند تحميل المكون لأول مرة

  return (
    <div>
      <section className="section1">
        <div className="textconteiner">
          <p className="tagline">
            Indulge in the finest dishes in a luxurious setting, where creativity meets exquisite flavor
          </p>
          <div className="Titletextconteiner">
            <h1>Unforgettable Dining</h1>
          </div>
        </div>
        <div className="cotiner_img">
          <img src={imageSrc} alt="Home Image" />
        </div>

        <div className="container22">
          <div className="search-bar">
            <input type="text" className="search-input1" placeholder="Search..." />
            <button className="mic-button">
              <img src={imgeHome2} alt="Search Icon" />
            </button>
          </div>

          <div className="button-container2">
          <Link to="/MenuItems">
      <button className="button primary-button">Menu</button>
    </Link>
            <button className="button secondary-button">Book a table</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
