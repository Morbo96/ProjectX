import React from 'react'
import {ImageSourcePropType, View, Image} from "react-native";
import {homeLayout} from "../styles/screens/homeStyles";

type Props = {
    image: ImageSourcePropType,
    backgroundColor: string
}

const IconProgressBar = ({image, backgroundColor}:Props) => {

    return(
        <View style={[
            {width: 45, height: 45, backgroundColor: backgroundColor},
            homeLayout.progressBarIcon
        ]}>
            <Image style={{maxWidth: 30, maxHeight: 30}} source={image}/>
        </View>
    )
}
export default IconProgressBar