
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-luxury-dark">LivingLuxe</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-800 hover:text-luxury-gold transition-colors">
            Home
          </Link>
          <Link to="/#properties" className="font-medium text-gray-800 hover:text-luxury-gold transition-colors">
            Properties
          </Link>
          <Link to="/#amenities" className="font-medium text-gray-800 hover:text-luxury-gold transition-colors">
            Amenities
          </Link>
          <Link to="/#contact" className="font-medium text-gray-800 hover:text-luxury-gold transition-colors">
            Contact
          </Link>
          <Button className="bg-luxury-gold hover:bg-luxury-dark text-white">Book a Tour</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-luxury-gold focus:outline-none"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block font-medium text-gray-800 hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#properties" 
              className="block font-medium text-gray-800 hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/#amenities" 
              className="block font-medium text-gray-800 hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link 
              to="/#contact" 
              className="block font-medium text-gray-800 hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-luxury-gold hover:bg-luxury-dark text-white">
              Book a Tour
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
