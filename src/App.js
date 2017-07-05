import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Screens
import HomeScreen from './components/HomeScreen';
// import ProfileScreen from './components/ProfileScreen';

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    // Profile: {
    //   path: 'people/:username',
    //   screen: ProfileScreen
    // }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal': 'card'
  }
);

export const App = () => <AppNavigator />;