
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Luxury Living at Its Finest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Exclusive 3 & 4 bedroom residences available for rent and purchase in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-white hover:text-luxury-dark text-black font-medium px-8"
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Properties
            </Button>
            <Link to="/book-tour">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-luxury-dark px-8">
                Book a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white">
          <div className="text-center md:text-left animate-slide-up">
            <p className="text-sm uppercase tracking-wider mb-1">Location</p>
            <p className="font-serif text-lg">Prime Central Location</p>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider mb-1">Bedrooms</p>
            <p className="font-serif text-lg">3 & 4 Bedrooms</p>
          </div>
          <div className="text-center md:text-right animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm uppercase tracking-wider mb-1">Status</p>
            <p className="font-serif text-lg">For Rent & Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
