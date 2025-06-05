import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const MobileContactInfo = () => {
  const contactItems = [
    { icon: <Mail className="w-5 h-5" />, link: 'mailto:kundrapubhargav@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, link: 'tel:+919014110638' },
    { icon: <MapPin className="w-5 h-5" />, link: 'https://maps.google.com/?q=17.4851,78.4056' }
  ];

  return (
    <div className="lg:hidden mt-12 w-full max-w-md">
      <div className="flex justify-center gap-4 bg-gray-900/90 backdrop-blur-lg border border-amber-400/30 rounded-2xl p-4">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={index === 2 ? '_blank' : '_self'}
            rel={index === 2 ? 'noopener noreferrer' : ''}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black hover:scale-110 transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileContactInfo;