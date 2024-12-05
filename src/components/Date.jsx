import React, { useState, useEffect } from 'react';
import DatePickerContainer from './Date/DatePicker';

const DateComponent = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update the time in HH:MM:SS format
    const updateClock = () => {
      const now = new Date(); // Correctly create a Date object
      const timeString = now.toLocaleTimeString(); // Formats time in HH:MM:SS AM/PM
      setCurrentTime(timeString);
    };

    // Set an interval to update the time every second
    const timer = setInterval(updateClock, 1000);
    updateClock(); // Update the clock immediately on component mount

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const handleDateSelected = (dateOrRange) => {
    console.log('Selected Date/Range:', dateOrRange);
  };

  const customStyles = {
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#f0f0f0',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Date Picker</h1>
      <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px 0', fontWeight: 'bold' }}>
        Real-Time Clock: {currentTime}
      </div>
      <DatePickerContainer onDateSelected={handleDateSelected} customStyles={customStyles} />
    </div>
  );
};

export default DateComponent;
