import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import Card from '../components/card';
import {
  appStyles,
  Button,
  ColoredButton,
  Container,
  Icon,
  Margin,
  Row,
  StyledText,
} from '../styles';
import {useSelector} from 'react-redux';
import Header from '../components/header';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const theme = useSelector(store => store.themeReducer);
  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://meme-api.herokuapp.com/gimme/${count}`).then(res => {
      setData(data => [...data, ...res.data.memes]);
      setIsLoading(false);
    });
  };

  const wait = () => {
    return new Promise(resolve => {
      console.log('refresh');
      resolve(getUsers());
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait().then(() => setRefreshing(false));
  }, []);

  const _loadMore = () => {
    setIsLoading(true);
    setCount(count + 5);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [count, refreshing]);
  return (
    <>
      <Header />
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        mode={theme.mode === 'dark' ? '#000' : '#fff'}>
        {data.map((item, index) => {
          return <Card key={index} item={item} navigation={navigation} />;
        })}
        <View>
          {isLoading === true ? (
            <>
              <ActivityIndicator size="large" color="#00C5B3" />
            </>
          ) : (
            <ColoredButton onPress={_loadMore}>
              <StyledText
                align="center"
                font="3"
                fontstyle={'SemiBold'}
                color={'#EEEEEE'}>
                Load more....
              </StyledText>
            </ColoredButton>
          )}
        </View>
        <Margin />
        <Margin />
        <Margin />
      </Container>
    </>
  );
};

export default HomeScreen;
