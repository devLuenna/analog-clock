import { CIRCLE_DEGREES } from '../constants';

export const getNumberDegree = (value) => (CIRCLE_DEGREES / 12) * (value - 1) + 210;
export const getHourDegree = (hours, minutes) => (CIRCLE_DEGREES / 12) * hours + (minutes / 60) * 30 + 180;
export const getMinuteDegree = (minutes, seconds) => (CIRCLE_DEGREES / 60) * minutes + (seconds / 60) * 6 + 180;
export const getSecondDegree = (seconds) => (CIRCLE_DEGREES / 60) * seconds + 180;
