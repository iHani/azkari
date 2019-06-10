import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import SingleDuaa from './SingleDuaa';
import FontsizeControllers from './FontsizeControllers';

const backgroundImage = require('../backgroundImage.png');

export default class DuaaList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.category.title.replace(/ـ/g, ''),
    headerTitleStyle: styles.colorWhite,
    headerBackTitleStyle: styles.colorWhite,
    headerStyle: styles.duaaListHeader,
    headerRight: <FontsizeControllers navigate={navigation.navigate}/>
  });

  render() {
    const { azkar } = this.props.navigation.state.params.category;

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <ScrollView style={{ paddingTop: 10, marginBottom: 10 }}>
            {azkar.map((duaa, i) =>
              <SingleDuaa key={i} {...duaa} {...this.props} />
            )}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  duaaListHeader: {
    backgroundColor: '#3F51B5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  controlBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#3F51B5',
    padding: 12,
  },
  controlIcon: {
    paddingLeft: 5,
  },
  colorWhite: {
    color: 'white',
  }

});
