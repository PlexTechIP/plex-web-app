'use client';

import React, { useState } from "react";

interface DividedTextCarouselProps {
  content: { text: string; author: string }[];
}

const DividedTextCarousel: React.FC<DividedTextCarouselProps> = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative container mx-auto px-6">
      {/* Current Slide */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="flex-1">
          <p className="text-gray-700 text-lg">{content[currentSlide].text}</p>
        </div>
        <div className="text-right flex-none w-1/3 pl-4">
          <p className="text-gray-700 font-semibold text-lg">{content[currentSlide].author}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>

      {/* Dots for Slide Navigation */}
      <div className="flex justify-center space-x-3 mt-6">
        {content.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index
              ? "bg-gray-800"
              : "bg-gray-500 hover:bg-gray-700"
              }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DividedTextCarousel;
