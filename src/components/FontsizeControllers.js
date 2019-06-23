import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { updateFontSize } from '../redux/actions';

class FontsizeControllers extends Component {

  handleUpdateFont = (option) => this.props.updateFontSize(option);

  render() {
    return (
      <View style={styles.fontsizeControllersBox}>
        <TouchableHighlight onPress={() => this.props.navigate('Home')}>
          <Icon color="white" underlayColor="#3F51B5" size={25} name="home" type="font-awesome" iconStyle={{ marginRight: 20 }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleUpdateFont('smaller')}>
          <Icon color="white" underlayColor="#3F51B5" size={25} name="search-minus" type="font-awesome" iconStyle={{ marginRight: 20 }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleUpdateFont('larger')}>
          <Icon color="white" underlayColor="#3F51B5" size={25} name="search-plus" type="font-awesome" iconStyle={{ marginRight: 10 }} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fontsizeControllersBox: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const mapState = (state) => (state);

const mapDispatch = (dispatch) => ({
  updateFontSize: (option) => dispatch(updateFontSize(option)),
});

export default connect(mapState, mapDispatch)(FontsizeControllers);

