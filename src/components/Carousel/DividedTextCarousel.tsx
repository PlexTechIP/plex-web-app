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
    <div className="relative mx-auto max-w-4xl px-8 md:px-12">
      {/* Current Slide */}
      <div className="flex min-h-48 flex-col justify-center gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex-row md:items-center md:p-9">
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-slate-700">“{content[currentSlide].text}”</p>
        </div>
        <div className="flex-none md:w-1/3 md:border-l md:border-slate-200 md:pl-6 md:text-right">
          <p className="text-base font-semibold text-slate-900">{content[currentSlide].author}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous testimonial"
        className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-sm transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        aria-label="Next testimonial"
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-sm transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        &#10095;
      </button>

      {/* Dots for Slide Navigation */}
      <div className="flex justify-center space-x-3 mt-6">
        {content.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${currentSlide === index
              ? "bg-orange-500"
              : "bg-slate-300 hover:bg-slate-400"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DividedTextCarousel;
