import React, {useState}from 'react';
import './map.css';
import '../booking/booking.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';

import pin from '../../assets/pin.svg'
import yellowpin from '../../assets/yellowpin.svg'
import redpin from '../../assets/redpin.svg'
import blueBus from '../../assets/blue_bus.svg'
import greenBus from '../../assets/green_bus.svg'

const MapView = () => {

  //BOOKING
  //Pick-up and Drop-off
  const [SearchPickUp, setPickup] = useState('');
  const [SearchDropOff, setDropOff] = useState('');

  const [latitudePick, setLatitudePick] = useState(null);
  const [longitudePick, setLongitudePick] = useState(null);

  const [latitudeDrop, setLatitudeDrop] = useState(null);
  const [longitudeDrop, setLongitudeDrop] = useState(null);


  const handlePickup = event => {
    setPickup(event.target.value);

    console.log('PICK VALUE:', event.target.value);
  };
  const handleDropOff = event => {
    setDropOff(event.target.value);

    console.log('DROP VALUE:', event.target.value);
  };

  const pickUpMarkerRef = React.useRef();
  const dropOffMarkerRef = React.useRef();

  //Get PickUp Coords
  const bookPickUp = event => {
    return new Promise((resolve, reject) => {
      fetch(`https://nominatim.openstreetmap.org/search.php?q=${SearchPickUp}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const firstResult = data[0]; // coords of first result
            const latitudePick = parseFloat(firstResult.lat);
            const longitudePick = parseFloat(firstResult.lon);
  
            // Debug
            console.log('Latitude pick:', latitudePick);
            console.log('Longitude pick:', longitudePick);
  
            // Update state variables with the obtained coordinates
            setLatitudePick(latitudePick);
            setLongitudePick(longitudePick);
  
            // Resolve with the coordinates
            resolve({ latitudePick, longitudePick });
          } else {
            reject('No results found');
          }
        })
        .catch(error => {
          reject(error);
        });
        bookDropOff();
    });
  };

  //Get DropOff coords
  const bookDropOff = event => {
    return new Promise((resolve, reject) => {
      fetch(`https://nominatim.openstreetmap.org/search.php?q=${SearchDropOff}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const firstResult = data[0]; // coords of first result
            const latitudeDrop = parseFloat(firstResult.lat);
            const longitudeDrop = parseFloat(firstResult.lon);
  
            // Debug
            console.log('Latitude drop:', latitudeDrop);
            console.log('Longitude drop:', longitudeDrop);
  
            // Update state variables with the obtained coordinates
            setLatitudeDrop(latitudeDrop);
            setLongitudeDrop(longitudeDrop);
  
            // Resolve with the coordinates
            resolve({ latitudeDrop, longitudeDrop });
          } else {
            reject('No results found');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  //BOOKING

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

  const pinYellowIcon = new L.Icon({
    iconUrl: yellowpin, 
    iconSize: [50, 70],
    iconAnchor: [28, 94],
    popupAnchor: [-3, -76],
  });

  const pinRedIcon = new L.Icon({
    iconUrl: redpin,
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
  // Blue Zone
  const blueZone = [
    [40.641101103252225, -8.656938458681864],
    [40.629890226046086, -8.664745169038891],
    [40.61947154365129, -8.664215792215256],
    [40.62469318990492, -8.650277419928559],
    [40.63050046973623, -8.65427989138457],
    [40.63530993028778, -8.655113763950688]
  ];
  // Orange Zone
  const orangeZone = [
    [40.641101103252225, -8.656938458681864],
    [40.64530177173163, -8.66153040044164],
    [40.637232991494955, -8.692728694347442],
    [40.63118609474488, -8.73140314058421],
    [40.63248884939942, -8.743848590322365],
    [40.64421249702104, -8.735694675047998],
    [40.64391352080412, -8.747896411621449],
    [40.62541443476722, -8.750828350311439],
    [40.62219578575626, -8.725369020204145],
    [40.6243249576032, -8.697633348180029],
    [40.635243749876615, -8.664884483495758]
  ];
  // Red Zone
  const redZone = [
    [40.62347245011394, -8.648290316265701],
    [40.627279420129284, -8.638115239169977],
    [40.63543648229332, -8.632311145897065],
    [40.640522787176565, -8.632534970832504],
    [40.64094402411233, -8.649605084869565],
    [40.64070631242284, -8.656114141806631],
    [40.63619703310239, -8.654885581455739],
    [40.63117073448362, -8.652598554904793],
  ];

  return (
    <div>
    <MapContainer id='Service-map' center={[40.633104877176066, -8.658244586543734]} zoom={14}>
      <TileLayer
        attribution='UBus Service map'
        //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />

      {/*Map Zones*/}
      <Polygon positions={greenZone} color="#FFFFFF" fillColor="#108915" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={blueZone} color="#FFFFFF" fillColor="#2D46A2" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={orangeZone} color="#FFFFFF" fillColor="#FF8A00" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={redZone} color="#FFFFFF" fillColor="#cc0e0e" fillOpacity={0.15} weight={0.4} />


      {latitude && longitude && (
        <Marker position={[latitude, longitude]} icon={pinIcon}>
          <Popup>
            <div>
              <h3>Your Location</h3>
            </div>
          </Popup>
        </Marker>
      )}
      {latitudePick && longitudePick && (
          <Marker position={[latitudePick, longitudePick]} icon={pinYellowIcon} ref={pickUpMarkerRef}>
            <Popup>
              <div>
                <h3>Your Origin</h3>
              </div>
            </Popup>
          </Marker>
        )}
      {latitudeDrop && longitudeDrop && (
          <Marker position={[latitudeDrop, longitudeDrop]} icon={pinRedIcon} ref={dropOffMarkerRef}>
            <Popup>
              <div>
                <h3>Your Destination</h3>
              </div>
            </Popup>
          </Marker>
        )}
      {40.632961377687764 && -8.658731556446646 && (
        <Marker position={[40.64300956446386, -8.646257360793522]} icon={greenBusIcon}>
          <Popup>
            <div>
              <h3>Bus #16</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.62296246707748 && -8.657597143114778 && (
        <Marker position={[40.62296246707748, -8.657597143114778]} icon={blueBusIcon}>
          <Popup>
            <div>
              <h3>Bus #18</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
    
    {/*BOOKING*/}
    <div className='booking-container'>
      <div>
        
      </div>
      <div className='booking-form'>
        <div className='booking-from-to'>
          <p className='align_a'>Pick Up:</p>
          <input type="text" id="pick_up" onChange={handlePickup} value={SearchPickUp} className='booking-fillBox' list='pick_up'>

          </input>
        </div>
        <br></br>
        <div className='booking-from-to'>
          <p className='align_a'>Drop Off:</p>
          <input type="text" id='drop-off' onChange={handleDropOff} value={SearchDropOff} className='booking-fillBox'>
            
          </input>
        </div>
      </div>
      <button className="book-button" type="button" onClick={bookPickUp}>Book</button>
    </div>
    {/*BOOKING*/}
    </div>
  );
}

export default MapView;
