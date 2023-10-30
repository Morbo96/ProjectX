import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ScreenView from '../../../components/ScreenView';
import {dailySections} from '../../../styles/screens/dailyStyles';
import {flex, headers, margin} from '../../../styles/components';
import TaskOpenButton from '../../../components/folder_layout/TaskOpenButton';
import SystemFolder from '../../../components/folder_layout/SystemFolder';
import {TaskNavProps} from '../../../navigation/TaskStack';
import {useNavigation} from '@react-navigation/native';

function TaskPreview() {
  const navigation =
    useNavigation<TaskNavProps<'taskExplorer'>['navigation']>();

  return (
    <ScreenView style={dailySections.mainView}>
      <View>
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
        <Text style={[headers.header_3__bolder, margin.mb_4]}>Папки</Text>
        <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => navigation.navigate('taskExplorer')}>
            <TaskOpenButton
              title={'Название папки'}
              image={require('../../../assets/icons/folder.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenView>
  );
}
export default TaskPreview;
