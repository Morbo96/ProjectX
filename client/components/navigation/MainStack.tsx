import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../../screens/Auth'
import AuthCode from "../../screens/AuthCode";
import {RootStackParamList} from "../../interfaces";
import PasswordConfirm from "../../screens/PasswordConfirm";

const AuthStack = createNativeStackNavigator<RootStackParamList>()

function MainStack():JSX.Element {
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

export default MainStack
