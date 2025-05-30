
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        } else {
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    }
  }, [location]);

  // Close mobile menu on resize if screen becomes larger
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const navigationItems = [
    { label: 'Home', action: () => handleNavigation('/', 'hero') },
    { label: 'Properties', action: () => handleNavigation('/', 'properties') },
    { label: 'Amenities', action: () => handleNavigation('/amenities') },
    { label: 'Contact', action: () => handleNavigation('/', 'contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container-responsive py-3">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src="/LogoClear.jpg" 
              alt="KEYMARK Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 mr-2 object-contain" 
            />
            <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-luxury-dark hover:text-luxury-navy transition-colors">
              KEYMARK Properties
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="font-medium text-gray-800 hover:text-luxury-navy transition-colors px-3 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-luxury-navy hover:bg-luxury-dark text-white"
              onClick={() => handleNavigation('/', 'book-tour')}
            >
              Book a Tour
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-800 hover:text-luxury-navy btn-touch"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        item.action();
                        setMobileMenuOpen(false);
                      }}
                      className="text-left py-3 px-4 text-lg font-medium text-gray-800 hover:text-luxury-navy hover:bg-gray-50 rounded-lg transition-colors btn-touch"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    className="bg-luxury-navy hover:bg-luxury-dark text-white mt-4 btn-touch"
                    onClick={() => {
                      handleNavigation('/', 'book-tour');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Book a Tour
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
