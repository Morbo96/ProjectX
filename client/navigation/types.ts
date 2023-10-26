import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    app:undefined,
    home: undefined,
    auth: undefined,
    code: undefined,
    passwordConfirm: undefined,
    main: undefined,
    registration: undefined,
    taskStack: undefined,
    daily:undefined,
    taskPreview:undefined,
    pomodoro: undefined,
    dailySubtaskEditor: undefined,
    taskExplorer:undefined,
    subtaskEditor:undefined
};

export interface Navigation {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        string | undefined
    >
}