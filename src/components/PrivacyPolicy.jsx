// src/components/PrivacyPolicy.jsx
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './Header';

const PrivacyPolicy = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    accent: 'text-amber-400',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  };

  return (
    <section className={`py-12 sm:py-16 lg:py-20 min-h-screen transition-colors duration-500 ${themeClasses.background}`}>
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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

        <div className={`${themeClasses.sectionBg} rounded-2xl shadow-xl p-8 sm:p-12 mb-12 transition-colors duration-300`}>
          <div className="text-center mb-10">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-4`}>
              Privacy <span className={themeClasses.accent}>Policy</span>
            </h1>
            <p className={`text-base sm:text-lg ${themeClasses.textSecondary}`}>
              Last updated: March 2026
            </p>
          </div>

          <div className={`space-y-8 ${themeClasses.textSecondary} leading-relaxed`}>
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>1. Introduction</h2>
              <p>Finvis Associates (“we,” “our,” “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit https://finvis.co.in or engage with our services.</p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className={themeClasses.text}>Personal details:</strong> Name, email address, phone number, and other contact information you provide through forms or consultations.</li>
                <li><strong className={themeClasses.text}>Professional details:</strong> Information relevant to legal services, such as case background or documents shared voluntarily.</li>
                <li><strong className={themeClasses.text}>Technical data:</strong> IP address, browser type, device information, and website usage statistics.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>3. How We Use Your Information</h2>
              <p className="mb-2">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide legal consultations.</li>
                <li>Deliver requested services and manage client relationships.</li>
                <li>Improve website functionality and user experience.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>4. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We implement reasonable technical and organizational measures to protect your information.</li>
                <li>However, no online transmission is completely secure; you share information at your own risk.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>5. Sharing of Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not sell or rent your personal data.</li>
                <li>Information may be shared with trusted third parties (e.g., IT service providers, payment processors) strictly for service delivery.</li>
                <li>Disclosure may occur if required by law or to protect our legal rights.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>6. Cookies & Tracking</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our website may use cookies to enhance user experience and track analytics.</li>
                <li>You can disable cookies in your browser settings, though some features may not function properly.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>7. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and request a copy of your personal data.</li>
                <li>Request correction or deletion of inaccurate information.</li>
                <li>Withdraw consent for data processing, subject to legal and contractual limitations.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>8. Third-Party Links</h2>
              <p>Our website may contain links to external sites. We are not responsible for the privacy practices or content of third-party websites.</p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>9. Updates to Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date.</p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>10. Contact Us</h2>
              <p className="mb-2">For questions or concerns about this Privacy Policy, please contact:</p>
              <div className={`p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 mt-4`}>
                <p className="font-semibold mb-1">Finvis Associates</p>
                <p>Vijayawada, Andhra Pradesh, India</p>
                <p className="mt-2">Email: <a href="mailto:m.govardhanvarma@gmail.com" className="text-amber-500 hover:underline">m.govardhanvarma@gmail.com</a></p>
                <p>Phone: <a href="tel:+919492605274" className="text-amber-500 hover:underline">94926 05274</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
