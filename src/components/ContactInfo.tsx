
import React from 'react';
import { MapPin, Phone, Mail, Building, Navigation, Map } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactInfo: React.FC = () => {
  const address = "Bole near Millennium Hall Entrance, Addis Ababa, Ethiopia";
  const mapUrl = "https://maps.app.goo.gl/ZVrQyzisc843eJUV8";

  return (
    <div id="contact-info" className="pb-12 sm:pb-16 gradient-flow-start">
      <div className="container-responsive pt-6 sm:pt-8">
        <div className="animate-fade-in">
          {/* Contact Heading */}
          <div className="flex items-center justify-center sm:justify-start mb-6 mt-4">
            <Building className="h-6 w-6 sm:h-8 sm:w-8 text-luxury-cream mr-2 sm:mr-3" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-cream">Contact Us</h2>
          </div>

          <p className="text-luxury-cream/90 mb-6 text-center sm:text-left text-sm sm:text-base">
            Get in touch with our team. Our property specialists are here to answer your questions and arrange a personalized tour that suits your preferences.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-luxury-cream">Phone</h3>
                <p className="text-sm sm:text-base text-luxury-cream/80">+251 96 211 1000</p>
                <p className="text-sm sm:text-base text-luxury-cream/80">+251 95 211 1000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-luxury-cream">Email</h3>
                <p className="text-sm sm:text-base text-luxury-cream/80 break-all">info@keymarkaddis.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-luxury-cream">Address</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-luxury-cream/80 hover:text-luxury-cream flex items-center justify-center sm:justify-start gap-1 transition-colors btn-touch"
                      >
                        <span className="break-words">{address}</span>
                        <Navigation className="h-4 w-4 flex-shrink-0 ml-1" />
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
          <div className="mt-8 sm:mt-10">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <Map className="h-6 w-6 sm:h-7 sm:w-7 text-luxury-cream mr-2" />
              <h3 className="text-xl sm:text-2xl font-bold text-luxury-cream font-serif">Location</h3>
            </div>
            <p className="text-luxury-cream/80 mb-4 text-center sm:text-left text-sm sm:text-base">
              Find us easily using the map below.
            </p>
            
            {/* Embedded Google Map */}
            <div className="w-full h-48 sm:h-56 lg:h-64 mb-4 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3940.7889063182674!2d38.7876875!3d8.991562499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x164b85d728c9aead%3A0xe99b5f22c73f9c46!2sXQRQ%2BJ3J%20KEYMARK%20Properties%2C%20Addis%20Ababa%2C%20Ethiopia!3m2!1d8.991562499999999!2d38.7876875!5e0!3m2!1sen!2sus!4v1746466271481!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="KEYMARK Properties Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
