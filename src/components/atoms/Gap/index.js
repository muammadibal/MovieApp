import React from 'react';
import {View} from 'react-native';

export default function Gap({height, width, flex}) {
  return <View style={{height, width, flex: flex ? 1 : 0}} />;
}
