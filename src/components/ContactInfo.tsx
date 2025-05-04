import React from 'react';
import { MapPin, Phone, Mail, Building, Navigation } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactInfo: React.FC = () => {
  const address = "Bole Millennium Hall, Addis Ababa, Ethiopia";
  // Using the provided direct Google Maps URL instead of constructing one
  const mapUrl = "https://maps.app.goo.gl/ZVrQyzisc843eJUV8";

  return (
    <div id="contact-info" className="pb-16 gradient-flow-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="animate-fade-in">
          <div className="flex items-center mb-6 mt-4">
            <Building className="h-8 w-8 text-luxury-cream mr-3" />
            <h2 className="font-serif text-3xl font-bold text-luxury-cream">Contact Us</h2>
          </div>
          <p className="text-luxury-cream/90 mb-6">
            Get in touch with our team. Our property specialists are here to answer your questions and arrange a personalized tour that suits your preferences.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Phone</h3>
                <p className="text-luxury-cream/80">+251 96 211 1000</p>
                <p className="text-luxury-cream/80">+251 95 211 1000</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Email</h3>
                <p className="text-luxury-cream/80">keymarkproperties@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Address</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-luxury-cream/80 hover:text-luxury-cream flex items-center gap-1 transition-colors"
                      >
                        {address}
                        <Navigation className="h-4 w-4 inline-block ml-1" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-luxury-neutral-800/90 text-luxury-cream border-luxury-neutral-600">
                      Open Directions on Maps
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
