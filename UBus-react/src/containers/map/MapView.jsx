import React from 'react';
import './map.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import pin from '../../assets/pin.svg'

const MapView = () => {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  React.useEffect(() => {
    console.log('latitude: ' + latitude);
    console.log('longitude: ' + longitude);
  }, [latitude, longitude]);

  // Create a custom icon for the marker
  const pinIcon = new L.Icon({
    iconUrl: pin, 
    iconSize: [50, 70],
    iconAnchor: [50, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer id='Service-map' center={[40.64052024913085, -8.651716668018748]} zoom={16}>
      <TileLayer
        attribution='UBus Service map'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
      {latitude && longitude && (
        <Marker position={[latitude, longitude]} icon={pinIcon}></Marker>
      )}
    </MapContainer>
  );
}

export default MapView;
