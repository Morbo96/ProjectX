import React from 'react'
import {ImageSourcePropType, Image, Text, TouchableOpacity} from "react-native";
import {taskStartScreen} from "../../styles/screens/components/taskScreenStyles";
import {margin} from "../../styles/components";

type Props = {
    title: string
    image: ImageSourcePropType
    action: (item?: any) => any | React.FunctionComponent | undefined
}

const SystemFolder = ({title, image, action}: Props) => {
    return(
        <TouchableOpacity style={[taskStartScreen.systemFolderButton, margin.m_2]} onPress={action}>
            <Image style={[{width:30, height:30}, margin.ml_2, margin.mb_2]} source={image}/>
            <Text style={[taskStartScreen.systemFolderButtonText]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default SystemFolder