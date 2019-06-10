import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import MainPage from './src/components/MainPage';
import DuaaList from './src/components/DuaaList';
import MyAzkarView from './src/components/MyAzkarView';
import AddAzkarView from './src/components/AddAzkarView';
import reducers from './src/redux/reducers';

const MainNavigator = createStackNavigator({
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
});

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
