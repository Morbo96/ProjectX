import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import ScreenView from '../../../components/ScreenView'
import { flex, headers, margin, padding } from '../../../styles/components'
import {
  goalScreen,
  subtaskEditScreen,
  taskScreen,
} from '../../../styles/screens/components/taskScreenStyles'
import { TaskNavProps } from '../../../navigation/TaskStack'

function SubtaskEditor({ navigation }: TaskNavProps<'subtaskEditor'>) {
  return (
    <ScreenView style={taskScreen.mainView}>
      <View>
        <TouchableOpacity
          style={[flex.d_flex, flex.flex_row, flex.align_center, padding.pr_4]}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/back-button.png')} />
          <TextInput
            style={[headers.header_3__bolder, { width: '75%' }]}
            placeholder={'Название подзадачи'}
            multiline={true}
          />
          <Image
            style={[{ maxWidth: 8, maxHeight: 32 }, margin.ml_10]}
            source={require('../../../assets/icons/expand-more.png')}
          />
        </TouchableOpacity>
        <View style={[{ paddingLeft: 55 }]}>
          <View style={[flex.d_flex, flex.flex_column]}>
            <Text style={[subtaskEditScreen.fromTaskText]}>В задаче:</Text>
            <Text style={[subtaskEditScreen.fromTaskText]}>
              Название задачи
            </Text>
          </View>
          <View style={[flex.d_flex, flex.flex_row]}>
            <Text style={goalScreen.dateLayout}>Начало</Text>
            <Text style={goalScreen.dateLayout}> - </Text>
            <Text style={goalScreen.dateLayout}>Конец</Text>
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
      />
    </ScreenView>
  )
}
export default SubtaskEditor
