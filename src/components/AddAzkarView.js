import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Button, Text } from 'react-native-elements'

import { addNewZekr } from '../redux/actions';

const backgroundImage = require('../backgroundImage.png');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView>
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

class AddAzkarView extends Component {

  state = {
    text: '',
    times: 1
  }

  static navigationOptions = () => ({
    title: 'إضــافــة دعــاء',
    headerTitleStyle: styles.colorWhite,
    headerBackTitleStyle: styles.colorWhite,
    headerStyle: styles.duaaListHeader,
  });

  handleSaveZekr() {
    const { text, times } = this.state;

    const newZekr = { text, times };
    console.log("hasnavigation?", Object.keys(this.props.navigation.goBack()));
    this.props.addNewZekr(newZekr);
    this.props.navigation.navigate('MyAzkarView');
    // this.props.navigation.goBack()

    // TODO save it outsie redux (localstorage or sqllight)

  }

  englishinize = (number) =>
    number.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => parseInt((d.charCodeAt(0) - 1632)));

  render() {
    return (
      <DismissKeyboard style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <Text h4 style={{ padding: 15, textAlign: 'right', color: '#3F51B5' }}>الدعاء</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TextInput
              keyboardType='number-pad'
              style={styles.timesInput}
              onChangeText={(times) => this.setState({ times: this.englishinize(times) })}
              value={this.state.times.toString()}
            />
            <Text h4 style={{ paddingHorizontal: 15, marginTop: 25, textAlign: 'right', color: '#3F51B5' }}>مرات التكرار</Text>
          </View>

          <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Button
              titleStyle={styles.addDuaaButton}
              title="حــفــظ"
              linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
              onPress={() => this.handleSaveZekr()}
            />
          </View>

        </ImageBackground>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  duaaListHeader: {
    backgroundColor: '#3F51B5',
  },
  container: {
    flex: 1,
  },
  controlBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#3F51B5',
    padding: 12,
  },
  textarea: {
    borderColor: 'lightgray',
    backgroundColor: 'white',
    height: 200,
    borderWidth: 3,
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    textAlign: 'right'
  },
  timesInput: {
    borderColor: 'lightgray',
    backgroundColor: 'white',
    height: 60,
    minWidth: 80,
    borderWidth: 3,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  colorWhite: {
    color: 'white',
  },
  addDuaaButton: {
    color: 'white',
  },

});

const mapState = (state) => (state);

// const mapDispatch = (dispatch) => ({
//   updateFontSize: (option) => dispatch(updateFontSize(option)),
//   addNewZekr: (zekr) => dispatch(addNewZekr(zekr)),
// });

export default connect(mapState, { addNewZekr })(AddAzkarView);
