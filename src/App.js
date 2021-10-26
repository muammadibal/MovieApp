import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
