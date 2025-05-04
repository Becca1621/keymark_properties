
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold text-white mb-3 tracking-wide">KEYMARK Properties</h3>
            <p className="text-gray-300 mb-4 font-sans text-sm leading-relaxed italic">
              Redefining luxury living with exceptional residences in the heart of Addis.
            </p>
          </div>
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram className="h-7 w-7" />
            </a>
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300" aria-label="WhatsApp">
              <MessageSquare className="h-7 w-7" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-8 pt-6 text-center md:text-left">
          <p className="text-gray-400 text-xs tracking-wider font-sans">
            © {new Date().getFullYear()} KEYMARK Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
