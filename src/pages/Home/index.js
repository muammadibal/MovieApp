import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Button, CardMovie, Gap, Header, Loading, Text} from '../../components';
import {
  getMovieGenre,
  getMovieTopRated,
  getPopularMovie,
} from '../../redux/actions/movieAction';
import {
  bgColor,
  boRadSize,
  marSize,
  padSize,
  primaryColor,
  urlMovieImage,
  windowWidth,
  fonts,
} from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    getPopularMovieLoading,
    getPopularMovieData,
    getPopularMovieError,
    getMovieGenreLoading,
    getMovieGenreData,
    getMovieGenreError,
    getMovieTopRatedLoading,
    getMovieTopRatedData,
    getMovieTopRatedError,
  } = useSelector((state) => state.movieReducer);

  React.useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getMovieGenre());
    dispatch(getMovieTopRated());
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor={bgColor} />
      <Gap height={StatusBar.currentHeight} />
      <View style={{flex: 1, backgroundColor: bgColor}}>
        <Header onPress={() => {}} overflow />
        <ScrollView>
          <View style={{marginHorizontal: marSize}}>
            <Text bold subtitle>
              Movies Popular
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: padSize,
            }}>
            {getPopularMovieLoading ? (
              <View
                style={{
                  height: 150,
                  width: windowWidth,
                  marginHorizontal: marSize,
                }}>
                <Loading />
              </View>
            ) : getPopularMovieData ? (
              getPopularMovieData.map((item, index) => {
                return index === 0 ? (
                  <>
                    <Gap width={padSize} />
                    <View
                      style={{
                        marginRight: marSize,
                        height: 150,
                        width: 250,
                      }}>
                      <CardMovie
                        onPress={() => navigation.navigate('Detail', {item})}
                        trending
                        data={item}
                      />
                    </View>
                  </>
                ) : (
                  <View
                    style={{
                      marginRight: marSize,
                      height: 150,
                      width: 250,
                    }}>
                    <CardMovie
                      onPress={() => navigation.navigate('Detail', {item})}
                      trending
                      data={item}
                    />
                  </View>
                );
              })
            ) : (
              <Text>{getPopularMovieError}</Text>
            )}
          </ScrollView>

          <View style={{marginHorizontal: marSize}}>
            <Text bold subtitle>
              Movie Genres
            </Text>
          </View>

          {getMovieGenreLoading ? (
            <View
              style={{
                height: 150,
                width: windowWidth,
                marginHorizontal: marSize,
              }}>
              <Loading />
            </View>
          ) : getMovieGenreData ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {getMovieGenreData.slice(0, 8).map((item, index) => {
                  return (
                    <ImageBackground
                      source={{
                        uri: `https://picsum.photos/id/100${index}/60/60`,
                      }}
                      borderRadius={boRadSize}
                      blurRadius={1}
                      style={{
                        height: 70,
                        width: windowWidth / 4 - 2 * marSize,
                        backgroundColor: 'grey',
                        borderRadius: boRadSize,
                        margin: marSize,
                      }}>
                      <Button
                        onPress={() => navigation.navigate('Detail', {item})}
                        overflow>
                        <View
                          style={{
                            height: 70,
                            width: windowWidth / 4 - 2 * marSize,

                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                          }}>
                          <Text small light center>
                            {item.name}
                          </Text>
                        </View>
                      </Button>
                    </ImageBackground>
                  );
                })}
              </View>
            </>
          ) : (
            <Text>{getMovieGenreError}</Text>
          )}

          <View style={{marginHorizontal: marSize}}>
            <Text bold subtitle>
              Top Rated
            </Text>
          </View>

          {getMovieTopRatedLoading ? (
            <View
              style={{
                height: 150,
                width: windowWidth,
                marginHorizontal: marSize,
              }}>
              <Loading />
            </View>
          ) : getMovieTopRatedData ? (
            getMovieTopRatedData.map((item) => {
              return (
                <CardMovie
                  onPress={() => navigation.navigate('Detail', {item})}
                  data={item}
                />
              );
            })
          ) : (
            <Text>{getMovieTopRatedError}</Text>
          )}

          <Gap height={80} />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
