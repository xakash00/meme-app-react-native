import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {SizeConfig} from '../helpers/size';
import {WebViewContainer} from '../styles';

const ImageWebView = ({url}) => {
  console.log(url);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <WebViewContainer>
        <WebView source={{uri: url}} />
      </WebViewContainer>
    </>
  );
};

export default ImageWebView;
