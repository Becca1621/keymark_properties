
import React from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div id="contact-info" className="pb-16 gradient-flow-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="animate-fade-in">
          <div className="flex items-center mb-6 mt-4">
            <Building className="h-8 w-8 text-luxury-cream mr-3" />
            <h2 className="font-serif text-3xl font-bold text-luxury-cream">Contact Us</h2>
          </div>
          <p className="text-luxury-cream/90 mb-6">
            Interested in learning more about our luxury residences? Complete the form and one of our dedicated property specialists will be in touch to answer your questions and schedule a personalized tour.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Phone</h3>
                <p className="text-luxury-cream/80">(212) 555-1234</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Email</h3>
                <p className="text-luxury-cream/80">inquiries@keymarkproperties.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-luxury-neutral-700/30 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-luxury-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-luxury-cream">Address</h3>
                <p className="text-luxury-cream/80">345 Park Avenue, New York, NY 10022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
