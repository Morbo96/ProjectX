import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DailySubtaskEditor from '../screens/main/daily/DailySubtaskEditor'
import TaskExplorer from '../screens/main/task/TaskExplorer'
import GoalExplorer from '../screens/main/task/GoalExplorer'
import SubtaskEditor from '../screens/main/task/SubtaskEditor'
import BottomTabView from '../components/BottomTabView'
import { StackNavigationProp } from '@react-navigation/stack'
import { IFolder } from '../models/IFolders'
import { RouteProp } from '@react-navigation/native'
import { IGoal } from '../models/IGoals'
import { ISubtask } from '../models/ISubTask'
import { ITask } from '../models/ITasks'
import Cards from '../screens/main/task/Cards'

export type TaskParamList = {
  taskStack: undefined
  cards: undefined
  dailySubtaskEditor: undefined
  taskExplorer: {
    goal: IGoal
  }
  subtaskEditor: {
    task: ITask
    subTask: ISubtask | undefined
  }
  goalExplorer: {
    folder: IFolder
  }
}

export type TaskNavProps<T extends keyof TaskParamList> = {
  navigation: StackNavigationProp<TaskParamList, T>
  route: RouteProp<TaskParamList, T>
}

const Stack = createNativeStackNavigator<TaskParamList>()

function TaskStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="taskStack" component={BottomTabView} />

      <Stack.Screen name="dailySubtaskEditor" component={DailySubtaskEditor} />

      <Stack.Screen name="taskExplorer" component={TaskExplorer} />

      <Stack.Screen name="subtaskEditor" component={SubtaskEditor} />

      <Stack.Screen name="goalExplorer" component={GoalExplorer} />

      <Stack.Screen name="cards" component={Cards} />
    </Stack.Navigator>
  )
}

export default TaskStack
