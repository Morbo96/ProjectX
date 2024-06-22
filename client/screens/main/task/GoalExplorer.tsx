import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import ScreenView from '../../../components/ScreenView'
import {
  buttons,
  flex,
  headers,
  input,
  margin,
  text,
} from '../../../styles/components'
import TaskOpenButton from '../../../components/folder_layout/TaskOpenButton'
import { dailySections } from '../../../styles/screens/dailyStyles'
import { TaskNavProps } from '../../../navigation/TaskStack'
import { SwipeListView } from 'react-native-swipe-list-view'
import { API } from '../../../store/reducers/ApiSlice'
import { IGoal } from '../../../models/IGoals'
import { IGoalForm } from '../../../models/IGoalForm'
import {
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed'
import { styles } from '../../../styles/components/swipableListStyles'

const GoalExplorer = ({ navigation, route }: TaskNavProps<'goalExplorer'>) => {
  const [createGoal] = API.useCreateGoalMutation()
  const [deleteGoal] = API.useDeleteGoalMutation()
  const [updateGoal] = API.useUpdateGoalMutation()

  const { data, error, isLoading, isUninitialized } = API.useGetGoalsQuery(
    route.params.folder.id,
  )

  const [goalForm, setGoalForm] = useState<IGoalForm>({
    name: '',
    dateStart: undefined,
    dateEnd: undefined,
    folderId: route.params.folder.id,
  })

  const [goal, setGoal] = useState<IGoal>({
    id: 0,
    name: '',
    dateStart: undefined,
    dateEnd: undefined,
    folderId: 0,
    createdAt: undefined,
    updatedAt: undefined,
    tasks: undefined,
  })

  const AddButtonHandler = () => {
    setShowCreateModal(true)
  }

  const UpdateButtonHandler = () => {
    setShowUpdateModal(true)
  }

  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

  return (
    <ScreenView style={dailySections.mainView}>
      {/* create Modal */}
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
            <Heading size="lg">Добавить цель</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <TextInput
              placeholder="Введите название цели"
              style={[input.inputField, margin.mb_3, { width: '100%' }]}
              onChangeText={goalName => {
                setGoalForm({ ...goalForm, name: goalName })
              }}
              value={goalForm.name}
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
                createGoal(goalForm)
                setShowCreateModal(false)
              }}>
              <ButtonText>Ок</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* update Modal */}
      <Modal
        isOpen={showUpdateModal}
        onClose={() => {
          setShowUpdateModal(false)
        }}
        avoidKeyboard={true}
        isKeyboardDismissable={true}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Редактирование цели</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <TextInput
              defaultValue={goal.name}
              style={[input.inputField, margin.mb_3, { width: '100%' }]}
              onChangeText={goalName => {
                setGoal({ ...goal, name: goalName })
              }}
              value={goal.name}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowUpdateModal(false)
              }}>
              <ButtonText>Отмена</ButtonText>
            </Button>
            <Button
              bgColor="#5648FF"
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                updateGoal(goal)
                setShowUpdateModal(false)
              }}>
              <ButtonText>Ок</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
        <Text style={[headers.header_3__bolder]}>Список целей</Text>
        <Text>в папке:{route.params.folder.name}</Text>
      </View>
      <View
        style={[
          flex.d_flex,
          flex.flex_column,
          flex.align_center,
          { height: '90%' },
        ]}>
        {isLoading && <Text>Идет загрузка...</Text>}
        {error && <Text>Произошла ошибка при загрузке</Text>}
        {data && (
          <SwipeListView
            style={{ width: '100%', marginTop: 10 }}
            data={data}
            renderItem={data => {
              return <TaskOpenButton goal={data.item} />
            }}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  onPress={() => {
                    setGoal(data.item)
                    UpdateButtonHandler()
                  }}>
                  <Text>Change</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnLeft]}
                  onPress={() => {}}>
                  <Text style={styles.backTextWhite}>Close</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnRight]}
                  onPress={() => {
                    deleteGoal(data.item)
                  }}>
                  <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-140}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )}

        <TouchableOpacity style={buttons.rounded} onPress={AddButtonHandler}>
          <Text style={text.buttonText}>Добавить цель</Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}
export default GoalExplorer
