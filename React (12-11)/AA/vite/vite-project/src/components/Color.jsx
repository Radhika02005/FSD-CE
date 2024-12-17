import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState('red');

  const handleChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h1 style={{ color: color }}>My favorite color is {color} !</h1>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick={() => handleChange('red')} >Red</button>
        <button onClick={() => handleChange('blue')} >Blue</button>
        <button onClick={() => handleChange('pink')} >Pink</button>
        <button onClick={() => handleChange('green')} >Green</button>
      </div>
      
    </div>
  );
};

export default Color;