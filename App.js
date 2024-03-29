import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { YellowBox } from 'react-native';

import MainPage from './src/components/MainPage';
import DuaaList from './src/components/DuaaList';
import MyAzkarView from './src/components/MyAzkarView';
import AddAzkarView from './src/components/AddAzkarView';
import EditDuaa from './src/components/EditDuaa';
import reducers from './src/redux/reducers';

YellowBox.ignoreWarnings(['Remote debugger']);

const RouteConfigs = {
  Home: {
    screen: MainPage,
  },
  DuaaList: {
    screen: DuaaList,
  },
  MyAzkarView: {
    screen: MyAzkarView,
  },
  AddAzkarView: {
    screen: AddAzkarView,
  },
  EditDuaa: {
    screen: EditDuaa,
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  mode: 'card'
}

const MainNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

let Navigation = createAppContainer(MainNavigator);

const store = createStore(reducers, devToolsEnhancer());

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
