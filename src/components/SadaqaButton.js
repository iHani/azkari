import React, { Component } from 'react';
import { Clipboard, StyleSheet, Share, TextInput, View, TouchableHighlight } from 'react-native';
import { Button, Divider, Overlay, Text } from 'react-native-elements';
import { connect } from 'redux';

class SadaqaButton extends Component {

  state = {
    sadaqaModal: false, displayCopiedMessage: false, sadaqaFor: '',
    sadaqaFor: '',
    displayCopiedMessage: false
  }

  handleTasaddaq() {
    console.log('sadaqa To', this.state.sadaqaFor);
    Share.share({
      message: `هذا التطبيق صدقه جاريه عن ${this.state.sadaqaFor}`,
      url: 'https://play.google.com/store/apps/details?id=www.akfaa.co.azkari',
      title: 'Share with'
    });
  }

  // async _getContent() {
  //   var content = await Clipboard.getString();
  // }

  async handleCopyLink() {
    const message = `هذا التطبيق صدقه جاريه عن ${this.state.sadaqaFor} 
    https://play.google.com/store/apps/details?id=www.akfaa.co.azkari`
    Clipboard.setString(message);

    try {
      const content = await Clipboard.getString();
      this.setState({ displayCopiedMessage: true })
      // timer 5 sec to disable displayCopiedMessage
    } catch (error) {
      console.error(error);
    }
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
            onBackdropPress={() => this.setState({ sadaqaModal: false, displayCopiedMessage: false, sadaqaFor: '' })}
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
              {this.state.displayCopiedMessage &&
                <Text style={{ color: 'green', textAlign: 'center' }}>تم نسخ الرابط</Text>
              }
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  title="نسخ الرابط"
                  style={{ padding: 6, width: 110, color: 'white' }}
                  linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                  onPress={() => this.handleCopyLink()}
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
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  overlyStyle: {
    paddingTop: 5,
    borderColor: '#3F51B5',
    borderRadius: 10,
    borderWidth: 4,
    height: 300,

  }
});

export default SadaqaButton;
