import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './S1/S1.css';
import './S2/S2.css';
import './S3/S3.css';
import './S4/S4.css';

// --- S1: الصورة مع السلايدر ---
function S1({ imagePath }) {
  // إذا عندك أكثر من صورة في response، ممكن تعدل هذا لاحقًا
  const images = [imagePath || ''];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
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
    changeSlide(nextIndex, 'right');
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(prevIndex, 'left');
  };

  if (!imagePath) return null;

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={goToPrevious}>
        <img src="src/MenuPages/MenuItem/S1/Vector.svg" alt="Prev" />
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        className={`slider-image ${isAnimating ? (direction === 'right' ? 'slide-right' : 'slide-left') : ''}`}
      />

      <button className="nav-button right" onClick={goToNext}>
        <img src="src/MenuPages/MenuItem/S1/Vector (1).svg" alt="Next" />
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              const dir = index > currentIndex ? 'right' : 'left';
              changeSlide(index, dir);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

// --- S2: تفاصيل المنتج ---
function S2({ name, price, description }) {
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
            {/* ممكن تحط ايقونات هنا لو حابب */}
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

// --- Extras Section ---
function ExtraCard({ extra }) {
  return (
    <div className="extra-card">
      <img src={extra.imagePath} alt={extra.name} className="extra-img" />
      <div className="extra-info">
        <h4>{extra.name}</h4>
        <p>{extra.price}$</p>
      </div>
    </div>
  );
}

function Extras({ menuItemId }) {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const baseUrl = localStorage.getItem('baseUrl');
        const res = await axios.get(`${baseUrl}/api/Menu/GetExtrasOfMenuItem/${menuItemId}`);
        setExtras(res.data);
      } catch (error) {
        console.error('Error fetching extras:', error);
      }
    };
    fetchExtras();
  }, [menuItemId]);

  return (
    <section className="extras-section">
      <h2>Extras</h2>
      <div className="extras-list">
        {extras.length > 0 ? (
          extras.map((extra) => <ExtraCard key={extra.id} extra={extra} />)
        ) : (
          <p>No extras available.</p>
        )}
      </div>
    </section>
  );
}

// --- Suggestions Section ---
function SuggestionCard({ item }) {
  return (
    <div className="box7">
      <img src={item.imageUrl} alt={item.name} className="img91" />
      <div className="txt99">
        <h3>{item.name}</h3>
        <p>{item.descritpion || item.description || 'No description'}</p>
        <div className="line55">
          <span className="star77">{'★'.repeat(Math.round(item.totalRating || 0))}</span>
          <span className="price44">{item.price}$</span>
        </div>
      </div>
    </div>
  );
}

function Suggestions({ menuItemId }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const baseUrl = localStorage.getItem('baseUrl');
        const res = await axios.get(`${baseUrl}/api/Menu/${menuItemId}/suggestions`);
        setSuggestions(res.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, [menuItemId]);

  return (
    <section className="wrap88">
      <h2 className="head33">Combo Options</h2>
      <div className="grid22">
        {suggestions.length > 0 ? (
          suggestions.map((item) => <SuggestionCard key={item.id} item={item} />)
        ) : (
          <p>No suggestions available.</p>
        )}
      </div>
    </section>
  );
}

// --- الصفحة الرئيسية MenuItemPage ---
export default function MenuItemPage() {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const baseUrl = localStorage.getItem('baseUrl');
        const res = await axios.get(`${baseUrl}/api/Menu/GetMenuItem/${id}`);
        setMenuItem(res.data);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      }
    };
    fetchMenuItem();
  }, [id]);

  if (!menuItem) return <p>Loading...</p>;

  return (
    <>
      <S1 imagePath={menuItem.imagePath} />
      <S2 name={menuItem.name} price={menuItem.price} description={menuItem.description} />
      <Extras menuItemId={id} />
      <Suggestions menuItemId={id} />
    </>
  );
}
