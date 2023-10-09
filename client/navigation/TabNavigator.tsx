import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {RootStackParamList} from "./types"
import Home from '../screens/Home';
import Daily from "../screens/Daily";
import {Image, View} from "react-native";
import {navBar} from "../styles/components/tabBar";

const Tab = createBottomTabNavigator<RootStackParamList>()

function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={
            () => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:navBar.container,
                tabBarShowLabel: false,
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
            <Tab.Screen name="daily" component={ Daily } options={{
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
        </Tab.Navigator>
    )
}

export default TabNavigator