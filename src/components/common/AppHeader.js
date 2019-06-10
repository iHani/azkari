import React from 'react';
import { Share } from 'react-native';
import { Header, Icon } from 'react-native-elements';

function AppHeader() {

  const ShareIcon = () => <Icon
    color="white"
    size={30}
    name="share"
    underlayColor="#3F51B5"
    onPress={() => handleClickShare()}
  />

  function handleClickShare() {
    console.log("click share");
    Share.share({
      message: 'Azkari App تطبيق أذكاري',
      url: 'https://play.google.com/store/apps/details?id=www.akfaa.co.azkari',
      title: 'Share with'
    });
  }

  return (
    <Header
      containerStyle={{ backgroundColor: '#3F51B5' }}
      rightComponent={<ShareIcon />}
      leftComponent={{ text: 'Azkari', style: { color: 'white', fontSize: 22 } }}
    />
  )
}

export default AppHeader;
