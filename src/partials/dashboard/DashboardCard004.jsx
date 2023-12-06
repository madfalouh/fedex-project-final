import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Add your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNscHE3dDdyaDE1eGcyaW92dmEzMzI3MWwifQ.XV3J3YXEF4qheBO5rpNe8Q';

function DashboardCard004() {
  // Map container ref
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Specify the map style
      center: [-74.5, 40], // Initial map center coordinates
      zoom: 9 // Initial zoom level
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div    className="col-span-full xl:col-span- bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700   ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Map</h2>
      </header>
      <div className="px-5 py-4">
    
        <div ref={mapContainerRef} style={{ height: '500px' }} />
      </div>
    </div>
  );
}

export default DashboardCard004;
