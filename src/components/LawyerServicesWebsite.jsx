import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { ChevronDown, Scale, Building, Users, Heart, Briefcase, FileText, Shield, Gavel, Home, Phone, Mail, MapPin, Clock, CheckCircle, Star, Award, Calendar, DollarSign, BookOpen, Target } from 'lucide-react';

const LawyerServicesWebsite = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: 'Corporate Law',
      icon: Building,
      id: 'corporate',
      subServices: [
        { name: 'Company Registration', id: 'company-registration' },
        { name: 'Contract Drafting', id: 'contract-drafting' },
        { name: 'Mergers & Acquisitions', id: 'mergers-acquisitions' },
        { name: 'Corporate Compliance', id: 'corporate-compliance' },
        { name: 'Business Licensing', id: 'business-licensing' }
      ]
    },
    {
      title: 'Litigation',
      icon: Gavel,
      id: 'litigation',
      subServices: [
        { name: 'Civil Litigation', id: 'civil-litigation' },
        { name: 'Criminal Defense', id: 'criminal-defense' },
        { name: 'Commercial Disputes', id: 'commercial-disputes' },
        { name: 'Employment Disputes', id: 'employment-disputes' },
        { name: 'Arbitration', id: 'arbitration' }
      ]
    },
    {
      title: 'Family Law',
      icon: Heart,
      id: 'family',
      subServices: [
        { name: 'Divorce Proceedings', id: 'divorce-proceedings' },
        { name: 'Child Custody', id: 'child-custody' },
        { name: 'Alimony & Support', id: 'alimony-support' },
        { name: 'Adoption Services', id: 'adoption-services' },
        { name: 'Property Settlement', id: 'property-settlement' }
      ]
    },
    {
      title: 'Real Estate',
      icon: Home,
      id: 'real-estate',
      subServices: [
        { name: 'Property Registration', id: 'property-registration' },
        { name: 'Title Verification', id: 'title-verification' },
        { name: 'Lease Agreements', id: 'lease-agreements' },
        { name: 'Property Disputes', id: 'property-disputes' },
        { name: 'Development Law', id: 'development-law' }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      id: 'intellectual',
      subServices: [
        { name: 'Patent Registration', id: 'patent-registration' },
        { name: 'Trademark Filing', id: 'trademark-filing' },
        { name: 'Copyright Protection', id: 'copyright-protection' },
        { name: 'IP Litigation', id: 'ip-litigation' },
        { name: 'Trade Secrets', id: 'trade-secrets' }
      ]
    },
    {
      title: 'Tax Law',
      icon: FileText,
      id: 'tax',
      subServices: [
        { name: 'Tax Planning', id: 'tax-planning' },
        { name: 'GST Registration', id: 'gst-registration' },
        { name: 'Tax Disputes', id: 'tax-disputes' },
        { name: 'Income Tax Returns', id: 'income-tax-returns' },
        { name: 'Tax Compliance', id: 'tax-compliance' }
      ]
    }
  ];

  const serviceDetails = {
    'company-registration': {
      title: 'Company Registration',
      description: 'Comprehensive company registration services for all business types including Private Limited Companies, Limited Liability Partnerships (LLP), One Person Companies (OPC), and Partnership firms. We handle the entire registration process from name reservation to certificate issuance.',
      features: [
        'Fast Registration Process (7-15 days)',
        'Complete Document Preparation',
        'Government Liaison & Filing',
        'Post-Registration Compliance Support',
        'Digital Signature Certificate (DSC) assistance',
        'Director Identification Number (DIN) support'
      ],
      process: [
        'Business Name Approval & Reservation',
        'Document Preparation & Verification',
        'Government Filing & Submission',
        'Certificate Issuance & Delivery',
        'Post-Registration Support & Guidance'
      ],
      timeline: '7-15 business days',
      benefits: [
        'Limited Liability Protection',
        'Separate Legal Entity Status',
        'Easy Access to Funding',
        'Tax Benefits & Deductions',
        'Enhanced Business Credibility'
      ]
    },
    'contract-drafting': {
      title: 'Contract Drafting & Review',
      description: 'Professional contract drafting and review services to protect your business interests and ensure legal compliance. Our experts create customized contracts tailored to your specific business needs and industry requirements.',
      features: [
        'Custom Contract Drafting',
        'Comprehensive Legal Review',
        'Risk Assessment & Mitigation',
        'Negotiation Support',
        'Amendment & Modification Services',
        'Multi-language Contract Support'
      ],
      process: [
        'Requirement Analysis & Consultation',
        'Initial Draft Preparation',
        'Client Review & Feedback',
        'Revision & Finalization',
        'Legal Compliance Check'
      ],
      timeline: '3-7 business days',
      benefits: [
        'Legal Protection & Compliance',
        'Clear Terms & Conditions',
        'Dispute Prevention',
        'Professional Documentation',
        'Customized Solutions'
      ]
    },
    'mergers-acquisitions': {
      title: 'Mergers & Acquisitions',
      description: 'Expert legal guidance for mergers, acquisitions, and corporate restructuring. We provide comprehensive M&A services including due diligence, valuation support, regulatory compliance, and transaction structuring.',
      features: [
        'Due Diligence Services',
        'Transaction Structuring',
        'Regulatory Compliance',
        'Valuation Support',
        'Documentation & Filing',
        'Post-Transaction Integration Support'
      ],
      process: [
        'Initial Assessment & Strategy',
        'Due Diligence Execution',
        'Transaction Structuring',
        'Documentation & Approvals',
        'Closing & Integration Support'
      ],
      pricing: 'Starting from ₹25,000',
      timeline: '30-90 business days',
      benefits: [
        'Strategic Business Growth',
        'Enhanced Market Position',
        'Operational Synergies',
        'Risk Mitigation',
        'Tax Optimization'
      ]
    },
    'corporate-compliance': {
      title: 'Corporate Compliance',
      description: 'Comprehensive corporate compliance services to ensure your business meets all regulatory requirements. We help maintain good standing with regulatory authorities and avoid penalties.',
      features: [
        'Annual Compliance Management',
        'Board Meeting Support',
        'Statutory Filing Services',
        'ROC Compliance',
        'Share Transfer & Allotment',
        'Compliance Calendar Management'
      ],
      process: [
        'Compliance Assessment',
        'Calendar Creation',
        'Document Preparation',
        'Timely Filing & Submission',
        'Ongoing Monitoring'
      ],
      pricing: 'Starting from ₹8,999',
      timeline: 'Ongoing support',
      benefits: [
        'Regulatory Compliance',
        'Penalty Avoidance',
        'Good Corporate Standing',
        'Operational Efficiency',
        'Risk Management'
      ]
    },
    'business-licensing': {
      title: 'Business Licensing',
      description: 'Complete business licensing services for various industries and business types. We help obtain all necessary licenses and permits required for your business operations.',
      features: [
        'License Identification & Assessment',
        'Application Preparation',
        'Government Liaison',
        'Renewal Services',
        'Compliance Monitoring',
        'Multi-state Licensing Support'
      ],
      process: [
        'Business Analysis & License Identification',
        'Application Preparation',
        'Government Submission',
        'Follow-up & Approval',
        'License Delivery & Support'
      ],
      pricing: 'Starting from ₹3,999',
      timeline: '15-30 business days',
      benefits: [
        'Legal Business Operations',
        'Regulatory Compliance',
        'Market Access',
        'Customer Trust',
        'Competitive Advantage'
      ]
    },

    // Litigation Services
    'civil-litigation': {
      title: 'Civil Litigation',
      description: 'Expert representation in civil matters including property disputes, contract breaches, tort claims, and commercial litigation. Our experienced litigators provide aggressive representation while seeking cost-effective resolutions.',
      features: [
        'Court Representation',
        'Case Strategy Development',
        'Document Preparation & Filing',
        'Settlement Negotiation',
        'Appeal Services',
        'Alternative Dispute Resolution'
      ],
      process: [
        'Case Assessment & Strategy',
        'Pleadings & Documentation',
        'Discovery & Evidence Collection',
        'Trial Preparation & Representation',
        'Post-Trial Support'
      ],
      pricing: 'Consultation from ₹1,500',
      timeline: 'Varies by case complexity',
      benefits: [
        'Professional Representation',
        'Strategic Case Management',
        'Cost-Effective Solutions',
        'Experienced Advocacy',
        'Comprehensive Support'
      ]
    },
    'criminal-defense': {
      title: 'Criminal Defense',
      description: 'Aggressive criminal defense representation for all types of criminal charges. We protect your rights and fight for the best possible outcome in your case.',
      features: [
        'Bail Applications',
        'Pre-trial Motions',
        'Plea Negotiations',
        'Trial Representation',
        'Appeal Services',
        '24/7 Emergency Support'
      ],
      process: [
        'Case Evaluation & Strategy',
        'Investigation & Evidence Review',
        'Pre-trial Preparation',
        'Court Representation',
        'Post-trial Support'
      ],
      pricing: 'Starting from ₹10,000',
      timeline: 'Varies by case',
      benefits: [
        'Constitutional Rights Protection',
        'Experienced Defense',
        'Reduced Penalties',
        'Case Dismissal Opportunities',
        'Peace of Mind'
      ]
    },
    'commercial-disputes': {
      title: 'Commercial Disputes',
      description: 'Specialized representation in commercial disputes including breach of contract, partnership disputes, vendor issues, and business torts. We focus on protecting your business interests.',
      features: [
        'Contract Dispute Resolution',
        'Partnership Dispute Mediation',
        'Vendor & Supplier Issues',
        'Business Tort Claims',
        'Injunctive Relief',
        'Damages Recovery'
      ],
      process: [
        'Dispute Analysis',
        'Strategy Development',
        'Negotiation & Mediation',
        'Litigation if Necessary',
        'Resolution & Enforcement'
      ],
      pricing: 'Starting from ₹5,000',
      timeline: '30-180 days',
      benefits: [
        'Business Protection',
        'Cost-Effective Resolution',
        'Relationship Preservation',
        'Quick Resolution',
        'Professional Advocacy'
      ]
    },
    'employment-disputes': {
      title: 'Employment Disputes',
      description: 'Comprehensive employment law services for both employers and employees. We handle wrongful termination, discrimination, harassment, wage disputes, and workplace violations.',
      features: [
        'Wrongful Termination Claims',
        'Discrimination & Harassment Cases',
        'Wage & Hour Disputes',
        'Employment Contract Issues',
        'Workplace Policy Development',
        'Settlement Negotiations'
      ],
      process: [
        'Case Assessment',
        'Evidence Gathering',
        'Filing & Documentation',
        'Negotiation & Mediation',
        'Trial Representation'
      ],
      pricing: 'Starting from ₹3,000',
      timeline: '60-120 days',
      benefits: [
        'Rights Protection',
        'Fair Compensation',
        'Workplace Justice',
        'Professional Advocacy',
        'Quick Resolution'
      ]
    },
    'arbitration': {
      title: 'Arbitration Services',
      description: 'Alternative dispute resolution through arbitration proceedings. We provide efficient, cost-effective resolution of disputes outside traditional court systems.',
      features: [
        'Arbitration Representation',
        'Arbitrator Selection',
        'Evidence Presentation',
        'Award Enforcement',
        'Mediation Services',
        'Expedited Proceedings'
      ],
      process: [
        'Arbitration Agreement Review',
        'Arbitrator Selection',
        'Case Preparation',
        'Arbitration Hearing',
        'Award Implementation'
      ],
      pricing: 'Starting from ₹8,000',
      timeline: '30-90 days',
      benefits: [
        'Faster Resolution',
        'Cost Effective',
        'Confidential Process',
        'Expert Decision Making',
        'Enforceable Awards'
      ]
    },

    // Family Law Services
    'divorce-proceedings': {
      title: 'Divorce Proceedings',
      description: 'Sensitive and professional handling of divorce cases with focus on amicable resolution and client welfare. We handle both mutual consent and contested divorce cases.',
      features: [
        'Mutual Consent Divorce',
        'Contested Divorce Proceedings',
        'Mediation Services',
        'Property Division',
        'Spousal Support',
        'Child Custody Arrangements'
      ],
      process: [
        'Initial Consultation & Assessment',
        'Document Preparation',
        'Filing Divorce Petition',
        'Court Proceedings',
        'Final Decree & Settlement'
      ],
      pricing: 'Starting from ₹8,999',
      timeline: '6-18 months',
      benefits: [
        'Amicable Resolution',
        'Fair Settlement',
        'Child Welfare Priority',
        'Emotional Support',
        'Legal Protection'
      ]
    },
    'child-custody': {
      title: 'Child Custody',
      description: 'Dedicated child custody services prioritizing the best interests of the child. We handle custody arrangements, visitation rights, and modification of existing orders.',
      features: [
        'Custody Determination',
        'Visitation Rights',
        'Parenting Plans',
        'Custody Modification',
        'Child Support Calculation',
        'Grandparent Rights'
      ],
      process: [
        'Case Assessment',
        'Evidence Collection',
        'Mediation Attempts',
        'Court Proceedings',
        'Custody Order Implementation'
      ],
      pricing: 'Starting from ₹12,000',
      timeline: '3-12 months',
      benefits: [
        'Child Welfare Priority',
        'Fair Custody Arrangements',
        'Parental Rights Protection',
        'Stable Environment',
        'Professional Advocacy'
      ]
    },
    'alimony-support': {
      title: 'Alimony & Support',
      description: 'Comprehensive alimony and spousal support services including calculation, modification, and enforcement. We ensure fair financial arrangements for both parties.',
      features: [
        'Alimony Calculation',
        'Spousal Support Orders',
        'Modification Requests',
        'Enforcement Actions',
        'Financial Analysis',
        'Tax Implications Review'
      ],
      process: [
        'Financial Assessment',
        'Support Calculation',
        'Negotiation & Agreement',
        'Court Filing',
        'Order Enforcement'
      ],
      pricing: 'Starting from ₹6,000',
      timeline: '2-6 months',
      benefits: [
        'Fair Financial Support',
        'Legal Compliance',
        'Modification Flexibility',
        'Enforcement Support',
        'Financial Security'
      ]
    },
    'adoption-services': {
      title: 'Adoption Services',
      description: 'Complete legal adoption services including domestic adoption, international adoption, and step-parent adoption. We guide families through the entire adoption process.',
      features: [
        'Domestic Adoption',
        'International Adoption',
        'Step-parent Adoption',
        'Legal Documentation',
        'Court Representation',
        'Post-Adoption Support'
      ],
      process: [
        'Adoption Consultation',
        'Legal Requirements Review',
        'Documentation Preparation',
        'Court Proceedings',
        'Finalization & Certification'
      ],
      pricing: 'Starting from ₹15,000',
      timeline: '6-18 months',
      benefits: [
        'Legal Family Formation',
        'Complete Documentation',
        'Professional Guidance',
        'Emotional Support',
        'Secure Process'
      ]
    },
    'property-settlement': {
      title: 'Property Settlement',
      description: 'Expert property settlement services in family law matters. We ensure fair division of marital assets and debts with focus on equitable distribution.',
      features: [
        'Asset Valuation',
        'Property Division',
        'Debt Allocation',
        'Business Valuation',
        'Retirement Account Division',
        'Settlement Agreements'
      ],
      process: [
        'Asset Discovery',
        'Valuation & Appraisal',
        'Division Strategy',
        'Negotiation & Settlement',
        'Court Approval'
      ],
      pricing: 'Starting from ₹10,000',
      timeline: '3-8 months',
      benefits: [
        'Fair Asset Division',
        'Financial Security',
        'Legal Protection',
        'Comprehensive Settlement',
        'Future Planning'
      ]
    },

    // Real Estate Services
    'property-registration': {
      title: 'Property Registration',
      description: 'Complete property registration services including due diligence, documentation, and registration assistance. We ensure clear title transfer and legal compliance.',
      features: [
        'Title Verification',
        'Document Preparation',
        'Registration Process',
        'Legal Clearance',
        'Stamp Duty Calculation',
        'Registration Fee Management'
      ],
      process: [
        'Property Verification',
        'Documentation Preparation',
        'Stamp Duty Payment',
        'Registration Appointment',
        'Document Registration'
      ],
      pricing: 'Starting from ₹4,999',
      timeline: '7-15 days',
      benefits: [
        'Clear Title Transfer',
        'Legal Protection',
        'Marketable Title',
        'Loan Eligibility',
        'Peace of Mind'
      ]
    },
    'title-verification': {
      title: 'Title Verification',
      description: 'Comprehensive title verification services to ensure clear and marketable title. We conduct thorough due diligence to identify any encumbrances or legal issues.',
      features: [
        'Title Search & Analysis',
        'Encumbrance Certificate',
        'Legal Opinion',
        'Risk Assessment',
        'Documentation Review',
        'Compliance Verification'
      ],
      process: [
        'Initial Document Review',
        'Title Search Execution',
        'Legal Analysis',
        'Risk Assessment Report',
        'Final Opinion & Recommendations'
      ],
      pricing: 'Starting from ₹3,000',
      timeline: '5-10 days',
      benefits: [
        'Clear Title Confirmation',
        'Risk Identification',
        'Legal Protection',
        'Investment Security',
        'Professional Opinion'
      ]
    },
    'lease-agreements': {
      title: 'Lease Agreements',
      description: 'Professional lease agreement drafting and review services for residential and commercial properties. We create legally binding agreements that protect both parties.',
      features: [
        'Residential Lease Drafting',
        'Commercial Lease Agreements',
        'Lease Review & Analysis',
        'Rent Agreement Registration',
        'Dispute Resolution',
        'Lease Renewal Services'
      ],
      process: [
        'Requirement Analysis',
        'Agreement Drafting',
        'Review & Revision',
        'Registration Process',
        'Delivery & Support'
      ],
      pricing: 'Starting from ₹1,500',
      timeline: '2-5 days',
      benefits: [
        'Legal Protection',
        'Clear Terms',
        'Dispute Prevention',
        'Compliance Assurance',
        'Professional Documentation'
      ]
    },
    'property-disputes': {
      title: 'Property Disputes',
      description: 'Expert representation in property disputes including boundary disputes, title conflicts, possession matters, and property fraud cases.',
      features: [
        'Boundary Dispute Resolution',
        'Title Conflict Cases',
        'Possession Matters',
        'Property Fraud Cases',
        'Partition Suits',
        'Injunctive Relief'
      ],
      process: [
        'Dispute Assessment',
        'Evidence Collection',
        'Legal Strategy Development',
        'Court Representation',
        'Resolution & Enforcement'
      ],
      pricing: 'Starting from ₹8,000',
      timeline: '6-24 months',
      benefits: [
        'Property Rights Protection',
        'Legal Resolution',
        'Professional Advocacy',
        'Clear Title',
        'Peace of Mind'
      ]
    },
    'development-law': {
      title: 'Development Law',
      description: 'Comprehensive real estate development legal services including project approvals, compliance, joint ventures, and regulatory matters.',
      features: [
        'Project Approval Assistance',
        'Regulatory Compliance',
        'Joint Venture Structuring',
        'RERA Compliance',
        'Environmental Clearances',
        'Construction Agreements'
      ],
      process: [
        'Project Assessment',
        'Regulatory Planning',
        'Approval Applications',
        'Compliance Monitoring',
        'Documentation & Support'
      ],
      pricing: 'Starting from ₹20,000',
      timeline: '30-180 days',
      benefits: [
        'Project Success',
        'Regulatory Compliance',
        'Risk Mitigation',
        'Professional Guidance',
        'Market Access'
      ]
    },

    // Intellectual Property Services
    'patent-registration': {
      title: 'Patent Registration',
      description: 'Protect your inventions with comprehensive patent registration services and IP strategy consultation. We handle the entire patent application process.',
      features: [
        'Patent Search & Analysis',
        'Application Drafting',
        'Filing & Prosecution',
        'Response to Objections',
        'Patent Grant Support',
        'International Filing'
      ],
      process: [
        'Invention Assessment',
        'Prior Art Search',
        'Application Preparation',
        'Filing & Examination',
        'Grant & Maintenance'
      ],
      pricing: 'Starting from ₹12,999',
      timeline: '18-36 months',
      benefits: [
        'Exclusive Rights Protection',
        'Commercial Advantage',
        'License Revenue',
        'Investment Attraction',
        'Market Position'
      ]
    },
    'trademark-filing': {
      title: 'Trademark Filing',
      description: 'Complete trademark registration services to protect your brand identity. We handle trademark search, application, and registration process.',
      features: [
        'Trademark Search',
        'Application Filing',
        'Prosecution Support',
        'Opposition Handling',
        'Registration Certificate',
        'Renewal Services'
      ],
      process: [
        'Trademark Search',
        'Application Preparation',
        'Filing & Examination',
        'Publication & Opposition',
        'Registration & Certificate'
      ],
      pricing: 'Starting from ₹6,999',
      timeline: '12-18 months',
      benefits: [
        'Brand Protection',
        'Exclusive Usage Rights',
        'Commercial Value',
        'Legal Protection',
        'Market Recognition'
      ]
    },
    'copyright-protection': {
      title: 'Copyright Protection',
      description: 'Comprehensive copyright protection services for creative works including literature, music, software, and artistic creations.',
      features: [
        'Copyright Registration',
        'Creative Work Protection',
        'Infringement Actions',
        'Licensing Agreements',
        'Fair Use Analysis',
        'DMCA Services'
      ],
      process: [
        'Work Assessment',
        'Application Preparation',
        'Filing & Processing',
        'Registration Certificate',
        'Enforcement Support'
      ],
      pricing: 'Starting from ₹3,999',
      timeline: '6-12 months',
      benefits: [
        'Creative Work Protection',
        'Exclusive Rights',
        'Revenue Generation',
        'Legal Remedies',
        'Professional Recognition'
      ]
    },
    'ip-litigation': {
      title: 'IP Litigation',
      description: 'Expert representation in intellectual property disputes including patent infringement, trademark disputes, and copyright violations.',
      features: [
        'Patent Infringement Cases',
        'Trademark Disputes',
        'Copyright Violations',
        'Trade Secret Theft',
        'Unfair Competition',
        'Licensing Disputes'
      ],
      process: [
        'Case Assessment',
        'Evidence Collection',
        'Strategy Development',
        'Court Representation',
        'Resolution & Enforcement'
      ],
      pricing: 'Starting from ₹15,000',
      timeline: '12-36 months',
      benefits: [
        'IP Rights Protection',
        'Damage Recovery',
        'Injunctive Relief',
        'Professional Advocacy',
        'Market Protection'
      ]
    },
    'trade-secrets': {
      title: 'Trade Secrets',
      description: 'Comprehensive trade secret protection services including confidentiality agreements, policy development, and enforcement actions.',
      features: [
        'Trade Secret Identification',
        'Confidentiality Agreements',
        'Policy Development',
        'Employee Training',
        'Enforcement Actions',
        'Litigation Support'
      ],
      process: [
        'Asset Identification',
        'Protection Strategy',
        'Policy Implementation',
        'Monitoring & Enforcement',
        'Legal Action if Needed'
      ],
      pricing: 'Starting from ₹8,000',
      timeline: '15-30 days',
      benefits: [
        'Competitive Advantage',
        'Information Security',
        'Legal Protection',
        'Business Value',
        'Market Position'
      ]
    },

    // Tax Law Services
    'tax-planning': {
      title: 'Tax Planning',
      description: 'Strategic tax planning services to minimize tax liability and maximize savings. We provide comprehensive tax strategies for individuals and businesses.',
      features: [
        'Tax Strategy Development',
        'Liability Minimization',
        'Investment Planning',
        'Retirement Planning',
        'Estate Planning',
        'Business Tax Planning'
      ],
      process: [
        'Financial Assessment',
        'Tax Analysis',
        'Strategy Development',
        'Implementation Planning',
        'Ongoing Monitoring'
      ],
      pricing: 'Starting from ₹5,000',
      timeline: '15-30 days',
      benefits: [
        'Tax Savings',
        'Financial Optimization',
        'Compliance Assurance',
        'Future Planning',
        'Professional Guidance'
      ]
    },
    'gst-registration': {
      title: 'GST Registration',
      description: 'Complete GST registration services including application filing, compliance setup, and ongoing support. We ensure smooth GST registration process.',
      features: [
        'GST Registration Application',
        'Document Preparation',
        'Compliance Setup',
        'GST Return Filing',
        'Amendment Services',
        'Cancellation Support'
      ],
      process: [
        'Eligibility Assessment',
        'Document Collection',
        'Application Filing',
        'Registration Certificate',
        'Compliance Setup'
      ],
      pricing: 'Starting from ₹2,999',
      timeline: '7-15 days',
      benefits: [
        'Legal Compliance',
        'Input Tax Credit',
        'Business Expansion',
        'Customer Trust',
        'Government Benefits'
      ]
    },
    'tax-disputes': {
      title: 'Tax Disputes',
      description: 'Expert representation in tax disputes including income tax, GST, and other tax-related matters. We handle appeals and litigation before tax authorities.',
      features: [
        'Tax Assessment Appeals',
        'Penalty Disputes',
        'Refund Claims',
        'GST Disputes',
        'Search & Seizure Cases',
        'Settlement Negotiations'
      ],
      process: [
        'Case Analysis',
        'Appeal Preparation',
        'Representation',
        'Evidence Submission',
        'Resolution & Compliance'
      ],
      pricing: 'Starting from ₹8,000',
      timeline: '6-24 months',
      benefits: [
        'Tax Relief',
        'Penalty Reduction',
        'Professional Representation',
        'Compliance Resolution',
        'Future Protection'
      ]
    },
    'income-tax-returns': {
      title: 'Income Tax Returns',
      description: 'Professional income tax return filing services for individuals and businesses. We ensure accurate filing and maximum tax benefits.',
      features: [
        'ITR Filing for Individuals',
        'Business Tax Returns',
        'Tax Computation',
        'Refund Processing',
        'Amendment Services',
        'E-filing Support'
      ],
      process: [
        'Document Collection',
        'Tax Computation',
        'Return Preparation',
        'E-filing & Submission',
        'Acknowledgment & Follow-up'
      ],
      pricing: 'Starting from ₹1,500',
      timeline: '3-7 days',
      benefits: [
        'Accurate Filing',
        'Maximum Deductions',
        'Compliance Assurance',
        'Quick Processing',
        'Professional Service'
      ]
    },
    'tax-compliance': {
      title: 'Tax Compliance',
      description: 'Comprehensive tax compliance services to ensure adherence to all tax laws and regulations. We provide ongoing compliance support and monitoring.',
      features: [
        'Compliance Monitoring',
        'Regular Filing Support',
        'Audit Assistance',
        'Record Maintenance',
        'Regulatory Updates',
        'Risk Assessment'
      ],
      process: [
        'Compliance Assessment',
        'System Setup',
        'Regular Monitoring',
        'Filing & Reporting',
        'Ongoing Support'
      ],
      pricing: 'Starting from ₹6,000',
      timeline: 'Ongoing support',
      benefits: [
        'Regulatory Compliance',
        'Penalty Avoidance',
        'Operational Efficiency',
        'Risk Management',
        'Peace of Mind'
      ]
    }
    // Add other service details here...
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveDropdown(null);
  };

  const handleMobileNavigation = (sectionId) => {
    scrollToSection(sectionId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white"> 
      
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-yellow-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0">
              <Link 
                                      to="/" 
                                      
                                    >
              <div className="h-10 w-auto sm:h-12 md:h-14 lg:h-16">
                <svg 
                  viewBox="0 0 1200 400" 
                  className="h-full w-auto" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="1200" height="400" fill="transparent"/>
                  
                  <g transform="translate(80, 60)">
                    <path 
                      d="M40 20 C40 20, 40 10, 60 10 L160 10 C180 10, 180 20, 180 20 L180 160 C180 180, 160 200, 140 220 L110 250 L80 220 C60 200, 40 180, 40 160 Z" 
                      fill="none" 
                      stroke="#fbbf24" 
                      strokeWidth="12" 
                      strokeLinejoin="round"
                    />
                    
                    <g transform="translate(70, 40)">
                      <rect x="10" y="10" width="60" height="8" fill="#fbbf24" rx="4"/>
                      <rect x="15" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="32" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="49" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="66" y="25" width="8" height="120" fill="#fbbf24" rx="4"/>
                      <rect x="10" y="150" width="60" height="12" fill="#fbbf24" rx="4"/>
                    </g>
                  </g>
                  
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
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(service.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors">
                    <service.icon className="h-4 w-4 mr-1" />
                    {service.title}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  
                  {activeDropdown === service.id && (
                    <div className="absolute top-full left-0 w-64 bg-gray-800 border border-yellow-500 rounded-lg shadow-xl z-50">
                      <div className="py-2 grid grid-cols-1 gap-1">
                        {service.subServices.map((subService) => (
                          <button
                            key={subService.id}
                            onClick={() => scrollToSection(subService.id)}
                            className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-yellow-500 hover:text-gray-900 transition-colors rounded-md mx-1"
                          >
                            {subService.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-yellow-400"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-yellow-500">
              <div className="py-4 space-y-2">
                {services.map((service) => (
                  <div key={service.id}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === service.id ? null : service.id)}
                      className="flex items-center justify-between w-full px-4 py-2 text-left text-white hover:text-yellow-400 hover:bg-gray-700 rounded-md transition-colors"
                    >
                      <div className="flex items-center">
                        <service.icon className="h-4 w-4 mr-2" />
                        {service.title}
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === service.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === service.id && (
                      <div className="pl-8 space-y-1">
                        {service.subServices.map((subService) => (
                          <button
                            key={subService.id}
                            onClick={() => handleMobileNavigation(subService.id)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-md transition-colors border-l-2 border-transparent hover:border-yellow-400"
                          >
                            {subService.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
            Expert Legal Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive legal solutions for individuals and businesses with over 15+ years of experience
          </p>
          <Link 
                                      to="/contactus" 
                                      
                                    >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Consultation
            </button>
            
          </div>
          </Link>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(serviceDetails).map(([serviceId, details]) => (
          <section key={serviceId} id={serviceId} className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-500 transition-colors">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">{details.title}</h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{details.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Star className="h-4 w-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30 mb-6">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="font-semibold text-blue-400">Timeline</span>
                    </div>
                    <p className="text-white font-semibold">{details.timeline}</p>
                  </div>
                  
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Target className="h-5 w-5 text-yellow-400 mr-2" />
                    Our Process
                  </h3>
                  <div className="space-y-4 mb-6">
                    {details.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-yellow-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Award className="h-5 w-5 text-yellow-400 mr-2" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  <Link 
                                      to="/contactus" 
                                      
                                    >
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button className="bg-yellow-500 mt-5 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Consultation
            </button>
            
          </div>
          </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default LawyerServicesWebsite;