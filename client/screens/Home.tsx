import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../interfaces"
import {
    Text,
    View,
} from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "home">

function Home({ navigation }: Props):JSX.Element{
    return (
        <View style={{backgroundColor:"#EFFAFF", width:"100%", display:"flex", justifyContent:"flex-end"}}>
            <Text>home</Text>
        </View>
    )
}
export default Home