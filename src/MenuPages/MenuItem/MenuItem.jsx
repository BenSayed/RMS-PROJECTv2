import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./MenuItem.css";
import "./S1/S1.css";
import "./S2/S2.css";
import "./S3/S3.css";
import "./S4/S4.css";

import vectorLeft from "./S1/Vector.svg";
import vectorRight from "./S1/Vector (1).svg";

// ------------------- S1 -------------------
function S1({ menuItem }) {
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
    const nextIndex = (currentIndex + 1) % 1;
    changeSlide(nextIndex, "right");
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + 1) % 1;
    changeSlide(prevIndex, "left");
  };

  if (!menuItem) return <div>Loading...</div>;

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={goToPrevious}>
        <img src={vectorLeft} alt="Previous" />
      </button>

      <img
        src={menuItem.imagePath}
        alt={menuItem.name}
        className={`slider-image ${
          isAnimating
            ? direction === "right"
              ? "slide-right"
              : "slide-left"
            : ""
        }`}
      />

      <button className="nav-button right" onClick={goToNext}>
        <img src={vectorRight} alt="Next" />
      </button>
    </div>
  );
}

// ------------------- S2 -------------------
function S2({
  menuItem,
  quantity,
  setQuantity,
  selectedSizeId,
  setSelectedSizeId,
  onAddToCart,
}) {
  useEffect(() => {
    if (
      menuItem &&
      Array.isArray(menuItem.sizes) &&
      menuItem.sizes.length > 0
    ) {
      const savedSizeId = localStorage.getItem("selectedSizeId");
      if (savedSizeId && menuItem.sizes.some((s) => s.id === savedSizeId)) {
        setSelectedSizeId(savedSizeId);
      } else {
        setSelectedSizeId(menuItem.sizes[0].id);
      }
    }
  }, [menuItem, setSelectedSizeId]);

  const handleSizeChange = (e) => {
    const sizeId = e.target.value;
    setSelectedSizeId(sizeId);
    localStorage.setItem("selectedSizeId", sizeId);
  };

  if (!menuItem) return <div>Loading...</div>;

  const selectedSize = menuItem.sizes?.find((s) => s.id === selectedSizeId);
  const displayPrice = selectedSize?.price || menuItem.price;

  return (
    <div className="product-container">
      <div className="product-details">
        <div className="product-card">
          <h1>{menuItem.name}</h1>
          <h2 className="product-price">{displayPrice.toFixed(2)}$</h2>
          <p>{menuItem.description}</p>
        </div>

        <div className="size-selector">
          <h3>Size</h3>
          {Array.isArray(menuItem.sizes) && menuItem.sizes.length > 0 ? (
            <div className="size-options">
              {menuItem.sizes.map((s) => (
                <label key={s.id}>
                  <input
                    type="radio"
                    name="size"
                    value={s.id}
                    checked={selectedSizeId === s.id}
                    onChange={handleSizeChange}
                  />
                  {s.grams} gm
                </label>
              ))}
            </div>
          ) : (
            <p>No sizes available</p>
          )}
        </div>
      </div>

      <div className="order-section">
        <h2 className="order-title">Order Now</h2>
        <div className="quantity-selector">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            −
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

// ------------------- S3 -------------------
function S3({ menuItemId, selectedExtras, setSelectedExtras }) {
  const [extras, setExtras] = useState([]);
  const baseUrl =
    localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  useEffect(() => {
    if (!menuItemId) return;

    axios
      .get(`${baseUrl}/api/Menu/GetExtrasOfMenuItem/${menuItemId}`)
      .then((res) => {
        setExtras(res.data);
      })
      .catch((err) => {
        console.error("Error fetching extras:", err);
      });
  }, [menuItemId]);

  const handleSelect = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="extras-container">
      <h2 className="extras-title">Extras</h2>
      <div className="extras-grid">
        {extras.map((item) => (
          <button
            key={item.id}
            className={`extra-item ${
              selectedExtras.includes(item.id) ? "selected" : ""
            }`}
            onClick={() => handleSelect(item.id)}
          >
            <img src={item.imagePath} alt={item.name} className="extra-image" />
            <div className="extra-content">
              <span className="extra-name">{item.name}</span>
              <span className="extra-price">{item.price.toFixed(2)}$</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ------------------- S4 -------------------
function S4({ menuItemId }) {
  const [suggestions, setSuggestions] = useState([]);
  const baseUrl =
    localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  useEffect(() => {
    if (!menuItemId) return;

    axios
      .get(`${baseUrl}/api/Menu/${menuItemId}/suggestions`)
      .then((res) => {
        setSuggestions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching suggestions:", err);
      });
  }, [menuItemId]);

  if (suggestions.length === 0) return null;

  return (
    <section className="wrap88">
      <h2 className="head33">Combo Options</h2>
      <div className="grid22">
        {suggestions.map((item) => (
          <div key={item.id} className="box7">
            <img src={item.imageUrl} alt={item.name} className="img91" />
            <div className="txt99">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="line55">
                <span className="star77">
                  {"★★★★★".slice(0, item.totalRating)}
                </span>
                <span className="price44">{item.price.toFixed(2)}$</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------- Main Component -------------------
function MenuItem() {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl =
    localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  const [quantity, setQuantity] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [selectedExtras, setSelectedExtras] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/api/Menu/GetMenuItem/${id}`)
      .then((res) => {
        setMenuItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu item:", err);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (!menuItem) return;

    const selectedSize = menuItem.sizes?.find((s) => s.id === selectedSizeId);
    const cardItem = {
      id: menuItem.id,
      name: menuItem.name,
      description: menuItem.description,
      imagePath: menuItem.imagePath,
      price: selectedSize ? selectedSize.price : menuItem.price,
      sizeId: selectedSizeId,
      sizeGrams: selectedSize ? selectedSize.grams : null,
      quantity,
      extras: selectedExtras,
    };

    // اقرأ مصفوفة 'card' من localStorage أو ابدأ بمصفوفة فارغة
    const existingCards = JSON.parse(localStorage.getItem("card")) || [];
    // اقرأ مصفوفة 'cart' من localStorage أو ابدأ بمصفوفة فارغة
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // دالة مساعدة للمقارنة بين الكروت (تتأكد من التطابق الكامل)
    const isSameCard = (item1, item2) => {
      return (
        item1.id === item2.id &&
        item1.sizeId === item2.sizeId &&
        JSON.stringify(item1.extras.slice().sort()) ===
          JSON.stringify(item2.extras.slice().sort())
      );
    };

    // تحقق لو العنصر موجود في card
    const cardIndex = existingCards.findIndex((item) =>
      isSameCard(item, cardItem)
    );
    if (cardIndex !== -1) {
      // لو موجود زود الكمية
      existingCards[cardIndex].quantity += cardItem.quantity;
    } else {
      // غير كده أضف العنصر الجديد
      existingCards.push(cardItem);
    }

    // نفس الشيء في cart
    const cartIndex = existingCart.findIndex((item) =>
      isSameCard(item, cardItem)
    );
    if (cartIndex !== -1) {
      existingCart[cartIndex].quantity += cardItem.quantity;
    } else {
      existingCart.push(cardItem);
    }

    // خزن المصفوفات في localStorage
    localStorage.setItem("card", JSON.stringify(existingCards));
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Order added successfully!");
    window.location.reload();
  };

  if (loading) return <div>Loading...</div>;
  if (!menuItem) return <div>Menu item not found.</div>;

  return (
    <div className="MenuItem">
      <S1 menuItem={menuItem} />
      <S2
        menuItem={menuItem}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedSizeId={selectedSizeId}
        setSelectedSizeId={setSelectedSizeId}
        onAddToCart={addToCart}
      />
      <S3
        menuItemId={id}
        selectedExtras={selectedExtras}
        setSelectedExtras={setSelectedExtras}
      />
      <S4 menuItemId={id} />
    </div>
  );
}

export default MenuItem;
