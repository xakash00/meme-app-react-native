import {THEME_CHANGE} from './types';

export const switchTheme = (mode) => {
  return {
    type: THEME_CHANGE,
    payload: mode,
  };
};
