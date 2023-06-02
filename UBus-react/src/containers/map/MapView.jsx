import React, {useState}from 'react';
import './map.css';
import './booking.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

import BookingForm from '../../components/bookingForm/BookingForm';


// pin import
import pin from '../../assets/pins/pin.svg'
import yellowpin from '../../assets/pins/yellowpin.svg'
import redpin from '../../assets/pins/redpin.svg'

// bus import
import blueBus from '../../assets/bus/blue_bus.svg'
import greenBus from '../../assets/bus/green_bus.svg'
import orangeBus from '../../assets/bus/orange_bus.svg'
import purpleBus from '../../assets/bus/purple_bus.svg'
import redBus from '../../assets/bus/red_bus.svg'
import yellowBus from '../../assets/bus/yellow_bus.svg'
import whiteBus from '../../assets/bus/white_bus.svg'

const MapView = () => {

  const navigate = useNavigate();

  //BOOKING
  //Pick-up and Drop-off
  const [SearchPickUp, setPickup] = useState('');
  const [SearchDropOff, setDropOff] = useState('');

  const [latitudePick, setLatitudePick] = useState(null);
  const [longitudePick, setLongitudePick] = useState(null);

  const [latitudeDrop, setLatitudeDrop] = useState(null);
  const [longitudeDrop, setLongitudeDrop] = useState(null);

  const [pickAddress, setPickAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');


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
            const pickAddress = firstResult.display_name;
            const latitudePick = parseFloat(firstResult.lat);
            const longitudePick = parseFloat(firstResult.lon);
  
            // Debug
            console.log('Latitude pick:', latitudePick);
            console.log('Longitude pick:', longitudePick);
            console.log('Pick Address: ', pickAddress)
  
            // Update state variables with the obtained coordinates
            setLatitudePick(latitudePick);
            setLongitudePick(longitudePick);
            setPickAddress(pickAddress);
  
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
            const dropAddress = firstResult.display_name;
            const latitudeDrop = parseFloat(firstResult.lat);
            const longitudeDrop = parseFloat(firstResult.lon);
  
            // Debug
            console.log('Latitude drop:', latitudeDrop);
            console.log('Longitude drop:', longitudeDrop);
            console.log('Drop Address: ', dropAddress)
  
            // Update state variables with the obtained coordinates
            setLatitudeDrop(latitudeDrop);
            setLongitudeDrop(longitudeDrop);
            setDropAddress(dropAddress);
  
            // Resolve with the coordinates
            resolve({ latitudeDrop, longitudeDrop });
          } else {
            reject('No results found');
          }
        })
        .catch(error => {
          reject(error);
        });
        openModal();
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);

    navigate('#', {
      state: {
        SearchDropOff,
        SearchPickUp
      },
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  // Create a custom icon for the orange bus
  const orangeBusIcon = new L.Icon({
    iconUrl: orangeBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the purple bus
  const purpleBusIcon = new L.Icon({
    iconUrl: purpleBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the red bus
  const redBusIcon = new L.Icon({
    iconUrl: redBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the yellow bus
  const yellowBusIcon = new L.Icon({
    iconUrl: yellowBus,
    iconSize: [50, 55],
    iconAnchor: [27, 100],
    popupAnchor: [-3, -76],
  });

  // Create a custom icon for the white bus
  const whiteBusIcon = new L.Icon({
    iconUrl: whiteBus,
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
    [40.640475377017346, -8.656496976974665],
    [40.64095805877481, -8.65536406062215],
    [40.64103556938245, -8.654927609240444],
    [40.641084894267735, -8.653441817302722],
    [40.640901687367275, -8.6531632313144],
    [40.64071847996397, -8.652921790124518],
    [40.640450714393154, -8.652113890758383],
    [40.640239319762735, -8.651677439376678],
    [40.63921052300461, -8.650423802429223],
    [40.637110600918724, -8.653172517514014], 
    [40.63544752851982, -8.655224767627997]
  ];

  // Yellow Zone
  const yellowZone = [
    [40.64118354394031, -8.653265379510106],
    [40.6411923519456, -8.65246212324377],
    [40.64124872310983, -8.651709941075293],
    [40.64137555805044, -8.651124910499812],
    [40.64151296229747, -8.650391300730563],
    [40.6414988695672, -8.650075569943798],
    [40.64117121275269, -8.649128377583489],
    [40.64088583290807, -8.648989084589338],
    [40.64060397508933, -8.648524774608799],
    [40.640100151267546, -8.648854434694986],
    [40.63928627397844, -8.65034951283233],
    [40.63983590648121, -8.651078479501782],
    [40.64042076686771, -8.651779587572397],
    [40.640505324574335, -8.652030314961895],
    [40.64071319514035, -8.652824285028617],
    [40.64085412396788, -8.65303322451986],
    [40.64116416634117, -8.653390743204874]

  ];

  // White Zone
  const whiteZone = [
    [40.63448866495435, -8.644714998918344],
    [40.638956381030845, -8.650305291461159],
    [40.640189994260375, -8.648603707305485],
    [40.6417608828687, -8.647147983353886],
    [40.64137379644298, -8.647507935751415],
    [40.640971688241336, -8.642579172837166]
  ];

  // Purple Zone
  const purpleZone = [
    [40.63052149046325, -8.654361151064151],
    [40.627998428921856, -8.65248533874277],
    [40.62654656822902, -8.652113890758338],
    [40.625052387376236, -8.650850967611277],
    [40.62457311473897, -8.64994092004942],
    [40.62725135891515, -8.647600797747508],
    [40.63105400059688, -8.641874993107102],
    [40.634099155824245, -8.64335557248334],
    [40.63445740024363, -8.644793236515314],
    [40.63911440279814, -8.65050097729897],
    [40.63540185360149, -8.655457699558461]
  ];

  return (
    <div>
    <MapContainer id='Service-map' center={[40.633104877176066, -8.658244586543734]} zoom={14}>
      <TileLayer
        attribution='UBus Service Map'
        url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=ELDvRhqiQitxaWHNIQ08C4XVRqqAZ6Tw6nxE2zAtzNrJx7UcQNvGAGtRKbrJE34u'
      />

      {/*Map Zones*/}
      <Polygon positions={greenZone} color="#FFFFFF" fillColor="green" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={blueZone} color="#FFFFFF" fillColor="blue" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={orangeZone} color="#FFFFFF" fillColor="orange" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={redZone} color="#FFFFFF" fillColor="red" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={yellowZone} color="#FFFFFF" fillColor="yellow" fillOpacity={0.15} weight={0.4} />
      <Polygon positions={whiteZone} color="#FFFFFF" fillColor="white" fillOpacity={0.35} weight={0.4} />
      <Polygon positions={purpleZone} color="#FFFFFF" fillColor="purple" fillOpacity={0.15} weight={0.4} />


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
      {40.63175423575738 && -8.649041855594866 && (
        <Marker position={[40.63175423575738, -8.649041855594866]} icon={purpleBusIcon}>
          <Popup>
            <div>
              <h3>Bus #23</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.63932607707873 & -8.646638596317505 && (
        <Marker position={[40.63932607707873, -8.646638596317505]} icon={whiteBusIcon}>
          <Popup>
            <div>
              <h3>Bus #37</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.6396842934616 & -8.650565350315313 && (
        <Marker position={[40.6396842934616, -8.650565350315313]} icon={yellowBusIcon}>
          <Popup>
            <div>
              <h3>Bus #42</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.63903298953629 & -8.654792511722755 && (
        <Marker position={[40.63903298953629, -8.654792511722755]} icon={redBusIcon}>
          <Popup>
            <div>
              <h3>Bus #45</h3>
              <p>A x minutos</p>
            </div>
          </Popup>
        </Marker>
      )}
      {40.634587670470864 & -8.675649369022553 && (
        <Marker position={[40.634587670470864, -8.675649369022553]} icon={orangeBusIcon}>
          <Popup>
            <div>
              <h3>Bus #49</h3>
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
          <input 
            autoComplete='off'
            type="text" 
            id="pick_up" 
            onChange={handlePickup} 
            value={SearchPickUp} 
            className='booking-fillBox' 
            list='pick_up'>
          </input>
        </div>
        <br></br>
        <div className='booking-from-to'>
          <p className='align_a'>Drop Off:</p>
          <input
            autoComplete='off'
            type="text"
            id='drop-off'
            onChange={handleDropOff}
            value={SearchDropOff}
            className='booking-fillBox'>
          </input>
        </div>
      </div>
      <button className="book-button" type="button" onClick={bookPickUp}>Book</button>
    </div>
    <BookingForm 
      isOpen={isModalOpen} 
      onClose={closeModal} 
      pickAddress={pickAddress}
      dropAddress={dropAddress}
    />
    {/*BOOKING*/}
        
    </div>
  );
}

export default MapView;
