import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./MenuItem.css";
import "./S1/S1.css";
import "./S2/S2.css";
import "./S3/S3.css";
import "./S4/S4.css";

const MenuItem = () => {
  const baseUrl = localStorage.getItem("baseUrl") || "";
  const { id } = useParams();

  const [productData, setProductData] = useState(null);
  const [extrasData, setExtrasData] = useState([]);
  const [comboData, setComboData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const [selectedExtras, setSelectedExtras] = useState([]);

  useEffect(() => {
    if (!id || !baseUrl) return;

    axios
      .get(`${baseUrl}/api/Menu/GetMenuItem/${id}`)
      .then((res) => {
        const data = res.data;
        setProductData(data);
        setExtrasData(data.extras || []);
        setComboData(data.combos || []);
        if (data.sizes && data.sizes.length > 0) {
          setSize(data.sizes[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, [baseUrl, id]);

  const changeSlide = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (!productData) return;
    const nextIndex = (currentIndex + 1) % productData.images.length;
    changeSlide(nextIndex, "right");
  };

  const goToPrevious = () => {
    if (!productData) return;
    const prevIndex =
      (currentIndex - 1 + productData.images.length) % productData.images.length;
    changeSlide(prevIndex, "left");
  };

  const handleAddToCart = () => {
    if (!productData) return;
    const product = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      quantity,
      size,
      extras: selectedExtras.map((i) => extrasData[i]?.name || ""),
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("تمت إضافة المنتج إلى السلة في Local Storage!");
  };

  const handleSelectExtra = (index) => {
    setSelectedExtras((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const RandomCard = ({ item }) => (
    <div className="box7">
      <img src={item.image} alt={item.name} className="img91" />
      <div className="txt99">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="line55">
          <span className="star77">★★★★★</span>
          <span className="price44">{item.price}$</span>
        </div>
      </div>
    </div>
  );

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="menuuu">
        <div className="slider-container">
          <button className="nav-button left" onClick={goToPrevious}>
            <img src={`${baseUrl}/icons/left-arrow.svg`} alt="prev" />
          </button>

          <img
            src={productData.images[currentIndex]}
            alt="slider"
            className={`slider-image ${
              isAnimating
                ? direction === "right"
                  ? "slide-right"
                  : "slide-left"
                : ""
            }`}
          />

          <button className="nav-button right" onClick={goToNext}>
            <img src={`${baseUrl}/icons/right-arrow.svg`} alt="next" />
          </button>

          <div className="dots">
            {productData.images.map((_, index) => (
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

        <div className="product-container">
          <div className="product-details">
            <div className="product-card">
              <h1>{productData.name}</h1>
              <h2 className="product-price">{productData.price}$</h2>
              <p>{productData.description}</p>
              <div className="product-info">
                {productData.features &&
                  productData.features.map((feature, idx) => (
                    <span key={idx}>
                      <img src={`${baseUrl}/icons/${feature.icon}`} alt="" />
                      {feature.text}
                    </span>
                  ))}
              </div>
            </div>

            <div className="size-selector">
              <h3>Size</h3>
              <div className="size-options">
                {productData.sizes &&
                  productData.sizes.map((s) => (
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
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <span>Add to cart</span>
            </button>
          </div>
        </div>

        <section className="extras-container">
          <h2 className="extras-title">Extras</h2>
          <div className="extras-grid">
            {extrasData.map((item, idx) => (
              <button
                key={idx}
                className={`extra-item ${
                  selectedExtras.includes(idx) ? "selected" : ""
                }`}
                onClick={() => handleSelectExtra(idx)}
              >
                <img src={item.image} alt={item.name} className="extra-image" />
                <div className="extra-content">
                  <span className="extra-name">{item.name}</span>
                  <span className="extra-price">{item.price}$</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="wrap88">
          <h2 className="head33">Combo Options</h2>
          <div className="grid22">
            {comboData.map((item, i) => (
              <RandomCard key={i} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuItem;
