
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PropertiesSection from '@/components/PropertiesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookTourForm from '@/components/BookTourForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <PropertiesSection />
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <div id="contact">
        <BookTourForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
