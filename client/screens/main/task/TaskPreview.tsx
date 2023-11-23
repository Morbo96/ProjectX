import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Modal, TextInput } from 'react-native'
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

function TaskPreview() {
  const navigation = useNavigation<TaskNavProps<'taskExplorer'>['navigation']>()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [folder, setFolder] = useState<IFolderForm>({ name: '' })

  const { data, error, isLoading, isUninitialized } = API.useGetFoldersQuery()
  const [createFolder] = API.useCreateFolderMutation()

  const AddButtonHandler = () => {
    setModalVisible(true)
  }

  return (
    <ScreenView style={dailySections.mainView}>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View>
            <TextInput
              placeholder="Введите имя папки"
              style={[input.inputField, margin.mb_3]}
              onChangeText={folderName => {
                setFolder({ name: folderName })
              }}
              value={folder.name}
            />
            <TouchableOpacity
              style={buttons.rounded}
              onPress={() => {
                setModalVisible(!modalVisible)
                createFolder(folder)
              }}>
              <Text style={text.buttonText}>Добавить папку</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View>
          <Text style={[headers.header_3__bolder]}>Списки</Text>
        </View>
        <View style={[dailySections.dailyTasksLayout, margin.mt_3]}>
          <TouchableOpacity onPress={() => navigation.navigate('taskExplorer')}>
            <SystemFolder
              title={'Сегодня'}
              image={require('../../../assets/icons/plan-folder.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('taskExplorer')}>
            <SystemFolder
              title={'Запланировано'}
              image={require('../../../assets/icons/plan-folder.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('taskExplorer')}>
            <SystemFolder
              title={'Недавние'}
              image={require('../../../assets/icons/recent-folder.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('taskExplorer')}>
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
            <Text style={text.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
          {isLoading && <Text>Идет загрузка...</Text>}
          {error && <Text>Произошла ошибка при загрузке</Text>}
          {data &&
            data.map(folder => (
              <FolderOpenButton
                title={folder.name}
                image={require('../../../assets/icons/folder.png')}
                key={folder.id}
                folder={folder}
              />
            ))}
        </View>
      </View>
    </ScreenView>
  )
}
export default TaskPreview
