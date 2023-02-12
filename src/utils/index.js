import { CIRCLE_DEGREES } from '../constants';

export const getHourDegree = (hours, minutes) => (CIRCLE_DEGREES / 12) * hours + 180 + (minutes / 60) * 30;
export const getMinuteDegree = (minutes) => (CIRCLE_DEGREES / 60) * minutes + 180;
export const getSecondDegree = (seconds) => (CIRCLE_DEGREES / 60) * seconds + 180;
