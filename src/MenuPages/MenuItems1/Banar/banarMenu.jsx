import React, { useState } from "react";
import "./banarMenu.css";
// استيراد الصور من المجلد الحالي
 import BannerImage1 from "./Group 34526.svg";
import BannerImage2 from "./Image copy.svg";
import BannerImage3 from "./Object copy.svg";
import BannerImage4 from "./Image.svg";
import BannerImage5 from "./Group 34524.svg";
import ArrowIcon1 from "./Vector (6).svg";
import ArrowIcon2 from "./Vector (5).svg";
import ArrowIcon3 from "./Vector@2x.svg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7; // عدد الشرائح

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (

  <div className="banner-1">
      
      <div className="banner-container">
        <img
          src={BannerImage1} // تم استبدال المسار بالمتغير
          alt=""
          className="imggg"
        />
        <div className="banner-decor banner-decor-top"></div>
        <div className="banner-content">
          <h1 className="banner-title">Royal Lunch Offer</h1>
          <ul className="banner-list">
            <li>Appetizer: Shrimp cocktail with cocktail sauce.</li>
            <li>
              Main Course: Seabass fillet with lemon butter sauce, <br/>served with
              sautéed vegetables and saffron rice.
            </li>
            <li>Dessert: Authentic Italian tiramisu.</li>
            <li>Drink: Lemonade with mint or sparkling water.</li>
          </ul>
        </div>
        <div className="banner-image-wrapper">
          <div className="banner-decor-horizontal1"></div>
          <div className="banner-decor-horizontal2"></div>
          <div className="banner-decor-horizontal3"></div>
          <div className="banner-decor-vertical1"></div>
          <div className="banner-decor-vertical2"></div>
          <div className="banner-decor-vertical3"></div>
          <img
            src={BannerImage2} // تم استبدال المسار بالمتغير
            alt=""
            className="banner-image2"
          />
          <img
            src={BannerImage3} // تم استبدال المسار بالمتغير
            alt="Delicious food"
            className="banner-image"
          />
          <img
            src={BannerImage4} // تم استبدال المسار بالمتغير
            alt="kljk"
            className="banner-image1"
          />
        </div>
        <div className="banner-price-section">
          <img
            src={BannerImage5} // تم استبدال المسار بالمتغير
            alt=""
            className="imgg"
          />
          <div className="banner-price">84$</div>
          <button className="banner-button">
            Order Now{" "}
            <span className="arrow">
              <img src={ArrowIcon1} alt="" /> {/* تم استبدال المسار بالمتغير */}
            </span>
          </button>
        </div>
        <div className="banner-decor banner-decor-bottom">
          <div className="banner-navigation">
            <button className="banner-arrow" onClick={prevSlide}>
              <img src={ArrowIcon2} alt="" /> {/* تم استبدال المسار بالمتغير */}
            </button>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`banner-dot ${index === currentIndex ? "active" : ""}`}
              ></span>
            ))}
            <button className="banner-arrow1" onClick={nextSlide}>
              <img src={ArrowIcon3} alt="" /> {/* تم استبدال المسار بالمتغير */}
            </button>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Banner;