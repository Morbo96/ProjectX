import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native"
import RadioButton from "../RadioButton";
import {flex, padding} from "../../styles/components";
import {taskCard} from "../../styles/screens/components/taskScreenStyles";

type Props = {
    completed: boolean,
    title: string,
    description:string
}

const TaskCardDataItem = ({completed, title, description}: Props) => {
    return(
        <View style={[flex.d_flex, flex.flex_row, flex.align_center]}>
            <RadioButton checked={completed}/>
            <TouchableOpacity style={[flex.d_flex, flex.flex_column, flex.justify_start, padding.pl_2]}>
                <Text style={taskCard.subtaskName}>{title}</Text>
                <Text style={taskCard.subtaskDescription}>{description}</Text>
            </TouchableOpacity>
            <Image style={{width:20, height:20}} source={require("../../assets/icons/draggable-item.png")}/>
        </View>
    )
}
export default TaskCardDataItem