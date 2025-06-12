import React from 'react';
import { Phone, FileSearch, Users, Scale, CheckCircle, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-12 h-12" />,
      title: "Initial Consultation",
      description: "Schedule a free consultation to discuss your legal matter. We'll listen to your concerns and provide initial guidance.",
      details: [
        "Completely confidential discussion",
        "No obligation or upfront costs",
        "Available via phone, video call, or in-person",
        "Typically 30-60 minutes"
      ],
      time: "Same Day"
    },
    {
      number: "02",
      icon: <FileSearch className="w-12 h-12" />,
      title: "Case Analysis",
      description: "Our legal team conducts a thorough analysis of your case, reviewing all documents and identifying key legal issues.",
      details: [
        "Comprehensive document review",
        "Legal research and precedent analysis",
        "Risk assessment and case evaluation",
        "Strategic planning development"
      ],
      time: "1-3 Days"
    },
    {
      number: "03",
      icon: <Users className="w-12 h-12" />,
      title: "Strategy Development",
      description: "We develop a customized legal strategy tailored to your specific situation and desired outcomes.",
      details: [
        "Personalized approach for your case",
        "Clear timeline and milestones",
        "Cost estimation and fee structure",
        "Alternative resolution options"
      ],
      time: "3-5 Days"
    },
    {
      number: "04",
      icon: <Scale className="w-12 h-12" />,
      title: "Legal Representation",
      description: "Our experienced attorneys execute the strategy, representing your interests with dedication and expertise.",
      details: [
        "Skilled negotiation and advocacy",
        "Court representation when necessary",
        "Regular progress updates",
        "Continuous case monitoring"
      ],
      time: "Ongoing"
    },
    {
      number: "05",
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Resolution & Follow-up",
      description: "We work tirelessly to achieve the best possible outcome and provide ongoing support as needed.",
      details: [
        "Optimal case resolution",
        "Post-resolution support",
        "Documentation and compliance",
        "Future legal guidance"
      ],
      time: "Variable"
    }
  ];

  const processHighlights = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "We accommodate your schedule with evening and weekend consultations available."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Constant Communication",
      description: "Stay informed with regular updates and direct access to your legal team."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Transparent Process",
      description: "No surprises - we explain every step and keep you informed throughout."
    }
  ];

  const faqs = [
    {
      question: "How much does the initial consultation cost?",
      answer: "Your first consultation is completely free. We believe in providing value upfront and helping you understand your legal options without any financial commitment."
    },
    {
      question: "How long does the legal process typically take?",
      answer: "The timeline varies depending on the complexity of your case. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide a realistic timeline during your consultation."
    },
    {
      question: "What if I can't afford legal fees upfront?",
      answer: "We offer flexible payment arrangements including payment plans and contingency fee structures for certain types of cases. We'll work with you to find a solution that fits your financial situation."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            How We <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Work With You</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures you receive expert legal representation while staying informed 
            and involved at every step of your case.
          </p>
        </div>

        {/* Process Steps - Mobile: Stack, Desktop: Side by side */}
        <div className="mb-16 md:mb-24">
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute left-1/2 -bottom-8 lg:-bottom-12 transform -translate-x-1/2 w-px h-8 lg:h-12 bg-gradient-to-b from-amber-400 to-amber-600"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''} transform transition-all duration-500 group-hover:scale-[1.02]`}>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400/20 leading-none">{step.number}</div>
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{step.title}</h3>
                        <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                          <Calendar className="w-4 h-4 mr-2" />
                          {step.time}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
           
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-first lg:order-none`}>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="text-center">
                        <div className="inline-flex p-6 md:p-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full text-black mb-6 shadow-lg transform transition-transform duration-300 hover:rotate-3">
                          {step.icon}
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Step {step.number}</h4>
                        <p className="text-gray-600 text-lg">{step.title}</p>
                        <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Highlights - Row layout on larger screens */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-16 md:mb-24 shadow-xl border border-gray-100">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            What Makes Our Process <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Different</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processHighlights.map((highlight, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex p-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full text-black mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Responsive grid */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Frequently Asked <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Questions</span>
          </h3>
          
          <div className="max-w-5xl mx-auto grid gap-6 md:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Overview - Horizontal on larger screens */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-16 md:mb-20 shadow-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Journey <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Timeline</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300">From consultation to resolution</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.slice(0, 4).map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    {step.number}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 md:top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm md:text-base">{step.title}</h4>
                <p className="text-amber-400 text-xs md:text-sm font-medium">{step.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Responsive buttons */}
        <div className="text-center bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards resolving your legal matter. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link to="/contactus">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
            </Link>
            <button className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn About Our Practice Areas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;