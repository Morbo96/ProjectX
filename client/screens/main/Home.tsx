import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Image} from 'react-native';
import ScreenView from '../../components/ScreenView';
import IconProgressBar from '../../components/IconProgressBar';
import {flex} from '../../styles/components';
import {homeLayout} from '../../styles/screens/homeStyles';

function Home() {
  return (
    <ScreenView style={homeLayout.mainView}>
      <View
        style={[
          flex.d_flex,
          flex.flex_row,
          flex.justify_space_between,
          flex.align_center,
          homeLayout.iconBar,
        ]}>
        <View
          style={[
            flex.d_flex,
            flex.flex_row,
            flex.justify_space_between,
            {width: '35%'},
          ]}>
          <IconProgressBar
            image={require('../../assets/icons/eat-icon.png')}
            backgroundColor={'#FF0000'}
          />
          <IconProgressBar
            image={require('../../assets/icons/energy-icon.png')}
            backgroundColor={'#F9E000'}
          />
        </View>
        <Image source={require('../../assets/icons/settings.png')} />
      </View>
      <Image
        style={{top: 100}}
        source={require('../../assets/images/home.png')}
      />
    </ScreenView>
  );
}
export default Home;
