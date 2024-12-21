import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Mohammed Abdun Noor',
    title: 'Managing Member',
    image: 'noor sir.avif',
    email: 'david.kim@company.com',
    linkedin: 'https://linkedin.com/in/davidkim',
    achievements: ['Operational Excellence Award', 'Efficiency Innovator']
  },
  {
    name: 'Dr. Santanu Das',
    title: 'Lead Project Manager',
    image: 'dr_santanu_das.jpeg',
    email: 'santanu44@aol.com',
    linkedin: 'https://www.linkedin.com/in/dr-santanu-das-3917201b/',
    achievements: ['Tech Innovator Award', 'Government Leadership Excellence']
  },
  {
    name: 'Azizur Rahman',
    title: 'Software Engineer',
    image: 'dp.jpeg',
    email: 'azizurusa22@gmail.com',
    linkedin: 'https://www.linkedin.com/in/azizur-rahman-720636165/',
    achievements: ['Product Design Visionary', 'Emerging Tech Strategist']
  },
  {
    name: 'Ishtiak Ahmed',
    title: 'Managing Member',
    image: '/api/placeholder/300/400',
    email: 'michael.chen@company.com',
    linkedin: 'https://linkedin.com/in/michaelchen',
    achievements: ['AI Innovation Leader', 'Digital Transformation Expert']
  },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerView = () => {
    switch (screenSize) {
      case 'mobile': return 1;
      case 'tablet': return 2;
      default: return 3;
    }
  };

  const minSwipeDistance = 50;
  const maxSwipeTime = 500;
  const [touchStartTime, setTouchStartTime] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartTime(Date.now());
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const touchDuration = Date.now() - touchStartTime;
    const distance = touchStart - touchEnd;
    const isQuickSwipe = touchDuration < maxSwipeTime;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if ((isLeftSwipe && isQuickSwipe) || (screenSize === 'mobile' && Math.abs(distance) > minSwipeDistance)) {
      moveSlide('next');
    }
    if ((isRightSwipe && isQuickSwipe) || (screenSize === 'mobile' && Math.abs(distance) > minSwipeDistance)) {
      moveSlide('prev');
    }
  };

  const moveSlide = (direction) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => {
        const itemsPerView = getItemsPerView();
        const totalSlides = Math.ceil(TEAM_MEMBERS.length / itemsPerView);
        const nextIndex = direction === 'next'
          ? (prev + 1) % totalSlides
          : (prev - 1 + totalSlides) % totalSlides;
        return nextIndex;
      });
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const nextSlide = () => moveSlide('next');
  const prevSlide = () => moveSlide('prev');

  useEffect(() => {
    if (!isPaused && screenSize !== 'mobile') {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, screenSize]);

  const handleContactClick = (type, value) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (type === 'linkedin') {
      window.open(value, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section id="team" className="py-4 sm:py-8 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-6 sm:mb-8 lg:mb-16 space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text leading-tight">
            Meet Our Leadership Team
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Pioneering experts who transform technological challenges into innovative government solutions
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute inset-y-0 items-center w-full z-20 px-2 sm:px-4 pointer-events-none">
            <button
              className="p-2 rounded-full bg-white/60 hover:bg-white/80 shadow-md sm:hidden pointer-events-auto"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              className="p-2 rounded-full bg-white/60 hover:bg-white/80 shadow-md sm:hidden ml-auto pointer-events-auto"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <button
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 pointer-events-auto"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
          
          <button
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 pointer-events-auto"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          {/* Content Slider */}
          <div 
            className="touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)`,
                }}
              >
                {TEAM_MEMBERS.map((member, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 px-2 sm:px-3 lg:px-4 ${
                      screenSize === 'mobile' 
                        ? 'w-full' 
                        : screenSize === 'tablet' 
                          ? 'w-1/2' 
                          : 'w-1/3'
                    }`}
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <div className="relative aspect-w-3 aspect-h-4 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-4 sm:p-5 lg:p-6 text-center">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                          {member.title}
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3">
                          {member.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-purple-50 text-purple-600"
                            >
                              <Award className="w-3 h-3 mr-1.5" />
                              {achievement}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-center space-x-3">
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 inline-flex items-center justify-center"
                            aria-label={`Send email to ${member.name}`}
                          >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 inline-flex items-center justify-center"
                            aria-label={`View ${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
          {Array.from({ length: Math.ceil(TEAM_MEMBERS.length / getItemsPerView()) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-purple-600 w-4' 
                  : 'bg-gray-300 hover:bg-purple-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;