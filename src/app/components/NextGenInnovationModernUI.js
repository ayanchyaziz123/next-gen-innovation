import React, { useState } from 'react';
import Testimonial from './Testimonial';
import TeamSection from './TeamSection';
import { 
  ChevronRight, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Menu,
  X,
  Mail, 
  PhoneCall, 
  MapPin, 
  Linkedin,
  CheckCircle2
} from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Azizur Rahman",
    title: "Founder & CEO",
    image: "dp.jpeg",
    email: "jane.rodriguez@nextgeninnovation.com",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/api/placeholder/400/400",
    email: "michael.chen@nextgeninnovation.com",
    linkedin: "#"
  },
  {
    name: "Sarah Thompson",
    title: "Director of Client Solutions",
    image: "/api/placeholder/400/400",
    email: "sarah.thompson@nextgeninnovation.com",
    linkedin: "#"
  },
  {
    name: "David Nguyen",
    title: "Senior Cybersecurity Architect",
    image: "/api/placeholder/400/400",
    email: "david.nguyen@nextgeninnovation.com",
    linkedin: "#"
  }
];

const SERVICES = [
  {
    title: "Public Safety Solutions",
    description: "Advanced IT infrastructure for emergency response and management systems.",
    icon: <ShieldCheck className="w-12 h-12 text-cyan-500" />
  },
  {
    title: "Cybersecurity Innovations",
    description: "Comprehensive security frameworks protecting critical government digital assets.",
    icon: <Cpu className="w-12 h-12 text-emerald-500" />
  },
  {
    title: "Digital Transformation",
    description: "Modernizing government processes through cutting-edge technological solutions.",
    icon: <Server className="w-12 h-12 text-indigo-500" />
  }
];

const TESTIMONIALS = [
  {
    quote: "Next Generation Innovation has revolutionized our emergency management capabilities.",
    author: "John Martinez",
    position: "City Emergency Coordinator"
  },
  {
    quote: "Their cybersecurity solutions are second to none in the public sector.",
    author: "Sarah Thompson",
    position: "State IT Director"
  }
];

export default function NextGenInnovationModernUI() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      {/* Modern Navbar with Glassmorphism and Mobile Responsiveness */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
                  NGI
                </span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  Services
                </a>
                <a 
                  href="#team" 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  Team
                </a>
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 flex items-center"
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
              <a 
                href="#home" 
                className="text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white block px-3 py-2 rounded-md text-base font-semibold text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Modern Glassmorphic Design */}
      <header className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text leading-tight">
              Transforming Government Technology
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Innovative IT solutions tailored for state and local government organizations, driving digital transformation in the Tri-State area.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 flex items-center"
              >
                Our Services <ChevronRight className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-cyan-500 text-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-50 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[1,2,3,4,5,6,7,8,9].map(num => (
                  <div 
                    key={num} 
                    className="h-12 bg-gray-200/50 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section with Card Hover Effects */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
              Our Innovative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge IT solutions designed to empower public sector excellence through advanced technological frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="mb-6 p-4 bg-gray-100 rounded-full inline-block group-hover:bg-gradient-to-r group-hover:from-cyan-100 group-hover:to-indigo-100 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#" 
                  className="text-cyan-600 flex items-center hover:text-indigo-600 transition-colors duration-300"
                >
                  Learn More <ChevronRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection/>
    {/* Testimonials Section */}
    <Testimonial/>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8">
              Ready to transform your government IT infrastructure? 
              Reach out to our expert team today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span>info@nextgeninnovation.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneCall className="w-6 h-6" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span>17-101st Avenue, Brooklyn, NY. 11208</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white/10 p-8 rounded-xl backdrop-blur-lg">
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-white/20 rounded-lg border border-white/30 focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-white/20 rounded-lg border border-white/30 focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea 
                  className="w-full p-3 bg-white/20 rounded-lg border border-white/30 focus:border-blue-300 h-32"
                ></textarea>
              </div>
              <button 
                className="w-full bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Next Generation Innovation</h3>
            <p className="text-gray-300">
              Delivering innovative IT solutions tailored to government organizational needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white flex items-center">
                <CheckCircle2 className="mr-2 w-4 h-4 text-blue-400" /> Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white flex items-center">
                <CheckCircle2 className="mr-2 w-4 h-4 text-blue-400" /> About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white flex items-center">
                <CheckCircle2 className="mr-2 w-4 h-4 text-blue-400" /> Contact
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-800 text-gray-500">
          © 2024 Next Generation Innovation LLC. All Rights Reserved.
        </div>
      </footer>
      {/* ... (Team, Testimonials, Contact, Footer sections) would be updated similarly ... */}
    </div>
  );
}