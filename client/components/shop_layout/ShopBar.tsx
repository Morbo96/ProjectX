import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { API } from '../../store/reducers/ApiSlice'

const ShopBar = () => {
  const { data } = API.useGetUserBankQuery()
  return (
    <View style={styles.container}>
      <Image
        style={styles.shop_icon}
        source={require('../../assets/icons/shop-icon.png')}
      />
      <View style={styles.money}>
        <Text style={styles.text}>{data && data.money} $</Text>
        <Image source={require('../../assets/icons/money.png')} />
      </View>
    </View>
  )
}
export default ShopBar

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  shop_icon: {
    marginLeft: 20,
  },
  money: {
    flexDirection: 'row',
    columnGap: 10,
    marginRight: 20,
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
