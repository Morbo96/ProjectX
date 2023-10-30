import * as React from 'react';
import {Animated, Text, I18nManager} from 'react-native';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
} from 'react-native-tab-view';
import Daily from '../screens/main/daily/Daily';
import TaskPreview from '../screens/main/task/TaskPreview';
import {bottomTabViewStyles} from '../styles/components/bottomTabViewStyles';
import {State} from 'react-native-gesture-handler';

const renderIndicator = (
  props: SceneRendererProps & {
    navigationState: State;
    getTabWidth: (i: number) => number;
  },
) => {
  const {position, getTabWidth} = props;
  const inputRange = [0, 0.48, 0.49, 0.51, 0.52, 1, 1.48, 1.49, 1.51, 1.52, 2];

  const translateX = position.interpolate({
    inputRange: inputRange,
    outputRange: inputRange.map(x => {
      const i = Math.round(x);
      return i * getTabWidth(i) * (I18nManager.isRTL ? -1 : 1);
    }),
  });

  const tabsQuantity = 2;
  return (
    <Animated.View
      style={[
        bottomTabViewStyles.indicator,
        {
          width: `${100 / tabsQuantity}%`,
          height: '100%',
          transform: [{translateX}] as any,
        },
      ]}></Animated.View>
  );
};
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'transparent'}}
    style={bottomTabViewStyles.layout}
    renderIndicator={renderIndicator}
    renderLabel={({route, focused}) => (
      <Text
        style={
          focused
            ? bottomTabViewStyles.labelActive
            : bottomTabViewStyles.labelDefault
        }>
        {route.title}
      </Text>
    )}
  />
);

const BottomTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Рекомендации'},
    {key: 'second', title: 'Задачи'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={SceneMap({
        first: Daily,
        second: TaskPreview,
      })}
      onIndexChange={setIndex}
      tabBarPosition={'bottom'}
      style={{padding: 0}}
      swipeEnabled={false}
    />
  );
};
export default BottomTabView;
