import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import ScreenView from '../../../components/ScreenView'
import { dailySections } from '../../../styles/screens/dailyStyles'
import {
  buttons,
  flex,
  headers,
  input,
  margin,
  text,
} from '../../../styles/components'
import FolderOpenButton from '../../../components/folder_layout/FolderOpenButton'
import SystemFolder from '../../../components/folder_layout/SystemFolder'
import { TaskNavProps } from '../../../navigation/TaskStack'
import { useNavigation } from '@react-navigation/native'
import { API } from '../../../store/reducers/ApiSlice'
import { IFolderForm } from '../../../models/IFolderForm'
import { RowMap, SwipeListView } from 'react-native-swipe-list-view'
import { IFolder } from '../../../models/IFolders'
import { AddIcon } from '@gluestack-ui/themed'
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

function TaskPreview() {
  const navigation = useNavigation<TaskNavProps<'taskExplorer'>['navigation']>()
  const [folder, setFolder] = useState<IFolderForm>({ name: '' })
  const [folderUpdate, setFolderUpdate] = useState<IFolder>({
    id: 0,
    name: '',
    isSystem: false,
    createdAt: undefined,
    updatedAt: undefined,
    goals: undefined,
    userId: undefined,
  })

  const { data, error, isLoading, isUninitialized } = API.useGetFoldersQuery()
  const [createFolder] = API.useCreateFolderMutation()
  const [deleteFolder] = API.useDeleteFolderMutation()
  const [updateFolder] = API.useUpdateFolderMutation()

  const AddButtonHandler = () => {
    setShowCreateModal(true)
  }

  const HandleUpdate = () => {
    setShowUpdateModal(true)
  }

  const closeRow = (rowMap: RowMap<IFolder>, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScreenView style={dailySections.mainView}>
        <View>
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
                <Heading size="lg">Создание папки</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <TextInput
                  placeholder="Введите имя папки"
                  style={[input.inputField, margin.mb_3]}
                  onChangeText={folderName => {
                    setFolder({ name: folderName })
                  }}
                  value={folder.name}
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
                    createFolder(folder)
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
                <Heading size="lg">Редактирование папки</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <TextInput
                  defaultValue={folderUpdate.name}
                  style={[input.inputField, margin.mb_3]}
                  onChangeText={folderName => {
                    setFolderUpdate({ ...folderUpdate, name: folderName })
                  }}
                  value={folderUpdate.name}
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
                    updateFolder(folderUpdate)
                    setShowUpdateModal(false)
                  }}>
                  <ButtonText>Ок</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <View>
            <Text style={[headers.header_3__bolder]}>Списки</Text>
          </View>
          <View style={[dailySections.dailyTasksLayout, margin.mt_3]}>
            <TouchableOpacity onPress={() => {}}>
              <SystemFolder
                title={'Сегодня'}
                image={require('../../../assets/icons/plan-folder.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <SystemFolder
                title={'Запланировано'}
                image={require('../../../assets/icons/plan-folder.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <SystemFolder
                title={'Недавние'}
                image={require('../../../assets/icons/recent-folder.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <SystemFolder
                title={'Избранное'}
                image={require('../../../assets/icons/favorite-folder.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={dailySections.recommendationsSection}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[headers.header_3__bolder, margin.mb_4]}>Папки</Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: 'black',
                height: 40,
                width: 40,
              }}
              onPress={AddButtonHandler}>
              <Icon as={AddIcon} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              flex.d_flex,
              flex.flex_column,
              flex.align_center,
              { width: '100%' },
            ]}>
            {isLoading && <Text>Идет загрузка...</Text>}
            {error && <Text>Произошла ошибка при загрузке</Text>}
            {data && (
              <SwipeListView
                style={{ width: '100%' }}
                data={data}
                renderItem={data => {
                  return (
                    <FolderOpenButton
                      image={require('../../../assets/icons/folder.png')}
                      key={data.item.id}
                      folder={data.item}
                    />
                  )
                }}
                renderHiddenItem={(data, rowMap) => (
                  <View style={styles.rowBack}>
                    <TouchableOpacity
                      onPress={() => {
                        setFolderUpdate(data.item)
                        HandleUpdate()
                      }}>
                      <Text>Change</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnLeft]}
                      onPress={() => {
                        closeRow(rowMap, data.item.id)
                      }}>
                      <Text style={styles.backTextWhite}>Close</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnRight]}
                      onPress={() => {
                        deleteFolder(data.item)
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
          </View>
        </View>
      </ScreenView>
    </TouchableWithoutFeedback>
  )
}
export default TaskPreview
