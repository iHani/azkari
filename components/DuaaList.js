import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';

import SingleDuaa from './SingleDuaa';

const backgroundImage = require('../backgroundImage.png');

export default class App extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category.title,
    headerBackTitle: "رجوع"
  });

  render() {
    const {title, duaaList} = this.props.navigation.state.params.category;
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
          <ScrollView style={{paddingTop:10, marginBottom: 10}}>
            {duaaList.map((duaa, i) => <SingleDuaa key={i} {...duaa} />)}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
