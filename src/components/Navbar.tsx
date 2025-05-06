
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleNavigation } = useNavigation();
  const location = useLocation();

  // Handle scroll behavior when navigating between pages
  useEffect(() => {
  if (location.state && location.state.scrollTo) {
    const scrollToElement = () => {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState({}, document.title);
      } else {
        // Retry after delay
        setTimeout(scrollToElement, 100);
      }
    };
    scrollToElement();
  }
}, [location]);


  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <span className="font-serif text-2xl font-bold text-luxury-dark hover:text-luxury-green transition-colors">
            KEYMARK Properties
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation('/', 'hero')}
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/', 'properties')}
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Properties
          </button>
          <button
            onClick={() => handleNavigation('/amenities')}
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Amenities
          </button>
          <button
            onClick={() => handleNavigation('/', 'contact')}
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Contact Us
          </button>
          <Button 
            className="bg-luxury-green hover:bg-luxury-dark text-white"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              onClick={() => {
                handleNavigation('/', 'hero');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'properties');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => {
                handleNavigation('/amenities');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
            >
              Contact Us
            </button>
            <Button 
              className="w-full bg-luxury-green hover:bg-luxury-dark text-white"
              onClick={() => {
                handleNavigation('/', 'book-tour');
                setMobileMenuOpen(false);
              }}
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
