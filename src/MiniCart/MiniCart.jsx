import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MiniCart.css';
import imgcaetr from "./Group (1).svg";
import imgcaetr2 from "./material-symbols_delete-outline-rounded.svg";
import imgcaetr3 from "./Line 18.svg";

const Cart = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCard = localStorage.getItem('card');
    if (storedCard) {
      try {
        const parsedCards = JSON.parse(storedCard);
        const formattedCards = Array.isArray(parsedCards) ? parsedCards : [parsedCards];

        const normalizedCart = formattedCards.map(item => ({
          ...item,
          image: item.imagePath || imgcaetr,
          quantity: item.quantity || 1,
          size: item.sizeGrams || 0
        }));

        setCartItems(normalizedCart);
      } catch (e) {
        console.error('Failed to parse card from localStorage', e);
      }
    }
  }, []);

  const toggleCart = () => setIsOpen(!isOpen);
  const closeCart = () => setIsOpen(false);

  const increaseQuantity = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem('card', JSON.stringify(updated));
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);
    setCartItems(updated);
    localStorage.setItem('card', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('card', JSON.stringify(updated));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/SalesPages');
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeCart}></div>}

      {!isOpen && (
        <button className="cart-button" onClick={toggleCart}>
          <img src={imgcaetr} alt="Cart" className="cart-icon" />
        </button>
      )}

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className='titelCart'>Cart Details</h2>
        <div className='cartSidebarscrol'> 
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id} style={{ position: 'relative' }}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price}$</p>
                  <p>Size: {item.size}g</p>
                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className="delete-button" onClick={() => removeItem(item.id)}>
                  <img src={imgcaetr2} alt="Delete" />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <button className="checkout-button" onClick={handleCheckout}>
            <span className='spanBtn'>
              Checkout <img src={imgcaetr3} className='imgBtn' alt="" /> {calculateTotal()}$
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
