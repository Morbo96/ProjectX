import React from 'react'
//import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { buttons, text, input, margin, headers } from '../../styles/components'
import { authSections, authExtensions } from '../../styles/screens/authStyles'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import ScreenView from '../../components/ScreenView'
import { RootNavProps } from '../../navigation/AuthStack'

function AuthCode({ navigation }: RootNavProps<'AuthCode'>) {
  return (
    <ScreenView style={authSections.mainView}>
      <View
        style={[authSections.content, authExtensions.authContentHeight__70]}>
        <Text style={headers.header_4}>
          Введите код, полученный в электронном письме
        </Text>
        <TextInput
          placeholder="_ _ _  _ _ _"
          style={[input.inputField__alignCenter, margin.mb_3]}
        />
        <View style={authSections.textFooter}>
          <Text style={text.simpleText}>Не приходит письмо?</Text>
          <Text style={text.link}>Отправить код повторно</Text>
        </View>
        <TouchableOpacity style={buttons.rounded}>
          <Text
            style={text.buttonText}
            onPress={() => {
              navigation.navigate('TabNavigator')
            }}>
            Подтвердить
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}
export default AuthCode
