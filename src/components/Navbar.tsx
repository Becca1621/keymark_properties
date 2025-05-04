import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll to section with offset for fixed header
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo onClick={() => scrollToSection('hero')} />
        
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
          <button 
            onClick={() => scrollToSection('contact-info')} 
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Contact Us
          </button>
          <Button 
            onClick={() => scrollToSection('book-tour')} 
            className="bg-luxury-green hover:bg-luxury-dark text-white"
          >
            Book a Tour
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
            <button
              onClick={() => scrollToSection('contact-info')}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollToSection('book-tour')} 
              className="w-full bg-luxury-green hover:bg-luxury-dark text-white"
            >
              Book a Tour
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
