import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const deviceSize = Dimensions.get('screen')

export const authSections = StyleSheet.create({
  mainView: {
    height: deviceSize.height,
    width: deviceSize.width,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#B8E1F4',
  },
  imageView: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 33,
    height: 400,
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 80,
    height: 150,
  },
  textFooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 20,
  },
})

export const authExtensions = StyleSheet.create({
  authContentHeight__70: {
    height: '70%',
  },
  authContentHeight__50: {
    height: '50%',
  },
  textLeft: {
    textAlign: 'left',
  },
})
