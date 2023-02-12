import React from 'react';
import './styles.css';
import { CIRCLE_DEGREES } from '../../constants';
import { getHourDegree, getMinuteDegree, getNumberDegree, getSecondDegree } from '../../utils';

const ClockNumber = ({ value }) => (
  <div className="clock-face__number" style={{ rotate: `${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>
    <span style={{ rotate: `-${getNumberDegree(value)}deg` }}>{value}</span>
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
  <div className="clock-hand clock-hand__hour" style={{ rotate: `${getHourDegree(hours, minutes)}deg` }} />
);

const MinuteHand = ({ minutes, seconds }) => (
  <div className="clock-hand clock-hand__minute" style={{ rotate: `${getMinuteDegree(minutes, seconds)}deg` }} />
);

const SecondHand = ({ seconds }) => (
  <div className="clock-hand clock-hand__second" style={{ rotate: `${getSecondDegree(seconds)}deg` }} />
);

const Clock = ({ time }) => {
  const { hours, minutes, seconds } = time;
  return (
    <ClockFace>
      <HourHand hours={hours} minutes={minutes} />
      <MinuteHand minutes={minutes} seconds={seconds} />
      <SecondHand seconds={seconds} />
    </ClockFace>
  );
};

export default Clock;
