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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-3 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo - More compact for mobile */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <img 
            src="/LogoClear.jpg" 
            alt="KEYMARK Logo" 
            className="h-6 w-6 sm:h-8 sm:w-8 mr-1 -mt-1" 
          />
          <span className="font-serif text-lg sm:text-2xl font-bold text-luxury-dark hover:text-luxury-navy transition-colors truncate">
            KEYMARK Properties
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
          <button
            onClick={() => handleNavigation('/', 'hero')}
            className="font-medium text-sm lg:text-base text-gray-800 hover:text-luxury-navy transition-colors px-2"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/', 'properties')}
            className="font-medium text-sm lg:text-base text-gray-800 hover:text-luxury-navy transition-colors px-2"
          >
            Properties
          </button>
          <button
            onClick={() => handleNavigation('/amenities')}
            className="font-medium text-sm lg:text-base text-gray-800 hover:text-luxury-navy transition-colors px-2"
          >
            Amenities
          </button>
          <button
            onClick={() => handleNavigation('/', 'contact')}
            className="font-medium text-sm lg:text-base text-gray-800 hover:text-luxury-navy transition-colors px-2"
          >
            Contact
          </button>
          <Button 
            className="bg-luxury-navy hover:bg-luxury-dark text-white text-xs lg:text-sm py-1 px-3 h-auto"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile menu toggle button - Smaller touch target */}
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

      {/* Mobile Menu - More compact with smaller text and padding */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed top-[49px] left-0 right-0 bg-white shadow-lg z-50 animate-slide-up max-h-[calc(100vh-49px)] overflow-y-auto"
        >
          <div className="px-3 py-2 space-y-1 flex flex-col">
            <button
              onClick={() => {
                handleNavigation('/', 'hero');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'properties');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => {
                handleNavigation('/amenities');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact
            </button>
            <Button 
              className="w-full bg-luxury-navy hover:bg-luxury-dark text-white py-1 px-3 h-auto text-sm"
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
