
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-2 py-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo - More compact for mobile */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <img 
            src="/LogoClear.jpg" 
            alt="KEYMARK Logo" 
            className="h-6 w-6 sm:h-8 sm:w-8 mr-1" 
          />
          <span className="font-serif text-base sm:text-xl font-bold text-luxury-dark hover:text-luxury-navy transition-colors truncate">
            KEYMARK Properties
          </span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-2 py-1 text-gray-800 hover:text-luxury-navy transition-colors font-medium"
                  onClick={() => handleNavigation('/', 'hero')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-2 py-1 text-gray-800 hover:text-luxury-navy transition-colors font-medium"
                  onClick={() => handleNavigation('/', 'properties')}
                >
                  Properties
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1 text-gray-800 hover:text-luxury-navy bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors font-medium">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 bg-white shadow-lg rounded-md w-48">
                    <NavigationMenuLink 
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-50"
                      onClick={() => handleNavigation('/amenities')}
                    >
                      Amenities
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-50"
                      onClick={() => handleNavigation('/', 'contact')}
                    >
                      Contact
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Book Tour Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="bg-luxury-navy hover:bg-luxury-dark text-white text-xs lg:text-sm py-1 px-3 h-auto"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-1 h-auto">
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 mt-2 bg-white shadow-lg rounded-md p-1 z-[100]"
            >
              <DropdownMenuItem 
                className="px-3 py-2 text-sm cursor-pointer"
                onClick={() => {
                  handleNavigation('/', 'hero');
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="px-3 py-2 text-sm cursor-pointer"
                onClick={() => {
                  handleNavigation('/', 'properties');
                  setMobileMenuOpen(false);
                }}
              >
                Properties
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="px-3 py-2 text-sm cursor-pointer"
                onClick={() => {
                  handleNavigation('/amenities');
                  setMobileMenuOpen(false);
                }}
              >
                Amenities
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="px-3 py-2 text-sm cursor-pointer"
                onClick={() => {
                  handleNavigation('/', 'contact');
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="px-3 py-2 text-sm cursor-pointer bg-luxury-navy text-white rounded hover:bg-luxury-dark"
                onClick={() => {
                  handleNavigation('/', 'book-tour');
                  setMobileMenuOpen(false);
                }}
              >
                Book a Tour
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
