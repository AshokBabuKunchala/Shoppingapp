// src/Components/ShopSection.js
import React from "react";
import "./HomeStyles.css";
import { useNavigate } from "react-router-dom";

// Sample image imports (replace with your actual image paths)
import men1 from "../Assets/men1.jpg";
import men2 from "../Assets/men2.jpg";
import women1 from "../Assets/women1.jpg";
import women2 from "../Assets/women2.jpg";
import kid1 from "../Assets/kid1.jpg";
import kid2 from "../Assets/kid2.jpg";
import shoe1 from "../Assets/shoe1.jpg";
 import shoe2 from "../Assets/shoe2.jpg";

function ShopSection() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Men's Collection",
      images: [men1, men2],
      path: "/mens",
    },
    {
      title: "Women's Collection",
      images: [women1, women2],
      path: "/womens",
    },
    {
      title: "Kids' Collection",
      images: [kid1, kid2],
      path: "/kids",
    },
    {
      title: "Shoes Collection",
      images: [shoe1, shoe2],
      path: "/shoes",
    },
  ];

  const handleImageClick = (path) => {
    navigate(path); // navigate to that collection page
  };

  return (
    <section className="shop-container">
      {categories.map((category, index) => (
        <div key={index} className="shop-row">
          <div className="image-row">
            {category.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={category.title}
                className="shop-image"
                onClick={() => handleImageClick(category.path)}
              />
            ))}
          </div>
          <p className="row-text">{category.title}</p>
        </div>
      ))}
    </section>
  );
}

export default ShopSection;
