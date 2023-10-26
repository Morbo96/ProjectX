import React from "react"
import {View, Image, Text, ImageSourcePropType} from "react-native"
import {flex, margin, padding} from "../../styles/components";
import {taskStartScreen} from "../../styles/screens/components/taskScreenStyles";

type Props = {
    title: string,
    image: ImageSourcePropType
}

const TaskOpenButton = ({title, image}: Props) => {
    return(
        <View
            style={[
                taskStartScreen.taskFolderButton
            ]}
        >
            <Image
                style={[
                    {width:40, height:40},
                    margin.ml_3, margin.mr_5,
                ]}
                source={image}/>
            <Text style={taskStartScreen.taskFolderButtonText}>{title}</Text>
        </View>
    )
}
export default TaskOpenButton