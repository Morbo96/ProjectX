import React, { useState } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Button,
  TouchableWithoutFeedback,
} from 'react-native'
import ScreenView from '../../components/ScreenView'
import IconProgressBar from '../../components/IconProgressBar'
import { flex } from '../../styles/components'
import { homeLayout } from '../../styles/screens/homeStyles'
import { API } from '../../store/reducers/ApiSlice'
import { IUserPet } from '../../models/IUserPet'
import { StyleProp } from 'react-native'
import { FoodList } from '../../components/FoodList'

function Home() {
  const { data, error, isLoading, isUninitialized } =
    API.useGetUserPetByIdQuery(2, { pollingInterval: 60000 })

  const checkHunger = (userPet: IUserPet | undefined) => {
    if (userPet !== undefined) return userPet.hunger * 0.45
    else {
      return 0
    }
  }

  interface IFoodMenuState {
    openFoodMenu: boolean
    foodMenuWidth: StyleProp<ViewStyle>
    drawContent: boolean
    disableFoodMenuButton: boolean
  }

  const [foodMenu, setFoodMenu] = useState<IFoodMenuState>({
    openFoodMenu: true,
    foodMenuWidth: {
      width: 90,
    },
    drawContent: false,
    disableFoodMenuButton: false,
  })

  return (
    <ScreenView style={homeLayout.mainView}>
      <TouchableWithoutFeedback
        onPress={() => {
          setFoodMenu({
            openFoodMenu: true,
            foodMenuWidth: { width: 90 },
            drawContent: false,
            disableFoodMenuButton: false,
          })
        }}>
        <View>
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

          <View style={[styles.foodButton, foodMenu.foodMenuWidth]}>
            <TouchableOpacity
              disabled={foodMenu.disableFoodMenuButton}
              style={styles.foodButtonContainer}
              onPress={() => {
                setFoodMenu({
                  openFoodMenu: false,
                  foodMenuWidth: { width: '90%' },
                  drawContent: true,
                  disableFoodMenuButton: true,
                })
              }}>
              {foodMenu.openFoodMenu && (
                <View>
                  <Image source={require('../../assets/icons/food-icon.png')} />
                </View>
              )}
              {foodMenu.drawContent && <FoodList />}
            </TouchableOpacity>
          </View>

          <Image source={require('../../assets/images/home.png')} />
        </View>
      </TouchableWithoutFeedback>
    </ScreenView>
  )
}
export default Home

const styles = StyleSheet.create({
  foodButton: {
    height: 90,
    backgroundColor: '#FFFFFF4F',
    borderRadius: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodButtonContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
})
