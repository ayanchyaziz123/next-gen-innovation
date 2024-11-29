import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample Testimonials Data (replace with actual testimonials)
const TESTIMONIALS = [
  {
    quote: "Their innovative approach to government technology solutions has transformed our operational efficiency. The team's expertise is unparalleled.",
    author: "John Smith",
    position: "Director of Operations, City Government"
  },
  {
    quote: "Working with this team has been a game-changer. Their strategic insights and technological solutions have helped us modernize our processes.",
    author: "Emily Rodriguez",
    position: "CIO, State Department"
  },
  {
    quote: "The depth of expertise and commitment to solving complex challenges is truly remarkable. They don't just provide solutions; they become a strategic partner.",
    author: "Michael Chen",
    position: "Chief Technology Officer, Federal Agency"
  }
];

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Corrected navigation methods
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % TESTIMONIALS.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  // Touch handling for mobile swipes
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 bg-gray-100"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card with Responsive Padding and Typography */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl text-center relative">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 text-gray-200 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />
            
            {/* Testimonial Content */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl italic text-gray-800 mb-6 sm:mb-8">
                "{TESTIMONIALS[currentTestimonial].quote}"
              </p>
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                  {TESTIMONIALS[currentTestimonial].author}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {TESTIMONIALS[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Navigation Buttons with Responsive Sizing */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-1.5 sm:p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-1.5 sm:p-2 rounded-full shadow-md transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Pagination Dots with Responsive Sizing */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentTestimonial === index 
                    ? 'bg-cyan-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;