
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <p className="text-white text-sm uppercase tracking-wider mb-3 font-medium">Follow us</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="WhatsApp">
                <MessageSquare className="h-7 w-7" />
              </a>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-300 font-sans text-sm leading-relaxed italic">
              Redefining luxury living with exceptional residences in the heart of Addis.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-4 pt-6 text-center">
          <p className="text-gray-400 text-xs tracking-wider font-sans">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
