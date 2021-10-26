import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Text} from '..';
import {
  boRadSize,
  marSize,
  padSize,
  primaryColor,
  urlMovieImage,
  windowWidth,
} from '../../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardMovie = ({trending, data, onPress}) => {
  if (trending) {
    return (
      <ImageBackground
        source={{uri: urlMovieImage + data.poster_path}}
        style={{height: 150, width: 250}}
        borderRadius={boRadSize}>
        <Button overflow onPress={onPress}>
          <View style={{height: 150, width: 250}}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
              style={{
                flex: 1,
                borderRadius: boRadSize,
              }}>
              <Gap flex />
              <View
                style={{
                  padding: padSize,
                  zIndex: 10,
                }}>
                <Text semibold>{data.title ?? data.name}</Text>
                <Text light justify>
                  {data.overview.slice(0, 70)}...
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="star" size={20} color={primaryColor} />
                  <Gap width={5} />
                  <Text semibold primary>
                    {data.vote_average}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </Button>
      </ImageBackground>
    );
  }
  return (
    <Button onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          margin: marSize,
          borderRadius: boRadSize,
        }}>
        <View style={{}}>
          <Image
            source={{uri: urlMovieImage + data.poster_path}}
            style={{
              height: 100,
              width: 80,
              borderRadius: boRadSize,
            }}
          />
        </View>
        <Gap width={marSize} />
        <View style={{maxWidth: windowWidth - 80 - 3 * marSize}}>
          <Text subtitle bold>
            {`${data.title} (${data.release_date.slice(0, 4)})`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign name="star" size={20} color={primaryColor} />
            <Text primary normal>
              {data.vote_average}
            </Text>
          </View>
          <Text normal justify>
            {data.overview.slice(0, 120)}
          </Text>
        </View>
      </View>
    </Button>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: boRadSize,
    overflow: 'hidden',
  },
  btn: {},
});
