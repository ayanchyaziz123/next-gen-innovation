import React from 'react';
import { Mail, Linkedin, Award } from 'lucide-react';

// Team members data (you can replace with actual data)
const TEAM_MEMBERS = [
  {
    name: 'Dr Santanu Das',
    title: 'CEO, Lead Project Manager',
    image: 'dr_santanu_das.jpeg',
    email: 'santanu44@aol.com',
    linkedin: 'https://www.linkedin.com/in/dr-santanu-das-3917201b/',
    achievements: ['Tech Innovator Award', 'Government Leadership Excellence']
  },
  {
    name: 'Ishtiak Ahmed',
    title: 'Chief Technology Officer',
    image: '/api/placeholder/300/400',
    email: 'michael.chen@company.com',
    linkedin: 'https://linkedin.com/in/michaelchen',
    achievements: ['AI Innovation Leader', 'Digital Transformation Expert']
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
    name: 'David Kim',
    title: 'Chief Operations Officer',
    image: '/api/placeholder/300/400',
    email: 'david.kim@company.com',
    linkedin: 'https://linkedin.com/in/davidkim',
    achievements: ['Operational Excellence Award', 'Efficiency Innovator']
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-indigo-700 text-transparent bg-clip-text leading-tight">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering experts who transform technological challenges into innovative government solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index}
              className="group relative transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent group-hover:border-cyan-500 transition-all">
                {/* Member Image with Overlay */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {member.title}
                    </p>
                  </div>

                  {/* Achievements */}
                  {/* <div className="mb-4">
                    {member.achievements.map((achievement, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-sm text-gray-600 mb-2"
                      >
                        <Award className="w-4 h-4 mr-2 text-cyan-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div> */}

                  {/* Contact Information */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-cyan-600 transition-colors p-2 bg-gray-100 rounded-full"
                      title="Email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-cyan-600 transition-colors p-2 bg-gray-100 rounded-full"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;