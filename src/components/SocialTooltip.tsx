
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Phone, Facebook, Instagram, MapPin } from "lucide-react";

const SocialTooltip = () => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {/* Phone Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="tel:+251952111000" 
            className="bg-luxury-charcoal/80 hover:bg-luxury-charcoal p-2 rounded-full transition-colors duration-300"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5 text-luxury-cream" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>+251 95 211 1000</p>
        </TooltipContent>
      </Tooltip>

      {/* Facebook Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://www.facebook.com/people/Keymark-Properties/61575888689741/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-luxury-charcoal/80 hover:bg-luxury-charcoal p-2 rounded-full transition-colors duration-300"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-5 w-5 text-luxury-cream" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Visit our Facebook</p>
        </TooltipContent>
      </Tooltip>

      {/* Instagram Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://www.instagram.com/keymark_properties" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-luxury-charcoal/80 hover:bg-luxury-charcoal p-2 rounded-full transition-colors duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5 text-luxury-cream" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Follow on Instagram</p>
        </TooltipContent>
      </Tooltip>

      {/* Location Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://maps.app.goo.gl/KN31MzMA2K4Mvien7" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-charcoal/80 hover:bg-luxury-charcoal p-2 rounded-full transition-colors duration-300"
            aria-label="Find our location"
          >
            <MapPin className="h-5 w-5 text-luxury-cream" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Find our location</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default SocialTooltip;
