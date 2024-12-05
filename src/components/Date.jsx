import React, { useState, useEffect } from 'react';
import DatePickerContainer from './Date/DatePicker';

const DateComponent = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date(); 
      const timeString = now.toLocaleTimeString(); 
      setCurrentTime(timeString);
    };
    const timer = setInterval(updateClock, 1000);
    updateClock(); 

    return () => clearInterval(timer); 
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
