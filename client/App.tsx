import React from 'react'
import AppRouter from './navigation/AppRouter'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = setupStore()
setupListeners(store.dispatch)

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
export default App
