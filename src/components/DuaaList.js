import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import SingleDuaa from './SingleDuaa';
import FontsizeControllers from './FontsizeControllers';
import { editZekr, removeZekr } from '../redux/actions';

const backgroundImage = require('../backgroundImage.png');

class DuaaList extends Component {

  state = {
    id: this.props.navigation.getParam('category').id,
    azkar: this.props.navigation.getParam('category').azkar,
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('category').title.replace(/ـ/g, ''),
    headerTitleStyle: styles.colorWhite,
    headerBackTitleStyle: styles.colorWhite,
    headerStyle: styles.duaaListHeader,
    headerRight: <FontsizeControllers navigate={navigation.navigate} />
  });

  render() {
    const { id, azkar } = this.state;
    const isMyAzkar = id === 'myazkar' || false;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <ScrollView style={{ paddingTop: 10, marginBottom: 10 }}>
            {azkar.map((duaa, i) =>
              <SingleDuaa
                key={i}
                {...duaa}
                myDuaaIndex={i}
                isMyAzkar={isMyAzkar}
                navigate={navigate}
              />
            )}

            {isMyAzkar &&
              <View style={{ flex: 1, marginHorizontal: 15, marginTop: 50 }}>
                <Button
                  title="إضافة دعاء"
                  style={{ padding: 6, width: 'auto', color: 'white' }}
                  linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                  onPress={() => this.props.navigation.navigate('AddAzkarView')}
                />
              </View>
            }
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

const mapDispatch = (dispatch) => ({
  editZekr: (index, zekr) => dispatch(editZekr(index, zekr)),
  removeZekr: (index, zekr) => dispatch(removeZekr(index, zekr)),
});

export default connect(mapState, mapDispatch)(DuaaList);