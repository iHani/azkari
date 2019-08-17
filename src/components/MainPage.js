import React, { Component, memo } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

import AppHeader from './common/AppHeader';
import SadaqaButton from './SadaqaButton';
// import allAzkarList from '../data/allAzkarJSON';
import allAzkarList from '../data/allAzkar';

const backgroundImage = require('../backgroundImage.png');

class MainPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: 'رجوع',
    header: AppHeader,
  });

  onPress = (categoryId) => {
    const { navigate } = this.props.navigation;
    const category = allAzkarList.find(({ id }) => id === categoryId);
    navigate('DuaaList', { category });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <SadaqaButton />
          <ScrollView>
            <Button
              onPress={() => this.props.navigation.navigate('MyAzkarView')}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              title="أذكـــــــــــــــاري"
            />
            {allAzkarList.map(category => {
              const { id, title } = category;
              return (
                <TouchableHighlight key={id}>
                  <Button
                    onPress={() => this.onPress(id)}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    title={title}
                  />
                </TouchableHighlight>
              )
            })}
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
  headerMenu: {
    backgroundColor: '#3F51B5',
    opacity: .8,
    marginBottom: 10,
    height: 75,
  },
  buttonStyle: {
    borderRadius: 5,
    padding: 20,
    margin: 10,
    backgroundColor: '#3F51B5',
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    shadowOffset: { width: .2, height: .1 },
    shadowColor: 'black',
    shadowOpacity: 5,
  },
});

export default MainPage;
