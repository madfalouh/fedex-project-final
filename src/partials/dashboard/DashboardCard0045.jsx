import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Add your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNscHE3dDdyaDE1eGcyaW92dmEzMzI3MWwifQ.XV3J3YXEF4qheBO5rpNe8Q";

function DashboardCard0045({ bool }) {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [tripInfo, setTripInfo] = useState({ duration: 0, steps: [] });
  const markerRef = useRef(null);

  const getRoute = async (end) => {
    const start = [-88.7942, 33.4577];
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    } else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }

    const duration = Math.floor(data.duration / 60);
    const steps = data.legs[0].steps.map((step) => step.maneuver.instruction);

    setTripInfo({ duration, steps });
  };
  useEffect(() => {
    if (mapContainerRef.current && !map.current) {
      // Initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.5795, 39.8283], // Default center on the USA
        zoom: 3, // Default zoom
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (bool && map.current) {
      const usaBoundingBox = {
        left: -125.0011,
        right: -66.9326,
        top: 49.5904,
        bottom: 24.3963,
      };

      const randomLng =
        Math.random() * (usaBoundingBox.right - usaBoundingBox.left) +
        usaBoundingBox.left;
      const randomLat =
        Math.random() * (usaBoundingBox.top - usaBoundingBox.bottom) +
        usaBoundingBox.bottom;
      const coords = [randomLng, randomLat];

      if (markerRef.current) {
        markerRef.current.remove();
      }

      markerRef.current = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map.current);

      getRoute(coords);
    }
  }, [bool]);

  return (
    <div className="col-span-full xl:col-span- bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Map
        </h2>
      </header>
      <div className="px-5 py-4 relative">
        <div ref={mapContainerRef} style={{ height: "700px" }} />

        {/* Trip Info Overlay */}
        <div id="trip-info" className="trip-info">
          <h4 className="text-lg font-semibold mb-4">Directions</h4>
          <div className="directions-list">
            {tripInfo.steps.map((step, index) => {
              let directionIcon;
              if (step.includes("Head")) {
                directionIcon = "🔼";
              } else if (step.includes("Turn left")) {
                directionIcon = "↩️";
              } else if (step.includes("Turn right")) {
                directionIcon = "↪️";
              } else if (step.includes("Continue")) {
                directionIcon = "⬆️";
              } else {
                directionIcon = "📍";
              }

              return (
                <div key={index} className="step">
                  <span className="icon">{directionIcon}</span>
                  <span className="instruction">{step}</span>
                  <span className="distance">50 ft</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard0045;
