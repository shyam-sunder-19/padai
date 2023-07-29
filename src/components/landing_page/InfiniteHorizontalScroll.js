'use client'
import { useRef, useEffect } from 'react';

const InfiniteHorizontalScroll = ({ numSquares }) => {
  const containerRef = useRef(null);
  const squareSize = 100; // Set your desired square size here
  const spacing = 10; // Set your desired spacing between squares here

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const totalWidth = (squareSize + spacing) * numSquares;

    let animationTime = 0;
    let requestId;

    const animateScroll = () => {
      animationTime += 1 / 60; // Assuming 60fps

      const scrollX = ((animationTime % 5) / 5) * totalWidth;

      container.style.transform = `translateX(-${scrollX}px)`;

      requestId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    // Clean up the animation frame when the component is unmounted
    return () => cancelAnimationFrame(requestId);
  }, [numSquares]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{ width: 'calc(100vw + 100%)' }}
        ref={containerRef}
      >
        {Array.from({ length: numSquares }).map((_, index) => (
          <div
            key={index}
            className="bg-blue-500 mx-2"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              marginRight: `${spacing}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;