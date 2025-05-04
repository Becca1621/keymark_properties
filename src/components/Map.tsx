
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  longitude: number;
  latitude: number;
  zoom?: number;
  className?: string;
}

const Map: React.FC<MapProps> = ({ longitude, latitude, zoom = 15, className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    // Check if the container exists
    if (!mapContainer.current) return;
    
    // If there's no token yet, don't initialize
    if (!mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker at the specified location
    new mapboxgl.Marker({ color: '#5d8a68' })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    // Cleanup function
    return () => {
      map.current?.remove();
    };
  }, [longitude, latitude, zoom, mapboxToken]);

  return (
    <div className={`relative ${className}`}>
      {!mapboxToken ? (
        <div className="bg-luxury-neutral-300 rounded-lg flex flex-col items-center justify-center p-4">
          <p className="text-luxury-neutral-700 mb-2">Enter Mapbox public token to display map</p>
          <input
            type="text"
            placeholder="Mapbox public token"
            className="px-3 py-2 border border-luxury-neutral-400 rounded w-full"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden"></div>
      )}
    </div>
  );
};

export default Map;
