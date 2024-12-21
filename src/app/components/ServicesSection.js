import React, { useState } from 'react';
import { ChevronRight, X, Network, Cloud, Shield, CheckCircle, ArrowRight, Cog, Building, Laptop } from 'lucide-react';

const SERVICES = [
  {
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    title: "Public Safety & Emergency Systems",
    description: "Mission-critical IT solutions for emergency management and public safety operations.",
    details: {
      overview: "Specialized IT infrastructure and systems designed to support emergency services, public safety operations, and critical response systems for state and local government agencies.",
      keyFeatures: [
        "Emergency response management systems",
        "Real-time incident tracking and reporting",
        "Integrated communication platforms",
        "Mobile command center solutions"
      ],
      benefits: [
        "Improved emergency response times",
        "Enhanced coordination between agencies",
        "Real-time situational awareness",
        "Reliable 24/7 operation support"
      ],
      technologies: [
        "Computer-Aided Dispatch (CAD)",
        "Emergency Alert Systems",
        "Mobile Data Terminals",
        "Incident Management Software"
      ]
    }
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    title: "Cloud & Digital Transformation",
    description: "Secure cloud solutions and digital modernization for government agencies.",
    details: {
      overview: "Comprehensive digital transformation services that modernize government operations through secure cloud solutions, while ensuring compliance with all relevant regulations.",
      keyFeatures: [
        "FedRAMP-compliant cloud migration",
        "Legacy system modernization",
        "Digital workflow automation",
        "Cloud-based disaster recovery"
      ],
      benefits: [
        "Improved operational efficiency",
        "Cost-effective scalability",
        "Enhanced service delivery",
        "Reduced maintenance overhead"
      ],
      technologies: [
        "Government Cloud Platforms",
        "Containerization",
        "Microservices Architecture",
        "Automated DevSecOps"
      ]
    }
  },
  {
    icon: <Building className="w-8 h-8 text-cyan-600" />,
    title: "Smart Infrastructure",
    description: "Intelligent solutions for traffic and transportation management systems.",
    details: {
      overview: "Advanced IT solutions for modern urban infrastructure, focusing on traffic management and transportation systems that enhance public service delivery.",
      keyFeatures: [
        "Intelligent traffic management",
        "Smart transportation systems",
        "Real-time monitoring solutions",
        "Automated incident detection"
      ],
      benefits: [
        "Improved traffic flow",
        "Enhanced public safety",
        "Reduced congestion",
        "Data-driven decision making"
      ],
      technologies: [
        "IoT Sensors and Networks",
        "AI-powered Analytics",
        "Smart Traffic Controllers",
        "Real-time Data Processing"
      ]
    }
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-600" />,
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions ensuring regulatory compliance.",
    details: {
      overview: "State-of-the-art cybersecurity services designed specifically for government agencies, ensuring both protection against threats and compliance with regulatory requirements.",
      keyFeatures: [
        "24/7 Security monitoring",
        "Compliance management",
        "Threat detection and response",
        "Security awareness training"
      ],
      benefits: [
        "Enhanced data protection",
        "Regulatory compliance",
        "Reduced security risks",
        "Improved incident response"
      ],
      technologies: [
        "Zero Trust Architecture",
        "AI-powered Threat Detection",
        "Compliance Automation",
        "Advanced Encryption"
      ]
    }
  },
  {
    icon: <Cog className="w-8 h-8 text-cyan-600" />,
    title: "Custom IT Solutions",
    description: "Tailored OEM and custom IT solutions for specific agency needs.",
    details: {
      overview: "Specialized IT solutions designed and developed specifically for state and local government agencies in the Tri-State area, with local support and expertise.",
      keyFeatures: [
        "Custom software development",
        "System integration services",
        "Legacy system modernization",
        "Local technical support"
      ],
      benefits: [
        "Solutions matched to exact needs",
        "Rapid local support response",
        "Streamlined operations",
        "Cost-effective maintenance"
      ],
      technologies: [
        "Modern Development Frameworks",
        "API Integration Tools",
        "Custom Hardware Solutions",
        "Automated Testing Systems"
      ]
    }
  },
  {
    icon: <Laptop className="w-8 h-8 text-cyan-600" />,
    title: "Managed IT Services",
    description: "Comprehensive IT management and support services.",
    details: {
      overview: "Full-spectrum managed IT services providing reliable, continuous support for government agencies with a focus on maintaining operational excellence.",
      keyFeatures: [
        "24/7 IT support",
        "Infrastructure management",
        "Help desk services",
        "System maintenance"
      ],
      benefits: [
        "Reduced downtime",
        "Predictable IT costs",
        "Proactive maintenance",
        "Local expert support"
      ],
      technologies: [
        "Remote Monitoring Tools",
        "Service Desk Systems",
        "Automation Platforms",
        "Asset Management Software"
      ]
    }
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-16 bg-white relative" id='services'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
            Innovative IT Solutions for Government
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Minority-owned, New York-based IT solutions provider delivering secure, compliant, and innovative technology services for state and local government agencies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div 
                className="bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100 h-full flex flex-col"
              >
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-100 rounded-full inline-block group-hover:bg-gradient-to-r group-hover:from-cyan-100 group-hover:to-indigo-100 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-800">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 flex-grow">{service.description}</p>
                
                <button 
                  onClick={() => setActiveService(activeService === index ? null : index)}
                  className="text-cyan-600 flex items-center hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base mt-auto"
                >
                  Learn More <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {activeService === index && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
                  onClick={() => setActiveService(null)}
                >
                  <div 
                    className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-6 md:p-10">
                      <button 
                        onClick={() => setActiveService(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                      >
                        <X className="w-6 h-6 md:w-8 md:h-8" />
                      </button>
                      
                      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                        <div>
                          <div className="flex items-center mb-4 md:mb-6">
                            <div className="mr-4">{service.icon}</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
                          </div>
                          <p className="text-base md:text-lg text-gray-600 mb-6">{service.details.overview}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold mb-4 text-cyan-600">Key Features</h4>
                            <ul className="space-y-2">
                              {service.details.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm md:text-base text-gray-700">
                                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-cyan-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold mb-4 text-indigo-600">Benefits</h4>
                            <ul className="space-y-2">
                              {service.details.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm md:text-base text-gray-700">
                                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-500" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
                        <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">Advanced Technologies</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                          {service.details.technologies.map((tech, idx) => (
                            <div 
                              key={idx} 
                              className="bg-gray-100 p-3 md:p-4 rounded-xl text-center hover:bg-cyan-50 transition-colors"
                            >
                              <p className="font-medium text-xs md:text-sm text-gray-700">{tech}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;