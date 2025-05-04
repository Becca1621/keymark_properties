
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div id="contact-info" className="pb-16 bg-gradient-to-b from-gray-700 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-shadow mb-4">Contact Us</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Visit our office or get in touch with our team for more information about our luxury properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-elegant hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-10 w-10 text-gray-700" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-700">
              345 Park Avenue<br />
              New York, NY 10022
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-elegant hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <Phone className="h-10 w-10 text-luxury-green" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-luxury-gray">
              Main Office: (212) 555-1234<br />
              Sales: (212) 555-5678
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-elegant hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <Mail className="h-10 w-10 text-luxury-green" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-luxury-gray">
              Info: info@keymarkproperties.com<br />
              Sales: sales@keymarkproperties.com
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-elegant hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-luxury-green" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Office Hours</h3>
            <p className="text-luxury-gray">
              Monday - Friday: 9AM - 6PM<br />
              Saturday: 10AM - 4PM
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="text-center">
            <h3 className="font-serif text-xl font-semibold mb-4">Our Location</h3>
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
