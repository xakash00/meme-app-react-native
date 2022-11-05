import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-react-native';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {SizeConfig} from '../helpers/size';
const Loading = () => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={appStyles.container}>
      <Lottie
        source={require('../assets/loading.json')}
        progress={animationProgress.current}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

const appStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: SizeConfig.height * 100,
  },
});
