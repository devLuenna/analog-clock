import React from 'react';
import './styles.css';
import { CIRCLE_DEGREES } from '../../constants';
import { getHourDegree, getMinuteDegree, getNumberDegree, getSecondDegree } from '../../utils';
import Tooltip from '../tooltip';
import useMousePosition from '../../hooks/useMousePosition';

const ClockNumber = ({ value }) => (
  <div className="clock-face__number" style={{ rotate: `${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}>
    <span style={{ rotate: `-${getNumberDegree(value)}deg` }}>{value}</span>
  </div>
);

const ClockFace = ({ children, onMouseMove }) => {
  const clockNumbers = Array.from({ length: 12 }, (v, i) => i + 1);

  return (
    <div className="clock-face" onMouseMove={onMouseMove}>
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
  const { position, handlePosition } = useMousePosition();

  return (
    <ClockFace onMouseMove={handlePosition}>
      <HourHand hours={hours} minutes={minutes} />
      <MinuteHand minutes={minutes} seconds={seconds} />
      <SecondHand seconds={seconds} />
      <div
        className="tooltip-container"
        style={{
          left: `${position.x + 5}px`,
          top: `${position.y - 35}px`,
        }}>
        <Tooltip
          message={`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0',
          )}`}
        />
      </div>
    </ClockFace>
  );
};

export default Clock;
