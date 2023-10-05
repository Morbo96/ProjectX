import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootApi } from './root.api'
import { uiReducer } from './ui'
import { authReducer } from './auth'

const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
	ui: uiReducer,
	auth: authReducer
})

const middlewares = [
	rootApi.middleware
]

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddlewares = getDefaultMiddleware({
			immutableCheck: true,
			serializableCheck: false,
			thunk: true,
		})
		return [...defaultMiddlewares, ...middlewares]
	},
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
