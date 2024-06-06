import React, { useEffect, useState } from 'react'
import { Image, Task, Text, TouchableOpacity, View } from 'react-native'
import RadioButton from '../RadioButton'
import { flex, padding } from '../../styles/components'
import { taskCard } from '../../styles/screens/components/taskScreenStyles'
import { useNavigation } from '@react-navigation/native'
import { TaskNavProps, TaskParamList } from '../../navigation/TaskStack'
import { ISubtask } from '../../models/ISubTask'
import { ITask } from '../../models/ITasks'
import { HStack, Icon, TrashIcon } from '@gluestack-ui/themed'
import { API } from '../../store/reducers/ApiSlice'

type Props = {
  task: ITask
  subtask: ISubtask
}

const TaskCardDataItem = ({ task, subtask }: Props) => {
  const navigation =
    useNavigation<TaskNavProps<'subtaskEditor'>['navigation']>()

  const [deleteSubtask] = API.useDeleteSubtaskMutation()
  const [compliteSubtask] = API.useCompliteSubtaskMutation()

  return (
    <View
      style={[
        flex.d_flex,
        flex.flex_row,
        flex.align_center,
        flex.justify_space_between,
        { width: '100%' },
      ]}>
      <View style={[flex.d_flex, flex.flex_row, flex.align_center]}>
        {/* <RadioButton checked={subtask.subtaskInfo.completed} /> */}
        <TouchableOpacity
          style={[
            flex.d_flex,
            flex.flex_column,
            flex.justify_start,
            padding.pl_2,
          ]}
          onPress={() =>
            navigation.navigate('subtaskEditor', {
              task: task,
              subTask: subtask,
            })
          }>
          <Text style={taskCard.subtaskName}>{subtask.name}</Text>
          <Text style={taskCard.subtaskDescription}>{subtask.description}</Text>
        </TouchableOpacity>
      </View>
      <HStack>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => {
            deleteSubtask(subtask)
          }}>
          <Icon as={TrashIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            compliteSubtask(subtask.id)
          }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../assets/icons/draggable-item.png')}
          />
        </TouchableOpacity>
      </HStack>
    </View>
  )
}
export default TaskCardDataItem
