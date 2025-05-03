
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookTourForm from '@/components/BookTourForm';
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
        <BookTourForm />
      </div>
      <div id="contact-us">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
