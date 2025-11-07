import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CollectionStyles.css";

function InWomen({ cartItems, setCartItems }) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state; // product data passed from Home
  const [selectedSize, setSelectedSize] = useState("M"); // default size
  const [mainImage, setMainImage] = useState(product?.image);

  const handleAddToCart = () => {
    // Check if product is already in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    let updatedItems;
    if (existingItemIndex !== -1) {
      // Increment quantity
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      alert('Quantity increased!');
    } else {
      // Add new item with quantity 1
      updatedItems = [...cartItems, { ...product, quantity: 1 }];
      alert('Added to cart!');
    }
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    // Store the last product ID for back navigation
    localStorage.setItem('lastProductId', product.id);
    // Navigate to cart
    navigate('/cart');
  };

  const handleBuyNow = () => {
    const options = {
      key: 'rzp_test_RcQnloDQza5avO',
      amount: product.price * 100, // amount in paisa
      currency: 'INR',
      name: 'ShopEasy',
      description: product.name,
      image: 'https://example.com/your_logo',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // Handle success, e.g., navigate to success page or update order status
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'ShopEasy Corporate Office'
      },
      theme: {
        color: '#3399cc'
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!product) return <p>Product not found</p>;

  // Example additional views
  const views = [
    { label: "Front", img: product.image },
    { label: "Back", img: product.backImage || product.image },
    { label: "Side", img: product.sideImage || product.image },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"]; // example women sizes

  return (
    <>
      <section className="category-section inwomen-detail">
        <div className="category-row">
          {/* ✅ Image Gallery */}
          <div className="image-gallery">
            <div className="thumbnail-column">
              {views.map((view, index) => (
                <img
                  key={index}
                  src={view.img}
                  alt={view.label}
                  className="thumbnail-img"
                  onClick={() => setMainImage(view.img)}
                />
              ))}
            </div>
            <img src={mainImage} alt={product.name} className="main-img" />
          </div>

          {/* ✅ Product Info */}
          <div className="product-info inwomen-info">
            <div className="product-info-details">
              <h2>{product.brand}</h2>
              <p className="product-name">{product.name}</p>
              <p>Color: {product.color}</p>
              <p>
                ₹{product.price}{" "}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.originalPrice}
                </span>{" "}
                <span style={{ color: "green" }}>{product.discount}% off</span>
              </p>

              {/* ✅ Size Selector */}
              <div className="size-selector">
                <p>Select Size:</p>
                <div className="sizes">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${
                        selectedSize === size ? "selected" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ Buttons */}
              <div className="image-buttons">
                <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InWomen;
