import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo Scrolls to Hero Section on Home */}
        <Link
          to="/#hero"
          className="flex items-center cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-serif text-2xl font-bold text-luxury-dark hover:text-luxury-green transition-colors">
            KEYMARK Properties
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/#hero"
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#properties"
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Properties
          </Link>
          <Link
            to="/amenities"
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Amenities
          </Link>
          <Link
            to="/#contact-info"
            className="font-medium text-gray-800 hover:text-luxury-green transition-colors"
          >
            Contact Us
          </Link>
          <Link to="/#book-tour">
            <Button className="bg-luxury-green hover:bg-luxury-dark text-white">
              Book a Tour
            </Button>
          </Link>
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
            <Link
              to="/#hero"
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#properties"
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/amenities"
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              to="/#contact-info"
              className="block w-full text-left font-medium text-gray-800 hover:text-luxury-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/#book-tour" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-luxury-green hover:bg-luxury-dark text-white">
                Book a Tour
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
