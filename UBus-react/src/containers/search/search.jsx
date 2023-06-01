import React, { useState, useRef } from 'react';
import './search.css';

const Search = ({ onClose }) => {
  const [selectedBus, setSelectedBus] = useState('');
  const [busInfo, setBusInfo] = useState('');
  const mapRef = useRef(null);

  const handleSearch = () => {
    const bus = mockData.find((bus) => bus.text === selectedBus);
    if (bus) {
      setBusInfo(
        <div>
          <p>Occupancy: {bus.occupancy}</p>
          <p>Delay: {bus.delay}</p>
          <p>Accessibility: {bus.accessibility ? 'Yes' : 'No'}</p>
        </div>
      );
    } else {
      setBusInfo('Realtime Information for this bus is currently not available.');
    }
  };

  const handleMapView = () => {
    // close the modal search window and scroll down to the map
    onClose();
    document.getElementById('Service-map').scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedBus('');
    setBusInfo('');
    onClose();
  };

  const mockData = [
    {
      text: 'Bus #16',
      info: 'Realtime Information for Bus #16 is currently not available.',
      occupancy: 'low',
      delay: 'none',
      accessibility: true,
    },
    {
      text: 'Bus #18',
      info: 'Realtime Information for Bus #18 is currently not available.',
      occupancy: 'medium',
      delay: '5 minutes',
      accessibility: false,
    },
    {
      text: 'Bus #23',
      info: 'Realtime Information for Bus #23 is currently not available.',
      occupancy: 'high',
      delay: '10 minutes',
      accessibility: true,
    },
    {
      text: 'Bus #37',
      info: 'Realtime Information for Bus #37 is currently not available.',
      occupancy: 'low',
      delay: 'none',
      accessibility: false,
    },
    {
      text: 'Bus #42',
      info: 'Realtime Information for Bus #42 is currently not available.',
      occupancy: 'medium',
      delay: '2 minutes',
      accessibility: true,
    },
    {
      text: 'Bus #45',
      info: 'Realtime Information for Bus #45 is currently not available.',
      occupancy: 'high',
      delay: '7 minutes',
      accessibility: false,
    },
    {
      text: 'Bus #49',
      info: 'Realtime Information for Bus #49 is currently not available.',
      occupancy: 'low',
      delay: 'none',
      accessibility: true,
    },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Search for More Information</h2>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
        <select
          value={selectedBus}
          onChange={(e) => setSelectedBus(e.target.value)}
        >
          <option value="">Select a bus</option>
          {mockData.map((bus) => (
            <option key={bus.text} value={bus.text}>
              {bus.text}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
        {busInfo && (
          <div className="bus-info">
            <h3>Bus Information:</h3>
            {busInfo}
            <button onClick={handleMapView} id='view-map'>See Bus on Map</button>
          </div>
        )}
      </div>
      <div ref={mapRef} className="map-container">
        {/* Map component goes here */}
      </div>
    </div>
  );
};

export default Search;
