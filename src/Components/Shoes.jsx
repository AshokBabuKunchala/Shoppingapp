// src/Components/Shoes.js
import React, { useState } from "react";
import shoe1 from "../Assets/shoe1.jpg";
import shoe2 from "../Assets/shoe2.jpg";
import shoe3 from "../Assets/shoe3.jpg";
import shoe4 from "../Assets/shoe4.jpg";
import shoe5 from "../Assets/shoe5.jpg";
import shoe6 from "../Assets/shoe6.jpg";
import "./CollectionStyles.css";

const shoesProducts = [
  { id: 1, name: "Sports Shoes", image: shoe1, sizes: ["7", "8", "9", "10"], colors: ["Black", "White"], price: 1000, discount: 60 },
  { id: 2, name: "Casual Shoes", image: shoe2, sizes: ["6", "7", "8", "9"], colors: ["Brown", "Black"], price: 1000, discount: 60 },
   { id: 3, name: "Sports Shoes", image: shoe3, sizes: ["7", "8", "9", "10"], colors: ["Black", "White"], price: 1000, discount: 60 },
  { id: 4, name: "Casual Shoes", image: shoe4, sizes: ["6", "7", "8", "9"], colors: ["Brown", "Black"], price: 1000, discount: 60 },
   { id: 5, name: "Sports Shoes", image: shoe5, sizes: ["7", "8", "9", "10"], colors: ["Black", "White"], price: 1000, discount: 60 },
  { id: 6, name: "Casual Shoes", image: shoe6, sizes: ["6", "7", "8", "9"], colors: ["Brown", "Black"], price: 1000, discount: 60 },
];


function Shoes() {
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
      <h1>Shoes Collection</h1>
      <div className="collection-row">
        {shoesProducts.map(product => (
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
                  <p><strong>Discount:60</strong> {product.discount}% off</p>
                  <p><strong>You save:600</strong> ₹{(product.price * product.discount / 100).toFixed(2)}</p>
                  <p><strong>Final Price:400</strong> ₹{(product.price - (product.price * product.discount / 100)).toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
