import React, { useState } from "react";
import "./S2.css";

export default function S2() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("150 gm");

  return (
    <div className="product-container">
      <div className="product-details">
        <div className="product-card">
          <h1>Wagyu Steak</h1>
          <h2 className="product-price">68.99$</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
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
              <img src="src/MenuPages/MenuItem/S2/fluent-emoji-high-contrast_potato.svg" alt="" />
              Smashed potato
            </span>
          </div>
        </div>

        <div className="size-selector">
          <h3>Size</h3>
          <div className="size-options">
            {["150 gm","250 gm","350 gm"].map((s) => (
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
          <select onChange={(e) => setSize(e.target.value)} className="select99" value="">
            <option disabled className="option1">Other size</option>
          </select>
        </div>
      </div>

      <div className="order-section">
        <h2 className="order-title">Order Now</h2>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="quantity-button">−</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="quantity-button">+</button>
        </div>
        <button className="add-to-cart-btn">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
);
}
