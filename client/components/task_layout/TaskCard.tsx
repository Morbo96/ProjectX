import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import TaskCardDataItem from './TaskCardDataItem'
import { flex, headers, margin } from '../../styles/components'
import { taskCard } from '../../styles/screens/components/taskScreenStyles'
import { ITask } from '../../models/ITasks'
import {
  AddIcon,
  EditIcon,
  HStack,
  Icon,
  TrashIcon,
} from '@gluestack-ui/themed'
import { API } from '../../store/reducers/ApiSlice'
import { ISubtaskForm } from '../../models/ISubTaskForm'
import { useNavigation } from '@react-navigation/native'
import { TaskNavProps } from '../../navigation/TaskStack'

interface Props {
  task: ITask
  delete: (task: ITask) => void
  update: (task: ITask) => void
}
const TaskCard = ({ task, delete: deleteTask, update: updateTask }: Props) => {
  const [updatedTask, setUpdatedTask] = useState<ITask>(task)

  const navigation =
    useNavigation<TaskNavProps<'subtaskEditor'>['navigation']>()

  return (
    <View style={[taskCard.layout, margin.mt_1]}>
      <HStack justifyContent="space-between">
        <TextInput
          style={[headers.header_3__bolder, { maxWidth: '75%' }]}
          defaultValue={updatedTask.name}
          value={updatedTask.name}
          onChangeText={taskName => {
            setUpdatedTask({ ...updatedTask, name: taskName })
          }}
        />
        <HStack>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('subtaskEditor', {
                task: task,
                subTask: undefined,
              })
            }}>
            <Icon as={AddIcon} m={'$2'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateTask(updatedTask)}>
            <Icon as={EditIcon} m={'$2'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(task)}>
            <Icon as={TrashIcon} m={'$2'} />
          </TouchableOpacity>
        </HStack>
      </HStack>

      <View style={[flex.d_flex, flex.flex_column, flex.align_start]}>
        {task.subtasks &&
          task.subtasks.map(subtask => (
            <TaskCardDataItem key={subtask.id} task={task} subtask={subtask} />
          ))}
      </View>
    </View>
  )
}
export default TaskCard
