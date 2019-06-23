import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

import AppHeader from './common/AppHeader';
import SadaqaButton from './SadaqaButton';

const backgroundImage = require('../backgroundImage.png');

class MainPage extends Component {

  state = {
    azkarList: this.props.azkarList
  }

  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: 'رجوع',
    header: AppHeader,
  });

  onPress = (category) => {
    const { navigate } = this.props.navigation;
    navigate('DuaaList', { category });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <SadaqaButton />
          {/* <MyAzkarButton navigate={this.props.navigation.navigate} /> */}
          <ScrollView>
            {this.state.azkarList.map(category => {
              const { id, title } = category;
              return (
                <TouchableHighlight key={id}>
                  <Button
                    onPress={() => this.onPress(category)}
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


const mapState = (state) => (state);

const mapDispatch = (dispatch) => ({
  updateFontSize: (option) => dispatch(updateFontSize(option)),
});

export default connect(mapState, mapDispatch)(MainPage);
