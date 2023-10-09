import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    home: undefined,
    auth: undefined,
    code: undefined,
    passwordConfirm: undefined,
    main: undefined,
    registration: undefined,
    daily:undefined
};

export interface Navigation {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        string | undefined
    >
}