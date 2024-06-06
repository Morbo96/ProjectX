import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import ScreenView from '../../components/ScreenView'
import { API } from '../../store/reducers/ApiSlice'
import FoodCard from '../../components/shop_layout/FoodCard'
import ShopBar from '../../components/shop_layout/ShopBar'

function Shop() {
  const { data, error, isLoading, isUninitialized } = API.useGetAllFoodQuery()

  return (
    <View style={style.screen}>
      <ShopBar />
      <View style={style.list_container}>
        {data && data.map(item => <FoodCard key={item.id} food={item} />)}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  screen: {
    backgroundColor: '#B8E1F4',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  list_container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginBottom: 25,
  },
})
export default Shop
