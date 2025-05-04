
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/bed67368-504c-4dba-bc24-6b13554b2ce3.png')",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Enhanced dark gradient overlay with a more sophisticated fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75"></div>
        
        {/* Add a subtle luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Luxury Living at Its Finest
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            Exclusive 3 & 4 bedroom residences available for rent and purchase in the heart of the city
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
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white">
          <div className="text-center md:text-left animate-slide-up">
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Location</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">Prime Central Location</p>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Bedrooms</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">3 & 4 Bedrooms</p>
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
