
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertiesSection from '@/components/PropertiesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookTourForm from '@/components/BookTourForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import SocialTooltip from '@/components/SocialTooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  // Handle scroll to section when coming from another page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <TooltipProvider>
        <SocialTooltip />
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="properties">
          <PropertiesSection />
        </div>
        <div id="amenities">
          <AmenitiesSection />
        </div>
        <div id="book-tour">
          <BookTourForm />
        </div>
        <div id="contact">
          <ContactInfo />
        </div>
        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default Index;
