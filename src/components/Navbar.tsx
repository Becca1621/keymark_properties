
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleNavigation } = useNavigation();
  const location = useLocation();
  const isMobile = useIsMobile();

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById('mobile-menu');
      if (mobileMenuOpen && navElement && !navElement.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize if screen becomes larger
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <img 
            src="/LogoClear.jpg" 
            alt="KEYMARK Logo" 
            className="h-7 w-7 sm:h-8 sm:w-8 mr-1 sm:mr-2 -mt-1 sm:-mt-2" 
          />
          <span className="font-serif text-xl sm:text-2xl font-bold text-luxury-dark hover:text-luxury-navy transition-colors">
            KEYMARK Properties
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <button
            onClick={() => handleNavigation('/', 'hero')}
            className="font-medium text-gray-800 hover:text-luxury-navy transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/', 'properties')}
            className="font-medium text-gray-800 hover:text-luxury-navy transition-colors"
          >
            Properties
          </button>
          <button
            onClick={() => handleNavigation('/amenities')}
            className="font-medium text-gray-800 hover:text-luxury-navy transition-colors"
          >
            Amenities
          </button>
          <button
            onClick={() => handleNavigation('/', 'contact')}
            className="font-medium text-gray-800 hover:text-luxury-navy transition-colors"
          >
            Contact Us
          </button>
          <Button 
            className="bg-luxury-navy hover:bg-luxury-dark text-white"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 hover:text-luxury-navy focus:outline-none p-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed top-[57px] left-0 right-0 bg-white shadow-lg z-50 animate-slide-up max-h-[calc(100vh-57px)] overflow-y-auto"
        >
          <div className="px-4 py-3 space-y-3 flex flex-col">
            <button
              onClick={() => {
                handleNavigation('/', 'hero');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center py-2 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'properties');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center py-2 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => {
                handleNavigation('/amenities');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center py-2 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center py-2 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact Us
            </button>
            <Button 
              className="w-full bg-luxury-navy hover:bg-luxury-dark text-white"
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
