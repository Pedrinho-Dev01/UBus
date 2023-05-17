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
    [40.633042798425265, -8.658755696327761],
    [40.63349875275547, -8.658651090176175],
    [40.63410329454214, -8.658012724430627],
    [40.63475769977561, -8.657175875217973],
    [40.63484726018245, -8.65710077336556],
    [40.63513222430048, -8.656730628521505],
    [40.635266564107376, -8.656371212513509],
    [40.63538054918441, -8.655990338833396],
    [40.63553524290616, -8.65590987256295 ],
    [40.6356980780156, -8.655738211185998],
    [40.635706219760586, -8.6556845670057],
    [40.6356980780156, -8.655518270046779],
    [40.63561258963328, -8.655325150997708],
    [40.63545382520433, -8.65529296448953],
    [40.635254351412236, -8.655368066341946],
    [40.63519328788737, -8.655443168194362],
    [40.63513222430664, -8.655593371899196],
    [40.634501230691484, -8.65619955113656],
    [40.634383173161325, -8.656263924152915],
    [40.63319037327278, -8.655748940022047],
    [40.63161893887178, -8.657326078922795],
    [40.632530863846156, -8.65854916623358],
    [40.63289725876771, -8.658758378536742],
  ];

  return (
    <MapContainer id='Service-map' center={[40.64052024913085, -8.651716668018748]} zoom={16}>
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
