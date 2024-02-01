// 2. MapComponent.js - React component to display data on a map
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; // Assuming you're using Mapbox

const Map = ({ data }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize Mapbox map
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Replace with your preferred map style
      center: [-74.5, 40], // Example coordinates
      zoom: 9,
    });

    // Add markers or data visualization on the map based on the fetched data
    data.forEach((item) => {
      // Example: add a marker for each data point
      new mapboxgl.Marker()
        .setLngLat([item.longitude, item.latitude]) // Replace with your data coordinates
        .addTo(map);
    });

    // Cleanup map on component unmount
    return () => map.remove();
  }, [data]);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
