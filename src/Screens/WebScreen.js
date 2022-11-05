import React from 'react';
import {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';
import {appStyles, LoadingView, ScreenView} from '../styles';

const WebScreen = ({route}) => {
  const [isLoading, setLoading] = useState(false);
  const theme = useSelector(store => store.themeReducer);

  return (
    <ScreenView mode={theme.mode === 'dark' ? '#000' : '#fff'}  >
      <WebView
        source={{uri: route.params.url}}
        onLoad={() => setLoading(false)}
        domStorageEnabled={true}
        onLoadProgress={({nativeEvent}) => {
          if (nativeEvent.progress != 1 && isLoading == false) {
            setLoading(true);
          } else if (nativeEvent.progress == 1) {
            setLoading(false);
          }
        }}
      />
       {isLoading && (
          <LoadingView color={theme.mode === 'dark' ? '#000' : '#fff'} >
            <ActivityIndicator
              color="#00C5B3"
              size="large"
              //   style={{position: 'absolute', left: 200, top: 300}}
            />
          </LoadingView>
        )}
    </ScreenView>
  );
};

export default WebScreen;
