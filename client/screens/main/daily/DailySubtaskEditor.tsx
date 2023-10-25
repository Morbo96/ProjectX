import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../navigation/types"
import {
    Text, View,
    TouchableOpacity,
    Image, TextInput
} from "react-native"
import ScreenView from "../../../components/ScreenView";
import {dailySections, dailyTask} from "../../../styles/screens/dailyStyles";
import {flex, headers, margin, padding} from "../../../styles/components";
import DailySubtaskEditCard from "../../../components/daily_layout/subtask_card/DailySubtaskEditCard";
import {useNavigation} from "@react-navigation/native";

function DailySubtaskEditor():JSX.Element{
    const navigation = useNavigation()
    return (
        <ScreenView style={dailySections.mainView}>
            <TouchableOpacity style={[flex.d_flex, flex.flex_row, flex.align_center, padding.pr_4]} onPress={()=>navigation.goBack()}>
                <Image source={require("../../../assets/icons/back-button.png")}/>
                <Text style={[headers.header_4, {width:"75%"}]}>Создание ежедневной задачи</Text>
                <Image style={[{maxWidth:8, maxHeight:32}, margin.ml_10]} source={require("../../../assets/icons/expand-more.png")}/>
            </TouchableOpacity>
            <View style={[flex.d_flex, flex.flex_row, flex.justify_space_between,  flex.align_center, margin.mt_5, padding.pl_5, padding.pr_5]}>
                <TextInput multiline={true} style={[dailyTask.nameInput]} placeholder={"Название"}/>
                <Image style={[{maxWidth:64, maxHeight:64}]} source={require("../../../assets/emoji/water-drop.png")}/>
            </View>
            <View style={[flex.d_flex, flex.flex_column, padding.pt_5]}>
                <DailySubtaskEditCard/>
            </View>
        </ScreenView>
    )
}
export default DailySubtaskEditor