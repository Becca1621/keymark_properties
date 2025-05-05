
import React from 'react';

const Hero: React.FC = () => {
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
          <p className="text-m md:text-m text-white max-w-3xl mx-auto mb-2 drop-shadow-md">
            Discover KEYMARK Properties, a premium office, retail, and apartment complex in the heart of Bole. Experience exceptional convenience with effortless access to chic cafés, gourmet restaurants, serene parks, lively entertainment, and just 3 minutes away from the airport.
          </p>
          <p className="text-m md:text-m text-white max-w-3xl mx-auto mb-8 drop-shadow-md italic">
            Work, live, and thrive in a dynamic community designed for convenience and connection.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white">
          <div className="text-center md:text-left animate-slide-up">
            <p className="text-sm uppercase tracking-wider mb-1 text-white/80">Prime Location</p>
            <p className="font-serif text-lg text-white drop-shadow-sm">Bole near Millenium Hall Entrance</p>
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
