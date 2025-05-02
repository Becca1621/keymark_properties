
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import AmenitiesSection from '@/components/AmenitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div id="properties">
        <PropertyGrid />
      </div>
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
