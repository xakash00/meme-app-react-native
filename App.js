import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MyStack from './src/routes';
const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
