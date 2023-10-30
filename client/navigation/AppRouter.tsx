import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import AuthStack from './AuthStack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {RootStackParamList} from './types';
// import TabNavigator from './TabNavigator';
// import Auth from '../screens/auth/Auth';
// import AuthCode from '../screens/auth/AuthCode';
// import PasswordConfirm from '../screens/auth/PasswordConfirm';
// import { StackNavigationProp } from '@react-navigation/stack';
import AuthStack from './AuthStack';

// type RootParamList = {
//   Auth: undefined;
//   AuthCode: undefined;
//   PasswordConfirm: undefined;
// 	Home: undefined;
// };

// export type RootNavProps<T extends keyof RootParamList> = {
//   navigation: StackNavigationProp<RootParamList, T>;
// };

//const Stack = createNativeStackNavigator<RootParamList>();

function AppRouter() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default AppRouter;
