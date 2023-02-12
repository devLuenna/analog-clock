import React from 'react';
import './styles.css';
import { CIRCLE_DEGREES } from '../../constants';
import { getHourDegree } from '../../utils';

const ClockNumber = ({ value }) => (
  <div className="clock-face__number" style={{ rotate: `${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>
    <span style={{ rotate: `-${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>{value}</span>
  </div>
);

const ClockFace = ({ children }) => {
  const clockNumbers = Array.from({ length: 12 }, (v, i) => i + 1);

  return (
    <div className="clock-face">
      {clockNumbers.map((number) => (
        <ClockNumber key={number} value={number} />
      ))}
      {children}
    </div>
  );
};

const HourHand = ({ hours, minutes }) => (
  <div
    className="clock-hand clock-hand__hour"
    style={{
      rotate: `${getHourDegree(hours, minutes)}deg`,
    }}
  />
);

const Clock = ({ time }) => {
  console.log('time', time);
  return (
    <ClockFace>
      <HourHand hours={time.hours} minutes={time.minutes} />
    </ClockFace>
  );
};

export default Clock;
