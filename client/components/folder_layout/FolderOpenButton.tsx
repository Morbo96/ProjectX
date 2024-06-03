import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Pressable,
  TextInput,
} from 'react-native'
import { flex, margin, padding } from '../../styles/components'
import { taskStartScreen } from '../../styles/screens/components/taskScreenStyles'
import { useNavigation } from '@react-navigation/native'
import { TaskNavProps } from '../../navigation/TaskStack'
import { IFolder } from '../../models/IFolders'
import { API } from '../../store/reducers/ApiSlice'
import { SwipeListView } from 'react-native-swipe-list-view'
import { IFolderForm } from '../../models/IFolderForm'

type Props = {
  image: ImageSourcePropType
  folder: IFolder
}

const FolderOpenButton = ({ image, folder }: Props) => {
  const navigation = useNavigation<TaskNavProps<'goalExplorer'>['navigation']>()

  return (
    <Pressable onPress={() => navigation.navigate('goalExplorer', { folder })}>
      <View style={[taskStartScreen.taskFolderButton, { marginBottom: 6 }]}>
        <Image
          style={[{ width: 40, height: 40 }, margin.ml_3, margin.mr_5]}
          source={image}
        />
        <Text style={taskStartScreen.taskFolderButtonText}>{folder.name}</Text>
      </View>
    </Pressable>
  )
}
export default FolderOpenButton
