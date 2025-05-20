import React, { useState } from 'react';
import './S2.css';

export default function S2({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("150 gm");

  return (
    <div className="product-container">
      <div className="product-details">
        <div className="product-card">
          <h1>{name || 'Loading...'}</h1>
          <h2 className="product-price">{price ? `${price}$` : ''}</h2>
          <p>{description || ''}</p>
          <div className="product-info">
            {/* يمكنك اضافة أيقونات أو معلومات أخرى هنا */}
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
