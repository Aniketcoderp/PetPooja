import React from 'react';
import DateInput from './DateInput';

const CustomDateRange = ({ startDate, endDate, onStartChange, onEndChange }) => {
  return (
    <div>
      <label>From:</label>
      <DateInput value={startDate} onChange={onStartChange} />
      <label>To:</label>
      <DateInput value={endDate} onChange={onEndChange} minDate={startDate} />
    </div>
  );
};

export default CustomDateRange;
