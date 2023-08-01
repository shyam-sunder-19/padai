'use client'

import { useState, useEffect } from 'react';
import Form from '../Form';

const FormSlide = () => {
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
      }, 5000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }, [isMobile]);
  
    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div className={`flex flex-wrap min-h-[70vh] mt-0.1 justify-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
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
        <Form />

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
      </div>)
}

export default FormSlide