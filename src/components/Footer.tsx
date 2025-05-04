
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="gradient-flow-footer text-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-luxury-neutral-300 hover:text-luxury-cream transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-neutral-300 hover:text-luxury-cream transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-luxury-neutral-300 font-sans text-sm leading-relaxed italic">
              Redefining luxury living with exceptional residences in the heart of Addis Ababa.
            </p>
          </div>
        </div>
        
        <div className="border-t border-luxury-neutral-700/50 mt-3 pt-3 text-center">
          <p className="text-luxury-neutral-400 text-xs tracking-wider font-sans">
            © {new Date().getFullYear()} KEYMARK Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
