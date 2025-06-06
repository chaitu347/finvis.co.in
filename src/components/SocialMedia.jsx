import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: '#',
      description: 'Legal updates & community discussions'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: '#',
      description: 'Professional insights & case studies'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: '#',
      description: 'Latest legal news & quick tips'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: '#',
      description: 'Behind the scenes & team updates'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: '#',
      description: 'Legal education & client testimonials'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect With <span className="text-amber-400">Us</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with legal insights, news, and important updates from our legal team
          </p>
        </div>

        {/* Social Media Links - Row Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              className="group bg-gray-800 hover:bg-amber-400 border border-gray-700 hover:border-amber-400 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-40 sm:w-48"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-amber-400 group-hover:text-black transition-colors duration-300">
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-white group-hover:text-black font-semibold text-sm transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-black/80 text-xs mt-1 transition-colors duration-300">
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/contactus">
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule Consultation
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;