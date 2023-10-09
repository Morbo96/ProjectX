import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../screens/Auth/Auth'
import AuthCode from "../screens/Auth/AuthCode";
import {RootStackParamList} from "./types";
import PasswordConfirm from "../screens/Auth/PasswordConfirm";

const AuthStack = createNativeStackNavigator<RootStackParamList>()

function AuthStackNavigator():JSX.Element {
  return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen
                name="auth"
                component={ Auth }
            />

            <AuthStack.Screen
              name="code"
              component={ AuthCode }
            />

            <AuthStack.Screen
              name="passwordConfirm"
              component={ PasswordConfirm }
            />
      </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
