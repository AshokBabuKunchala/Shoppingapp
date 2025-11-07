// src/Components/Mens.js
import React, { useState } from "react";
import men1 from "../Assets/men1.jpg";
import men2 from "../Assets/men2.jpg";
import men3 from "../Assets/men3.jpg";
import men4 from "../Assets/men4.jpg";
import men5 from "../Assets/men5.jpg";
import men6 from "../Assets/men6.jpg";
import "./CollectionStyles.css";

const mensProducts = [
  { id: 1, name: "Men Kurta", image: men1, sizes: ["S", "M", "L", "XL"], colors: ["Red", "Blue", "Black"], price: 1000, discount: 25 },
  { id: 2, name: "Men Kurta", image: men2, sizes: ["S","M", "L", "XL"], colors: ["Green", "Black"], price: 1000, discount: 25 },
  { id: 3, name: "Men T-Shirt", image: men3, sizes: ["S", "M", "L", "XL"], colors: ["Red", "Blue", "Black"], price: 1000, discount: 25 },
  { id: 4, name: "Men T-Shirt", image: men4, sizes: ["S","M", "L", "XL"], colors: ["Green", "Black"], price: 1000, discount: 25 },
  { id: 5, name: "Men HalfHands", image: men5, sizes: ["S", "M", "L", "XL"], colors: ["Red", "Blue", "Black"], price: 1000, discount: 25 },
  { id: 6, name: "Men Hoodie", image: men6, sizes: ["S","M", "L", "XL"], colors: ["Green", "Black"], price: 1000, discount: 25 },
];

function Mens() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (productId, field, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      }
    }));
  };

  return (
    <div className="collection-container">
      <h1>Men's Collection</h1>
      <div className="collection-row">
        {mensProducts.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name} 
              onClick={() => setSelectedProduct(product)} 
              style={{ cursor: "pointer" }} 
            />
            <h3>{product.name}</h3>

            {selectedProduct?.id === product.id && (
              <>
                <label>Size:</label>
                <select
                  value={selectedOptions[product.id]?.size || ""}
                  onChange={(e) => handleChange(product.id, "size", e.target.value)}
                >
                  <option value="">Select Size</option>
                  {product.sizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>

                <label>Color:</label>
                <select
                  value={selectedOptions[product.id]?.color || ""}
                  onChange={(e) => handleChange(product.id, "color", e.target.value)}
                >
                  <option value="">Select Color</option>
                  {product.colors.map(color => <option key={color} value={color}>{color}</option>)}
                </select>

                <div className="price-details">
                  <p><strong>Price:1000</strong> ₹{product.price}</p>
                  <p><strong>Discount:25</strong> {product.discount}% off</p>
                  <p><strong>You save:250</strong> ₹{(product.price * product.discount / 100)}</p>
                  <p><strong>Final Price:750</strong> ₹{(product.price - (product.price * product.discount / 100))}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;