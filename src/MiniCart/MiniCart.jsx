import React, { useState } from 'react';
import './MiniCart.css';
import imgcaet from "./Rectangle 1153 (1).svg" ;
import imgcaetr from "./Group (1).svg" ;
import imgcaetr2 from "./material-symbols_delete-outline-rounded.svg" ;
import imgcaetr3 from "./Line 18.svg" ;


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 68,
      quantity: 1,
      image: imgcaet,
    },
    {
      id: 2,
      name: "Wagyu Steak",
      description: "250g of lean steak with sous and smashed potato or rice",
      price: 68,
      quantity: 1,
      image:  imgcaet,
    },
  ]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
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

        {cartItems.length > 0 && (
          <button className="checkout-button">
            <span className='spanBtn'>
              Checkout <img src={imgcaetr3}className='imgBtn' alt="" /> {calculateTotal()}$
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;