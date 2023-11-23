import React from 'react'
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'
import { flex, margin, padding } from '../../styles/components'
import { taskStartScreen } from '../../styles/screens/components/taskScreenStyles'
import { useNavigation } from '@react-navigation/native'
import { TaskNavProps } from '../../navigation/TaskStack'
import { IFolder } from '../../models/IFolders'
import { API } from '../../store/reducers/ApiSlice'

type Props = {
  title: string
  image: ImageSourcePropType
  folder: IFolder
}

const FolderOpenButton = ({ title, image, folder }: Props) => {
  const navigation = useNavigation<TaskNavProps<'goalExplorer'>['navigation']>()

  const [deleteFolder, { data, error, isLoading, isUninitialized }] =
    API.useDeleteFolderMutation()

  const deleteFolderHandler = () => {
    deleteFolder(folder)
  }

  return (
    <TouchableOpacity
      style={{ width: '100%', marginBottom: 4 }}
      onPress={() => navigation.navigate('goalExplorer')}>
      <View style={[taskStartScreen.taskFolderButton]}>
        <Image
          style={[{ width: 40, height: 40 }, margin.ml_3, margin.mr_5]}
          source={image}
        />
        <Text style={taskStartScreen.taskFolderButtonText}>{title}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            direction: 'rtl',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
          }}
          onPress={deleteFolderHandler}>
          <Image
            style={[
              {
                width: 40,
                height: 40,
              },
            ]}
            source={require('../../assets/icons/delete.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default FolderOpenButton
