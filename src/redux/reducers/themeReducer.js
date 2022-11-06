import {THEME_CHANGE} from '../action/types';

const initialState = {
  mode: 'dark',
};

// Handle our action of changing the theme
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
