import React, { useState } from "react";
import "./MenuItem.css";
import './S1/S1.css';
import './S2/S2.css';
import './S3/S3.css';
import './S4/S4.css';


import imgGrilledVegetables from "./S3/Rectangle 1153.svg";
import imgMushroomSauce from "./S3/Rectangle 1153 (1).svg";
import imgGarlicSauce from "./S3/Rectangle 1153 (2).svg";
import imgFrenchFries from "./S3/Rectangle 1153 (3).svg";
import imgCaesarSalad from "./S3/Rectangle 1153 (4).svg";
import imgGarlicBread from "./S3/Rectangle 1153 (5).svg";
import imgParmesanCheese from "./S3/Rectangle 1153 (6).svg";
import imgCrispyOnionRings from "./S3/Rectangle 1153 (7).svg";
import imgAvocadoSlices from "./S3/Rectangle 1153 (8).svg";

import steakImg from "./S4/Rectangle 11.svg";

// ------------------- S1 Section -------------------
// ------------------- S1 Section -------------------
import slide1 from "./S1/Rectangle 11523.svg";
import slide2 from "./S1/Rectangle 11523.svg";
import slide3 from "./S1/Rectangle 11523.svg";
import slide4 from "./S1/Rectangle 11523.svg";
import slide5 from "./S1/Rectangle 11523.svg";
import slide6 from "./S1/Rectangle 11523.svg";
import slide7 from "./S1/Rectangle 11523.svg";

import vectorLeft from "./S1/Vector.svg";
import vectorRight from "./S1/Vector (1).svg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

function S1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeSlide(nextIndex, "right");
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(prevIndex, "left");
  };

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={goToPrevious}>
        <img src={vectorLeft} alt="Previous" />
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        className={`slider-image ${
          isAnimating ? (direction === "right" ? "slide-right" : "slide-left") : ""
        }`}
      />

      <button className="nav-button right" onClick={goToNext}>
        <img src={vectorRight} alt="Next" />
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              const dir = index > currentIndex ? "right" : "left";
              changeSlide(index, dir);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}


// ------------------- S2 Section -------------------
function S2() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("150 gm");

  return (
    <div className="product-container">
      <div className="product-details">
        <div className="product-card">
          <h1>Wagyu Steak</h1>
          <h2 className="product-price">68.99$</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="product-info">
            <span>
              <img src="src/MenuPages/MenuItem/S2/hugeicons_steak.svg" alt="" />
              250g Lean beef
            </span>
            <span>
              <img src="src/MenuPages/MenuItem/S2/Vector (7).svg" alt="" />
              Butter sous
            </span>
            <span>
              <img
                src="src/MenuPages/MenuItem/S2/fluent-emoji-high-contrast_potato.svg"
                alt=""
              />
              Smashed potato
            </span>
          </div>
        </div>

        <div className="size-selector">
          <h3>Size</h3>
          <div className="size-options">
            {["150 gm", "250 gm", "350 gm"].map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                />
                {s}
              </label>
            ))}
          </div>
          <select
            onChange={(e) => setSize(e.target.value)}
            className="select99"
            value=""
          >
            <option disabled className="option1">
              Other size
            </option>
          </select>
        </div>
      </div>

      <div className="order-section">
        <h2 className="order-title">Order Now</h2>
        <div className="quantity-selector">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="quantity-button"
          >
            −
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="quantity-button"
          >
            +
          </button>
        </div>
        <button className="add-to-cart-btn">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

// ------------------- S3 Section -------------------
const extras = [
  { name: "Grilled Vegetables", price: "1.5$", image: imgGrilledVegetables },
  { name: "Mushroom Sauce", price: "2.5$", image: imgMushroomSauce },
  { name: "Garlic Sauce", price: "1.5$", image: imgGarlicSauce },
  { name: "French Fries", price: "4.99$", image: imgFrenchFries },
  { name: "Caesar Salad", price: "6$", image: imgCaesarSalad },
  { name: "Garlic Bread", price: "5.99$", image: imgGarlicBread },
  { name: "Parmesan Cheese", price: "8$", image: imgParmesanCheese },
  { name: "Crispy Onion Rings", price: "4.5$", image: imgCrispyOnionRings },
  { name: "Avocado Slices", price: "3$", image: imgAvocadoSlices },
];

function S3() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="extras-container">
      <h2 className="extras-title">Extras</h2>
      <div className="extras-grid">
        {extras.map((item, idx) => (
          <button
            key={idx}
            className={`extra-item ${selectedItems.includes(idx) ? "selected" : ""}`}
            onClick={() => handleSelect(idx)}
          >
            <img src={item.image} alt={item.name} className="extra-image" />
            <div className="extra-content">
              <span className="extra-name">{item.name}</span>
              <span className="extra-price">{item.price}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ------------------- S4 Section -------------------
const RandomCard = () => (
  <div className="box7">
    <img src={steakImg} alt="Wagyu Steak" className="img91" />
    <div className="txt99">
      <h3>Wagyu Steak</h3>
      <p>250g of lean steak with sous and smashed potato or rice</p>
      <div className="line55">
        <span className="star77">★★★★★</span>
        <span className="price44">68$</span>
      </div>
    </div>
  </div>
);

function S4() {
  return (
    <section className="wrap88">
      <h2 className="head33">Combo Options</h2>
      <div className="grid22">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <RandomCard key={i} />
          ))}
      </div>
    </section>
  );
}

// ------------------- Final Exported Component -------------------
const MenuItem = () => {
  return (
    <div>
      <div className="menuuu">
        <S1 />
        <S2 />
        <S3 />
        <S4 />
      </div>
    </div>
  );
};

export default MenuItem;
