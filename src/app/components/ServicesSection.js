import React, { useState } from 'react';
import { ChevronRight, X, Network, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    title: "Network Infrastructure",
    description: "Advanced networking solutions for robust public sector connectivity.",
    details: {
      overview: "Our comprehensive network infrastructure services provide cutting-edge solutions designed to enhance governmental communication and data transfer capabilities.",
      keyFeatures: [
        "End-to-end network design and implementation",
        "Secure and scalable network architecture",
        "Advanced threat detection and prevention",
        "High-availability and redundancy solutions"
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced data security and privacy",
        "Seamless inter-agency communication",
        "Reduced network downtime"
      ],
      technologies: [
        "Software-Defined Networking (SDN)",
        "Next-Generation Firewalls",
        "Zero Trust Network Architecture",
        "Advanced Encryption Protocols"
      ]
    }
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud computing for government agencies.",
    details: {
      overview: "Transform your agency's digital landscape with our enterprise-grade cloud solutions tailored to meet the most stringent government compliance requirements.",
      keyFeatures: [
        "Hybrid and multi-cloud strategies",
        "Secure cloud migration",
        "Compliance-driven cloud architecture",
        "Disaster recovery and backup solutions"
      ],
      benefits: [
        "Cost-effective infrastructure",
        "Scalable and flexible computing resources",
        "Enhanced data accessibility",
        "Reduced IT management overhead"
      ],
      technologies: [
        "Kubernetes Container Orchestration",
        "FedRAMP Compliant Cloud Platforms",
        "Advanced Cloud Security Tools",
        "AI-Powered Cloud Optimization"
      ]
    }
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-600" />,
    title: "Cybersecurity",
    description: "Comprehensive digital protection and threat mitigation strategies.",
    details: {
      overview: "Our cybersecurity services provide multi-layered defense mechanisms against evolving digital threats, ensuring the highest level of protection for critical government infrastructure.",
      keyFeatures: [
        "Comprehensive threat intelligence",
        "Proactive vulnerability assessment",
        "Incident response and recovery",
        "Continuous security monitoring"
      ],
      benefits: [
        "Minimized security risks",
        "Rapid threat detection and mitigation",
        "Compliance with strict security standards",
        "Protecting sensitive government data"
      ],
      technologies: [
        "Advanced Threat Detection AI",
        "Quantum-Resistant Encryption",
        "Behavioral Analytics",
        "Zero Trust Security Framework"
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
            Our Innovative Services
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge IT solutions designed to empower public sector excellence through advanced technological frameworks
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div 
                className="bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-100 rounded-full inline-block group-hover:bg-gradient-to-r group-hover:from-cyan-100 group-hover:to-indigo-100 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-800">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
                
                <button 
                  onClick={() => setActiveService(activeService === index ? null : index)}
                  className="text-cyan-600 flex items-center hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base"
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