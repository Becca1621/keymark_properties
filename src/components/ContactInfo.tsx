
import React from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div id="contact-info" className="pb-16 gradient-flow-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-white mr-3" />
              <h2 className="font-serif text-3xl font-bold text-white">Get in Touch</h2>
            </div>
            <p className="text-white/90 mb-6">
              Interested in learning more about our luxury residences? Complete the form and one of our dedicated property specialists will be in touch to answer your questions and schedule a personalized tour.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Phone</h3>
                  <p className="text-white/80">(212) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Email</h3>
                  <p className="text-white/80">inquiries@keymarkproperties.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Address</h3>
                  <p className="text-white/80">345 Park Avenue, New York, NY 10022</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Our Location
            </h3>
            <div className="aspect-[16/9] w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map - in real application, you'd use a mapping service like Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100/40">
                <p className="text-gray-700 text-lg font-medium">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
