import React, { useState, useEffect } from 'react';
import Header from './Header';
import WhyChooseUss from './WhyChooseUss';
import HowItsWork from './HowItsWork';
import SocialMedia from './SocialMedia';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


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
     
     
      {/* Hero Section */}
      <section id="home" >
        <Header/>
        {/* Background with Justice/Legal Theme */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="pt-18 space-y-4 sm:space-y-6">
              <h1 className="text-1xl sm:text-1xl md:text-1xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
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
              <Link to="/contactus">
              <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              </Link >
              <Link to="/aboutus">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
      
        </div>
        <WhyChooseUss />
        <HowItsWork />
        <SocialMedia />
      </section>
    </div>
  );
};

export default Home;