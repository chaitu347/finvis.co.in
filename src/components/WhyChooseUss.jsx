import React from 'react';
import { Shield, Users, Trophy, Clock, CheckCircle, Star, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const WhyChooseUss = () => {
  const reasons = [
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Proven Track Record",
      description: "Over 500 successful cases with a 95% success rate in complex legal matters.",
      highlight: "95% Success Rate"
    },
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Experienced Team",
      description: "Our attorneys have 25+ years of combined experience across multiple practice areas.",
      highlight: "25+ Years Experience"
    },
    {
      icon: <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Award-Winning Service",
      description: "Recognized by leading legal organizations for excellence in client representation.",
      highlight: "50+ Awards"
    },
    {
      icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "24/7 Availability",
      description: "Round-the-clock support because legal emergencies don't wait for business hours.",
      highlight: "Always Available"
    },
    {
      icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Personalized Approach",
      description: "Every case receives individual attention with strategies tailored to your specific needs.",
      highlight: "Custom Solutions"
    },
    {
      icon: <Star className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Client Satisfaction",
      description: "Consistently rated 5-star by clients for our dedication and professional service.",
      highlight: "5-Star Rated"
    }
  ];

  const advantages = [
    "No Hidden Fees - Transparent Pricing",
    "Free Initial Consultation",
    "Multilingual Legal Support",
    "Technology-Driven Case Management",
    "Confidential & Secure Communications",
    "Flexible Payment Options Available"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Legal Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            When facing legal challenges, you need a law firm that combines experience, dedication, 
            and proven results. Here's why thousands of clients trust us with their most important legal matters.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="group bg-gray-800 hover:bg-gray-750 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-amber-400/50 transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-amber-400 to-amber-500 group-hover:from-amber-500 group-hover:to-amber-600 rounded-full text-black transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {reason.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{reason.description}</p>
                <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {reason.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20 border border-gray-700 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Additional <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Advantages</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Beyond our core strengths, we offer additional benefits that set us apart from other law firms.
              </p>
              <div className="grid gap-3 sm:gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-1 group-hover:text-amber-300 transition-colors duration-300" />
                    <span className="text-gray-300 text-base sm:text-lg group-hover:text-white transition-colors duration-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-black p-6 sm:p-8 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">Free Consultation</h4>
                    <p className="text-xs sm:text-sm">No obligation, completely confidential</p>
                  </div>
                </div>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  Get expert legal advice about your case during a comprehensive consultation at no cost.
                </p>
                <Link to="/contactus">
                <button className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 w-full transform hover:scale-105 shadow-lg">
                  Schedule Consultation
                </button>
                </Link>
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 text-white p-6 sm:p-8 rounded-xl transition-all duration-300 border border-gray-600 hover:border-amber-400/50">
                <div className="flex items-center space-x-4 mb-4">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">Case Evaluation</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Professional assessment of your legal matter</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Receive a detailed analysis of your case strength and potential outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg sm:text-xl text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who chose Legal Excellence for their legal representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Link to="/contactus">
            <button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto">
              Schedule Consultation
            </button>
            </Link>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              View Our Practice Areas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUss;