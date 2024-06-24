import { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { buttons, flex, text } from '../../../styles/components'

function Cards() {
  const [answerVisible, setAnswerVisible] = useState<Boolean>(false)
  return (
    <View style={style.screen}>
      <View style={style.card}>
        <View style={style.navigationBar}>
          <Text>Вопрос 1</Text>
          <Image
            style={{ transform: [{ rotate: '90deg' }], height: 32, width: 8 }}
            source={require('../../../assets/icons/expand-more.png')}
          />
        </View>

        <View style={style.question}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            Что такое Paw Plan?
          </Text>
          <Image
            style={style.emoji}
            source={require('../../../assets/emoji/smile.png')}
          />
        </View>
        <View style={style.line}></View>
        {answerVisible && (
          <Text style={{ padding: 20, fontSize: 18 }}>
            Платформа для обучения, объединяющая инструменты геймификации,
            тайм-менеджмента и ИИ для эффективного изучения нового материала
          </Text>
        )}

        <View
          style={[
            style.buttonRow,
            { position: 'absolute', bottom: 20, left: 15 },
          ]}>
          <TouchableOpacity style={style.leftButton}>
            <Text style={text.buttonText}> Помню</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAnswerVisible(true)
            }}
            style={style.rightButton}>
            <Text style={text.buttonText}> Не помню</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    marginTop: 50,
    height: '90%',
    width: '86%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  emoji: {
    width: 40,
    height: 40,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
  },
  line: {
    backgroundColor: '#B8E1F4',
    height: 2,
    width: '100%',
    marginTop: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  leftButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#5648FF',
    width: '45%',
    height: 40,
  },
  rightButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#C3ECFF',
    width: '45%',
    height: 40,
  },
})

export default Cards
