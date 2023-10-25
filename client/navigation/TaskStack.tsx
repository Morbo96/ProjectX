import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {RootStackParamList} from "./types";
import DailySubtaskEditor from "../screens/main/daily/DailySubtaskEditor";
import GoalEditor from "../screens/main/task/GoalEditor";
import GoalSubtask from "../screens/main/task/GoalSubtask";
import BottomTabView from "../components/BottomTabView";
import Daily from "../screens/main/daily/Daily";
import TaskPreview from "../screens/main/task/TaskPreview";

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
                name="goalEditor"
                component={ GoalEditor }
            />

            <Stack.Screen
                name="goalSubtask"
                component={ GoalSubtask }
            />
        </Stack.Navigator>
    )
}

export default TaskStack
