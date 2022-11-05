import {Dimensions} from 'react-native';

export const SizeConfig = {
  width: Dimensions.get('window').width / 100,
  deviceWidth: Dimensions.get('window').width,
  height: Dimensions.get('window').height / 100,
  deviceHeight: Dimensions.get('window').height,
  fontSize: Dimensions.get('window').width / 100,
};
