import React from 'react';
import styled from 'styled-components';
import {marSize, primaryColor} from '../../../utils';
import {Button, Gap, Text} from '../..';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StatusBar, TouchableNativeFeedback, View} from 'react-native';

const Header = ({
  onPress,
  details,
  center,
  text,
  onPressRight,
  overflow,
  active,
}) => {
  if (details) {
    return (
      <ContainerDetails center={center}>
        {onPress && (
          <Button onPress={onPress} overflow={overflow}>
            <View
              style={{
                width: 30,
                height: 30,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name="chevron-left"
                size={30}
                color="white"
                style={{alignSelf: 'center'}}
              />
            </View>
          </Button>
        )}
        <Text title semibold>
          {text}
        </Text>
        {onPressRight ? (
          <Button onPress={onPressRight} overflow={overflow}>
            <View
              style={{
                width: 30,
                height: 30,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign
                name={active ? 'heart' : 'hearto'}
                size={20}
                color={active ? 'red' : 'white'}
                style={{alignSelf: 'center'}}
              />
            </View>
          </Button>
        ) : onPress ? (
          <View style={{width: 30, height: 30}} />
        ) : null}
      </ContainerDetails>
    );
  }
  return (
    <Container>
      {/* <Button onPress={onPress} overflow={overflow}>
        <Feather
          name="bar-chart-2"
          size={30}
          color="white"
          style={{transform: [{rotate: '90deg'}]}}
        />
      </Button> */}
      <Gap width={10} />
      <Left>
        <Text subtitle semibold>
          Welcome George Halliway
        </Text>
        <Text light primary>
          Be Relax and watch some movie !
        </Text>
      </Left>
      <Right>
        <Profile
          source={{
            uri:
              'https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA',
          }}
          style={{width: 50, height: 50, resizeMode: 'cover', borderRadius: 15}}
        />
      </Right>
    </Container>
  );
};

export default Header;

const ContainerDetails = styled.View`
  flex-direction: row;
  padding-left: 15;
  padding-right: 15;
  position: absolute;
  top: ${StatusBar.currentHeight + marSize};
  left: 0;
  right: 0;
  z-index: 10;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
`;
const Container = styled.View`
  flex-direction: row;
  padding-left: 15;
  padding-right: 15;
  height: 90;
  align-items: center;
  justify-content: ${(props) => (props.details ? 'space-between' : 'center')};
`;

const Left = styled.View`
  flex: 1;
`;

const Right = styled.View``;
const Profile = styled.Image``;
