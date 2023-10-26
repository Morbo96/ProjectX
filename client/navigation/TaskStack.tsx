import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {RootStackParamList} from "./types";
import DailySubtaskEditor from "../screens/main/daily/DailySubtaskEditor";
import TaskExplorer from "../screens/main/task/TaskExplorer";
import SubtaskEditor from "../screens/main/task/SubtaskEditor";
import BottomTabView from "../components/BottomTabView"

const Stack = createNativeStackNavigator<RootStackParamList>()

function TaskStack():JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="taskStack"
                component={BottomTabView}
            />
            <Stack.Screen
                name="dailySubtaskEditor"
                component={ DailySubtaskEditor }
            />

            <Stack.Screen
                name="taskExplorer"
                component={ TaskExplorer }
            />

            <Stack.Screen
                name="subtaskEditor"
                component={ SubtaskEditor }
            />
        </Stack.Navigator>
    )
}

export default TaskStack
