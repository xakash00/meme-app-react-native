import React from 'react';
import {View} from 'react-native';

const ColoredLine = ({color}) => {
  return (
    <View
      style={{
        color: color,
        backgroundColor: color,
        height: 0.5,
      }}
    />
  );
};

export default ColoredLine;
