import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SalesPages.css";
import imgesales1 from "./Rectangle 1153 (1).svg";
import imgesales2 from "./Rectangle 1153.svg";
import imgesales3 from "./Rectangle 1153Mobil.svg";

const CartItem = ({
  image,
  name,
  description,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) => (
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

const ComboOptionsCard = ({ image, name, description, price, rating }) => (
  <div className="ComboOptionsCardSalesCard">
    <div className="ComboOptionsCardSalesCardimg">
      <img src={image} alt="product" />
    </div>
    <div className="ComboOptionsCardSalesCardcontent">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="ComboOptionsCardSalesCardcontentstars">
        <h3>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </h3>
        <h4>{price}$</h4>
      </div>
    </div>
  </div>
);

const SalesPages = () => {
  const [cartItems, setCartItems] = useState([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const [comboOptions] = useState([
    {
      id: 1,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 99,
      rating: 5,
      image: imgesales1,
    },
    {
      id: 2,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 99,
      rating: 4,
      image: imgesales1,
    },
    {
      id: 3,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 99,
      rating: 3,
      image: imgesales1,
    },
    {
      id: 4,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 99,
      rating: 4,
      image: imgesales1,
    },
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("card", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("card", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    try {
      const cartData = localStorage.getItem("card");
      if (!cartData) {
        setCartItems([]);
        return;
      }
      const parsedCart = JSON.parse(cartData);
      if (Array.isArray(parsedCart)) {
        setCartItems(parsedCart);
      } else if (parsedCart && typeof parsedCart === "object") {
        setCartItems([
          {
            id: parsedCart.id || 1,
            name: parsedCart.name || "Unnamed",
            description: parsedCart.description || "",
            price: parsedCart.price || 0,
            quantity: parsedCart.quantity || 1,
            image: parsedCart.imagePath || imgesales2,
            sizeId: parsedCart.sizeId || null,
            sizeGrams: parsedCart.sizeGrams || null,
          },
        ]);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error parsing 'card' from localStorage:", error);
      setCartItems([]);
    }
  }, []);

  const getResponsiveImage = (image) => {
    if (!image) return imgesales2;
    return windowWidth < 768 ? imgesales3 : image;
  };

  const orderCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxes = +(orderCost * 0.1).toFixed(2);
  const deliveryFees = 20;
  const total = +(orderCost + taxes + deliveryFees).toFixed(2);
const handleCheckout = async () => {
  try {
    if (cartItems.length === 0) {
      alert("لا يمكن إتمام الطلب، العربة فارغة!");
      return;
    }

    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];

    const orderDetails = {
      type: "DineIn",
      paymentSystem: "Online",
      transactionId: "123456",
      deliveryFee: deliveryFees,
      note: specialRequests || "",
      latitude: "lat",
      longitude: "long",
      address:
        addresses.length > 0
          ? `${addresses[0].country}, ${addresses[0].city}`
          : "Unknown",
      customerId: userInfo.id,
      orderItems: cartItems.map((item) => ({
        quantity: item.quantity,
        note: "",
        spicyLevel: "Medium",
        menuItemId: item.id,
        menuItemSizeId:
          item.sizeId || item.sizeId === null ? item.sizeId : undefined,
      })),
    };

    const response = await axios.post(
      "/api/Order/CreateOrder",
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    alert("✅ تم إنشاء الطلب بنجاح!");

    const orderId = response.data.id || response.data.orderId;
    if (!orderId) {
      alert("⚠️ لم يتم استلام معرف الطلب للمتابعة.");
      return;
    }

    try {
      await axios.put(
        `/api/Order/UpdateStatus/${orderId}`,
        { status: "Paid" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("✅ تم تحديث حالة الطلب إلى 'مدفوع'.");
    } catch (updateError) {
      console.error("خطأ تحديث الحالة:", updateError);

      if (updateError.response) {
        alert(
          `فشل تحديث الحالة. رمز الخطأ: ${updateError.response.status}\n` +
            `الرسالة: ${JSON.stringify(updateError.response.data)}`
        );
      } else if (updateError.request) {
        alert(
          "لم نتلق رد من السيرفر أثناء تحديث حالة الطلب. " +
            "تأكد من الاتصال أو إعدادات السيرفر."
        );
      } else {
        alert("حدث خطأ أثناء تحديث حالة الطلب: " + updateError.message);
      }
    }
  } catch (error) {
    console.error("خطأ إنشاء الطلب:", error);

    if (error.response) {
      alert(
        `فشل إنشاء الطلب. رمز الخطأ: ${error.response.status}\n` +
          `الرسالة: ${JSON.stringify(error.response.data)}`
      );
    } else if (error.request) {
      alert(
        "لم نتلق رد من السيرفر أثناء إنشاء الطلب. " +
          "تأكد من الاتصال أو إعدادات السيرفر."
      );
    } else {
      alert("حدث خطأ أثناء إنشاء الطلب: " + error.message);
    }
  }
};


  return (
    <div className="SalesPages">
      <div className="slaespageshero" style={{ display: "flex" }}>
        <div className="SalesCard">
          <div className="CartSection">
            <h2>Cart</h2>
            <div className="last-textt">
              <span>Cost</span>
              <span>Qty</span>
            </div>
          </div>
          <div className="allcardsection1">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  image={getResponsiveImage(item.image)}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
              ))
            )}
          </div>
        </div>

        <div className="SalesCardWrite">
          <h2>Do you have any special requests?</h2>
          <textarea
            placeholder="Write here..."
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </div>
      </div>

      <div className="salesComboOptions">
        <div className="ComboOptions">
          <h1>Combo Options</h1>
          <div className="ComboOptionsCardSales">
            <div className="ComboOptionsCardSalesCards">
              {comboOptions.map((option) => (
                <ComboOptionsCard
                  key={option.id}
                  image={getResponsiveImage(option.image)}
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
          <h2 className="card-title">Order Summary</h2>
          <div className="details">
            <div className="row">
              <span>Order</span>
              <span>{orderCost.toFixed(2)}$</span>
            </div>
            <div className="row">
              <span>Taxes (10%)</span>
              <span>{taxes}$</span>
            </div>
            <div className="row">
              <span>Delivery fees</span>
              <span>{deliveryFees}$</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{total}$</span>
            </div>
          </div>
          <button className="add-items" onClick={() => navigate("/MenuItems")}>
            + Add More Items
          </button>
          <button
            className="checkout"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPages;
