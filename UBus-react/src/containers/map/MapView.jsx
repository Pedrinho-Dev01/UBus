import React from 'react';
import './map.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';

import pin from '../../assets/pin.svg'
import blueBus from '../../assets/blue_bus.svg'
import greenBus from '../../assets/green_bus.svg'

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
    iconAnchor: [28, 94],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the blue bus
  const blueBusIcon = new L.Icon({
    iconUrl: blueBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the green bus
  const greenBusIcon = new L.Icon({
    iconUrl: greenBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Green Zone
  const greenZone = [
    [40.64530177173163, -8.66153040044164],
    [40.64214315419763, -8.65779676555285],
    [40.641101103252225, -8.656938458681864],
    [40.641635301644, -8.65063877338535],
    [40.640740074654836, -8.631447190182648],
    [40.649732971397555, -8.628537066603142],
    [40.65434938956445, -8.643510974538763],
    [40.65254300310119, -8.646526920660074]
  ];

  return (
    <MapContainer id='Service-map' center={[40.633104877176066, -8.658244586543734]} zoom={15}>
      <TileLayer
        attribution='UBus Service map'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
      <Polygon positions={greenZone} color="#FFFFFF" fillColor="#054215" fillOpacity={0.3} weight={0.4} />
      {latitude && longitude && (
        <Marker position={[latitude, longitude]} icon={pinIcon}>
          <Popup>
            <div>
              <h3>Autocarro #541</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.632961377687764 && -8.658731556446646 && (
        <Marker position={[40.632961377687764, -8.658731556446646]} icon={greenBusIcon}>
          <Popup>
            <div>
              <h3>Autocarro #200</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.62296246707748 && -8.657597143114778 && (
        <Marker position={[40.62296246707748, -8.657597143114778]} icon={blueBusIcon}>
          <Popup>
            <div>
              <h3>Pin Marker</h3>
              <p>Details about the pin marker</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapView;
