import React from 'react'
//import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home/Home'
import MainScreen from './screens/Main/Main'
import ProfileScreen from './screens/Profile/Profile'
import DriverScreen from './screens/Driver/Driver'
import RiderScreen from './screens/Rider/Rider'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="Rider" component={RiderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack