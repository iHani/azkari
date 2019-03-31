import React, { Component } from 'react';
import { Vibration, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const backgroundImage = require('../backgroundImage.png');

export default class App extends Component {

  state = {
    text: this.props.text,
    times: this.props.times,
    isCompleted: false,
  }

  handleClickDuaa = () => {
    this.setState(prevState => ({
      times: prevState.times > 1 ? prevState.times - 1 : 0,
      isCompleted: prevState.times <= 1,
    }),
    () => !this.state.isCompleted && Vibration.vibrate(75));
  }

  handleOnPressShare = () => {
    console.log("share this duaa", this.props.text);
  }
  getTimes(number = 1) {
    if (!number) {
      return ``;
    } else if (number === 1) {
      return `مره واحده`;
    } else if (number === 2) {
      return `مرتين`;
    } else if (number < 11) {
      return `${number} مرات`;
    } else {
      return `${number} مره`;
    }
  }

  render() {
    console.log("single dua rendered");
    const {isCompleted, text, times} = this.state;

    return (
      <View style={styles.singleDuaa}>
        <TouchableOpacity onPress={this.handleClickDuaa}>
          <View>
            <Text style={styles.duaaText}>{text}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.duaaFooter}>
          {times > 0 &&
            <Text style={styles.footerTimes}>{this.getTimes(times)}</Text>
          }
          {isCompleted &&
            <Icon style={styles.footerIconCheck} color="#3aed93" name="check-square" type="font-awesome" />
          }
          <TouchableOpacity onPress={this.handleOnPressShare}>
            <Icon style={styles.footerIconSend} color="white" name="paper-plane" type="font-awesome" />
          </TouchableOpacity>
        </View>
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
  singleDuaa: {
    backgroundColor: 'rgba(0, 0, 0, .17)',
    marginRight: 10,
    marginLeft: 10,
  },
  duaaText: {
    writingDirection: 'rtl',
    color: '#3F51B5',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 22,
    lineHeight: 40,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'white',
  },
  duaaFooter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3F51B5',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#5f70c8',
  },
  footerTimes: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerIconCheck: {
    backgroundColor: 'red',
  },
  footerIconSend: {
    color:'white',
  },
});
