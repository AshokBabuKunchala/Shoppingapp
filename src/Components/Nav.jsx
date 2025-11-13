import React, { useState, useEffect } from 'react';
import { useAuth } from './Authenticate';
import { useNavigate } from 'react-router-dom';
import logo1 from "../Assets/logo1.jpg";
//import './Nav.css';

function Nav({ cartItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useAuth();

  const handleLogin = () => navigate('/SignInInline');
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
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'brown',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: '"Poppins", sans-serif',
      height:"85px"
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <img src={logo1} alt="ShopEasy Logo" style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover'
        }} />
        <span style={{
          fontSize: '24px',
          fontWeight: '700',
          color: 'white',
          background: 'linear-gradient(45deg, white, white)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>ShopEasy</span>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'white',
            padding: '5px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >☰</button>
      </div>

      <div style={{
        position: 'relative',
        flex: 1,
        maxWidth: '400px',
        margin: '0 20px'
      }}>
        <input
          type="text"
          placeholder="Search for products..."
          style={{
            width: '100%',
            padding: '10px 45px 10px 16px',
            border: '2px solid #e1e5e9',
            borderRadius: '25px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#007bff';
            e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e1e5e9';
            e.target.style.boxShadow = 'none';
          }}
        />
        <div style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#666',
          fontSize: '18px',
          pointerEvents: 'none'
        }}>🔍</div>
      </div>

      <div style={{
        position: 'fixed',
        top: 0,
        left: menuOpen ? 0 : '-250px',
        width: '250px',
        height: '100vh',
        backgroundColor: 'blue',
        backdropFilter: 'blur(15px)',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
        transition: 'left 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '80px',
        zIndex: 1001
      }}>
        <div
          style={{
            padding: '15px 20px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderBottom: '1px solid #f0f0f0'
          }}
          onClick={() => { scrollToSection('mens-section'); setMenuOpen(false); }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >👔 Men's Collection</div>

        <div
          style={{
            padding: '15px 20px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderBottom: '1px solid #f0f0f0'
          }}
          onClick={() => { scrollToSection('women-section'); setMenuOpen(false); }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >👗 Women's Collection</div>
        <div
          style={{
            padding: '15px 20px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderBottom: '1px solid #f0f0f0'
          }}
          onClick={() => { scrollToSection('kids-section'); setMenuOpen(false); }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >🧸 Kids' Collection</div>
        <div
          style={{
            padding: '15px 20px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderBottom: '1px solid #f0f0f0'
          }}
          onClick={() => { scrollToSection('shoes-section'); setMenuOpen(false); }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >👟 Shoes Collection</div>
          <div
            style={{
              padding: '15px 20px',
              fontSize: '18px',
              fontWeight: '600',
              color: '#dc3545',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginTop: '0',
              borderTop: '1px solid #f0f0f0'
            }}
            onClick={onLogout}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ffebee'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >🚪 Logout</div>
      </div>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1000
          }}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        
          <button
            onClick={() => navigate('/')}
            style={{
              
              padding: '8px 16px',
              backgroundColor: 'aqua',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'aqua'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'aqua'}
          >Login</button>
        

        
          <button
            onClick={() => navigate('/SignUp')}
            style={{
              padding: '8px 16px',
              backgroundColor: 'aqua',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'aqua'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'aqua'}
          >Sign Up</button>
        

        <a
          href="/cart"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'aqua',
            border: 'none',
            borderRadius: '6px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            position: 'relative',
            height:'32px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'aqua';
            e.target.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'aqua';
            e.target.style.color = 'white';
          }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span style={{
              backgroundColor: '#dc3545',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
              minWidth: '20px',
              textAlign: 'center'
            }}>({cartCount})</span>
          )}
        </a>
      </div>
    </nav>
  );
}

export default Nav;
