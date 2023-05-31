import React, { useState } from 'react';
import './search.css';

const Search = ({ onClose }) => {
  const [selectedBus, setSelectedBus] = useState('');
  const [busInfo, setBusInfo] = useState('');

  const handleSearch = () => {
    const bus = mockData.find((bus) => bus.text === selectedBus);
    if (bus) {
      setBusInfo(bus.info);
    }
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
    },
    {
      text: 'Bus #18',
      info: 'Realtime Information for Bus #18 is currently not available.',
    },
    {
      text: 'Bus #23',
      info: 'Realtime Information for Bus #23 is currently not available.',
    },
    {
      text: 'Bus #37',
      info: 'Realtime Information for Bus #37 is currently not available.',
    },
    {
      text: 'Bus #42',
      info: 'Realtime Information for Bus #42 is currently not available.',
    },
    {
      text: 'Bus #45',
      info: 'Realtime Information for Bus #45 is currently not available.',
    },
    {
      text: 'Bus #49',
      info: 'Realtime Information for Bus #49 is currently not available.',
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
            <p>{busInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
