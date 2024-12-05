import React, { useState, useEffect } from 'react';
import PresetButtons from './PresentBottons';
import CustomDateRange from './CustomDateRange';

const DatePickerContainer = ({ onDateSelected, customStyles }) => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedPreset === 'today') {
      const today = new Date().toISOString().split('T')[0];
      onDateSelected(today);
      setMessage('Today selected');
    } else if (selectedPreset === 'yesterday') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      onDateSelected(yesterday.toISOString().split('T')[0]);
      setMessage('Yesterday selected');
    } else if (selectedPreset === 'thisMonth') {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      onDateSelected([firstDay.toISOString().split('T')[0], lastDay.toISOString().split('T')[0]]);
      setMessage('This month selected');
    } else if (selectedPreset === 'lastMonth') {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
      onDateSelected([firstDay.toISOString().split('T')[0], lastDay.toISOString().split('T')[0]]);
      setMessage('Last month selected');
    } else if (selectedPreset === 'customRange') {
      setMessage('Custom range selected');
    }
  }, [selectedPreset, onDateSelected]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setMessage(`Start date changed to ${e.target.value}`);
  };

  const handleEndDateChange = (e) => {
    if (e.target.value >= startDate) {
      setEndDate(e.target.value);
      setMessage(`End date changed to ${e.target.value}`);
    } else {
      setMessage('End date cannot be earlier than start date');
    }
  };

  return (
    <div style={{ ...customStyles, padding: '20px',  display:'grid', placeItems:'center',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <PresetButtons onSelectPreset={setSelectedPreset} />
      {selectedPreset === 'customRange' && (
        <CustomDateRange 
          startDate={startDate} 
          endDate={endDate} 
          onStartChange={handleStartDateChange} 
          onEndChange={handleEndDateChange}
        />
      )}
      <div style={styles.message}>{message}</div> 
    </div>
  );
};

const styles = {
  message: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default DatePickerContainer;
