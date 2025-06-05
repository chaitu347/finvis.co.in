import React, { useState } from 'react';
import { Scale, Users, Award, Clock, Moon, Sun } from 'lucide-react';
import Header from './Header';


const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const stats = [
    { icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8" />, number: "500+", label: "Cases Won" },
    { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, number: "25+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, number: "50+", label: "Awards Won" },
    { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />, number: "24/7", label: "Support Available" }
  ];

  const lawyers = [
    {
      name: "Sarah Johnson",
      position: "Senior Partner",
      speciality: "Corporate Law",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY2NjY4ODtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDQ0NDY2O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjQ1IiBmaWxsPSIjRkZCRjAwIi8+CjxwYXRoIGQ9Ik03NSAyNDBjMC00NSAzMy04MCA3NS04MHM3NSAzNSA3NSA4MHY2MEg3NXYtNjB6IiBmaWxsPSIjRkZCRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkVYUEVSVDwvdGV4dD4KPC9zdmc+"
    },
    {
      name: "Michael Davis",
      position: "Managing Partner",
      speciality: "Criminal Defense",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzU1NTU3NztzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzMzU1O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjQ1IiBmaWxsPSIjRkZCRjAwIi8+CjxwYXRoIGQ9Ik03NSAyNDBjMC00NSAzMy04MCA3NS04MHM3NSAzNSA3NSA4MHY2MEg3NXYtNjB6IiBmaWxsPSIjRkZCRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkxFQURFUjwvdGV4dD4KPC9zdmc+"
    },
    {
      name: "Emily Rodriguez",
      position: "Associate Partner",
      speciality: "Family Law",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzU1NTU4ODtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDQ0NDc3O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjQ1IiBmaWxsPSIjRkZCRjAwIi8+CjxwYXRoIGQ9Ik03NSAyNDBjMC00NSAzMy04MCA3NS04MHM3NSAzNSA3NSA4MHY2MEg3NXYtNjB6IiBmaWxsPSIjRkZCRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkFDSElFVkVSPC90ZXh0Pgo8L3N2Zz4="
    }
  ];

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    accent: 'text-amber-400',
    button: 'bg-amber-400 hover:bg-amber-500 text-black',
    missionBg: isDarkMode ? 'bg-gradient-to-br from-amber-500 to-amber-700' : 'bg-gradient-to-br from-amber-400 to-amber-600',
    ctaBg: isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700' : 'bg-gray-900',
    ctaText: isDarkMode ? 'text-gray-100' : 'text-white',
    ctaSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-300'
  };

  return (
    <section id="about" className={`py-12 sm:py-16 lg:py-20 transition-colors duration-500 ${themeClasses.background}`}>
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full ${themeClasses.cardBg} shadow-lg hover:shadow-xl transition-all duration-300 ${themeClasses.text}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-4 sm:mb-6`}>
            About <span className={themeClasses.accent}>Our Firm</span>
          </h2>
          <p className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed px-4`}>
            With over two decades of legal expertise, we've built our reputation on unwavering commitment 
            to justice, client-focused service, and achieving exceptional results in complex legal matters.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text}`}>
              Excellence in Legal Representation
            </h3>
            <p className={`text-base sm:text-lg ${themeClasses.textSecondary} leading-relaxed`}>
              Founded in 1999, Legal Excellence has established itself as a premier law firm dedicated 
              to providing comprehensive legal services across multiple practice areas. Our team of 
              experienced attorneys combines deep legal knowledge with innovative strategies to deliver 
              optimal outcomes for our clients.
            </p>
            <p className={`text-base sm:text-lg ${themeClasses.textSecondary} leading-relaxed`}>
              We understand that legal challenges can be overwhelming and life-changing. That's why we 
              approach each case with personalized attention, strategic thinking, and unwavering dedication 
              to protecting our clients' rights and interests.
            </p>
            <div className="pt-4">
              <button className={`${themeClasses.button} px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base`}>
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative order-1 lg:order-2">
            <div className={`${themeClasses.missionBg} rounded-2xl p-6 sm:p-8 text-black shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-bold">Our Mission</h4>
                <p className="text-base sm:text-lg leading-relaxed">
                  To provide exceptional legal representation while maintaining the highest standards 
                  of integrity, professionalism, and client service. We are committed to achieving 
                  justice for our clients through meticulous preparation, strategic advocacy, and 
                  unwavering dedication.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="border-solid border-1 bg-opacity-20 rounded-lg p-3">
                    <h5 className="font-semibold text-base sm:text-lg">Integrity</h5>
                    <p className="text-sm">Honest and ethical practice</p>
                  </div>
                  <div className="border-solid border-1 bg-opacity-20 rounded-lg p-3">
                    <h5 className="font-semibold text-base sm:text-lg">Excellence</h5>
                    <p className="text-sm">Superior legal representation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center ${themeClasses.cardBg} rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-amber-400 rounded-full text-black">
                  {stat.icon}
                </div>
              </div>
              <div className={`text-2xl sm:text-4xl font-bold ${themeClasses.text} mb-1 sm:mb-2`}>{stat.number}</div>
              <div className={`${themeClasses.textSecondary} font-medium text-sm sm:text-base`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text} mb-4`}>
            Meet Our <span className={themeClasses.accent}>Legal Team</span>
          </h3>
          <p className={`text-base sm:text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto px-4`}>
            Our experienced attorneys bring decades of combined legal expertise across various practice areas.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {lawyers.map((lawyer, index) => (
            <div key={index} className={`${themeClasses.cardBg} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}>
              <div className="relative overflow-hidden">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className={`text-lg sm:text-xl font-bold ${themeClasses.text} mb-2`}>{lawyer.name}</h4>
                <p className="text-amber-600 font-semibold mb-2 text-sm sm:text-base">{lawyer.position}</p>
                <p className={`${themeClasses.textSecondary} text-sm sm:text-base`}>{lawyer.speciality}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${themeClasses.ctaBg} rounded-2xl p-8 sm:p-12 shadow-2xl`}>
          <h3 className={`text-2xl sm:text-3xl font-bold ${themeClasses.ctaText} mb-4`}>
            Ready to Discuss Your Case?
          </h3>
          <p className={`text-lg sm:text-xl ${themeClasses.ctaSecondary} mb-6 sm:mb-8 max-w-2xl mx-auto px-4`}>
            Get expert legal advice tailored to your specific situation. Our consultation is confidential and comprehensive.
          </p>
          <button className={`${themeClasses.button} px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}>
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;