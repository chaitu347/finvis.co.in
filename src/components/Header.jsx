import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Outlet, Link } from "react-router-dom";









const Header =()    => {

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



    return(
        <>
             <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                <span className="text-amber-400">Finvisco</span>Associates
              </h1>
            </div>

            {/* Desktop Navigation - Visible for screens >= 800px */}
            {windowWidth >= 800 && (
              <div className="flex">
                <div className="flex items-center space-x-4 lg:space-x-8">
                  <a href="#home" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    <Link to="/">Home</Link>

                  </a>
                  <a href="#about" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    <Link to="/aboutus">About Us</Link>

                  </a>
                  <a href="#services" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    <Link to="/services">Services</Link>

                  </a>
                  <a href="#contact" className="text-white hover:text-amber-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    <Link to="/contactus">Contact Us</Link>

                  </a>
                  
                  <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-2 lg:ml-4">
                    
                    <Link to="/contactus">Schedule Consultation</Link>
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
                  <Link to="/">Home</Link>
                </a>
                <a href="#about" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                    <Link to="/aboutus">About Us</Link>
                </a>
                <a href="#contact" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                  <Link to="/services">Services</Link>
                </a>
                <a href="#contact" className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-amber-400/10 rounded-md">
                  <Link to="/contactus">Contact Us</Link>
                </a>
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-black px-3 py-3 mt-3 rounded-md text-base font-medium transition-colors duration-300">
                   <Link to="/contactus">Schedule Consultation</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>


        </>
    )
}


export default Header;



