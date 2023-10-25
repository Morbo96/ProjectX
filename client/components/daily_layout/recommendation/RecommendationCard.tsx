import React from 'react'
import {ImageSourcePropType, Text, View, Image} from "react-native"
import CircularAddButton from "../../CircularAddButton"
import {flex, headers, margin} from "../../../styles/components"
import {recommendationCard} from "../../../styles/screens/components/taskWithProgressBar";

type Props = {
    title: string
    image: ImageSourcePropType
    action?: (params: any) => any | Function | React.FunctionComponent
}

const RecommendationCard = ({item}:{item:Props}) => {
    return(
        <View style={[recommendationCard.card, flex.d_flex, flex.flex_row]}>
            <View style={[flex.d_flex, flex.flex_column, flex.justify_start, {maxWidth:"70%"}]}>
                <Text style={[headers.header_3__bolder, margin.mb_3, {fontSize: 20}]}>{item.title}</Text>
                <CircularAddButton action={item.action}/>
            </View>
            <Image style={recommendationCard.cardImage} source={item.image}/>
        </View>
    )
}

export default RecommendationCard