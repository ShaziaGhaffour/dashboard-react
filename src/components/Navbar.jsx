import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [startDate, setStartDate] = useState('10-06-2021');
  const [endDate, setEndDate] = useState('10-10-2021');
  const [startDropdownOpen, setStartDropdownOpen] = useState(false);
  const [endDropdownOpen, setEndDropdownOpen] = useState(false);

  const dateOptions = [
    '10-06-2021', '11-06-2021', '12-06-2021', '15-06-2021', '20-06-2021',
    '25-06-2021', '01-07-2021', '05-07-2021', '10-07-2021', '15-07-2021',
    '20-07-2021', '25-07-2021', '01-08-2021', '05-08-2021', '10-08-2021',
    '15-08-2021', '20-08-2021', '25-08-2021', '01-09-2021', '05-09-2021',
    '10-09-2021', '15-09-2021', '20-09-2021', '25-09-2021', '01-10-2021',
    '05-10-2021', '10-10-2021', '15-10-2021', '20-10-2021', '25-10-2021'
  ];

  const handleStartDateSelect = (date) => {
    setStartDate(date);
    setStartDropdownOpen(false);
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
    setEndDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md flex p-2 justify-between items-center border-b border-gray-50 relative">
      <h1 className="text font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-1">
        <div className="relative">
          <button
            onClick={() => {
              setStartDropdownOpen(!startDropdownOpen);
              setEndDropdownOpen(false);
            }}
            className="w-[100px] h-[30px] flex items-center justify-between text-sm text-gray-700 bg-white-100 rounded-md hover:bg-gray-50 focus:outline-none transition"
            style={{ border: 'none' }}
          >
            <span>{startDate}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${startDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {startDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-[100px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {dateOptions.map((date) => (
                <button
                  key={date}
                  onClick={() => handleStartDateSelect(date)}
                  className={`w-full text-left  text-sm transition-colors ${
                    startDate === date
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ border: 'none' }}
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* End Date */}
        <div className="relative">
          <button
            onClick={() => {
              setEndDropdownOpen(!endDropdownOpen);
              setStartDropdownOpen(false);
            }}
            className="w-[100px] h-[30px] flex items-center justify-between text-sm text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none transition"
            style={{ border: 'none' }}
          >
            <span>{endDate}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${endDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {endDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {dateOptions.map((date) => (
                <button
                  key={date}
                  onClick={() => handleEndDateSelect(date)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    endDate === date
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ border: 'none' }}
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
