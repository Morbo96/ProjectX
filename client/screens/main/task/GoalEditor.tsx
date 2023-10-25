import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../navigation/types"
import {
    Text,
    View,
    TouchableOpacity,
    Image, TextInput
} from "react-native"
import ScreenView from "../../../components/ScreenView";
import {dailyTask} from "../../../styles/screens/dailyStyles";
import {flex, headers, margin, padding} from "../../../styles/components";
import {goalScreen, taskScreen} from "../../../styles/screens/components/taskScreenStyles";
import TaskCard from "../../../components/task_layout/TaskCard";

type Props = {
    navigation: NativeStackScreenProps<RootStackParamList, "goalEditor">
}

function GoalEditor({ navigation }: Props):JSX.Element{
    return (
        <ScreenView style={taskScreen.mainView}>
            <TouchableOpacity style={[flex.d_flex, flex.flex_row, flex.align_center, padding.pr_4]} onPress={()=>navigation.navigation.goBack()}>
                <Image source={require("../../../assets/icons/back-button.png")}/>
                <Text style={[headers.header_3__bolder, {width:"75%"}]}>Создание цели</Text>
                <Image style={[{maxWidth:8, maxHeight:32}, margin.ml_10]} source={require("../../../assets/icons/expand-more.png")}/>
            </TouchableOpacity>
            <View style={taskScreen.content}>
                <View style={[flex.d_flex, flex.flex_row, flex.justify_space_between, flex.align_center, margin.mt_5]}>
                    <TextInput multiline={true} style={[dailyTask.nameInput,padding.p_0, {maxWidth: "80%"}]} placeholder={"Название"}/>
                    <Image style={[{maxWidth:64, maxHeight:64}]} source={require("../../../assets/emoji/water-drop.png")}/>
                </View>
                <View style={[flex.d_flex, flex.flex_row]}>
                    <Text style={goalScreen.dateLayout}>Начало</Text>
                    <Text style={goalScreen.dateLayout}> - </Text>
                    <Text style={goalScreen.dateLayout}>Конец</Text>
                </View>
                <View>
                    <TaskCard/>
                </View>
            </View>
        </ScreenView>
    )
}
export default GoalEditor