import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {Gap, Text} from '..';
import {
  bgColor,
  bgColorSecondary,
  boRadSize,
  padSize,
  primaryColor,
} from '../../../utils';
import Feather from 'react-native-vector-icons/Feather';

export default function Button({
  onPress,
  text,
  plain,
  primary,
  tertier,
  subtitle,
  iconLeft,
  iconRight,
  semibold,
  opacity,
  children,
  overflow,
}) {
  if (opacity) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
  if (plain) {
    return (
      <View style={styles.btnContainer(overflow)}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={
            overflow
              ? TouchableNativeFeedback.Ripple('white', true)
              : TouchableNativeFeedback.Ripple('white', false)
          }>
          <View
            style={{
              height: 50,
              borderRadius: boRadSize,
              backgroundColor: primary
                ? primaryColor
                : tertier
                ? bgColorSecondary
                : 'white',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: tertier ? padSize : 0,
              alignItems: 'center',
            }}>
            {iconLeft && (
              <Feather
                name="chevron-left"
                size={30}
                color="white"
                style={{alignSelf: 'center'}}
              />
            )}
            <Text subtitle={subtitle} semibold={semibold}>
              {text}
            </Text>
            {iconRight && (
              <>
                <Gap flex />
                <Feather
                  name="chevron-right"
                  size={30}
                  color="white"
                  style={{alignSelf: 'center'}}
                />
              </>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
  return (
    <View style={styles.btnContainer(overflow)}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('white', overflow)}>
        <View style={styles.btn}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: (overflow) => ({
    borderRadius: overflow ? boRadSize : 0,
    overflow: 'hidden',
  }),
  btn: {
    // borderRadius: boRadSize,
  },
});
