import React, { useState, useRef, useEffect } from 'react';

function StopsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStop, setSelectedStop] = useState('All Stops');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (stop) => {
    setSelectedStop(stop);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button type="button" onClick={toggleDropdown} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded={isOpen}>
          {selectedStop}
          {/* SVG icon here */}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleSelect('All Stops')}>All Stops</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleSelect('Commercial Stops')}>Commercial Stops</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleSelect('Residential Stop')}>Residential Stop</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default StopsDropdown;
