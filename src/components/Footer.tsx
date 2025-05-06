
import { Link } from "react-router-dom";
import { useNavigation } from "../hooks/useNavigation";

const Footer = () => {
  const { handleNavigation } = useNavigation();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">KEYMARK Properties</h3>
            <p className="text-neutral-400 mb-4">
              Luxury living redefined with our premium properties and exceptional amenities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <div 
                  className="text-neutral-400 hover:text-[#9a8478] cursor-pointer transition-colors"
                  onClick={() => handleNavigation('/', 'hero')}
                >
                  Home
                </div>
              </li>
              <li>
                <div 
                  className="text-neutral-400 hover:text-[#9a8478] cursor-pointer transition-colors"
                  onClick={() => handleNavigation('/', 'properties')}
                >
                  Properties
                </div>
              </li>
              <li>
                <div 
                  className="text-neutral-400 hover:text-[#9a8478] cursor-pointer transition-colors"
                  onClick={() => handleNavigation('/amenities')}
                >
                  Amenities
                </div>
              </li>
              <li>
                <div 
                  className="text-neutral-400 hover:text-[#9a8478] cursor-pointer transition-colors"
                  onClick={() => handleNavigation('/', 'contact')}
                >
                  Contact Us
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-400">
              <p className="mb-2">123 Luxury Ave</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Phone: (212) 555-1234</p>
              <p>Email: info@keymarkproperties.com</p>
            </address>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience Luxury</h3>
            <p className="text-neutral-400 mb-4">
              Ready to elevate your lifestyle? Schedule a tour of our properties today.
            </p>
            <button 
              className="px-6 py-2 bg-[#9a8478] rounded hover:bg-[#8a7468] transition-colors"
              onClick={() => handleNavigation('/', 'book-tour')}
            >
              Book a Tour
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} KEYMARK Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
