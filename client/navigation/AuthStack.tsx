import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Auth from '../screens/auth/Auth';
import AuthCode from '../screens/auth/AuthCode';
import PasswordConfirm from '../screens/auth/PasswordConfirm';
import {StackNavigationProp} from '@react-navigation/stack';

type RootParamList = {
  Auth: undefined;
  AuthCode: undefined;
  PasswordConfirm: undefined;
  TabNavigator: undefined;
};

export type RootNavProps<T extends keyof RootParamList> = {
  navigation: StackNavigationProp<RootParamList, T>;
};

const Stack = createNativeStackNavigator<RootParamList>();
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
      <Stack.Screen name={'AuthCode'} component={AuthCode} />
      <Stack.Screen name={'PasswordConfirm'} component={PasswordConfirm} />
      <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default AuthStack;
