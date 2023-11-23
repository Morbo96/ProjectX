import React, { useState } from 'react'
//import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { buttons, text, input, margin, headers } from '../../styles/components'
import { authSections, authExtensions } from '../../styles/screens/authStyles'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import ScreenView from '../../components/ScreenView'
import { RootNavProps } from '../../navigation/AuthStack'
import { IUserRegisterForm } from '../../models/IUser'
import { API } from '../../store/reducers/ApiSlice'
import { isFetchBaseQueryError } from '../../utils/helpers'
import { getData, storeData } from '../../utils/localStorage'

function Registration({ navigation }: RootNavProps<'Registration'>) {
  const [userForm, setUserForm] = useState<IUserRegisterForm>({
    email: '',
    login: '',
    passwordEncrypted: '',
    passwordConfirm: '',
  })

  const [signUpUser, { data, error, isLoading, isUninitialized }] =
    API.useSignUpUserMutation()

  const [notification, setNotification] = useState<string>('')

  const RegisterButtonHandler = () => {
    if (userForm.passwordEncrypted == userForm.passwordConfirm) {
      signUpUser({
        email: userForm.email,
        login: userForm.login,
        passwordEncrypted: userForm.passwordEncrypted,
      })
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
    } else {
      setNotification('Пароли должны совпадать')
    }
  }

  return (
    <ScreenView style={authSections.mainView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-200}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              authSections.content,
              authExtensions.authContentHeight__50,
              margin.mb_50,
            ]}>
            <Text>{notification}</Text>
            <Text style={headers.header_2}>Регистрация</Text>
            <View style={authSections.input}>
              <TextInput
                placeholder="Введите электронную почту"
                style={[input.inputField, margin.mb_3]}
                onChangeText={email => {
                  setUserForm({
                    email: email,
                    login: userForm.login,
                    passwordEncrypted: userForm.passwordEncrypted,
                    passwordConfirm: userForm.passwordConfirm,
                  })
                }}
                value={userForm.email}
              />
              <TextInput
                placeholder="Введите логин"
                style={[input.inputField, margin.mb_3]}
                onChangeText={login => {
                  setUserForm({
                    email: userForm.email,
                    login: login,
                    passwordEncrypted: userForm.passwordEncrypted,
                    passwordConfirm: userForm.passwordConfirm,
                  })
                }}
                value={userForm.login}
              />
              <TextInput
                placeholder="Введите пароль"
                secureTextEntry={true}
                style={[input.inputField, margin.mb_3]}
                onChangeText={password => {
                  setUserForm({
                    email: userForm.email,
                    login: userForm.login,
                    passwordEncrypted: password,
                    passwordConfirm: userForm.passwordConfirm,
                  })
                }}
                value={userForm.passwordEncrypted}
              />
              <TextInput
                placeholder="Подтвердите пароль"
                secureTextEntry={true}
                style={[input.inputField, margin.mb_3]}
                onChangeText={passConfirm => {
                  setUserForm({
                    email: userForm.email,
                    login: userForm.login,
                    passwordEncrypted: userForm.passwordEncrypted,
                    passwordConfirm: passConfirm,
                  })
                }}
                value={userForm.passwordConfirm}
              />
              <TouchableOpacity
                style={buttons.rounded}
                onPress={RegisterButtonHandler}>
                <Text style={text.buttonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenView>
  )
}
export default Registration
