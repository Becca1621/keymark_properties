
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">KEYMARK Properties</h3>
            <p className="text-gray-300 mb-4">
              Redefining luxury living with exceptional residences in the heart of Addis.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors" aria-label="WhatsApp">
              <MessageSquare className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} KEYMARK Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
