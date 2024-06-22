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
import { IGoal } from '../../models/IGoals'

type Props = {
  goal: IGoal
}

const TaskOpenButton = ({ goal }: Props) => {
  const navigation = useNavigation<TaskNavProps<'taskExplorer'>['navigation']>()

  return (
    <TouchableOpacity
      style={{ width: '100%', marginBottom: 6 }}
      onPress={() => navigation.navigate('taskExplorer', { goal })}>
      <View style={[taskStartScreen.taskFolderButton]}>
        <Image
          style={[{ width: 35, height: 35 }, margin.ml_3, margin.mr_5]}
          source={require('../../assets/icons/favorite-folder.png')}
        />
        <Text style={taskStartScreen.taskFolderButtonText}>{goal.name}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            direction: 'rtl',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
          }}></TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default TaskOpenButton
