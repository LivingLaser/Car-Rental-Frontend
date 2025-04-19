import React, { useState, useEffect } from "react";

const quotes = [
  <>
  Rent Your <span className="text-stroke "> Perfect</span> Car!
  </>,
  <>
  <span className="text-stroke"> Hassle-Free </span> Rentals!
  </>,
  <>
  <span className="text-stroke"> Anywhere, Anytime</span> – The Keys to Your Next Drive!
  </>,
  <>
  From <span className="text-stroke "> City Streets to Open Roads</span> – We’ve Got You Covered! 
  </>
  
];

const images = [
  "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
  "https://motoringworld.in/wp-content/uploads/2022/05/Mahindra-Scorpion-N-unveiled-4.jpg",
  "https://images.hindustantimes.com/auto/img/2024/02/05/1600x900/Curvv-Front-3-4th-Angle-scaled_1707118161796_1707124287643.jpg",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra-BE/6e/9263/1732689215786/side-view-(left)-90.jpg",
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