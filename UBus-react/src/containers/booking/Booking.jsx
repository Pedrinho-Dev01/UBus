import React, {useState} from 'react';
import './booking.css';

const Booking = () => {

  //Pick-up and Drop-off
  const [SearchPickUp, setPickup] = useState('');
  const [SearchDropOff, setDropOff] = useState('');

  const handlePickup = event => {
    setPickup(event.target.value);

    console.log('PICK VALUE:', event.target.value);
  };
  const handleDropOff = event => {
    setDropOff(event.target.value);

    console.log('DROP VALUE:', event.target.value);
  };

  //Get PickUp Coords
  const bookPickUp = event => {
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
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
    bookDropOff();
  };

  //Get DropOff coords
  const bookDropOff = event => {
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
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  return (
    <div className='booking-container'>
      <div>
        
      </div>
      <div className='booking-form'>
        <div className='booking-from-to'>
          <p className='align_a'>Pick Up:</p>
          <input type="text" id="pick_up" onChange={handlePickup} value={SearchPickUp} className='booking-fillBox' list='pick_up'>

          </input>
          <h2>Debug: {SearchPickUp}</h2>
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
  )
}

export default Booking

