import React from "react"
import {View, Image, Text, ImageSourcePropType, TouchableOpacity} from "react-native"
import {flex, margin, padding} from "../../styles/components";
import {taskStartScreen} from "../../styles/screens/components/taskScreenStyles";

type Props = {
    title: string,
    image: ImageSourcePropType
    action: (item?: any) => any | React.FunctionComponent | undefined
}

const TaskOpenButton = ({title, image, action}: Props) => {
    return(
        <TouchableOpacity
            style={[
                taskStartScreen.taskFolderButton
            ]}
            onPress={action}
        >
            <Image
                style={[
                    {width:40, height:40},
                    margin.ml_3, margin.mr_5,
                ]}
                source={image}/>
            <Text style={taskStartScreen.taskFolderButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default TaskOpenButton