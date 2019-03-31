import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainPage from './components/MainPage';
import DuaaList from './components/DuaaList';

const MainNavigator = createStackNavigator({
  Home: {
    screen: MainPage,
  },
  DuaaList: {
    screen: DuaaList,
  },
});

const App = createAppContainer(MainNavigator);

export default App;
