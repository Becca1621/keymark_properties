
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  const handleNavItem = (path: string, section?: string) => {
    handleNavigation(path, section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-3 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
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

        {/* Mobile Hamburger Menu using Sheet component */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="text-gray-800 hover:text-luxury-navy focus:outline-none p-1"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] pt-12">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleNavItem('/', 'hero')}
                  className="text-left font-medium text-base text-gray-800 hover:text-luxury-navy transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavItem('/', 'properties')}
                  className="text-left font-medium text-base text-gray-800 hover:text-luxury-navy transition-colors py-2"
                >
                  Properties
                </button>
                <button
                  onClick={() => handleNavItem('/amenities')}
                  className="text-left font-medium text-base text-gray-800 hover:text-luxury-navy transition-colors py-2"
                >
                  Amenities
                </button>
                <button
                  onClick={() => handleNavItem('/', 'contact')}
                  className="text-left font-medium text-base text-gray-800 hover:text-luxury-navy transition-colors py-2"
                >
                  Contact
                </button>
                <Button 
                  className="w-full bg-luxury-navy hover:bg-luxury-dark text-white py-2 px-4 text-base"
                  onClick={() => handleNavItem('/', 'book-tour')}
                >
                  Book a Tour
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
