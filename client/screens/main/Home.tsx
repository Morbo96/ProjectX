import React from 'react'
import { View, Image, Text } from 'react-native'
import ScreenView from '../../components/ScreenView'
import IconProgressBar from '../../components/IconProgressBar'
import { flex } from '../../styles/components'
import { homeLayout } from '../../styles/screens/homeStyles'
import { API } from '../../store/reducers/ApiSlice'
import { IUserPet } from '../../models/IUserPet'

function Home() {
  const { data, error, isLoading, isUninitialized } =
    API.useGetUserPetByIdQuery(2, { pollingInterval: 60000 })

  const checkHunger = (userPet: IUserPet | undefined) => {
    if (userPet !== undefined) return userPet.hunger * 0.45
    else {
      return 0
    }
  }
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
            { width: '35%' },
          ]}>
          <IconProgressBar
            image={require('../../assets/icons/eat-icon.png')}
            backgroundColor={'white'}
            fill={checkHunger(data)}
          />
          <IconProgressBar
            image={require('../../assets/icons/energy-icon.png')}
            backgroundColor={'#F9E000'}
            fill={0}
          />
        </View>
        <Image source={require('../../assets/icons/settings.png')} />
      </View>
      <Image
        style={{ top: 100 }}
        source={require('../../assets/images/home.png')}
      />
    </ScreenView>
  )
}
export default Home
