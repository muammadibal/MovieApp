import React from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {bgColor, marSize, windowWidth} from '../../utils';
import {CardMovie, Gap, Header, Text, Loading} from '../../components';
import {useSelector} from 'react-redux';

const HistoryOrder = ({navigation}) => {
  const {
    getPopularMovieLoading,
    getPopularMovieData,
    getPopularMovieError,
  } = useSelector((state) => state.movieReducer);
  return (
    <>
      <StatusBar translucent backgroundColor={bgColor} />
      <Header details center text="Orders" overflow />
      <View style={{flex: 1, backgroundColor: bgColor}}>
        <Gap height={StatusBar.currentHeight + 60} />
        <ScrollView>
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
              return (
                <CardMovie
                  onPress={() => navigation.navigate('Ticket', {item})}
                  data={item}
                />
              );
            })
          ) : (
            <Text>{getPopularMovieError}</Text>
          )}
          <Gap height={80} />
        </ScrollView>
      </View>
    </>
  );
};

export default HistoryOrder;

const styles = StyleSheet.create({});
