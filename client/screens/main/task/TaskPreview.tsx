import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../navigation/types"
import { Text, View } from "react-native"
import ScreenView from "../../../components/ScreenView";
import {dailySections} from "../../../styles/screens/dailyStyles";
import {flex, headers, margin} from "../../../styles/components";
import SystemFolder from "../../../components/folder_layout/SystemFolder";
import TaskOpenButton from "../../../components/folder_layout/TaskOpenButton";

function TaskPreview(){
    return (
        <ScreenView style={dailySections.mainView}>
            <View>
                <View>
                    <Text style={[headers.header_3__bolder]}>Списки</Text>
                </View>
                <View style={[dailySections.dailyTasksLayout, margin.mt_3]}>
                    <SystemFolder
                        title={"Сегодня"}
                        image={require("../../../assets/icons/plan-folder.png")}
                        action={()=>{undefined}}
                    />
                    <SystemFolder
                        title={"Запланировано"}
                        image={require("../../../assets/icons/plan-folder.png")}
                        action={()=>{undefined}}/>
                    <SystemFolder
                        title={"Недавние"}
                        image={require("../../../assets/icons/recent-folder.png")}
                        action={()=>{undefined}}/>
                    <SystemFolder
                        title={"Избранное"}
                        image={require("../../../assets/icons/favorite-folder.png")}
                        action={()=>{undefined}}/>
                </View>
            </View>
            <View style={dailySections.recommendationsSection}>
                <Text style={[headers.header_3__bolder, margin.mb_4]}>Папки</Text>
                <View style={[flex.d_flex, flex.flex_column, flex.align_center]}>
                    <TaskOpenButton
                        title={"Название папки"}
                        image={require("../../../assets/icons/folder.png")}
                        action={()=>{undefined}}
                    />

                </View>
            </View>

        </ScreenView>
    )
}
export default TaskPreview