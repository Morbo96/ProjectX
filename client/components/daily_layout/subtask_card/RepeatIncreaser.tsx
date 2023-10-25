import React, {useState} from 'react'
import {
    Image,
    TouchableOpacity,
    View,
    Text, StyleProp
} from "react-native";
import {flex} from "../../../styles/components";
import {dailySubtaskCard} from "../../../styles/screens/dailyStyles";

type Props ={
    style?: StyleProp<any>
}

const RepeatIncreaser = ({style}: Props) => {
    const [count, setCount] = useState(0);
    return(
        <View style={[flex.d_flex, flex.flex_row, flex.align_center, style]}>
            <TouchableOpacity onPress={() => setCount(count-1)}>
                <Image source={require("../../../assets/icons/left-arrow.png")}/>
            </TouchableOpacity>
            <Text style={dailySubtaskCard.label}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Image source={require("../../../assets/icons/right-arrow.png")}/>
            </TouchableOpacity>
        </View>
    )
}
export default RepeatIncreaser