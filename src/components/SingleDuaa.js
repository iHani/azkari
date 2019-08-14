import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Share, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { editZekr, removeDuaa } from '../redux/actions';

class SingleDuaa extends Component {

  state = {
    index: this.props.index,
    text: this.props.text,
    times: this.props.times,
    isCompleted: false,
  }

  updateDuaa = (duaa) => {
    console.log("duaa", duaa);

    this.setState({ ...duaa });
  }

  handleRemoveDuaa = (index) => {
    this.props.removeDuaa(index);
  }

  handleClickDuaa = () => {
    if (!this.state.isCompleted) {
      this.setState(prevState => ({
        times: prevState.times >= 1 ? prevState.times - 1 : 0,
      }),
        () => this.setState(prevState => ({
          isCompleted: prevState.times === 0,
        }))
      );
    }
  }

  handleOnPressShare = () =>
    Share.share({
      message: this.props.text,
      title: 'Share with'
    });

  getTimes(number = 1) {
    if (number === 1) {
      return `مره واحده`;
    } else if (number === 2) {
      return `مرتين`;
    } else if (number < 11) {
      return `${number} مرات`;
    } else {
      return `${number} مره`;
    }
  }

  handleEditDuaa = () => {

    const { index, text, times } = this.props;
    this.props.navigate('EditDuaa', {
      index,
      text,
      times,
      updateDuaa: this.updateDuaa,
      removeDuaa: this.handleRemoveDuaa
    });
    return
  }

  render() {
    const { isCompleted, text, times } = this.state;
    const { preferredFontSize, isMyAzkar } = this.props;

    if (isCompleted) {
      return null;
    }

    return (
      <View style={styles.singleDuaa}>
        <TouchableOpacity onPress={this.handleClickDuaa}>
          <Text style={[styles.duaaText, { fontSize: preferredFontSize }]}>{text}</Text>
        </TouchableOpacity>
        <View style={styles.duaaFooter}>
          <TouchableOpacity onPress={this.handleOnPressShare} style={styles.duaaFooterIcon}>
            <Icon color="white" name="send" type="material-community" />
          </TouchableOpacity>
          {isMyAzkar &&
            <TouchableOpacity onPress={this.handleEditDuaa.bind(this)} style={styles.duaaFooterIcon}>
              <Icon color="white" name="pencil" type="material-community" />
            </TouchableOpacity>
          }
          <View style={[styles.duaaFooterIcon, { flex: 1, alignItems: 'flex-end' }]}>
            {times > 0 &&
              <Text style={styles.footerTimes}>{this.getTimes(times)}</Text>
            }
          </View>
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
    marginHorizontal: 10,
    marginBottom: 3,
  },
  duaaText: {
    writingDirection: 'rtl',
    color: '#3F51B5',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 22,
    lineHeight: 40,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .5,
    shadowColor: 'white',
  },
  duaaFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#3F51B5',
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#7989e0',
  },
  duaaFooterIcon: {
    paddingHorizontal: 5,
  },
  footerTimes: {
    paddingTop: 3,
    color: 'white',
    fontWeight: 'bold',
  },
});

const mapState = (state) => (state);


const mapDispatch = (dispatch) => ({
  // editZekr: (index, zekr) => dispatch(editZekr(index, zekr)),
  removeDuaa: (index) => dispatch(removeDuaa(index)),
});


export default connect(mapState, mapDispatch)(SingleDuaa);
