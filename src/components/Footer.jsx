import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Practice Areas', 'Why Choose Us', 'How It Works', 'Contact Us'
  ];

  const practiceAreas = [
    'Corporate Law', 'Criminal Defense', 'Family Law', 'Personal Injury', 'Real Estate', 'Immigration'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#' },
    { icon: <Twitter className="w-5 h-5" />, url: '#' },
    { icon: <Instagram className="w-5 h-5" />, url: '#' },
    { icon: <Youtube className="w-5 h-5" />, url: '#' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">Finvisco</span>Associates
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Providing exceptional legal representation with integrity, dedication, and proven results for over 25 years.
              </p>
            </div>
            <Link to="/contactus">
            <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-6">Practice Areas</h4>
            <div className="space-y-3">
              {practiceAreas.map((area, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  {area}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Legal Street</p>
                  <p>Justice City, JC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+919492605274" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  +91 94926 05274
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:m.govardhanvarma@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  m.govardhanvarma@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Row */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
              <p className="text-gray-400 text-sm">Stay connected for legal updates and insights</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-gray-800 hover:bg-amber-400 text-gray-300 hover:text-black p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2024 Legal Excellence. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Disclaimer
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;