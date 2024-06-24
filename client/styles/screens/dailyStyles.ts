import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export const dailySections = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#B8E1F4',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: '10%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 33,
    height: 400,
  },
  dailyTasksLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  recommendationsSection: {
    paddingTop: 22,
  },
})

export const dailyTask = StyleSheet.create({
  nameInput: {
    fontFamily: 'SF Pro Display',
    fontSize: 36,
    fontWeight: '700',
    color: 'black',
  },
})

export const dailySubtaskCard = StyleSheet.create({
  layout: {
    backgroundColor: '#FFF',
    borderRadius: 11,
    padding: 17,
  },
  subtaskName: {
    fontWeight: '700',
    fontSize: 24,
    fontFamily: 'SF Pro Display',
    color: 'black',
  },
  label: {
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'SF Pro Display',
    color: 'black',
  },
})
