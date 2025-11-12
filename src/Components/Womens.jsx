// src/Components/Womens.js
import React, { useState } from "react";
import women1 from "../Assets/women1.jpg";
import women2 from "../Assets/women2.jpg";
import women3 from "../Assets/women3.jpg";
import women4 from "../Assets/women4.jpg";
import women5 from "../Assets/women5.jpg";
import women6 from "../Assets/women6.jpg";
import "./CollectionStyles.css";

const womensProducts = [
  { id: 1, name: "Women Dress", image: women1, sizes: ["S", "M", "L"], colors: ["Pink", "Blue", "White"], price: 1000, discount: 10 },
  { id: 2, name: "Women Top", image: women2, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Red"], price: 1000, discount: 10 },
  { id: 3, name: "Women Dress", image: women3, sizes: ["S", "M", "L"], colors: ["Pink", "Blue", "White"], price: 1000, discount: 10 },
  { id: 4, name: "Women Top", image: women4, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Red"], price: 1000, discount: 10 },
  { id: 5, name: "Women Dress", image: women5, sizes: ["S", "M", "L"], colors: ["Pink", "Blue", "White"], price: 1000, discount: 10 },
  { id: 6, name: "Women Top", image: women6, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Red"], price: 1000, discount: 10 },
];

function Womens() {
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
      <h1>Women's Collection</h1>
      <div className="collection-row">
        {womensProducts.map(product => (
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
                  <p><strong>Discount:10</strong> {product.discount}% off</p>
                  <p><strong>You save:100</strong> ₹{(product.price * product.discount / 100).toFixed(2)}</p>
                  <p><strong>Final Price:900</strong> ₹{(product.price - (product.price * product.discount / 100)).toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Womens;