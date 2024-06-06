import { Image, Text, TouchableOpacity, View } from 'react-native'
import { IFood } from '../../models/IFood'
import { StyleSheet } from 'react-native'
import { API } from '../../store/reducers/ApiSlice'
import { IFoodBank } from '../../models/IFoodBank'

interface Props {
  food: IFood
}

const FoodCard = ({ food }: Props) => {
  const { data } = API.useGetUserFoodQuery()
  const [buyFood] = API.useBuyFoodMutation()

  const getFoodQuantity = (foodBank: Array<IFoodBank>) => {
    const quantity = foodBank.find(item => item.foodId === food.id)?.quantity
    if (quantity !== undefined) return quantity
    else {
      return 0
    }
  }

  const imageDefinition = (food: IFood) => {
    if (food.name == 'sandwich') {
      return require('../../assets/icons/sandwich.png')
    }
    if (food.name == 'donut') {
      return require('../../assets/icons/donut.png')
    }
    if (food.name == 'cake') {
      return require('../../assets/icons/cake.png')
    }
    if (food.name == 'sweet madame') {
      return require('../../assets/icons/sweet-madame.png')
    }
    if (food.name == 'omelette rice') {
      return require('../../assets/icons/omelette.png')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.counter}> X {data && getFoodQuantity(data)}</Text>
        <View style={styles.separator}></View>
        <Image source={imageDefinition(food)} />
        <View style={styles.info_row}>
          <Text>{food.name}</Text>
          <View style={styles.energy}>
            <Text>{food.nourishmentValue}</Text>
            <Image source={require('../../assets/icons/energy.png')} />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          buyFood(food.id)
        }}>
        <Image source={require('../../assets/icons/dolor-sign.png')} />
        <Text>{food.cost}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default FoodCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: 10,
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    gap: 10,
  },
  info_row: {
    flexDirection: 'column',
    rowGap: 5,
  },
  energy: {
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    width: 60,
    justifyContent: 'space-between',
  },
  separator: {
    height: 'auto',
    width: 1,
    backgroundColor: 'grey',
  },
  counter: {
    alignSelf: 'center',
  },
})
