import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {RootStackParamList} from "./types"
import Home from '../screens/main/Home';
import Daily from "../screens/main/daily/Daily";
import {Image, View} from "react-native";
import {navBar} from "../styles/components/tabBar";
import Pomodoro from "../screens/main/Pomodoro";
import BottomTabView from "../components/BottomTabView";
import TaskStack from "./TaskStack";

const Tab = createBottomTabNavigator<RootStackParamList>()

function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={
            () => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:navBar.container,
                tabBarShowLabel: false,
                headerShown:false
            })}
        >
            <Tab.Screen name="home" component={ Home } options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            {focused?
                                <Image source={require("../assets/icons/home-active.png")}/>:
                                <Image source={require("../assets/icons/home.png")}/>
                            }
                        </View>
                    );
                },
            }}/>
            <Tab.Screen name="taskStack" component={ TaskStack } options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            {focused?
                                <Image source={require("../assets/icons/tasks-active.png")}/>:
                                <Image source={require("../assets/icons/tasks.png")}/>
                            }
                        </View>
                    );
                },
            }}/>
            <Tab.Screen name="pomodoro" component={ Pomodoro } options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            {focused?
                                <Image source={require("../assets/icons/pomodoro-active.png")}/>:
                                <Image source={require("../assets/icons/pomodoro.png")}/>
                            }
                        </View>
                    );
                },
            }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator