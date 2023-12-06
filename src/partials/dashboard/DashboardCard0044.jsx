import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

// Add your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNscHE3dDdyaDE1eGcyaW92dmEzMzI3MWwifQ.XV3J3YXEF4qheBO5rpNe8Q';

function DashboardCard0044({ data, selectedItem }) {
  // Map container ref
  const mapContainerRef = useRef(null);
  const map = useRef(null); // Use useRef to persist the map instance

  useEffect(() => {
    if (mapContainerRef.current && !map.current) { // Initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.5795, 39.8283], // Default center on the USA
        zoom: 3 // Default zoom
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      map.current.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }));
    }
  }, []);

  useEffect(() => {
    if (map.current && data) {
      // Add markers to the map



      data.forEach(item => {
console.log(item);
        new mapboxgl.Marker()
          .setLngLat([item.latitude ,item.longitude ])
          .addTo(map.current);
      });
    }
  }, [data]);

  useEffect(() => {
    if (selectedItem && map.current) {
      // Fly to the selected item
      map.current.flyTo({
        center: [selectedItem.latitude ,selectedItem.longitude],
        zoom: 10 
      });
    }
  }, [selectedItem]);

  return (
    <div className="col-span-full xl:col-span- bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Map</h2>
      </header>
      <div className="px-5 py-4">
        <div ref={mapContainerRef} style={{ height: '700px' }} />
      </div>
    </div>
  );
}

export default DashboardCard0044;
