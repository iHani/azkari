import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Share, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class SingleDuaa extends Component {

  state = {
    times: this.props.times || 1,
    isCompleted: false,
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
87
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

  render() {
    const { isCompleted, times } = this.state;
    const { text, preferredFontSize } = this.props;

    if (isCompleted) {
      return null
    }

    return (
      <View style={styles.singleDuaa}>
        <TouchableOpacity onPress={this.handleClickDuaa}>
          <Text style={[styles.duaaText, { fontSize: preferredFontSize }]}>{text}</Text>
        </TouchableOpacity>
        <View style={styles.duaaFooter}>
          <TouchableOpacity onPress={this.handleOnPressShare}>
            <Icon color="white" name="send" type="material-community" />
          </TouchableOpacity>
          {times > 0 &&
            <Text style={styles.footerTimes}>{this.getTimes(times)}</Text>
          }
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
    backgroundColor: '#3F51B5',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#7989e0',
  },
  footerTimes: {
    paddingTop: 3,
    color: 'white',
    fontWeight: 'bold',
  },
});

const mapState = (state) => (state);

export default connect(mapState)(SingleDuaa);
