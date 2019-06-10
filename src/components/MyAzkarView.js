import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import SingleDuaa from './SingleDuaa';
import FontsizeControllers from './FontsizeControllers';

const backgroundImage = require('../backgroundImage.png');

class MyAzkarView extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'أذكـــاري',
    headerTitleStyle: styles.colorWhite,
    headerBackTitleStyle: styles.colorWhite,
    headerStyle: styles.duaaListHeader,
    headerRight: <FontsizeControllers navigate={navigation.navigate} />
  });

  render() {
    const { myAzkarList } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <ScrollView style={{ paddingTop: 10 }}>
            {myAzkarList.map((duaa, i) =>
              <SingleDuaa key={i} {...duaa} {...this.props} />
            )}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', height: 80, marginTop: 50 }}>
              <Button
                title="تعديل الدعاء"
                style={{ padding: 6, width: 150, color: 'white' }}
                linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
              />
              <Button
                title="إضافة دعاء"
                style={{ padding: 6, width: 150, color: 'white' }}
                linearGradientProps={{ colors: ['#3F51B5', '#3F51B5'] }}
                onPress={() => navigate('AddAzkarView')}
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
    backgroundColor: '#fff',
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
  updateFontSize: (option) => dispatch(updateFontSize(option)),
});

export default connect(mapState, mapDispatch)(MyAzkarView);
