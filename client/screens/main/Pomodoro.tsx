import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import ScreenView from '../../components/ScreenView';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {flex, headers, margin, padding} from '../../styles/components';
import {pomodoroLayout} from '../../styles/screens/pomodoroStyles';

function Pomodoro(): JSX.Element {
  const [timerEnabled, setTimer] = useState(false);
  const [paused, setPause] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [key, setKey] = useState(0);

  return (
    <ScreenView style={[pomodoroLayout.mainView]}>
      <View
        style={[
          flex.d_flex,
          flex.flex_row,
          flex.align_start,
          flex.justify_center,
        ]}>
        <Text style={headers.header_1}>Задача:</Text>
        <Text
          style={[
            pomodoroLayout.taskTitle,
            padding.pl_3,
            padding.pt_1,
            {maxWidth: '50%'},
          ]}>
          Название задачи
        </Text>
      </View>
      <TouchableOpacity onPress={() => setHitCount(hitCount + 1)}>
        <CountdownCircleTimer
          key={key}
          isPlaying={timerEnabled && !paused}
          duration={1200}
          size={240}
          strokeWidth={7}
          strokeLinecap={'square'}
          colors={'#0000007D'}
          trailColor={'#00000000'}
          onComplete={() => {
            return {shouldRepeat: true, delay: 1.5};
          }}>
          {({remainingTime}) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <View
                style={[
                  flex.d_flex,
                  flex.flex_column,
                  flex.justify_center,
                  flex.align_center,
                ]}>
                <Text style={pomodoroLayout.timeText}>
                  {minutes}:{seconds}
                </Text>
                <Text style={[pomodoroLayout.hitCountText, margin.mt_3]}>
                  Hit count: {hitCount}
                </Text>
              </View>
            );
          }}
        </CountdownCircleTimer>
      </TouchableOpacity>
      <View
        style={[
          flex.d_flex,
          flex.justify_center,
          flex.align_center,
          padding.pl_3,
          {minHeight: '25%'},
        ]}>
        {timerEnabled ? (
          <View
            style={[
              flex.d_flex,
              flex.flex_row,
              flex.justify_space_between,
              flex.align_center,
              {width: '55%'},
            ]}>
            <TouchableOpacity onPress={() => setKey(prevKey => prevKey + 1)}>
              <Image
                source={require('../../assets/icons/restart_button.png')}
              />
            </TouchableOpacity>
            {paused ? (
              <TouchableOpacity onPress={() => setPause(false)}>
                <Image source={require('../../assets/icons/play_button.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPause(true)}>
                <Image
                  source={require('../../assets/icons/pause_button.png')}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setTimer(false);
                setHitCount(0);
                setKey(prevKey => prevKey + 1);
              }}>
              <Image source={require('../../assets/icons/stop_button.png')} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setTimer(true);
              setPause(false);
            }}>
            <Image source={require('../../assets/icons/play_button.png')} />
          </TouchableOpacity>
        )}
      </View>
    </ScreenView>
  );
}
export default Pomodoro;
