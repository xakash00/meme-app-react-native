import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {switchTheme} from '../redux/action/switchTheme';
import ToggleSwitch from 'toggle-switch-react-native';
const Theme = () => {
  const theme = useSelector(store => store.themeReducer);
  const [mode, setMode] = useState(theme.mode);
  const dispatch = useDispatch();

  // Handle changing the theme mode
  const handleThemeChange = () => {
    dispatch(switchTheme(theme.mode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    if (theme.mode === 'dark') {
      ToastAndroid.show('Dark Mode Enabled !', ToastAndroid.SHORT);
    } else if (theme.mode === 'light') {
      ToastAndroid.show('Dark Mode Disabled !', ToastAndroid.SHORT);
    }
  }, [theme.mode]);

  return (
    <ToggleSwitch
      isOn={theme.mode === 'dark' ? true : false}
      onColor="#00C5B3"
      offColor="#ccc"
      size="small"
      onToggle={handleThemeChange}
    />
  );
};

export default Theme;
