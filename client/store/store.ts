import { combineReducers, configureStore } from '@reduxjs/toolkit'
import countReducer from './reducers/CountSlice'
import { API } from './reducers/ApiSlice'

const rootReducer = combineReducers({
  countReducer,
  [API.reducerPath]: API.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(API.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
