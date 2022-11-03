import React, { useState } from 'react';
import '../switch.css';
import Grade from './Grade';

export const Switch = (props) => {
  const { onLabel, offLabel, id } = props;

  const [watched, setWatched] = useState(false);

  const handleChange = (e) => {
    setWatched(e.target.checked);
  };

  return (
    <div style={{ display: 'flex', fontWeight: '400' }}>
      <label style={{ fontSize: '12px' }}>{offLabel}</label>
      <input
        className="react-switch-checkbox"
        id={`react-switch-${id}`}
        type="checkbox"
        onChange={handleChange}
        checked={watched}
      />
      <label className="react-switch-label" htmlFor={`react-switch-${id}`}>
        <span className={`react-switch-button`} />
      </label>
      <label style={{ fontSize: '12px' }}>{onLabel}</label>
      {watched && <Grade />}
    </div>
  );
};
