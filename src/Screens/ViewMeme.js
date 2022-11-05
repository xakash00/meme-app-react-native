import React, {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ReactNativeModal from 'react-native-modal';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import Header from '../components/header';
import ColoredLine from '../components/hr';
import {
  appStyles,
  Button,
  Container,
  Icon,
  Margin,
  ModalScreen,
  Row,
  ScreenView,
  StyledText,
} from '../styles';

const ViewMeme = ({route, navigation}) => {
  const theme = useSelector(store => store.themeReducer);
  const data = route.params.data;
  const [isVisible, setIsVisible] = useState(false);
  const REMOTE_IMAGE_PATH = data?.url;

  const checkPermission = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          ToastAndroid.show('Download Started!', ToastAndroid.SHORT);
          setIsVisible(false);
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        ToastAndroid.show(
          'Image downloaded successfully !',
          ToastAndroid.SHORT,
        );
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return (
    <>
      <ScreenView mode={theme.mode === 'dark' ? '#000' : '#fff'}>
        <Margin />
        <Margin />
        <Row>
          <Button
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              source={
                theme.mode === 'dark'
                  ? require('../assets/arrowW.png')
                  : require('../assets/arrowB.png')
              }
            />
          </Button>
          <StyledText
            numberOfLines={1}
            align="left"
            fontstyle={'SemiBold'}
            font="5"
            color={theme.mode === 'dark' ? '#EEEEEE' : '#000'}>
            {data.author}
          </StyledText>
          <Button onPress={() => setIsVisible(prev => !prev)}>
            <Icon
              source={
                theme.mode === 'dark'
                  ? require('../assets/more.png')
                  : require('../assets/moreDark.png')
              }
            />
          </Button>
        </Row>
        <Margin />
        <ColoredLine color={theme.mode === 'dark' ? '#5A5A5A' : '#000'} />

        <Margin />
        <Margin />
        <TouchableWithoutFeedback onLongPress={() => setIsVisible(true)}>
          <FastImage
            style={appStyles.image}
            source={{
              uri: data?.url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableWithoutFeedback>

        <Margin />
        <Margin />
        <StyledText
          numberOfLines={1}
          align="left"
          font="4"
          fontstyle={'Regular'}
          color={theme.mode === 'dark' ? '#EEEEEE' : '#000'}>
          {data.title}
        </StyledText>
      </ScreenView>
      <ReactNativeModal
        onBackdropPress={() => setIsVisible(false)}
        animationType="slide"
        onBackButtonPress={() => setIsVisible(false)}
        isVisible={isVisible}>
        <ModalScreen color={theme.mode === 'dark' ? '#000' : '#fff'}>
          <Button onPress={checkPermission}>
            <Row>
              <Icon
                source={
                  theme.mode === 'dark'
                    ? require('../assets/downloadW.png')
                    : require('../assets/downloadB.png')
                }
              />
              <StyledText
                numberOfLines={1}
                align="left"
                font="3.5"
                fontstyle={'Regular'}
                color={theme.mode === 'dark' ? '#EEEEEE' : '#000'}>
                Download Image
              </StyledText>
            </Row>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate('WebScreen', {
                url: data?.postLink,
              });
            }}>
            <Row>
              <Icon
                source={
                  theme.mode === 'dark'
                    ? require('../assets/redditw.png')
                    : require('../assets/redditb.png')
                }
              />
              <StyledText
                numberOfLines={1}
                align="left"
                font="3.5"
                fontstyle={'Regular'}
                color={theme.mode === 'dark' ? '#EEEEEE' : '#000'}>
                View on Reddit
              </StyledText>
            </Row>
          </Button>
        </ModalScreen>
      </ReactNativeModal>
    </>
  );
};

export default ViewMeme;
