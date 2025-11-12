import React, { useState, useEffect, useRef } from "react";
import img from "../Assets/bg1.jpg";
import img1 from "../Assets/bg2.jpg";
import img2 from "../Assets/bg3.jpg";
import img3 from "../Assets/bg3.jpg";
import img4 from "../Assets/bg5.jpg";

function DiscountScroll() {
  const slides = [
    { img: img, text: "Flat 50% off on Men's Wear" },
    { img: img1, text: "Buy 1 Get 1 Free on Women's Collection" },
    { img: img2, text: "30% off on Kids Fashion" },
    { img: img3, text: "Exclusive Winter Collection Sale" },
    { img: img4, text: "Up to 60% off on Footwear" },
  ];

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

  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section
  className="discount-scroll"
  style={{
    position: "relative",
    width: "100vw",
    height: "50vh",
    overflow: "hidden",
    margin: " 0", // ✅ Add margin top here
    padding: 0,
    borderRadius: 0,
    boxShadow: "none",
    background: "#fff",
    border: "1px solid black",
  }}
>
      <div
        className="discount-slides"
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="discount-card"
            key={index}
            style={{
              minWidth: "100%", // Changed from 100vw to 100%
              height: "100%",
              flexShrink: 0,
              marginTop: "10px",
              marginBottom: "10px",
              position: "relative",
              textAlign: "center",
            }}
          >
            <img
              src={slide.img}
              alt={slide.text}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", /* Crops image to fill container */
                display: "block",
               
               objectFit:"contain", /* Shows entire image without cropping */
                /* OR */
               objectFit: "fill", /* Stretches image to fill container */
  
              }}
            />
            <p
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                background: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                fontSize: "1.4rem",
                fontWeight: 600,
                borderRadius: "5px",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              {slide.text}
            </p>
          </div>
        ))}

        {/* Cloned first slide for infinite loop */}
        <div 
          className="discount-card" 
          key="clone"
          style={{
            minWidth: "100%", // Changed from 100vw to 100%
            height: "100%",
            flexShrink: 0,
            position: "relative",
            textAlign: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <img
            src={slides[0].img}
            alt={slides[0].text}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              margin: 0,
              padding: 0,
            }}
          />
          <p
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px 20px",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              fontSize: "1.4rem",
              fontWeight: 600,
              borderRadius: "5px",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            {slides[0].text}
          </p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div
        className="discount-dots"
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              currentIndex % totalSlides === index ? "active" : ""
            }`}
            style={{
              height: "12px",
              width: "12px",
              margin: "0 5px",
              backgroundColor:
                currentIndex % totalSlides === index
                  ? "#007bff"
                  : "rgba(255, 255, 255, 0.6)",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default DiscountScroll;