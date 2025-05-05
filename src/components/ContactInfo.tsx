import React from 'react';
import { MapPin, Phone, Mail, Building, Navigation, Map } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactInfo: React.FC = () => {
  const address = "Bole near Millennium Hall Entrance, Addis Ababa, Ethiopia";
  const mapUrl = "https://maps.app.goo.gl/ZVrQyzisc843eJUV8";
  const iframeSrc = "https://www.google.com/maps/embed/v1/place?q=Bole+near+Millennium+Hall+Entrance,+Addis+Ababa,+Ethiopia&key=YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual Google Maps API key

  return (
    <div id="contact-info" className="pb-16 gradient-flow-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="animate-fade-in">
          {/* Contact Heading */}
          <div className="flex items-center mb-6 mt-4">
            <Building className="h-8 w-8 text-luxury-cream mr-3" />
            <h2 className="font-serif text-3xl font-bold text-luxury-cream">Contact Us</h2>
          </div>

          <p className="text-luxury-cream/90 mb-6">
            Get in touch with our team. Our property specialists are here to answer your questions and arrange a personalized tour that suits your preferences.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Phone */}
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

            {/* Email */}
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Email</h3>
                <p className="text-luxury-cream/80">keymarkproperties@gmail.com</p>
              </div>
            </div>

            {/* Address */}
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

          {/* Location Section with Embedded Map */}
          <div className="mt-10">
            <div className="flex items-center mb-4">
              <Map className="h-7 w-7 text-luxury-cream mr-2" />
              <h3 className="text-2xl font-bold text-luxury-cream font-serif">Location</h3>
            </div>
            <p className="text-luxury-cream/80 mb-4">
              Find us easily using the map below.
            </p>
            
            {/* Embedded Google Map */}
            <div className="w-full h-64 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3940.7889063182674!2d38.7876875!3d8.991562499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x164b85d728c9aead%3A0xe99b5f22c73f9c46!2sXQRQ%2BJ3J%20KEYMARK%20Properties%2C%20Addis%20Ababa%2C%20Ethiopia!3m2!1d8.991562499999999!2d38.7876875!5e0!3m2!1sen!2sus!4v1746466271481!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
