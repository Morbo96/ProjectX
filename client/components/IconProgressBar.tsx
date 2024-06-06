import React from 'react'
import { ImageSourcePropType, View, Image } from 'react-native'
import { homeLayout } from '../styles/screens/homeStyles'
import { StyleSheet } from 'react-native'

type Props = {
  image: ImageSourcePropType
  backgroundColor: string
  fill: number
}

const IconProgressBar = ({ image, backgroundColor, fill }: Props) => {
  return (
    <View
      style={[
        { width: 45, height: 45, backgroundColor: backgroundColor },
        homeLayout.progressBarIcon,
      ]}>
      <View style={[styles.fill, { height: fill }]}></View>
      <Image style={{ maxWidth: 30, maxHeight: 30 }} source={image} />
    </View>
  )
}
export default IconProgressBar

const styles = StyleSheet.create({
  fill: {
    backgroundColor: 'red',
    borderRadius: 9,
    width: 45,
    position: 'absolute',
    bottom: 0,
  },
})
