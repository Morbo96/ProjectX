import React from 'react'
import {TextInput, Text, View, StyleProp} from "react-native";
import {flex} from "../../../styles/components";
import RepeatIncreaser from "./RepeatIncreaser";
import {dailySubtaskCard} from "../../../styles/screens/dailyStyles";



const DailySubtaskEditCard = (style: StyleProp<any>) => {
    return(
        <View style={[flex.d_flex, flex.flex_column, flex.justify_start, dailySubtaskCard.layout, style]}>
            <TextInput style={dailySubtaskCard.subtaskName} placeholder={"Название подзадачи"}/>
            <View style={[flex.d_flex, flex.flex_row, flex.justify_space_between, flex.align_center]}>
                <Text style={dailySubtaskCard.label}>Количество повторений</Text>
                <RepeatIncreaser/>
            </View>
            <View style={[flex.d_flex, flex.flex_row, flex.justify_space_between, flex.align_center]}>
                <Text style={dailySubtaskCard.label}>Напоминание</Text>
            </View>
        </View>
    )
}
export default DailySubtaskEditCard