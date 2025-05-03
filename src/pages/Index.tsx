
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertiesSection from '@/components/PropertiesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import ContactSection from '@/components/ContactSection';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PropertiesSection />
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <div id="contact">
        <ContactSection />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
