import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import Auth from '../screens/auth/Auth'
import AuthCode from '../screens/auth/AuthCode'
import Registration from '../screens/auth/Registration'
import { StackNavigationProp } from '@react-navigation/stack'

type RootParamList = {
  Auth: undefined
  AuthCode: undefined
  TabNavigator: undefined
  Registration: undefined
}

export type RootNavProps<T extends keyof RootParamList> = {
  navigation: StackNavigationProp<RootParamList, T>
}

const Stack = createNativeStackNavigator<RootParamList>()
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name={'Auth'} component={Auth} />
      <Stack.Screen name={'Registration'} component={Registration} />
      <Stack.Screen name={'AuthCode'} component={AuthCode} />
      <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default AuthStack
