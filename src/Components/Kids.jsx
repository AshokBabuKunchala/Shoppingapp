// src/Components/Kids.js
import React, { useState } from "react";
import kid1 from "../Assets/kid1.jpg";
import kid2 from "../Assets/kid2.jpg";
import kid3 from "../Assets/kid3.jpg";
import kid4 from "../Assets/kid4.jpg";
import kid5 from "../Assets/kid5.jpg";
import kid6 from "../Assets/kid6.jpg";
import "./CollectionStyles.css";

const kidsProducts = [
  { id: 1, name: "Kids Shirt", image: kid1, sizes: ["2Y", "4Y", "6Y"], colors: ["Yellow", "Blue"], price: 1000, discount: 30 },
  { id: 2, name: "Kids Dress", image: kid2, sizes: ["3Y", "5Y"], colors: ["Pink", "Green"], price: 1000, discount: 30 },
   { id: 3, name: "Kids Shirt", image: kid3, sizes: ["2Y", "4Y", "6Y"], colors: ["Yellow", "Blue"], price: 1000, discount: 30 },
  { id: 4, name: "Kids Dress", image: kid4, sizes: ["3Y", "5Y"], colors: ["Pink", "Green"], price: 1000, discount: 30 },
   { id: 5, name: "Kids Shirt", image: kid5, sizes: ["2Y", "4Y", "6Y"], colors: ["Yellow", "Blue"], price: 1000, discount: 30 },
  { id: 6, name: "Kids Dress", image: kid6, sizes: ["3Y", "5Y"], colors: ["Pink", "Green"], price: 1000, discount: 30 },
];

function Kids() {
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
      <h1>Kids Collection</h1>
      <div className="collection-row">
        {kidsProducts.map(product => (
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
                  <p><strong>Discount:30</strong> {product.discount}% off</p>
                  <p><strong>You save:300</strong> ₹{(product.price * product.discount / 100).toFixed(2)}</p>
                  <p><strong>Final Price:700</strong> ₹{(product.price - (product.price * product.discount / 100)).toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;