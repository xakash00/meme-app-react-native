import {THEME_CHANGE} from '../action/types';

const initialState = {
  mode: 'light',
};
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', "value")
  } catch (e) {
    // saving error
  }
}
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
