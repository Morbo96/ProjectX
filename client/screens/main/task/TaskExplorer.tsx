import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native'
import ScreenView from '../../../components/ScreenView'
import { dailySections, dailyTask } from '../../../styles/screens/dailyStyles'
import {
  buttons,
  flex,
  headers,
  input,
  margin,
  padding,
  text,
} from '../../../styles/components'
import {
  goalScreen,
  taskScreen,
} from '../../../styles/screens/components/taskScreenStyles'
import TaskCard from '../../../components/task_layout/TaskCard'
import { TaskNavProps } from '../../../navigation/TaskStack'
import { API } from '../../../store/reducers/ApiSlice'
import { ITask } from '../../../models/ITasks'
import { ITaskForm } from '../../../models/ITaskForm'
import {
  ButtonText,
  CloseIcon,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed'
import { ModalBackdrop } from '@gluestack-ui/themed'
import { Heading } from '@gluestack-ui/themed'
import { ModalCloseButton } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'

function TaskExplorer({ navigation, route }: TaskNavProps<'taskExplorer'>) {
  const [createTask] = API.useCreateTaskMutation()
  const [updateTask] = API.useUpdateTaskMutation()
  const [deleteTask] = API.useDeleteTaskMutation()

  const { data, error, isLoading, isUninitialized } = API.useGetTasksQuery(
    route.params.goal.id,
  )

  const [taskForm, setTaskForm] = useState<ITaskForm>({
    name: '',
    icon: undefined,
    goalId: route.params.goal.id,
    createdAt: undefined,
    updatedAt: undefined,
    subtasks: undefined,
  })

  // const [task, setTask] = useState<ITask>({
  //   id: '',
  //   name: '',
  //   icon: undefined,
  //   goalId: route.params.goal.id,
  //   createdAt: undefined,
  //   updatedAt: undefined,
  //   subtasks: undefined,
  // })

  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

  const AddButtonHandler = () => {
    setShowCreateModal(true)
  }

  const UpdateButtonHandler = (task: ITask) => {
    updateTask(task)
  }

  const DeleteButtonHandler = (task: ITask) => {
    deleteTask(task)
  }

  return (
    <ScreenView style={dailySections.mainView}>
      <Modal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false)
        }}
        avoidKeyboard={true}
        isKeyboardDismissable={true}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Добавить задачу</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <TextInput
              placeholder="Введите название задачи"
              style={[input.inputField, margin.mb_3, { width: '100%' }]}
              onChangeText={taskName => {
                setTaskForm({ ...taskForm, name: taskName })
              }}
              value={taskForm.name}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowCreateModal(false)
              }}>
              <ButtonText>Отмена</ButtonText>
            </Button>
            <Button
              bgColor="#5648FF"
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                createTask(taskForm)
                setShowCreateModal(false)
              }}>
              <ButtonText>Ок</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TouchableOpacity
        style={[flex.d_flex, flex.flex_row, flex.align_center, padding.pr_4]}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/icons/back-button.png')} />
        <Text style={[headers.header_3__bolder, { width: '75%' }]}>
          Создание цели
        </Text>
        <Image
          style={[{ maxWidth: 8, maxHeight: 32 }, margin.ml_10]}
          source={require('../../../assets/icons/expand-more.png')}
        />
      </TouchableOpacity>
      <View
        style={[
          taskScreen.content,
          {
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between',
            height: '89%',
          },
        ]}>
        <View
          style={[
            flex.d_flex,
            flex.flex_row,
            flex.justify_space_between,
            flex.align_center,
            margin.mt_5,
          ]}>
          <Text
            style={[
              dailyTask.nameInput,
              padding.p_0,
              { maxWidth: '80%', fontSize: 26 },
            ]}>
            {route.params.goal.name}
          </Text>

          <Image
            style={[{ maxWidth: 64, maxHeight: 64 }]}
            source={require('../../../assets/icons/book.png')}
          />
        </View>
        <View style={[flex.d_flex, flex.flex_row]}>
          <Text style={goalScreen.dateLayout}>
            {route.params.goal.dateStart?.toLocaleString()}
          </Text>
          <Text style={[goalScreen.dateLayout]}>21.06.24 - 22.06.24</Text>
          <Text style={goalScreen.dateLayout}>
            {route.params.goal.dateEnd?.toLocaleString()}
          </Text>
        </View>
        <ScrollView style={{ height: 400 }}>
          {data &&
            data.map(task => (
              <TaskCard
                delete={DeleteButtonHandler}
                update={UpdateButtonHandler}
                key={task.id}
                task={task}
              />
            ))}
        </ScrollView>

        <TouchableOpacity style={[buttons.rounded]} onPress={AddButtonHandler}>
          <Text style={text.buttonText}>Добавить задачу</Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}
export default TaskExplorer
