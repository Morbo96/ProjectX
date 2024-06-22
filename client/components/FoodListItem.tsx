import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { IFoodBank } from '../models/IFoodBank'
import { API } from '../store/reducers/ApiSlice'
import { IFood } from '../models/IFood'

interface Props {
  foodBank: IFoodBank
}

export function FoodListItem({ foodBank }: Props) {
  const { data, error, isLoading, isUninitialized } = API.useGetAllFoodQuery()
  const [feedPet] = API.useFeedUserPetMutation()

  const getFoodById = (foods: IFoodBank) => {
    if (data !== undefined) {
      const food = data.find(item => item.id === foods.foodId)
      if (food !== undefined) return food
    }
  }

  const imageDefinition = (food: IFood | undefined) => {
    if (food !== undefined) {
      if (food.name == 'sandwich') {
        return require('../assets/icons/sandwich.png')
      }
      if (food.name == 'donut') {
        return require('../assets/icons/donut.png')
      }
      if (food.name == 'cake') {
        return require('../assets/icons/cake.png')
      }
      if (food.name == 'sweet madame') {
        return require('../assets/icons/sweet-madame.png')
      }
      if (food.name == 'omelette rice') {
        return require('../assets/icons/omelette.png')
      }
    }
  }
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          feedPet({ foodId: foodBank.foodId })
        }}>
        {getFoodById(foodBank) && (
          <Image source={imageDefinition(getFoodById(foodBank))} />
        )}
        <Text style={styles.quantity}>{foodBank.quantity}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 10,
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
    alignItems: 'center',
    width: 60,
  },
  quantity: {
    position: 'absolute',
    top: 38,
    right: -4,
    alignSelf: 'flex-end',
  },
})
