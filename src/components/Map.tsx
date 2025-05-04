
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  longitude: number;
  latitude: number;
  zoom?: number;
  className?: string;
}

const Map: React.FC<MapProps> = ({ longitude, latitude, zoom = 15, className = '' }) => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>('');
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem'
  };
  
  const center = {
    lat: latitude,
    lng: longitude
  };

  return (
    <div className={`relative ${className}`}>
      {!googleMapsApiKey ? (
        <div className="bg-luxury-neutral-300 rounded-lg flex flex-col items-center justify-center p-4">
          <p className="text-luxury-neutral-700 mb-2">Enter Google Maps API key to display map</p>
          <input
            type="text"
            placeholder="Google Maps API key"
            className="px-3 py-2 border border-luxury-neutral-400 rounded w-full"
            onChange={(e) => setGoogleMapsApiKey(e.target.value)}
          />
        </div>
      ) : (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={{
              styles: [
                {
                  featureType: 'all',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#f5f5f0'
                    }
                  ]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#c1e1c1'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#ffffff'
                    }
                  ]
                }
              ]
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;
