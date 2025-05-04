
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  // Function to handle smooth scrolling with offset for navbar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="hero" className="relative h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/HeroSectionImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        {/* Stronger dark gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Luxury Living at Its Finest
          </h1>
          <p className="text-m md:text-m text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            Discover KEYMARK Properties, a premium office, retail, and apartment complex in the heart of Bole. Located in a vibrant neighborhood, you'll enjoy seamless access to cafes, restaurants, shopping, parks, recreation, and the airport. Work, live, and thrive in a dynamic community designed for convenience and connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-luxury-green hover:bg-white hover:text-luxury-dark text-white font-medium px-8"
              onClick={() => scrollToSection('properties')}
            >
              View Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-luxury-dark px-8"
              onClick={() => scrollToSection('contact')}
            >
              Book a Tour
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white">
          <div className="text-center md:text-left animate-slide-up">
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Location</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">Prime Central Location</p>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Property Types</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">Residences & Retail</p>
          </div>
          <div className="text-center md:text-right animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Status</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">For Rent & Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
