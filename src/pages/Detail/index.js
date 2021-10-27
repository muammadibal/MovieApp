import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Loading, Text} from '../../components';
import {getMovieCredits, getMovieDetail} from '../../redux/actions/movieAction';
import {
  bgColor,
  boRadSize,
  marSize,
  padSize,
  primaryColor,
  urlMovieImage,
  windowWidth,
} from '../../utils';

const Detail = ({navigation, route}) => {
  //   console.log(route.params);
  const dispatch = useDispatch();
  const {item} = route.params;
  const {
    getMovieDetailLoading,
    getMovieDetailData,
    getMovieDetailError,
    getMovieCreditsLoading,
    getMovieCreditsData,
    getMovieCreditsError,
  } = useSelector((state) => state.movieReducer);
  const [loading, setLoading] = useState(true);
  const [love, setLove] = useState(false);

  //   const genre = getMovieGenreData.filter((val) =>
  //     item.genre_ids.includes(val.id),
  //   );

  React.useEffect(() => {
    dispatch(getMovieDetail(item.id));
    dispatch(getMovieCredits(item.id));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading || getMovieDetailLoading || getMovieCreditsLoading ? (
        <Loading />
      ) : (
        <>
          <StatusBar translucent backgroundColor="transparent" />

          <Header
            details
            text="Movie Detail"
            onPress={() => navigation.goBack()}
            onPressRight={() => setLove(!love)}
            active={love}
            overflow
          />
          <ScrollView style={{flex: 1, backgroundColor: bgColor}}>
            <ImageBackground
              source={{uri: urlMovieImage + getMovieDetailData.backdrop_path}}
              style={{width: windowWidth, height: 400}}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.5)', bgColor]}
                style={{flex: 1}}
              />
            </ImageBackground>
            <View
              style={{
                marginTop: -120,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text center large bold>
                {getMovieDetailData.name ?? getMovieDetailData.title}
              </Text>
              <Gap height={5} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text subtitle bold>
                  {getMovieDetailData.release_date.slice(0, 4) ??
                    getMovieDetailData.first_air_date.slice(0, 4)}
                </Text>
                <Entypo name="dot-single" size={12} color="white" />
                <Text subtitle bold>
                  {getMovieDetailData.genres.map((vals, index) => {
                    return getMovieDetailData.genres.length - 1 === index
                      ? `${vals.name}`
                      : `${vals.name} | `;
                  })}
                </Text>
              </View>
              <Gap height={5} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="star" size={15} color={primaryColor} />
                <Gap width={5} />
                <Text primary bold>
                  {getMovieDetailData.vote_average}
                </Text>
              </View>
              <Gap height={30} />
              <View
                style={{
                  marginHorizontal: marSize,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  width: windowWidth - 2 * marSize,
                }}>
                <Text title bold>
                  Synopsis
                </Text>

                <Gap height={5} />

                <Text subtitle light>
                  {getMovieDetailData.overview}
                </Text>
              </View>
              {getMovieDetailData.production_companies.length > 0 && (
                <View
                  style={{
                    marginHorizontal: marSize,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: windowWidth - 2 * marSize,
                  }}>
                  <Gap height={20} />

                  <Text title bold>
                    Production Companies
                  </Text>

                  <Gap height={5} />
                </View>
              )}
              <View
                style={{
                  height: 90,
                  width: windowWidth,
                }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {getMovieDetailData.production_companies.map(
                    (vals, index) => {
                      return (
                        <View
                          style={{
                            maxWidth: 70,
                            height: 90,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: marSize,
                            marginLeft: index === 0 ? padSize : 0,
                            marginRight: padSize,
                          }}>
                          <Image
                            source={{uri: urlMovieImage + vals.logo_path}}
                            style={{
                              width: 60,
                              height: 60,
                              borderRadius: boRadSize,
                            }}
                          />
                          <Text center small>
                            {vals.name}
                          </Text>
                        </View>
                      );
                    },
                  )}
                </ScrollView>
              </View>
              {getMovieCreditsData.cast.length > 0 && (
                <View
                  style={{
                    marginHorizontal: marSize,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: windowWidth - 2 * marSize,
                  }}>
                  <Gap height={20} />

                  <Text title bold>
                    Casts
                  </Text>
                  <Gap height={5} />
                </View>
              )}
              <View style={{height: 90}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {getMovieCreditsData.cast.map((vals, index) => {
                    return (
                      <View
                        style={{
                          maxWidth: 70,
                          height: 90,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: marSize,
                          marginLeft: index === 0 ? padSize : 0,
                          marginRight: padSize,
                        }}>
                        <Image
                          source={{uri: urlMovieImage + vals.profile_path}}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: boRadSize,
                          }}
                        />
                        <Text center small>
                          {vals.name}
                        </Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <Gap height={100} />
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              left: marSize,
              right: marSize,
            }}>
            <Button
              text="Book"
              onPress={() => navigation.navigate('Book', {params: item})}
              overflow
              plain
              primary
              subtitle
              semibold
            />
          </View>
        </>
      )}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({});
