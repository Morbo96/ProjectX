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

const TaskOpenButton = () => {
  const navigation = useNavigation<TaskNavProps<'taskExplorer'>['navigation']>()

  return (
    <TouchableOpacity
      style={{ width: '100%', marginBottom: 4 }}
      onPress={() => navigation.navigate('taskExplorer')}>
      <View style={[taskStartScreen.taskFolderButton]}>
        <Image
          style={[{ width: 40, height: 40 }, margin.ml_3, margin.mr_5]}
          source={require('../../assets/icons/favorite-folder.png')}
        />
        <Text style={taskStartScreen.taskFolderButtonText}>Pppppp</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            direction: 'rtl',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
          }}>
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
export default TaskOpenButton
