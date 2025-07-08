import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'm.govardhanvarma@gmail.com',
      link: 'mailto:m.govardhanvarma@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9492605274',
      link: 'tel:+919492605274'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: (
      <>
        M.Govardhan Varma<br />
        Finvis Associates Law Firm<br />
        #39-11-4,Shop No.5,<br />
        Turlapati kutumbha Rao Street,<br />
        Labbipet<br />
        Vijayawada - 520010.
      </>
    ),
                
      link: 'https://maps.app.goo.gl/YbHi13uBGqEcAyTK9'
    }
  ];

  // Test function to check if clicks are working
  const testClick = (label, link) => {
    console.log(`Clicked ${label}: ${link}`);
    alert(`Trying to open: ${label} - ${link}`);
  };

  return (
    <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
      <div className="flex flex-col gap-4 bg-gray-900/90 backdrop-blur-lg border border-amber-400/30 rounded-2xl p-6 shadow-2xl min-w-[280px] hover:-translate-y-2 transition-all duration-300">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer hover:bg-gray-800/50 hover:translate-x-1">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-all duration-300 ${
              index === 0 ? 'bg-gradient-to-br cursor-pointer from-amber-400 to-amber-600 text-black' :
              index === 1 ? 'bg-gradient-to-br cursor-pointer from-amber-500 to-yellow-500 text-black' :
              'bg-gradient-to-br cursor-pointer cursor-pointer from-yellow-400 to-amber-400 text-black'
            }`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <a
                href={item.link}
                target={item.label === 'Location' ? '_blank' : '_self'}
                rel={item.label === 'Location' ? 'noopener noreferrer' : ''}
                className="text-white hover:text-amber-300 transition-colors duration-300 text-sm font-medium leading-tight block"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.stopPropagation();
                  testClick(item.label, item.link);
                }}
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;