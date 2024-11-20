import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample Testimonials Data (replace with actual testimonials)
const TESTIMONIALS = [
  {
    quote: "Their innovative approach to government technology solutions has transformed our operational efficiency. The team&apos;s expertise is unparalleled.",
    author: "John Smith",
    position: "Director of Operations, City Government"
  },
  {
    quote: "Working with this team has been a game-changer. Their strategic insights and technological solutions have helped us modernize our processes.",
    author: "Emily Rodriguez",
    position: "CIO, State Department"
  },
  {
    quote: "The depth of expertise and commitment to solving complex challenges is truly remarkable. They don&apos;t just provide solutions; they become a strategic partner.",
    author: "Michael Chen",
    position: "Chief Technology Officer, Federal Agency"
  }
];

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center relative">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 text-gray-200 w-12 h-12" />
            
            {/* Testimonial Content */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-2xl italic text-gray-800 mb-8">
                "{TESTIMONIALS[currentTestimonial].quote}"
              </p>
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {TESTIMONIALS[currentTestimonial].author}
                </p>
                <p className="text-gray-600">
                  {TESTIMONIALS[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
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