import React from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {Gap, Text, Header, Button} from '../../components';
import {
  bgColor,
  bgColorSecondary,
  boRadSize,
  marSize,
  padSize,
} from '../../utils';

const menu = [
  'Edit Profile',
  'Edit Password',
  'Help & Support',
  'Rate & Reviews',
  'Log Out',
];

const Profile = ({navigation}) => {
  return (
    <>
      <StatusBar translucent backgroundColor={bgColor} />
      <Header details center text="Profile" overflow />
      <View style={{flex: 1, backgroundColor: bgColor}}>
        <Gap height={StatusBar.currentHeight + 80} />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: marSize,
            backgroundColor: bgColorSecondary,
            borderRadius: boRadSize,
            paddingHorizontal: padSize,
          }}>
          <Image
            source={{
              uri:
                'https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA',
            }}
            style={{height: 100, width: 80, top: -20, borderRadius: boRadSize}}
          />
          <View style={{padding: padSize}}>
            <Text title bold>
              George Halliway
            </Text>
            <Text subtitle semibold>
              Musician
            </Text>
            <Text light>Action, Comedy, Adventure</Text>
          </View>
        </View>

        <Gap height={20} />

        <View style={{marginHorizontal: marSize}}>
          <Text subtitle semibold>
            Menu
          </Text>
        </View>

        <Gap height={10} />
        {menu.map((item) => {
          return (
            <View
              style={{
                marginHorizontal: marSize,
                marginBottom: marSize,
              }}>
              <Button
                plain
                tertier
                onPress={() => {}}
                overflow
                text={item}
                iconRight
              />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
