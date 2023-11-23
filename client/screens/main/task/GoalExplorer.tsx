import React from 'react'
import { Text, View } from 'react-native'
import ScreenView from '../../../components/ScreenView'
import { flex, headers } from '../../../styles/components'
import TaskOpenButton from '../../../components/folder_layout/TaskOpenButton'

const GoalExplorer = () => {
  return (
    <ScreenView>
      <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
        <Text style={[headers.header_3__bolder]}>Список целей</Text>
        <Text>в папке:</Text>
      </View>
      <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
        <TaskOpenButton />
      </View>
    </ScreenView>
  )
}
export default GoalExplorer
