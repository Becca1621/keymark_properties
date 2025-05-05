import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="font-serif text-2xl font-bold text-luxury-dark hover:text-luxury-green transition-colors">
            KEYMARK Properties
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-800 hover:text-luxury-green transition-colors">
            Home
          </Link>
          <button onClick={() => handleNavClick('properties')} className="font-medium text-gray-800 hover:text-luxury-green transition-colors">
            Properties
          </button>
          <Link to="/amenities" className="font-medium text-gray-800 hover:text-luxury-green transition-colors">
            Amenities
          </Link>
          <button onClick={() => handleNavClick('contact-info')} className="font-medium text-gray-800 hover:text-luxury-green transition-colors">
            Contact Us
          </button>
          <Button onClick={() => handleNavClick('book-tour')} className="bg-luxury-green hover:bg-luxury-dark text-white">
            Book a Tour
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-luxury-green focus:outline-none">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-gray-800 hover:text-luxury-green">
              Home
            </Link>
            <button onClick={() => handleNavClick('properties')} className="block font-medium text-gray-800 hover:text-luxury-green">
              Properties
            </button>
            <Link to="/amenities" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-gray-800 hover:text-luxury-green">
              Amenities
            </Link>
            <button onClick={() => handleNavClick('contact-info')} className="block font-medium text-gray-800 hover:text-luxury-green">
              Contact Us
            </button>
            <Button onClick={() => handleNavClick('book-tour')} className="w-full bg-luxury-green hover:bg-luxury-dark text-white">
              Book a Tour
            </Button>
          </div>
        </div>
      )}
