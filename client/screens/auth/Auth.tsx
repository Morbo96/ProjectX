import React, { useState } from 'react'
import { IUserLoginForm, IUserSucsess } from '../../models/IUser'
import { buttons, text, input, margin } from '../../styles/components'
import { authSections, authExtensions } from '../../styles/screens/authStyles'
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
  Keyboard,
} from 'react-native'
import ScreenView from '../../components/ScreenView'
import { RootNavProps } from '../../navigation/AuthStack'
import { countSlice } from '../../store/reducers/CountSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { API } from '../../store/reducers/ApiSlice'
import { storeData, getData } from '../../utils/localStorage'
import { isFetchBaseQueryError } from '../../utils/helpers'

function Auth({ navigation }: RootNavProps<'Auth'>) {
  // const { count } = useAppSelector(state => state.countReducer)
  // const { increment, decrement } = countSlice.actions
  // const dispatch = useAppDispatch()
  // const { data, error } = API.useGetUserByIdQuery('1')

  const [signInUser, { data, error, isLoading, isUninitialized }] =
    API.useSignInUserMutation()

  const [userForm, setUserForm] = useState<IUserLoginForm>({
    login: '',
    passwordEncrypted: '',
  })

  const [notification, setNotification] = useState<string>('')

  const clickLoginButtonHandler = () => {
    signInUser(userForm)
      .unwrap()
      .then(async payload => {
        if (payload.accessToken) {
          await storeData('token', payload.accessToken)
          console.log(await getData('token'))
          navigation.navigate('TabNavigator')
        }
      })
      .catch(error => {
        if (isFetchBaseQueryError(error)) {
          // you can access all properties of `FetchBaseQueryError` here
          const errMsg =
            'error' in error ? error.error : JSON.stringify(error.data)
          setNotification(errMsg)
        }
      })
  }

  const clickRegisterLinkHandler = () => {
    navigation.navigate('Registration')
  }

  return (
    <ScreenView style={authSections.mainView}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={authSections.imageView}>
          <Image source={require('../../assets/images/auth.png')} />
        </View>
      </TouchableWithoutFeedback>

      <View style={[authSections.content, margin.mt_50]}>
        <View style={authSections.input}>
          <TextInput
            placeholder="Логин"
            style={[input.inputField, margin.mb_3]}
            onChangeText={login => {
              setUserForm({
                login: login,
                passwordEncrypted: userForm.passwordEncrypted,
              })
            }}
            value={userForm.login}
          />

          <TextInput
            placeholder="Пароль"
            secureTextEntry={true}
            style={[input.inputField, margin.mb_3]}
            onChangeText={password => {
              setUserForm({
                login: userForm.login,
                passwordEncrypted: password,
              })
            }}
            value={userForm.passwordEncrypted}
          />

          <Text style={margin.mb_3}>{notification}</Text>

          <TouchableOpacity
            style={buttons.rounded}
            onPress={clickLoginButtonHandler}>
            <Text style={text.buttonText}>Вход</Text>
          </TouchableOpacity>
        </View>

        <View style={authSections.signButtons}>
          <TouchableOpacity style={[buttons.signWithGoogle, margin.mb_3]}>
            <Text style={text.signGoogle}>Продолжить с Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={buttons.signWithApple}>
            <Text style={text.signApple}>Продолжить с Apple</Text>
          </TouchableOpacity>
        </View>

        <View style={authSections.textFooter}>
          <Text style={text.simpleText}>Еще нет аккаунта?</Text>
          <TouchableOpacity onPress={clickRegisterLinkHandler}>
            <Text style={text.link}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenView>
  )
}
export default Auth
