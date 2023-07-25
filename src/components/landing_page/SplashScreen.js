'use client'

import { useState, useEffect } from "react";

const SplashScreen = () => {
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#fdcb6e'];
    const breakpoint = 768; // You can adjust this breakpoint value as needed
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      const interval = setInterval(() => {
        if (!isMobile) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % colors.length);
        }
      }, 3000); // Change slide every 3 seconds
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }, [isMobile]);
  
    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };
  
    return (
      <div className={`flex min-h-[50vh] mt-0.1 justify-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
        {/* Slideshow (left for larger screens) */}
        {!isMobile && (
          <div className="flex-1 relative p-8">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {colors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Content (right) */}
        <div className={`flex-1 mt-[10vh] p-8 ${isMobile ? 'order-0 mt-[1vh]' : ''}`}>
          <h1 className="text-4xl font-bold">Catchy Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nulla vel ex posuere sollicitudin.
          </p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 rounded-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">Search</button>
          </div>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600">Click Here</button>
        </div>

        {/* Slideshow (bottom for smaller screens) */}
        {isMobile && (
          <div className="flex-1 relative p-8">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {colors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}


      </div>
    );
  };
  
  export default SplashScreen;