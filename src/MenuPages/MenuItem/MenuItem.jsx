import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./MenuItem.css";
import './S1/S1.css';
import './S2/S2.css';
import './S3/S3.css';
import './S4/S4.css';

// ------------------- S1 -------------------
import vectorLeft from "./S1/Vector.svg";
import vectorRight from "./S1/Vector (1).svg";

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
          isAnimating ? (direction === "right" ? "slide-right" : "slide-left") : ""
        }`}
      />

      <button className="nav-button right" onClick={goToNext}>
        <img src={vectorRight} alt="Next" />
      </button>
    </div>
  );
}

// ------------------- S2 -------------------
// ------------------- S2 -------------------
function S2({ 
  menuItem, 
  quantity, 
  setQuantity, 
  selectedSizeId, 
  setSelectedSizeId, 
  onAddToCart 
}) {
  useEffect(() => {
    if (menuItem && Array.isArray(menuItem.sizes) && menuItem.sizes.length > 0) {
      const savedSizeId = localStorage.getItem("selectedSizeId");
      if (savedSizeId && menuItem.sizes.some(s => s.id === savedSizeId)) {
        setSelectedSizeId(savedSizeId);
      } else {
        setSelectedSizeId(menuItem.sizes[0].id);
      }
    }
  }, [menuItem, setSelectedSizeId]);

  const handleSizeChange = (e) => {
    const sizeId = e.target.value;
    setSelectedSizeId(sizeId);
    localStorage.setItem("selectedSizeId", sizeId); // ✅ تخزين sizeId في localStorage
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
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

// ------------------- S3 -------------------
function S3({ menuItemId, selectedExtras, setSelectedExtras }) {
  const [extras, setExtras] = React.useState([]);
  const baseUrl = localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  React.useEffect(() => {
    if (!menuItemId) return;

    axios
      .get(`${baseUrl}/api/Menu/GetExtrasOfMenuItem/${menuItemId}`)
      .then((res) => {
        setExtras(res.data);
      })
      .catch((err) => {
        console.error("Error fetching extras:", err);
      });
  }, [menuItemId, baseUrl]);

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
            className={`extra-item ${selectedExtras.includes(item.id) ? "selected" : ""}`}
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
  const baseUrl = localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  useEffect(() => {
    if (!menuItemId) return;

    axios
      .get(`${baseUrl}/api/Menu/${menuItemId}/suggestions`)
      .then((res) => {
        setSuggestions(res.data);
        console.log("Fetched suggestions successfully");
      })
      .catch((err) => {
        console.error("Error fetching suggestions:", err);
      });
  }, [menuItemId, baseUrl]);

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
              <p>{item.descritpion}</p>
              <div className="line55">
                <span className="star77">{"★★★★★".slice(0, item.totalRating)}</span>
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
  const baseUrl = localStorage.getItem("baseUrl") || "http://flavorhaven.runasp.net";

  // الحالة الجديدة اللي هتتحكم في الكمية، الحجم، والاكسسترا
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
  }, [id, baseUrl]);

  const addToCart = () => {
    if (!menuItem) return;

    // بيانات الحجم المختار
    const selectedSize = menuItem.sizes?.find((s) => s.id === selectedSizeId);

    // بيانات الاكسترا المختارة بالكامل (حسب الـ IDs)
    // نجيب بيانات الاكسترا من قاعدة البيانات مخزنة في S3 (extras)
    // لذلك نخزنها داخل addToCart في شكل بسيط ب IDs بس أو ممكن تضيف التفاصيل لو حبيت
    // هنا سنخزن IDs فقط

    // بيانات الكارد اللي هنخزنها في اللوكل استورج
    const card = {
      id: menuItem.id,
      name: menuItem.name,
      description: menuItem.description,
      imagePath: menuItem.imagePath,
      price: selectedSize ? selectedSize.price : menuItem.price,
      sizeId: selectedSizeId,
      sizeGrams: selectedSize ? selectedSize.grams : null,
      quantity,
      extras: selectedExtras, // array of selected extra IDs
    };

    localStorage.setItem("card", JSON.stringify(card));
    console.log("Card stored in localStorage:", card);
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
