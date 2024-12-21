import React, { useState } from 'react';
import { Calendar, User, Tag, ChevronRight, X, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "What is New in Minority and Women Owned Business Enterprise Landscape in New York?",
    author: "Azizur Rahman",
    date: "December 10, 2024",
    tags: ["Digital Transformation", "Government Tech"],
    excerpt: "Exploring innovative approaches to modernizing government technological infrastructure.",
    readTime: "5 min read",
    content: {
      overview: "In an era of rapid technological advancement, government agencies are facing unprecedented challenges in digital transformation. This article delves into the strategies and technologies that are reshaping public sector IT landscapes.",
      sections: [
        "The need for modernization",
        "Key technological enablers",
        "Overcoming implementation challenges",
        "Future outlook for government technology"
      ],
      keyInsights: [
        "Embracing cloud technologies",
        "Prioritizing cybersecurity",
        "Developing agile IT frameworks",
        "Investing in skills development"
      ]
    },
    coverImage: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Innovation hotspots in New York",
    author: "Dr Santanu Das",
    date: "November 25, 2024",
    tags: ["Cybersecurity", "Risk Management"],
    excerpt: "Comprehensive strategies for protecting critical infrastructure in an increasingly complex digital landscape.",
    readTime: "7 min read",
    content: {
      overview: "As cyber threats continue to evolve, organizations must adopt proactive and comprehensive security approaches to safeguard their digital assets.",
      sections: [
        "Emerging cyber threat landscapes",
        "Zero trust security models",
        "Advanced threat detection techniques",
        "Building a resilient security culture"
      ],
      keyInsights: [
        "Implementing multi-layered security",
        "Continuous threat monitoring",
        "Employee cybersecurity training",
        "Adaptive security frameworks"
      ]
    },
    coverImage: "/api/placeholder/800/400"
  },
  {
    id: 3,
    title: "Tech Employment In New York State and In New York City",
    author: "Azizur Rahman",
    date: "October 15, 2024",
    tags: ["Cloud Computing", "Digital Strategy"],
    excerpt: "Navigating the complexities of cloud migration for government and enterprise organizations.",
    readTime: "6 min read",
    content: {
      overview: "Successful cloud migration requires a strategic approach that balances technological innovation with operational continuity and security.",
      sections: [
        "Assessment and planning",
        "Migration methodologies",
        "Compliance considerations",
        "Optimizing cloud infrastructure"
      ],
      keyInsights: [
        "Hybrid cloud approaches",
        "Compliance-driven architecture",
        "Cost optimization",
        "Performance management"
      ]
    },
    coverImage: "/api/placeholder/800/400"
  }
];

// Blog List Component with Modal Details
const BlogSection = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
            Insights and Perspectives
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert analysis and thought leadership in technology and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                 
                  <button 
                    onClick={() => setActiveBlog(post)}
                    className="text-cyan-600 flex items-center hover:text-indigo-600"
                  >
                    Read More <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {activeBlog && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveBlog(null)}
        >
          <div 
            className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <button 
                onClick={() => setActiveBlog(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-8 h-8" />
              </button>

              <img 
                src={activeBlog.coverImage} 
                alt={activeBlog.title} 
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />

              <div className="prose max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeBlog.title}
                </h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <User className="w-5 h-5 mr-2" />
                  <span className="mr-4">{activeBlog.author}</span>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-4">{activeBlog.date}</span>
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs">
                    {activeBlog.readTime}
                  </span>
                </div>

                <p className="text-xl text-gray-700 mb-6">
                  {activeBlog.content.overview}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                      Key Sections
                    </h3>
                    <ul className="space-y-2">
                      {activeBlog.content.sections.map((section, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-gray-700"
                        >
                          <ArrowRight className="w-5 h-5 mr-2 text-cyan-500" />
                          {section}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                      Key Insights
                    </h3>
                    <ul className="space-y-2">
                      {activeBlog.content.keyInsights.map((insight, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-gray-700"
                        >
                          <ArrowRight className="w-5 h-5 mr-2 text-indigo-500" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {activeBlog.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;