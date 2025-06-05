import React, { useState, useEffect } from "react";
import GradientText from './GradientText';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MobileContactInfo from './MobileContactInfo';

const ContactUs = ({ isActiveSection = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActiveSection) {
      setTimeout(() => setIsVisible(true), 300);
    } else {
      setIsVisible(false);
    }
  }, [isActiveSection]);

  return (
    <section id="contact" className="min-h-screen w-full overflow-hidden relative bg-gray-900">
      {/* Dark sophisticated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))`
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cpath d='M0 0h50v50H0z' fill='%23111'/%3E%3Cpath d='M0 0h1v50H0zM0 0h50v1H0z' fill='%23333'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GradientText className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            CONTACT US
          </GradientText>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with our expert legal team for professional consultation and representation
          </p>
        </div>

        {/* Contact Form */}
        <div className={`w-full max-w-4xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <MobileContactInfo />
        </div>
      </div>

      {/* Desktop Contact Info */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactUs;