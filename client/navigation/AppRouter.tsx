import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStackNavigator  from './AuthStack'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import TabNavigator from "./TabNavigator";
import Auth from "../screens/Auth/Auth";
import AuthCode from "../screens/Auth/AuthCode";
import PasswordConfirm from "../screens/Auth/PasswordConfirm";

const Stack = createNativeStackNavigator<RootStackParamList>()

function AppRouter():JSX.Element {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,  headerTransparent: true, headerShadowVisible: false}}>
            <Stack.Group>
                <Stack.Screen name={"auth"} component={Auth}/>
                <Stack.Screen name={"code"} component={AuthCode}/>
                <Stack.Screen name={"passwordConfirm"} component={PasswordConfirm}/>
            </Stack.Group>
            <Stack.Screen name={"home"} component={TabNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
