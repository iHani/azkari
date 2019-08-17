import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import SingleDuaa from './SingleDuaa';
import FontsizeControllers from './FontsizeControllers';
import { updateZekr, removeZekr } from '../redux/actions';

const backgroundImage = require('../backgroundImage.png');

class MyAzkarView extends Component {

  state = {
    myAzkar: []
  }

  static navigationOptions = ({ navigation }) => ({
    title: "أذكـــــــــــــــاري",
    headerBackTitle: 'رجوع',
    headerTitleStyle: styles.colorWhite,
    headerBackTitleStyle: styles.colorWhite,
    headerStyle: styles.duaaListHeader,
    headerRight: <FontsizeControllers navigate={navigation.navigate} />
  });

  handleEditZekr(index, zekr) {
    this.setState(
      prevState => prevState.myAzkar.map((_, i) => i === index ? zekr : _),
      () => this.props.updateZekr(index, zekr)
    );
  }

  handleRemoveZekr(index) {
    this.setState(
      prevState => prevState.myAzkar.filter((_, i) => i !== index),
      () => this.props.removeZekr(index)
    );
  }

  componentDidMount() {
    //Here is the Trick
    const { navigation } = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      // console.log("didfocus", this.props.myAzkar);
      this.setState({ myAzkar: this.props.myAzkar });
    });
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate", this.props.myAzkar);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <ScrollView style={{ paddingTop: 10, marginBottom: 10 }}>
            {this.state.myAzkar.map((duaa, i) =>
              <SingleDuaa
                key={i}
                {...duaa}
                index={i}
                isMyAzkar={true}
                navigate={navigate}
                handleEditZekr={this.handleEditZekr.bind(this)}
                handleRemoveZekr={this.handleRemoveZekr.bind(this)}
              />
            )}
            <View style={{ flex: 1, marginHorizontal: 15, marginTop: 50 }}>
              <Button
                title="إضافة دعاء"
                style={{ padding: 6, width: 'auto', color: 'white' }}
                linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                onPress={() => this.props.navigation.navigate('AddAzkarView')}
              />
            </View>
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

const mapState = (state) => (state);

// const mapDispatch = (dispatch) => ({
//   updateZekr: (index, zekr) => dispatch(updateZekr(index, zekr)),
//   removeZekr: (index) => dispatch(removeZekr(index)),
// });


export default connect(mapState, {
  updateZekr,
  removeZekr
})(MyAzkarView);
