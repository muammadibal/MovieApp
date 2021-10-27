import React from 'react';
import {Image, StatusBar, StyleSheet, ScrollView, View} from 'react-native';
import {Button, Gap, Header, Loading, Text} from '../../components';
import {
  bgColor,
  boRadSize,
  getDate,
  getMonth,
  getMonthName,
  getTime,
  getTotalDate,
  marSize,
  primaryColor,
  windowWidth,
  currency,
  padSize,
} from '../../utils';
import {ILScreen} from '../../assets';

const row = 10;
const rowSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const time = [
  '10.30',
  '11.30',
  '13.30',
  '15.30',
  '16.30',
  '17.30',
  '19.00',
  '19.30',
  '20.30',
  '21.30',
  '22.00',
];

const Book = ({navigation, route}) => {
  const {params} = route.params;
  // console.log(params)
  const [loading, setLoading] = React.useState(true);
  const [selected, setSelected] = React.useState([]);
  const [data, setData] = React.useState({
    date: '',
    time: '',
  });

  const Seat = [];
  for (let k = 0; k < rowSeat.length; k++) {
    for (let j = 1; j <= row; j++) {
      Seat.push(`${rowSeat[k]}${j}`);
    }
  }

  const listDate = [];
  for (let i = getDate; i < getTotalDate; i++) {
    listDate.push(i);
  }
  // console.log(data);
  console.log(getMonthName.split(' ')[1]);
  // console.log(getDate);
  // console.log(getTime);
  // console.log(getTotalDate);
  console.log(listDate);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const checked = (val) => {
    const seat = selected.filter((item) => item !== val);
    // .map((res) => res);
    selected.includes(val)
      ? setSelected(seat)
      : setSelected([...selected, val]);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header
            details
            onPress={() => navigation.goBack()}
            text="Select Seat"
            overflow
          />
          <View style={styles.container}>
            <Gap height={StatusBar.currentHeight + 4 * marSize} />
            <Image
              source={ILScreen}
              style={{
                width: windowWidth - 2 * marSize,
                height: 80,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
            <Gap height={10} />
            {/* seat */}
            <View
              style={{
                width: windowWidth - 2 * marSize,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginHorizontal: marSize,
              }}>
              {Seat.map((val) => {
                return (
                  <Button overflow onPress={() => checked(val)}>
                    <View
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: selected.includes(val)
                          ? primaryColor
                          : 'grey',
                        borderRadius: boRadSize - 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 3,
                      }}>
                      <Text dark={selected.includes(val) ? true : false} light>
                        {val}
                      </Text>
                    </View>
                  </Button>
                );
              })}
            </View>
            <Gap height={20} />
            <View style={{height: 70}}>
              {/* date */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {listDate.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: 50,
                        height: 70,
                        backgroundColor:
                          item === data.date ? primaryColor : 'grey',
                        borderRadius: boRadSize,
                        marginLeft: index === 0 ? padSize : 0,
                        marginRight: padSize,
                      }}>
                      <Button
                        overflow
                        onPress={() => {
                          setData({...data, date: item});
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                          }}>
                          <Text>{getMonthName.split(' ')[1]}</Text>
                          <Gap height={5} />
                          <View
                            style={{
                              width: 25,
                              height: 25,
                              backgroundColor: 'white',
                              borderRadius: boRadSize,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text dark>{item}</Text>
                          </View>
                        </View>
                      </Button>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={20} />
            <View style={{height: 30}}>
              {/* time */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {time.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: 50,
                        height: 30,
                        backgroundColor:
                          item === data.time ? primaryColor : bgColor,
                        borderRadius: boRadSize,
                        borderWidth: 1,
                        borderColor: primaryColor,
                        marginLeft: index === 0 ? padSize : 0,
                        marginRight: padSize,
                      }}>
                      <Button
                        overflow
                        onPress={() => {
                          setData({...data, time: item});
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                          }}>
                          <Text>{item}</Text>
                        </View>
                      </Button>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              left: marSize,
              right: marSize,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Text>Price</Text>
                <Text subtitle semibold>
                  {currency(selected.length * 50000)}
                </Text>
              </View>
              <Gap width={20} />
              <View style={{flex: 1}}>
                <Button
                  text="Book Now"
                  onPress={() => navigation.navigate('Ticket', {item: params})}
                  overflow
                  plain
                  primary
                  subtitle
                  semibold
                />
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
});
