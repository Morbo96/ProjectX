import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import ScreenView from '../../../components/ScreenView'
import {
  buttons,
  flex,
  headers,
  margin,
  padding,
  text,
} from '../../../styles/components'
import {
  goalScreen,
  subtaskEditScreen,
  taskScreen,
} from '../../../styles/screens/components/taskScreenStyles'
import { TaskNavProps } from '../../../navigation/TaskStack'
import { ISubtaskForm } from '../../../models/ISubTaskForm'
import { API } from '../../../store/reducers/ApiSlice'
import { ISubtask } from '../../../models/ISubTask'
import { ISubTaskInfo } from '../../../models/ISubtaskInfo'

function SubtaskEditor({ navigation, route }: TaskNavProps<'subtaskEditor'>) {
  const [createSubtask] = API.useCreateSubtaskMutation()
  const [updateSubtask] = API.useUpdateSubtaskMutation()

  const [subtaskForm, setSubtaskForm] = useState<ISubtaskForm>({
    name: route.params.subTask?.name,
    description: route.params.subTask?.description,
    taskId: route.params.task.id,
    subtaskInfo: route.params.subTask?.subtaskInfo,
    dateStart: route.params.subTask?.subtaskInfo?.dateStart,
    dateEnd: route.params.subTask?.subtaskInfo?.dateEnd,
  })

  const [subtask, setSubtask] = useState<ISubtask>({
    id: route.params.subTask?.id as number,
    name: subtaskForm.name,
    description: subtaskForm.description,
    taskId: subtaskForm.taskId,
    createdAt: route.params.subTask?.createdAt,
    updatedAt: route.params.subTask?.updatedAt,
    subtaskInfo: route.params.subTask?.subtaskInfo as ISubTaskInfo,
  })

  return (
    <ScreenView style={[taskScreen.mainView]}>
      <View>
        <TouchableOpacity
          style={[flex.d_flex, flex.flex_row, flex.align_center, padding.pr_4]}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/back-button.png')} />
          <TextInput
            style={[headers.header_3__bolder, { width: '75%' }]}
            placeholder={'Название подзадачи'}
            multiline={true}
            onChangeText={subTaskName => {
              setSubtaskForm({ ...subtaskForm, name: subTaskName })
              setSubtask({ ...subtask, name: subTaskName })
            }}
            value={subtaskForm.name}
          />
          <Image
            style={[{ maxWidth: 8, maxHeight: 32 }, margin.ml_10]}
            source={require('../../../assets/icons/expand-more.png')}
          />
        </TouchableOpacity>
        <View style={[{ paddingLeft: 55 }]}>
          <View style={[flex.d_flex, flex.flex_column]}>
            <Text style={[subtaskEditScreen.fromTaskText]}>
              В задаче: {route.params.task.name}
            </Text>
          </View>
          <View style={[flex.d_flex, flex.flex_row]}>
            <Text style={goalScreen.dateLayout}>
              Начало {subtaskForm.dateStart?.toLocaleString()}
            </Text>
            <Text style={goalScreen.dateLayout}> - </Text>
            <Text style={goalScreen.dateLayout}>
              Конец {subtaskForm.dateEnd?.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
      <TextInput
        multiline={true}
        style={[
          { width: '90%' },
          padding.p_5,
          subtaskEditScreen.taskDescriptionText,
        ]}
        onChangeText={subTaskDescription => {
          setSubtaskForm({ ...subtaskForm, description: subTaskDescription })
          setSubtask({ ...subtask, description: subTaskDescription })
        }}
        value={subtaskForm.description}
      />
      <TouchableOpacity
        style={[
          buttons.rounded,
          {
            width: '80%',
            marginHorizontal: 40,
            position: 'absolute',
            bottom: 10,
          },
        ]}
        onPress={() => {
          !route.params.subTask
            ? createSubtask(subtaskForm)
            : updateSubtask(subtask)
          navigation.goBack()
        }}>
        <Text style={text.buttonText}>Сохранить</Text>
      </TouchableOpacity>
    </ScreenView>
  )
}
export default SubtaskEditor
