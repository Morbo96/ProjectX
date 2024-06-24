import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ScreenView from '../../../components/ScreenView'
import { headers, margin, flex } from '../../../styles/components'
import { dailySections } from '../../../styles/screens/dailyStyles'
import TaskWithProgressBar from '../../../components/daily_layout/TaskWithProgressBar'
import CarouselCardsContainer from '../../../components/daily_layout/recommendation/CarouselCardsContainer'
import { TaskNavProps } from '../../../navigation/TaskStack'
import { useNavigation } from '@react-navigation/native'

function Daily() {
  const navigation =
    useNavigation<TaskNavProps<'dailySubtaskEditor'>['navigation']>()
  return (
    <ScreenView style={dailySections.mainView}>
      <View>
        <View>
          <Text style={[headers.header_3__bolder]}>Ежедневное</Text>
        </View>
        <View style={[dailySections.dailyTasksLayout, margin.mt_3]}>
          <TouchableOpacity onPress={() => console.log('Button is pressed!')}>
            <TaskWithProgressBar
              progressValue={60}
              image={require('../../../assets/icons/book.png')}
              style={[margin.mt_2, margin.mb_2, margin.ml_5, margin.mr_5]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('dailySubtaskEditor')}>
            <TaskWithProgressBar
              progressValue={70}
              image={require('../../../assets/emoji/pill.png')}
              style={[margin.mt_2, margin.mb_2, margin.ml_5, margin.mr_5]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 60,
          width: '86%',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 10,
          paddingRight: 80,
          paddingLeft: 20,
        }}>
        <Image
          source={require('../../../assets/icons/books.png')}
          style={{ height: 60, width: 60, paddingBottom: 15 }}
        />
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19 }}>
          База знаний
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('cards')}>
        <View
          style={{
            height: 50,
            width: '86%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            paddingRight: 15,
            paddingLeft: 20,
          }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19 }}>
            Посмотреть карточки
          </Text>
          <Image
            source={require('../../../assets/icons/cards.png')}
            style={{ height: 30, width: 30 }}
          />
        </View>
      </TouchableOpacity>

      <View style={dailySections.recommendationsSection}>
        <Text style={[headers.header_3__bolder, margin.mb_4]}>
          Рекомендации
        </Text>
        <View
          style={[
            flex.d_flex,
            flex.flex_column,
            flex.justify_center,
            flex.align_center,
          ]}>
          <CarouselCardsContainer />
        </View>
      </View>
    </ScreenView>
  )
}
export default Daily
