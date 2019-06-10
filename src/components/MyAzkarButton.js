import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

class MyAzkarButton extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight>
          <Button
            onPress={() => this.props.navigate('MyAzkarView')}
            buttonStyle={styles.buttonStyle}
            type="clear"
            titleStyle={styles.titleStyle}
            title="أذكـــــــــــــاري" />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default MyAzkarButton;
