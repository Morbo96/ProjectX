import { createSlice } from '@reduxjs/toolkit'
import { UIState } from './types'
import {RootStackParamList} from "../../interfaces";

export const initialState: UIState = {
	pageTitle: null,
	currentTab: "home"
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setCurrentTab: (state, { payload }:{ payload: keyof RootStackParamList}) => {
			state.currentTab = payload
		},
	}
})

export const { setCurrentTab } = uiSlice.actions
export const uiReducer = uiSlice.reducer