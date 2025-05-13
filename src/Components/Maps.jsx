import React, { useEffect, useRef } from 'react';
import { FaCar } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

const Maps = () => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAm1kQVJCv7G12lF-T2ki15GBl7aHAZ_g0&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.5744, lng: 88.3629 }, //Kolkata
        zoom: 12,
        disableDefaultUI: true,
      });

      let markers = [];

     
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(userLocation);
        });
      }

      const service = new window.google.maps.places.PlacesService(map);
      const input = searchInputRef.current;

      
      const searchBox = new window.google.maps.places.SearchBox(input);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      
      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
      });

      
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (!places || places.length === 0) {
          console.error('No places found');
          return;
        }

        
        markers.forEach((marker) => marker.setMap(null));
        markers = [];

        
        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) return;

          
          const marker = new window.google.maps.Marker({
            map,
            icon: {
              url: getCarIcon(),
              scaledSize: new window.google.maps.Size(30, 30),
            },
            title: place.name,
            position: place.geometry.location,
          });
          markers.push(marker);

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

      // Add demo markers around Kolkata
      const demoLocations = [
      
        
        
        { lat: 22.6000, lng: 88.3200, name: 'Demo Office 4' }, // Near Dum Dum
        { lat: 22.5400, lng: 88.3500, name: 'Demo Office 5' }, // Near Jadavpur
        
        
        { lat: 22.5800, lng: 88.3600, name: 'Demo Office 8' }, // Near Ballygunge
        
        
        { lat: 22.5500, lng: 88.3900, name: 'Demo Office 11' }, // Near Howrah Station
        { lat: 22.5800, lng: 88.4100, name: 'Demo Office 12' }, // Near Sealdah Station
        
        { lat: 22.5900, lng: 88.4200, name: 'Demo Office 13' }, // Near Esplanade
        
        
        
            
        
        { lat: 22.6400, lng: 88.4700, name: 'Demo Office 18' }, // Near New Town
        
        { lat: 22.6600, lng: 88.4900, name: 'Demo Office 20' }, // Near Barasat
        
        
        
        
        { lat: 22.7000, lng: 88.5300, name: 'Demo Office 24' }, // Near Belur Math
      
        { lat: 22.7800, lng: 88.6100, name: 'Demo Office 28' }, // Near Dum Dum Airport

        { lat: 22.8000, lng: 88.6300, name: 'Demo Office 30' }, // Near Rajarhat
        { lat: 22.8200, lng: 88.6500, name: 'Demo Office 32' }, // Near Salt Lake

      ];

      demoLocations.forEach((location) => {
        new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          icon: {
            url: getCarIcon(),
            scaledSize: new window.google.maps.Size(30, 30),
          },
          title: location.name,
        });
      });
    };

    
    const getCarIcon = () => {
      const carIcon = renderToStaticMarkup(<FaCar color="red" size="30" />);
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(carIcon)}`;
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search nearby car rental offices"
        style={{
          width: '300px',
          padding: '10px',
          margin: '10px',
          position: 'absolute',
          zIndex: 1,
        }}
      />
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-2xl border-4 border-red-900"
      ></div>
    </div>
  );
};

export default Maps;
