
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/HeroSectionImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center z-10">
        <div className="container-responsive animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Luxury Living at Its Finest
          </h1>
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-white drop-shadow-md px-4">
              Discover KEYMARK Properties, a premium office, retail, and apartment complex in the heart of Bole. Experience exceptional convenience with effortless access to chic cafés, gourmet restaurants, serene parks, lively entertainment, and just 3 minutes away from the airport.
            </p>
            <p className="text-base sm:text-lg text-white drop-shadow-md italic px-4">
              Work, live, and thrive in a dynamic community designed for convenience and connection.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-3 sm:p-4 md:p-6">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-white text-center sm:text-left justify-items-center sm:justify-items-start">
            <div className="animate-slide-up w-full">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 text-white/80">Prime Location</p>
              <p className="font-serif text-sm sm:text-base lg:text-lg text-white drop-shadow-sm">Bole near Millennium Hall Entrance</p>
            </div>
            <div className="animate-slide-up w-full sm:text-center" style={{ animationDelay: '0.1s' }}>
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 text-white/80">Property Types</p>
              <p className="font-serif text-sm sm:text-base lg:text-lg text-white drop-shadow-sm">Residences & Retail</p>
            </div>
            <div className="animate-slide-up w-full sm:text-right" style={{ animationDelay: '0.2s' }}>
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 text-white/80">Status</p>
              <p className="font-serif text-sm sm:text-base lg:text-lg text-white drop-shadow-sm">For Rent & Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
