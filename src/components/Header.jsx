import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when screen becomes large
      if (window.innerWidth >= 800) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-10 w-auto sm:h-12 md:h-14 lg:h-16">
                <svg 
                  viewBox="0 0 1200 400" 
                  className="h-full w-auto" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Transparent background for navbar */}
                  <rect width="1200" height="400" fill="transparent"/>
                  
                  {/* Shield with pillar icon */}
                  <g transform="translate(80, 60)">
                    <path 
                      d="M40 20 C40 20, 40 10, 60 10 L160 10 C180 10, 180 20, 180 20 L180 160 C180 180, 160 200, 140 220 L110 250 L80 220 C60 200, 40 180, 40 160 Z" 
                      fill="none" 
                      stroke="#fbbf24" 
                      strokeWidth="12" 
                      strokeLinejoin="round"
                    />
                    
                    {/* Inner pillar design */}
                    <g transform="translate(70, 40)">
                      {/* Top bar */}
                      <rect x="10" y="10" width="60" height="8" fill="#fbbf24" rx="4"/>
                      
                      {/* Pillar columns */}
                      <rect x="15" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="32" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="49" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="66" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      
                      {/* Base */}
                      <rect x="10" y="150" width="60" height="12" fill="#fbbf24" rx="4"/>
                    </g>
                  </g>
                  
                  {/* FINVIS text */}
                  <text 
                    x="320" 
                    y="180" 
                    fill="#fbbf24" 
                    fontSize="120" 
                    fontWeight="bold" 
                    fontFamily="Arial, sans-serif" 
                    letterSpacing="-2px"
                  >
                    FINVIS
                  </text>
                  
                  {/* ASSOCIATES text */}
                  <text 
                    x="320" 
                    y="260" 
                    fill="#fbbf24" 
                    fontSize="80" 
                    fontWeight="bold" 
                    fontFamily="Arial, sans-serif" 
                    letterSpacing="8px"
                  >
                    ASSOCIATES
                  </text>
                  
                  {/* LAW FIRM text */}
                  <text 
                    x="320" 
                    y="320" 
                    fill="#fbbf24" 
                    fontSize="48" 
                    fontWeight="normal" 
                    fontFamily="Arial, sans-serif" 
                    letterSpacing="12px"
                  >
                    LAW FIRM
                  </text>
                </svg>
              </div>
            </div>

            {/* Desktop Navigation - Visible for screens >= 800px */}
            {windowWidth >= 800 && (
              <div className="flex">
                <div className="flex items-center space-x-4 lg:space-x-8">
                  <Link 
                    to="/" 
                    className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/aboutus" 
                    className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/contactus" 
                    className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                  >
                    Contact Us
                  </Link>
                  
                  <Link 
                    to="/contactus" 
                    className="bg-amber-400 hover:bg-amber-500 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-2 lg:ml-4"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            )}

            {/* Mobile menu button - Only visible for screens < 800px */}
            {windowWidth < 800 && (
              <div>
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-amber-400 focus:outline-none focus:text-amber-400 p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Navigation Menu - Only for screens < 800px */}
          {isMenuOpen && windowWidth < 800 && (
            <div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-amber-400/20">
                <Link 
                  to="/" 
                  className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                >
                  Home
                </Link>
                <Link 
                  to="/aboutus" 
                  className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                >
                  Services
                </Link>
                <Link 
                  to="/contactus" 
                  className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/contactus" 
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black px-3 py-3 mt-3 rounded-md text-base font-medium transition-colors duration-300 block text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;