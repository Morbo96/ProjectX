import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../navigation/types"
import {Text, TouchableOpacity, View} from "react-native"
import ScreenView from "../../../components/ScreenView"
import {headers, margin, flex} from "../../../styles/components"
import {dailySections} from "../../../styles/screens/dailyStyles"
import TaskWithProgressBar from "../../../components/daily_layout/TaskWithProgressBar"
import CarouselCardsContainer from "../../../components/daily_layout/recommendation/CarouselCardsContainer";
import {useNavigation} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "taskStack"> & {
    navigation: {
        navigate: (screen: keyof RootStackParamList) => void;
    };
};

function Daily(){
    const navigation = useNavigation<Props>()
    return (
        <ScreenView style={dailySections.mainView}>
            <View>
                <View>
                    <Text style={[headers.header_3__bolder]}>Ежедневное</Text>
                </View>
                <View style={[dailySections.dailyTasksLayout, margin.mt_3]}>
                    <TouchableOpacity onPress={()=>console.log("Button is pressed!")}>
                        <TaskWithProgressBar
                            progressValue={70}
                            image={require("../../../assets/emoji/pill.png")}
                            style={[margin.mt_2, margin.mb_2, margin.ml_5, margin.mr_5]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('dailySubtaskEditor')}>
                        <TaskWithProgressBar
                            progressValue={70}
                            image={require("../../../assets/emoji/pill.png")}
                            style={[margin.mt_2, margin.mb_2, margin.ml_5, margin.mr_5]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={dailySections.recommendationsSection}>
                <Text style={[headers.header_3__bolder, margin.mb_4]}>Рекомендации</Text>
                <View style={[flex.d_flex, flex.flex_column, flex.justify_center, flex.align_center]}>
                    <CarouselCardsContainer/>
                </View>
            </View>

        </ScreenView>
    )
}
export default Daily