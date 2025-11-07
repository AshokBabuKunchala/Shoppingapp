import React, { useState, useEffect } from 'react';
import { useAuth } from './Authenticate';
import { useNavigate } from 'react-router-dom';
import logo1 from "../Assets/logo1.jpg";
import './Nav.css';

function Nav({ cartItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useAuth();

  const handleLogin = () => navigate('/SignIn');
      const onLogout = () => {
    handleLogout();          // call your auth logout logic
    setMenuOpen(false);      // close menu if open
    navigate('/');     // navigate to SignIn page
  };
  // Update cart count whenever cartItems changes
  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo1} alt="ShopEasy Logo" className="logo" />
        <span style={{fontSize:"20px",color:"white"}}>ShopEasy</span>
        
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger">☰</button>
      </div>

     <div class="search-con">
      <input type="text" placeholder="Search for Shopping" />
      <div class="search-icon">🔍</div>
    </div>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-item" onClick={() => { scrollToSection('mens-section'); setMenuOpen(false); }}>Mens</div>
        <div className="menu-item" onClick={() => { scrollToSection('women-section'); setMenuOpen(false); }}>Womens</div>
        <div className="menu-item" onClick={() => { scrollToSection('kids-section'); setMenuOpen(false); }}>Kids</div>
        <div className="menu-item" onClick={() => { scrollToSection('shoes-section'); setMenuOpen(false); }}>Shoes</div>
         <button className="menu-item1" onClick={() => navigate('/')}>Logout</button>
        {isAuthenticated && <div className="menu-item" onClick={onLogout}>Logout</div>}
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <div className="nav-right">
        {!isAuthenticated && <button onClick={() => navigate('/')} className="login-btn">Login</button>}
        {!isAuthenticated && <button onClick={() => navigate('/SignUp')} className="signup-btn">SignUp</button>}
        <a href="/cart" className="nav-link">
          <i className="fa-shopping-cart"></i>🛒Cart {cartCount > 0 && `(${cartCount})`}
        </a>
      </div>
    </nav>
  );
}

export default Nav;
