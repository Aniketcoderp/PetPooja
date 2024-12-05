import React from 'react';

const PresetButtons = ({ onSelectPreset }) => {
  return (
    <div>
      <button onClick={() => onSelectPreset('today')}>Today</button>
      <button onClick={() => onSelectPreset('yesterday')}>Yesterday</button>
      <button onClick={() => onSelectPreset('thisMonth')}>This Month</button>
      <button onClick={() => onSelectPreset('lastMonth')}>Last Month</button>
      <button onClick={() => onSelectPreset('customRange')}>Custom Range</button>
    </div>
  );
};

export default PresetButtons;
