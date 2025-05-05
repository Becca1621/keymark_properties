
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertiesSection from '@/components/PropertiesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookTourForm from '@/components/BookTourForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import SocialTooltip from '@/components/SocialTooltip';
import { TooltipProvider } from '@/components/ui/tooltip';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TooltipProvider>
        <SocialTooltip />
        <Navbar />
        <Hero />
        <PropertiesSection />
        <div id="amenities">
          <AmenitiesSection />
        </div>
        <div id="contact">
          <BookTourForm />
          <ContactInfo />
        </div>
        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default Index;
