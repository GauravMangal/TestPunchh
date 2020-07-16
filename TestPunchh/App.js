//This is an example code for Navigator// 
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './src/views/Login';
import ITunesSongs from './src/views/ITunesSongs';
import FindAngle from './src/views/FindAngle';
const App = createStackNavigator({
  Login: { screen: Login ,headerShown: null }, 
    ITunesSongs: { screen: ITunesSongs ,headerShown: null }, 
    FindAngle: { screen: FindAngle ,headerShown: null }, 
    
  },
  {
    initialRouteName: 'Login',
  }
);
export default createAppContainer(App);