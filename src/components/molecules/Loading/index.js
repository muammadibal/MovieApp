import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {bgColor} from '../../../utils';

const Loading = ({size = 'large'}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={size} color="blue" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
