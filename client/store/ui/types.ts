import {RootStackParamList} from "../../interfaces";

export type Theme = 'Default' | 'Dark' | undefined

export interface UIState {
	pageTitle: string | null,
	currentTab: keyof RootStackParamList
}