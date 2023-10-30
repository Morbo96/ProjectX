import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import {Circle, Svg, Image} from 'react-native-svg';
import {
  taskButton,
  circleAreaColorProgress,
  fillCircleAreaColor,
} from '../../styles/screens/components/taskWithProgressBar';
import {margin, padding} from '../../styles/components';

type Props = {
  progressValue: number;
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

const TaskWithProgressBar = ({progressValue, image, style}: Props) => {
  const width = 100;
  const height = 100;
  const Radius = 45;
  const Circle_len = ((Radius * (2 * Math.PI)) / 100) * progressValue;

  return (
    <View style={[taskButton.layout, style]}>
      <View style={[taskButton.circle, margin.mb_1]}>
        <Svg style={[{transform: [{rotate: '-90deg'}]}, padding.p_0]}>
          <Circle
            cx={width / 2}
            cy={height / 2}
            r={Radius}
            stroke={fillCircleAreaColor}
            fill={fillCircleAreaColor}
            strokeWidth={10}
          />
          <Image x={30} y={30} href={image} width={40} height={40} />
          <Circle
            cx={width / 2}
            cy={height / 2}
            r={Radius}
            stroke={circleAreaColorProgress}
            strokeWidth={10}
            fill="transparent"
            strokeDasharray={Circle_len}
            strokeLinecap="round"
          />
        </Svg>
      </View>
      <Text style={[taskButton.progressValueText, padding.pl_2]}>
        {progressValue.toString() + '%'}
      </Text>
    </View>
  );
};

export default TaskWithProgressBar;
