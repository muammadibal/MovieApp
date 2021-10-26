import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primaryColor} from '../../../utils';

export default function BottomTabNavigatorItems({
  accessibilityRole,
  accessibilityState,
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  isFocused,
  label,
}) {
  const Icon = () => {
    if (label === 'Home') {
      return (
        <MaterialCommunityIcons
          name={isFocused ? 'movie' : 'movie-open'}
          color={isFocused ? primaryColor : 'grey'}
          size={30}
        />
      );
    }
    if (label === 'Profile') {
      return (
        <FontAwesome5
          name="user-alt"
          color={isFocused ? primaryColor : 'grey'}
          size={25}
        />
      );
    }
    if (label === 'History Order') {
      return (
        <MaterialCommunityIcons
          name="ticket"
          color={isFocused ? primaryColor : 'grey'}
          size={30}
        />
      );
    }
  };
  return (
    <TouchableOpacity
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      isFocused={isFocused}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Icon />
        <Text style={{color: isFocused ? primaryColor : 'grey'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
