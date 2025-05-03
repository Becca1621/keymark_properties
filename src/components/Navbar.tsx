
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-luxury-dark">KEYMARK Properties</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('properties')} 
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Properties
          </button>
          <button 
            onClick={() => scrollToSection('amenities')} 
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Amenities
          </button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-luxury-green hover:bg-luxury-dark text-white"
          >
            Contact Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-luxury-green focus:outline-none"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Amenities
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-luxury-green hover:bg-luxury-dark text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
