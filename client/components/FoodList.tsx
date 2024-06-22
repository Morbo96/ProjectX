import { View } from 'react-native'
import { API } from '../store/reducers/ApiSlice'
import { FoodListItem } from './FoodListItem'

export function FoodList() {
  const { data, error, isLoading, isUninitialized } = API.useGetUserFoodQuery()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        columnGap: 4,
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 100,
      }}>
      {data &&
        data.map(item => <FoodListItem key={item.foodId} foodBank={item} />)}
    </View>
  )
}
