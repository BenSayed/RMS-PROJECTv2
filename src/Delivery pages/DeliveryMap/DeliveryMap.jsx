import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "./DeliveryMap.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const LocationMarker = ({ setUserLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (!navigator.geolocation) {
    //  alert("الموقع غير مدعوم في هذا المتصفح");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        map.setView([latitude, longitude], 15);
      },
      () => {
      //  alert("لم يتمكن من تحديد الموقع");
      }
    );
  }, [map, setUserLocation]);
  return null;
};

const DeliveryMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState([30.0500, 31.2400]); // الموقع النهائي
  const [isMoving, setIsMoving] = useState(false);
  const intervalRef = useRef(null);

  const moveMarker = () => {
    if (!userLocation || !destination) return;

    const [lat1, lon1] = userLocation;
    const [lat2, lon2] = destination;

    const latDiff = lat2 - lat1;
    const lonDiff = lon2 - lon1;

    const steps = 100; // عدد خطوات التحريك
    const latStep = latDiff / steps;
    const lonStep = lonDiff / steps;

    let currentStep = 0;

    intervalRef.current = setInterval(() => {
      currentStep++;
      setUserLocation((prevLocation) => {
        if (!prevLocation) return prevLocation;
        const [prevLat, prevLon] = prevLocation;
        const newLat = prevLat + latStep;
        const newLon = prevLon + lonStep;
        return [newLat, newLon];
      });

      if (currentStep >= steps) {
        clearInterval(intervalRef.current);
        setIsMoving(false);
      }
    }, 50); // يتحرك كل 50 ملي ثانية
  };

  const handleStart = () => {
    if (!userLocation || !destination) {
      alert("الموقع غير محدد");
      return;
    }
    if (!isMoving) {
      moveMarker();
      setIsMoving(true);
    }
  };

  return (
    <div className="delivery-map-container">
      <h3 className="map-title">Map</h3>
      <div className="map-box">
        <MapContainer
          center={[30.0444, 31.2357]}
          zoom={15}
          className="map-display"
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          {userLocation && <Marker position={userLocation} icon={customIcon} />}
          {destination && <Marker position={destination} icon={customIcon} />}
          {userLocation && destination && (
            <Polyline positions={[userLocation, destination]} color="orange" weight={4} />
          )}
          <LocationMarker setUserLocation={setUserLocation} />
        </MapContainer>
      </div>
      <div className="linnn"></div>
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default DeliveryMap;