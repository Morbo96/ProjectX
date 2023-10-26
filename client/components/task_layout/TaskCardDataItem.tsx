import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native"
import RadioButton from "../RadioButton";
import {flex, padding} from "../../styles/components";
import {taskCard} from "../../styles/screens/components/taskScreenStyles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/types";
import {useNavigation} from "@react-navigation/native";

type Props = {
    completed: boolean,
    title: string,
    description:string
}
type navProps = NativeStackScreenProps<RootStackParamList, "taskExplorer"> & {
    navigation: {
        navigate: (screen: keyof RootStackParamList) => void;
    };
};
const TaskCardDataItem = ({completed, title, description}: Props) => {
    const navigation = useNavigation<navProps>()

    return(
        <View style={[flex.d_flex, flex.flex_row, flex.align_center, flex.justify_space_between, {width:"100%"}]}>
            <View style={[flex.d_flex, flex.flex_row, flex.align_center]}>
                <RadioButton checked={completed}/>
                <TouchableOpacity
                    style={[
                        flex.d_flex,
                        flex.flex_column,
                        flex.justify_start,
                        padding.pl_2
                    ]}
                    onPress={()=>navigation.navigate('subtaskEditor')}
                >
                    <Text style={taskCard.subtaskName}>{title}</Text>
                    <Text style={taskCard.subtaskDescription}>{description}</Text>
                </TouchableOpacity>
            </View>
            <Image style={{width:20, height:20}} source={require("../../assets/icons/draggable-item.png")}/>
        </View>
    )
}
export default TaskCardDataItem