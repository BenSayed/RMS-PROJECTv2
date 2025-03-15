import React, { useState, useEffect } from "react";
import "./SalesPages.css";
import imgesales1 from "./Rectangle 1153 (1).svg";
import imgesales2 from "./Rectangle 1153.svg";
import imgesales3 from "./Rectangle 1153Mobil.svg";

// مكون فرعي لعرض المنتجات في السلة
const CartItem = ({ image, name, description, price, quantity, onIncrease, onDecrease }) => {
  return (
    <div className="CartSection2">
      <div className="car-img-text" style={{ display: "flex" }}>
        <img src={image} alt="product" />
        <div className="cart-text">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="cost-qty-div">
        <h3>{price}$</h3>
        <div className="button-actoion">
          <button className="button-actoion-" onClick={onDecrease}>
            -
          </button>
          <h2>{quantity}</h2>
          <button className="button-actoion+" onClick={onIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

// مكون لعرض المنتجات في قائمة ComboOptions
const ComboOptionsCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="ComboOptionsCardSalesCard">
      <div className="ComboOptionsCardSalesCardimg">
        <img src={image} alt="product" />
      </div>
      <div className="ComboOptionsCardSalesCardcontent">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="ComboOptionsCardSalesCardcontentstars">
          <h3>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</h3>
          <h4>{price}$</h4>
        </div>
      </div>
    </div>
  );
};

const SalesPages = () => {
  // محاكاة البيانات التي تأتي من API
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 46, quantity: 0, image: imgesales2 },
    { id: 2, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 46, quantity: 0, image: imgesales2 },
  ]);

  const [comboOptions, setComboOptions] = useState([
    { id: 1, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 5, image: imgesales1 },
    { id: 2, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 4, image: imgesales1 },
    { id: 3, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 3, image: imgesales1 },
    { id: 4, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 4, image: imgesales1 },
  ]);

  // دوال زيادة ونقص الكميات
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // حالة لحجم الشاشة
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // مراقبة التغييرات في حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // تنظيف الحدث عند مغادرة المكون
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تحديد الصورة بناءً على حجم الشاشة
  const getImageForCartItem = (image) => {
    if (windowWidth < 768) {
      return imgesales1; // استبدال الصورة لـ موبيل
    }
    return image;
  };

  return (
    <div className="SalesPages">
      <div className="slaespageshero" style={{ display: "flex" }}>
        <div className="SalesCard">
          <div className="CartSection">
            <h2> Cart </h2>

            <div className="last-textt">
              <span>Cost</span>
              <span>Qty</span>
            </div>
          </div>
          <div>
            <div className="allcardsection1">
              {/* استخدام map لعرض كل منتج في السلة */}
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  image={getImageForCartItem(item.image)}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="SalesCardWrite">
          <h2>Do you have any special requests?</h2>
          <textarea placeholder="Write here..." />
        </div>
      </div>

      <div className="salesComboOptions">
        <div className="ComboOptions">
          <h1> ComboOptions </h1>
          <div className="ComboOptionsCardSales">
            <div className="ComboOptionsCardSalesCards">
              {comboOptions.map(option => (
                <ComboOptionsCard
                  key={option.id}
                  image={getImageForCartItem(option.image)}
                  name={option.name}
                  description={option.description}
                  price={option.price}
                  rating={option.rating}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="OrderSummary">
          <h2 className="card-title">Order summary</h2>
          <div className="details">
            <div className="row">
              <span>Order</span>
              <span>136.00$</span>
            </div>
            <div className="row">
              <span>Taxes</span>
              <span>12.00$</span>
            </div>
            <div className="row">
              <span>Delivery fees</span>
              <span> *Serves fees* </span>
              <span> 20.00$</span>
            </div>
            <div className="total">
              <span>Taxes</span>
              <span>168.00$</span>
            </div>
          </div>
          <button className="add-items">+ Add More Items</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default SalesPages;
