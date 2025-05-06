
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigation } from "../hooks/useNavigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleNavigation } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white text-black shadow-md py-4"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          KEYMARK Properties
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop & Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-white text-black shadow-md"
              : "hidden md:flex"
          } md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0`}
        >
          <div
            className="cursor-pointer font-medium hover:text-[#9a8478] transition-colors"
            onClick={() => handleNavigation('/', 'hero')}
          >
            Home
          </div>
          <div
            className="cursor-pointer font-medium hover:text-[#9a8478] transition-colors"
            onClick={() => handleNavigation('/', 'properties')}
          >
            Properties
          </div>
          <div
            className="cursor-pointer font-medium hover:text-[#9a8478] transition-colors"
            onClick={() => handleNavigation('/amenities')}
          >
            Amenities
          </div>
          <div
            className="cursor-pointer font-medium hover:text-[#9a8478] transition-colors"
            onClick={() => handleNavigation('/', 'contact')}
          >
            Contact Us
          </div>
          <div
            className="cursor-pointer font-medium hover:text-[#9a8478] transition-colors"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
