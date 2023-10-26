import React from 'react'
import {Text, TextInput, View} from "react-native";
import TaskCardDataItem from "./TaskCardDataItem";
import {flex, headers, margin} from "../../styles/components";
import {taskCard} from "../../styles/screens/components/taskScreenStyles";

const TaskCard = () => {
    return(
        <View style={[taskCard.layout, margin.mt_5]}>
            <TextInput
                style={[headers.header_3__bolder, {maxWidth: "75%"}]}
                placeholder={"Название задачи"}
                multiline={true}
            />
            <View style={[flex.d_flex, flex.flex_column, flex.align_start]}>
                <TaskCardDataItem
                    completed={false}
                    title={"Название подзадачи"}
                    description={"А тут будет ее содержимое"}
                />
            </View>
        </View>
    )
}
export default TaskCard