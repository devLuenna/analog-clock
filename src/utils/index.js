import { CIRCLE_DEGREES } from '../constants';

export const getHourDegree = (hours, minutes) => (CIRCLE_DEGREES / 12) * hours + 180 + (minutes / 60) * 30;
