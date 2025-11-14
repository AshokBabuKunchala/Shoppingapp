import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authenticate';
import "./CollectionStyles.css";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (savedCart.length > 0 && cartItems.length === 0) {
      setCartItems(savedCart);
    }
  }, [cartItems, setCartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.brand || item.name}</h3>
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="quantity-button">-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="quantity-button">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button" style={{width:"100px"}}>Remove</button>
              </div>
              
            ))}
            <p class="price">Total Price: ₹{totalPrice}</p>
           {/* <button className='procced-checkout' onClick={() => {navigate("/checkout")}}>Procced to Checkout</button>*/}
          </div>
        )}
        
        <button onClick={() => navigate('/Home')} className="back-button" style={{marginTop:"10px",backgroundColor:"blue",height:"20px",width:"100px"}}>Back</button>
      </div>
    </>
  );
};

export default Cart;
