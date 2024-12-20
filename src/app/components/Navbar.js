import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'team', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'blog', label: 'Blogs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-3">
              <img
                src="Next Generation Innovation LLC.png"
                alt="Next Generation Innovation Logo"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text leading-tight hidden sm:block">
                  Next Generation
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text leading-tight hidden sm:block">
                  Innovation L.L.C.
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text leading-tight sm:hidden">
                  NGI L.L.C.
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out
                    ${activeSection === item.id 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-600' 
                      : 'text-gray-700 hover:text-cyan-600'
                    }`}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center
                  ${activeSection === 'contact'
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:opacity-90'
                  }`}
              >
                Contact Us
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button" 
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-600'
                    : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className={`block px-3 py-2 rounded-md text-base font-semibold text-center
                ${activeSection === 'contact'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white'
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}