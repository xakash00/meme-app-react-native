import styled from 'styled-components';
import {Dimensions, StyleSheet} from 'react-native';
import {SizeConfig} from '../helpers/size';

export const Container = styled.ScrollView`
  padding: ${SizeConfig.width * 6}px;
  background-color: ${props => props.mode};
  height: ${SizeConfig.height * 90}px;
`;
export const ScreenView = styled.View`
  background-color: ${props => props.mode};
  height: ${SizeConfig.height * 100}px;
`;
export const Icon = styled.Image`
  width: ${SizeConfig.width * 6}px;
  height: ${SizeConfig.width * 6}px;
  margin-right: ${SizeConfig.width * 2}px;
`;
export const Logo = styled.Image`
  width: ${SizeConfig.width * 12}px;
  height: ${SizeConfig.width * 12}px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  border-radius: ${SizeConfig.width * 2}px;
  padding: ${SizeConfig.width * 3}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ColoredButton = styled.TouchableOpacity`
  border-radius: ${SizeConfig.width * 2}px;
  width:${SizeConfig.width * 30}px;
  /* height:${SizeConfig.height * 7}px; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #00c5b3;
  align-self: center;
`;
export const HeaderContainer = styled.View`
  background-color: ${props => props.mode};
  padding: ${SizeConfig.width * 3}px;
`;
export const Margin = styled.View`
  height: ${SizeConfig.height * 2}px;
`;
export const CardContainer = styled.TouchableOpacity`
  width: ${SizeConfig.width * 88}px;
  padding: ${SizeConfig.width * 2}px;
  margin-bottom: ${SizeConfig.height * 2}px;
  border-radius: ${SizeConfig.width * 3}px;
  overflow: hidden;
  border: ${props => `0.5px solid ${props.color}`};
`;
export const OverLay = styled.View`
  position: absolute;
  z-index: 10;
`;
export const StyledText = styled.Text`
  color: ${props => props.color};
  text-align: ${props => props.align};
  margin: ${SizeConfig.width * 3}px;
  font-size: ${props => SizeConfig.fontSize * props.font}px;
  font-family: ${props => `Montserrat-${props.fontstyle}`};
`;
export const ModalScreen = styled.View`
  width: ${SizeConfig.width * 100}px;
  margin-top: ${SizeConfig.height * 105}px;
  height: ${SizeConfig.height * 45}px;
  padding: ${SizeConfig.width * 2}px;
  background-color: ${props => props.color};
  align-self: center;
  align-items: flex-start;
`;

export const LoadingView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
`;

export const WebViewContainer = styled.View`
  width: ${SizeConfig.width * 90}px;
  height: ${SizeConfig.height * 60}px;
  justify-content: center;
  align-self: center;
`;

export const appStyles = StyleSheet.create({
  image: {
    aspectRatio: 2 / 2,
    margin: 5,
    resizeMode: 'contain',
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    margin: 10,
  },
  text: {
    color: '#256D85',
    fontSize: SizeConfig.fontSize * 4,
    textAlign: 'center',
    width: SizeConfig.width * 40,
  },
  modalScreen: {
    width: SizeConfig.width * 100,
    marginTop: SizeConfig.height * 90,
    height: SizeConfig.height * 45,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
