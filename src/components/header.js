import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import { SizeConfig } from '../helpers/size';
import Theme from '../helpers/theme';
import {
  appStyles,
  HeaderContainer,
  Icon,
  Logo,
  Row,
  StyledText,
} from '../styles';
const Header = () => {
  const theme = useSelector(store => store.themeReducer);

  return (
    <HeaderContainer
      style={appStyles.boxShadow}
      mode={theme.mode === 'dark' ? '#000' : '#fff'}>
      <Row>
        <Row>
          <Logo source={require('../assets/logo.png')} />
          <View>
            <StyledText
              numberOfLines={1}
              align="left"
              font="4.5"
              fontstyle={'SemiBold'}
              color={theme.mode === 'dark' ? '#fff' : '#000'}>
              Reddit Memes
            </StyledText>
            <StyledText
            style={{marginTop:SizeConfig.height*-1.5}}
              align="left"
              font="2"
              fontstyle={'Regular'}
              color={theme.mode === 'dark' ? '#fff' : '#000'}>
              Crafted by Akash
            </StyledText>
          </View>
        </Row>
        <Row>
          <Icon
            source={
              theme.mode === 'dark'
                ? require('../assets/moon.png')
                : require('../assets/sun.png')
            }
          />
          <Theme />
        </Row>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
