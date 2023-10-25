import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../screens/auth/Auth'
import AuthCode from "../screens/auth/AuthCode";
import {RootStackParamList} from "./types";
import PasswordConfirm from "../screens/auth/PasswordConfirm";

const Stack = createNativeStackNavigator<RootStackParamList>()

function AuthStack():JSX.Element {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="auth"
                component={ Auth }
            />

            <Stack.Screen
              name="code"
              component={ AuthCode }
            />

            <Stack.Screen
              name="passwordConfirm"
              component={ PasswordConfirm }
            />
      </Stack.Navigator>
  )
}

export default AuthStack
