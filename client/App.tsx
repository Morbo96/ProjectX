import React from 'react'
import AppRouter from './navigation/AppRouter'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { setupListeners } from '@reduxjs/toolkit/query'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme

const store = setupStore()
setupListeners(store.dispatch)

function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <AppRouter />
      </GluestackUIProvider>
    </Provider>
  )
}
export default App
