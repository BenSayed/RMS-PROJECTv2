import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SalesPages.css";
import imgesales1 from "./Rectangle 1153 (1).svg";
import imgesales2 from "./Rectangle 1153.svg";
import imgesales3 from "./Rectangle 1153Mobil.svg";

// Sub-component to display items in the cart
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
          <button className="button-actoion-" onClick={onDecrease}>-</button>
          <h2>{quantity}</h2>
          <button className="button-actoion+" onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

// Component to display products in the ComboOptions list
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
  const [cartItems, setCartItems] = useState([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate(); // <-- add this

  const [comboOptions, setComboOptions] = useState([
    { id: 1, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 5, image: imgesales1 },
    { id: 2, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 4, image: imgesales1 },
    { id: 3, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 3, image: imgesales1 },
    { id: 4, name: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: 99, rating: 4, image: imgesales1 },
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("card", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
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
        setCartItems([{
          id: parsedCart.id || 1,
          name: parsedCart.name,
          description: parsedCart.description,
          price: parsedCart.price,
          quantity: parsedCart.quantity || 1,
          image: parsedCart.imagePath || imgesales2,
          size: parsedCart.sizeGrams ? `${parsedCart.sizeGrams} gm` : undefined,
        }]);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error parsing 'card' from localStorage:", error);
      setCartItems([]);
    }
  }, []);

  const getImageForCartItem = (image) => {
    return windowWidth < 768 ? imgesales1 : image;
  };

  const orderCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = +(orderCost * 0.1).toFixed(2);
  const deliveryFees = 20;
  const total = +(orderCost + taxes + deliveryFees).toFixed(2);

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const getSpicyLevelValue = (level) => {
      switch (level) {
        case 'Normal': return 0;
        case 'Medium': return 1;
        case 'Hot': return 2;
        default: return 0;
      }
    };

    const orderData = {
      id: "",
      orderDate: new Date().toISOString(),
      status: "Pending",
      type: "Delivery",
      price: orderCost,
      deliveryFee: 12,
      latitude: "lat",
      longitude: "lan",
      address: "Egypt, Assiut",
      paymentSystem: "Online",
      transactionId: "",
      note: specialRequests,
      customerId: userInfo.id,
      deliveryId: "7281c7f9-0b18-443d-eb5f-08dd861a359a",
      waiterId: null,
      cashierId: null,
      tableId: null,
      estimatedPreparationTime: "00:12:00",
      orderItems: cartItems.map(item => ({
        id: "",
        quantity: item.quantity,
        note: "",
        spicyLevel: getSpicyLevelValue(item.spicyLevel || 'Normal'),
        price: item.price,
        menuItemId: item.id,
        menuItemName: item.name,
        menuItemSizeId: item.sizeId || "",
        menuItemSizePrice: item.sizePrice || 0,
        extras: null,
      })),
    };

    try {
      await axios.post(
        "http://flavorhaven.runasp.net/api/Order/CreateOrder",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Order placed successfully!");
      setCartItems([]);
      localStorage.removeItem("card");
      setSpecialRequests("");
    } catch (error) {
      console.error("Error creating order:", error.response || error.message);
      alert("Failed to create order. Please try again.");
      if (error.response?.data?.errors) {
        const validationErrors = error.response.data.errors;
        let errorMessage = "Please review the following data:\n";
        for (const key in validationErrors) {
          errorMessage += `- ${validationErrors[key].join(', ')}\n`;
        }
        alert(errorMessage);
      }
    }
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
          <div className="allcardsection1">
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

        <div className="SalesCardWrite">
          <h2>Do you have any special requests?</h2>
          <textarea
            placeholder="Write here..."
            value={specialRequests}
            onChange={e => setSpecialRequests(e.target.value)}
          />
        </div>
      </div>

      <div className="salesComboOptions">
        <div className="ComboOptions">
          <h1> Combo Options </h1>
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
          <h2 className="card-title">Order Summary</h2>
          <div className="details">
            <div className="row"><span>Order</span><span>{orderCost.toFixed(2)}$</span></div>
            <div className="row"><span>Taxes (10%)</span><span>{taxes}$</span></div>
            <div className="row"><span>Delivery fees</span><span>{deliveryFees}$</span></div>
            <div className="total"><span>Total</span><span>{total}$</span></div>
          </div>
          <button className="add-items" onClick={() => navigate("/MenuItems")}>+ Add More Items</button>
          <button className="checkout" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default SalesPages;
