import React from 'react'
import {ImageSourcePropType, Image, Text, View} from "react-native"
import {taskStartScreen} from "../../styles/screens/components/taskScreenStyles"
import {margin} from "../../styles/components"

type Props = {
    title: string
    image: ImageSourcePropType
}

const SystemFolder = ({title, image}: Props) => {
    return(
        <View style={[taskStartScreen.systemFolderButton, margin.m_2]}>
            <Image style={[{width:30, height:30}, margin.ml_2, margin.mb_2]} source={image}/>
            <Text style={[taskStartScreen.systemFolderButtonText]}>{title}</Text>
        </View>
    )
}
export default SystemFolder