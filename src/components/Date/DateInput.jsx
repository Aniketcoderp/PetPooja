import React from 'react';

const DateInput = ({ value, onChange, minDate, maxDate, placeholder }) => {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={onChange} 
      min={minDate} 
      max={maxDate} 
      placeholder={placeholder} 
    />
  );
};

export default DateInput;
