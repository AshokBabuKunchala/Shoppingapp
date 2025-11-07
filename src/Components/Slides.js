import React, { useState, useEffect, useRef } from "react";
import "./HomeStyles.css";
import img from "../Assets/bg1.jpg"
import img1 from "../Assets/bg2.jpg"
import img2 from "../Assets/bg3.jpg"
import img3 from "../Assets/bg4.jpg"
import img4 from "../Assets/bg5.jpg"
function DiscountScroll() {
  const slides = [
    {
      img: img,
      text: "Flat 50% off on Men’s Wear",
    },
    {
      img: img1,
      text: "Buy 1 Get 1 Free on Women’s Collection",
    },
    {
      img: img2,
      text: "30% off on Kids Fashion",
    },
    {
      img: img3,
      text: "Exclusive Winter Collection Sale",
    },
    {
      img:img4,
      text: "Up to 60% off on Footwear",
    },
  ];

  // Clone first slide at the end for infinite effect
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  // When transition ends and we reach the cloned last slide, reset to 0 instantly
  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Turn transition off for instant reset
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="discount-scroll">
      <div
        className="discount-slides"
        ref={slideRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div className="discount-card" key={index}>
            <img src={slide.img} alt={slide.text} />
            <p>{slide.text}</p>
          </div>
        ))}
        {/* 👇 Clone first slide for smooth infinite loop */}
        <div className="discount-card" key="clone">
          <img src={slides[0].img} alt={slides[0].text} />
          <p>{slides[0].text}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="discount-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              currentIndex % totalSlides === index ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default DiscountScroll;