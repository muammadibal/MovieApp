import React from 'react';
import {StyleSheet, StatusBar, View, ScrollView, Image} from 'react-native';
import {Gap, Header, Text} from '../../components';
import {
  bgColor,
  boRadSize,
  marSize,
  padSize,
  urlMovieImage,
  windowWidth,
} from '../../utils';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const Ticket = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Header
        onPress={() => navigation.goBack()}
        details
        text="Ticket"
        overflow
      />
      <ScrollView style={{flex: 1, backgroundColor: bgColor}}>
        <Gap height={StatusBar.currentHeight + 60} />
        <View
          style={{
            borderRadius: boRadSize,
            backgroundColor: 'white',
            width: windowWidth - 2 * marSize,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: urlMovieImage + item.backdrop_path}}
            style={{
              height: 150,
              width: windowWidth - 2 * marSize,
              borderTopLeftRadius: boRadSize,
              borderTopRightRadius: boRadSize,
            }}
          />

          <View
            style={{paddingVertical: padSize, paddingHorizontal: padSize * 2}}>
            <Text dark title bold>
              {item.title ?? ''}
            </Text>
            <Gap height={10} />
            <Text dark light>
              {item.overview ?? ''}
            </Text>

            <Gap height={padSize} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text dark>Date</Text>
                <Text dark bold subtitle>
                  09/10
                </Text>
              </View>
              <View>
                <Text dark>Time</Text>
                <Text dark bold subtitle>
                  15.30
                </Text>
              </View>
              <View>
                <Text dark>Room</Text>
                <Text dark bold subtitle>
                  05
                </Text>
              </View>
            </View>

            <Gap height={10} />

            <View>
              <Text dark>Seats</Text>
              <Text dark bold subtitle>
                B5,B6
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 40,
                width: 20,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: bgColor,
              }}
            />
            <View
              style={{
                borderColor: 'grey',
                borderStyle: 'dashed',
                borderWidth: 1,
                height: 1,
                width: windowWidth - 2 * padSize - 30,
                borderRadius: 1,
              }}
            />
            <View
              style={{
                height: 40,
                width: 20,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                backgroundColor: bgColor,
              }}
            />
          </View>

          <View
            style={{paddingVertical: padSize, paddingHorizontal: padSize * 2}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text dark>Ticket ID</Text>
                <Text dark bold subtitle>
                  ABCD-12345-67890
                </Text>
              </View>
              <View>
                <Text dark>Price</Text>
                <Text dark bold subtitle>
                  IDR 100.000
                </Text>
              </View>
            </View>
          </View>
          <Barcode
            format="CODE128B"
            value="Hello World"
            text={item.title ?? ''}
            // maxWidth={windowWidth / 2}
            height={50}
          />
          <Gap height={padSize} />
        </View>
        <Gap height={50} />
      </ScrollView>
    </>
  );
};

export default Ticket;

const styles = StyleSheet.create({});
