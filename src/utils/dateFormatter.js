import { WEEKDAYS } from '../config.js';

export function getWeekday(offset = 0) {
  return WEEKDAYS[(new Date().getDay() + offset) % 7];
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}
