
import React, { ReactNode } from 'react';

interface AmenityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ 
  icon, 
  title, 
  description,
  index
}) => {
  return (
    <div 
      className="card-gradient p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-luxury-green mb-4">
        {typeof icon === 'string' ? (
          <div className="text-4xl">{icon}</div>
        ) : (
          icon
        )}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-luxury-dark">
        {title}
      </h3>
      <p className="text-luxury-charcoal">{description}</p>
    </div>
  );
};

export default AmenityCard;
