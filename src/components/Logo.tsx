
import React from 'react';
import { Building, Key } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className = "" }) => {
  return (
    <div 
      className={`flex items-center gap-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <Building className="w-7 h-7 text-luxury-green" />
        <Key 
          className="w-4 h-4 absolute -bottom-1 -right-1 text-[#ea384c]" 
          strokeWidth={2.5}
        />
      </div>
      <span className="font-serif text-2xl font-bold text-luxury-dark hover:text-luxury-green transition-colors">
        KEYMARK
        <span className="text-luxury-dark font-light"> Properties</span>
      </span>
    </div>
  );
};

export default Logo;
