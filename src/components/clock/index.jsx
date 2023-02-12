import React from 'react';
import './styles.css';
import { CIRCLE_DEGREES } from '../../constants';

const ClockFace = ({ children }) => {
  const clockNumbers = Array.from({ length: 12 }, (v, i) => i + 1);

  return (
    <div className="clock-face">
      {clockNumbers.map((number) => (
        <Number key={number} value={number} />
      ))}
      {children}
    </div>
  );
};

const Number = ({ value }) => (
  <div className="clock-face__number" style={{ rotate: `${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>
    <span style={{ rotate: `-${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>{value}</span>
  </div>
);

const Clock = ({ time }) => {
  console.log('time', time);
  return <ClockFace />;
};

export default Clock;
