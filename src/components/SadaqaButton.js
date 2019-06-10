import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableHighlight } from 'react-native';
import { Button, Divider, Overlay, Text } from 'react-native-elements';

class SadaqaButton extends Component {

  state = {
    sadaqaModal: false,
    sadaqaFor: '',
  }

  handleTasaddaq() {
    console.log('sadaqa To', this.state.sadaqaFor);
  }

  render() {
    return (
      <View>
        <TouchableHighlight>
          <Button
            onPress={() => this.setState({ sadaqaModal: true })}
            buttonStyle={styles.buttonStyle}
            type="clear"
            titleStyle={styles.titleStyle}
            title="صـدقـة جــاريــة" />
        </TouchableHighlight>

        {this.state.sadaqaModal && (
          <Overlay
            isVisible={this.state.sadaqaModal}
            onBackdropPress={() => this.setState({ sadaqaModal: false })}
            overlayStyle={styles.overlyStyle}
            borderRadius={8}
          >
            <>
              <Text h4 style={{ textAlign: 'center', paddingVertical: 15 }}>تصدق بهذا البرنامج</Text>
              <Divider />
              <Text style={{ textAlign: 'right', paddingVertical: 15, fontSize: 18 }}>هذا البرنامج صدقة جارية عن</Text>
              <TextInput
                placeholder='...'
                style={styles.inputStyle}
                value={this.state.sadaqaFor}
                onChangeText={(text) => this.setState({ sadaqaFor: text })}

              />
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  title="نسخ الرابط"
                  style={{ padding: 6, width: 110, color: 'white' }}
                  linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                  onPress={() => this.handleTasaddaq()}
                />
                <Button
                  title="تصدق"
                  style={{ padding: 6, width: 110, color: 'white' }}
                  linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                  onPress={() => this.handleTasaddaq()}
                />
              </View>
            </>
          </Overlay>
        )}
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
  inputStyle: {
    borderColor: 'lightgrey',
    borderRadius: 8,
    borderWidth: 3,
    height: 50,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  overlyStyle: {
    paddingTop: 5,
    borderColor: '#3F51B5',
    borderRadius: 10,
    borderWidth: 4,
    height: 270,

  }
});

export default SadaqaButton;
