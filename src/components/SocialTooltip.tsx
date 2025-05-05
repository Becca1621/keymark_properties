import React from 'react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Phone, Facebook, Instagram, MapPin } from "lucide-react";

const SocialTooltip = () => {
  return (
    <TooltipProvider>
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
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
          <TooltipContent side="top">
            <p>+251 95 211 1000</p>
          </TooltipContent>
        </Tooltip>

        {/* Facebook */}
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
          <TooltipContent side="top">
            <p>Visit our Facebook</p>
          </TooltipContent>
        </Tooltip>

        {/* Instagram */}
        <Tooltip>
          <TooltipTrigger asChild>
            <
