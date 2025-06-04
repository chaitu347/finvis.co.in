import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';


const Home = () => {
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
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                <span className="text-amber-400">Legal</span>Excellence
              </h1>
            </div>

            {/* Desktop Navigation - Visible for screens >= 800px */}
            {windowWidth >= 800 && (
              <div className="flex">
                <div className="flex items-center space-x-4 lg:space-x-8">
                  <a href="#home" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    Home
                  </a>
                  <a href="#about" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    About Us
                  </a>
                  <a href="#contact" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    Contact Us
                  </a>
                  <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-2 lg:ml-4">
                    Schedule Consultation
                  </button>
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
                <a href="#home" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                  Home
                </a>
                <a href="#about" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                  About Us
                </a>
                <a href="#contact" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                  Contact Us
                </a>
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-black px-3 py-3 mt-3 rounded-md text-base font-medium transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Justice/Legal Theme */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-400 rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-400 transform rotate-45"></div>
            <div className="absolute bottom-32 left-20 w-40 h-40 border-2 border-amber-400 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-28 h-28 border-4 border-amber-400 transform rotate-45"></div>
          </div>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute animate-pulse">
              <div className="grid grid-cols-12 gap-4 h-screen w-full p-8">
                {[...Array(48)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-amber-400 rounded-sm h-1 animate-pulse" 
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Main Quote */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="text-amber-400">"Justice</span> is the constant and 
                <br className="hidden sm:block" />
                perpetual will to give each person
                <br className="hidden sm:block" />
                <span className="text-amber-400">his due."</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic">
                — Ulpian, Roman Jurist
              </p>
            </div>
            
            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Defending your rights with unwavering dedication, integrity, and legal excellence. 
                Your trusted partner in navigating complex legal challenges.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8">
              <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;