import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Daily from '../screens/main/daily/Daily'
import { Image, View } from 'react-native'
import { navBar } from '../styles/components/tabBar'
import BottomTabView from '../components/BottomTabView'
import { StackNavigationProp } from '@react-navigation/stack'

import Home from '../screens/main/Home'
import TaskStack from './TaskStack'
import Pomodoro from '../screens/main/Pomodoro'
import Shop from '../screens/main/Shop'

type TabParamList = {
  Home: undefined
  TaskStack: undefined
  Pomodoro: undefined
  Shop: undefined
}

export type TabNavProps<T extends keyof TabParamList> = {
  navigation: StackNavigationProp<TabParamList, T>
}

const Tab = createBottomTabNavigator<TabParamList>()

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: navBar.container,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image source={require('../assets/icons/home-active.png')} />
                ) : (
                  <Image source={require('../assets/icons/home.png')} />
                )}
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image source={require('../assets/icons/tasks-active.png')} />
                ) : (
                  <Image source={require('../assets/icons/tasks.png')} />
                )}
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Pomodoro"
        component={Pomodoro}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image
                    source={require('../assets/icons/pomodoro-active.png')}
                  />
                ) : (
                  <Image source={require('../assets/icons/pomodoro.png')} />
                )}
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image
                    source={require('../assets/icons/shoping-bag-active.png')}
                  />
                ) : (
                  <Image source={require('../assets/icons/shoping-bag.png')} />
                )}
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
