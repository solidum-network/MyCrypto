import { CACHE_INIT, CACHE_INIT_DEV, CACHE_KEY } from './constants';
import { isDevelopment } from 'v2/utils';

export const initializeCache = () => {
  const check = localStorage.getItem(CACHE_KEY);
  if (!check || check === '[]' || check === '{}') {
    if (isDevelopment) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(CACHE_INIT_DEV));
    } else {
      localStorage.setItem(CACHE_KEY, JSON.stringify(CACHE_INIT));
    }
  }
};