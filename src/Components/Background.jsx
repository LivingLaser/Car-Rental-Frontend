import React, { useState, useEffect } from "react";

const quotes = [
  "Rent Your Perfect Car!",
  "Hassle-Free Rentals!",
  "Anywhere, Anytime – The Keys to Your Next Drive!",
  "From City Streets to Open Roads – We’ve Got You Covered!",
];

const images = [
  "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
  "https://blog.sothebysrealty.co.uk/hubfs/Rolls-Royce%20Boat%20Tail-jpg.jpeg",
  "https://images.hindustantimes.com/auto/img/2024/02/05/1600x900/Curvv-Front-3-4th-Angle-scaled_1707118161796_1707124287643.jpg",
  "https://www.motortrend.com/files/6740cdd5dc8b4600082c7206/001-2025-bmw-i4-edrive40-lead.jpg?w=768&width=768&q=75&format=webp",
];

const Background = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden rounded-lg">
      {/* Background images */}
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Parallax quotes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg animate-fade">
          {quotes[currentIndex % quotes.length]}
        </p>
      </div>
    </div>
  );
};

export default Background;