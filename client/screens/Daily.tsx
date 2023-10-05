import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../interfaces"
import {
    Text,
    View,
} from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "daily">

function Daily({ navigation }: Props):JSX.Element{
    return (
        <View>
            <Text>daily</Text>
        </View>
    )
}
export default Daily