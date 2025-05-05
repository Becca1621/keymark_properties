
import React, { ReactNode } from 'react';

interface AmenityCardProps {
  icon: ReactNode;
  title: string;
  index?: number;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ 
  icon, 
  title,
  index = 0
}) => {
  return (
    <div 
      className="card-gradient p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green flex flex-col items-center justify-center text-center mx-2 h-36 w-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-luxury-green mb-3">
        {typeof icon === 'string' ? (
          <div className="text-3xl">{icon}</div>
        ) : (
          <div className="text-3xl">{icon}</div>
        )}
      </div>
      <h3 className="font-serif text-base font-semibold text-luxury-dark line-clamp-2">
        {title}
      </h3>
    </div>
  );
};

export default AmenityCard;
