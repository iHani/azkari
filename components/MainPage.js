import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header } from 'react-native-elements';
import duaaCategoryList from '../duaaCategoryList';

const backgroundImage = require('../backgroundImage.png');

export default class App extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: "رجوع"
  });

  onPress = (category) => {
    const { navigate } = this.props.navigation;
    navigate('DuaaList', {category});
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>

          <Header
            containerStyle={{ backgroundColor: '#3F51B5' }}
            leftComponent={{ icon: 'share', color: '#fff', size: 30 }}
            rightComponent={{ text: 'أذكــاري', style: { color: 'white', fontSize: 22 } }}
            />

          <ScrollView>
            {duaaCategoryList.map(category => {
              const {id, title} = category;
              return (
                <TouchableOpacity key={id}>
                  <Button
                    onPress={()=> this.onPress(category)}
                    buttonStyle={styles.buttonStyle}
                    type="clear"
                    color='red'
                    titleStyle={styles.titleStyle}
                    title={title} />
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
  },
  headerMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#3F51B5',
    opacity: .8,
    marginBottom: 10,
    height: 75,
  },
  buttonStyle: {
    borderRadius: 5,
    padding:20,
    margin:10,
    opacity: .86,
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
