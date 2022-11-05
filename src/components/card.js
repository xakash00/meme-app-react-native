import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Share,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import {SizeConfig} from '../helpers/size';
import {
  appStyles,
  Button,
  CardContainer,
  CardImage,
  Icon,
  Margin,
  OverLay,
  Row,
  StyledText,
} from '../styles';
import FastImage from 'react-native-fast-image'
import {useSelector} from 'react-redux';
import ColoredLine from './hr';
const Card = ({item, navigation}) => {
  const theme = useSelector(store => store.themeReducer);
  return (
    <CardContainer
      color={theme.mode === 'dark' ? '#5A5A5A' : '#ccc'}
      onPress={() =>
        navigation.navigate('ViewMeme', {
          data: item,
        })
      }>
     <FastImage
        style={appStyles.image}
        source={{
            uri: item?.url,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
      <Margin />
      <ColoredLine color={theme.mode === 'dark' ? '#5A5A5A' : '#ccc'} />
      <View>
        <StyledText
          numberOfLines={1}
          align="center"
          font="3.5"
          fontstyle={'Regular'}
          color={theme.mode === 'dark' ? '#EEEEEE' : '#000'}>
          {item.title}
        </StyledText>
      </View>
    </CardContainer>
  );
};

export default Card;
