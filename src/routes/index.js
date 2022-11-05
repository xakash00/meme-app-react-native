import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewMeme from '../Screens/ViewMeme';
import HomeScreen from '../Screens/HomeScreen';
import WebScreen from '../Screens/WebScreen';
export default function MyStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="ViewMeme" component={ViewMeme} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WebScreen" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
