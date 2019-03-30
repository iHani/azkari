import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, ListItem  } from 'react-native-elements';

const duaaList = [
  {title: "صــدقــة جــاريــة"},
  {title: "أذكـــــار الصبـــــاح"},
  {title: "أذكـــــار المســـــاء"},
  {title: "أذكـــــار المسجــــد"},
  {title: "أذكـــــار الصـــــلاة"},
  {title: "أذكـــــار النـــــوم"},
]

const backgroundImage = require('./backgroundImage.png');
export default class App extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Mobile Flashcards',
  });

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
          <View style={styles.headerMenu}>
            <Icon
              raised
              name='share'
              reverseColor='black'
              color='#2b387c'
              />
          </View>
          <ScrollView>
            {duaaList.map((duaa, i) => {
              return (
                <TouchableOpacity key={i}>
                  <Button
                    buttonStyle={styles.buttonStyle}
                    type="clear"
                    color='red'
                    titleStyle={styles.titleStyle}
                    title={duaa.title} />
                </TouchableOpacity>
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
    marginTop: 20,
  },
  headerMenu: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
    opacity: .8,
    marginBottom: 10,
  },
  buttonStyle: {
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 0,
    marginBottom: 10,
    padding: 22,
    opacity: .86,
    width: 350,
    backgroundColor: '#3F51B5',
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  containerStyle: {
    backgroundColor: 'red',
  }
});
