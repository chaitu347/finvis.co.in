// src/components/TermsAndConditions.jsx
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './Header';

const TermsAndConditions = () => {
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
              Terms & <span className={themeClasses.accent}>Conditions</span>
            </h1>
            <p className={`text-base sm:text-lg ${themeClasses.textSecondary}`}>
              Last updated: March 2026
            </p>
          </div>

          <div className={`space-y-8 ${themeClasses.textSecondary} leading-relaxed`}>
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>1. Acceptance of Terms</h2>
              <p>By accessing or using Govardhan Varma’s website (https://finvis.co.in), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please discontinue use immediately.</p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>2. Legal Information Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The content provided on this website is for general informational purposes only and does not constitute legal advice.</li>
                <li>Viewing or using this site does not create an attorney-client relationship with Govardhan Varma.</li>
                <li>For specific legal concerns, you must schedule a consultation with our qualified attorneys.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>3. Use of Website</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to use this website only for lawful purposes.</li>
                <li>You must not attempt to disrupt, damage, or gain unauthorized access to the website or its systems.</li>
                <li>Any misuse may result in suspension of access and potential legal action.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>4. Confidentiality</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>While Govardhan Varma takes reasonable steps to ensure secure communications, transmission of information via the internet is not entirely secure.</li>
                <li>Do not send confidential or sensitive information through the website forms without prior agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>5. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content, including text, graphics, logos, and design, is the intellectual property of Govardhan Varma unless otherwise stated.</li>
                <li>You may not copy, reproduce, or distribute any material without prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>6. Consultations & Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Initial consultations are free of charge as advertised.</li>
                <li>Engagement of services requires a formal agreement and fee arrangement.</li>
                <li>Flexible payment options may be available depending on the nature of the case.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>7. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Govardhan Varma is not liable for any damages arising from the use of this website or reliance on its content.</li>
                <li>Outcomes of legal matters depend on multiple factors; no guarantees are made regarding case results.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>8. Third-Party Links</h2>
              <p>The website may contain links to external sites. Govardhan Varma is not responsible for the accuracy, security, or content of third-party websites.</p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>9. Privacy Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information collected through forms or consultations will be handled in accordance with our Privacy Policy.</li>
                <li>We do not sell or share client data with unauthorized parties.</li>
              </ul>
            </div>
            
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>10. Governing Law & Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>These Terms & Conditions are governed by the laws of India.</li>
                <li>Any disputes shall be subject to the jurisdiction of the courts in Vijayawada, Andhra Pradesh.</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>11. Amendments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Govardhan Varma reserves the right to update or modify these Terms & Conditions at any time.</li>
                <li>Continued use of the website after changes implies acceptance of the revised terms.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
