import React from 'react';
import bg from '../Assets/bg.jpg';

function MyComponent({ children }) {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0'
    }}>
      {children}
    </div>
  );
}

export default MyComponent;
