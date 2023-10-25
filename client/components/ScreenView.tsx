import React from 'react'
import {View, StatusBar, StyleProp, ViewStyle} from "react-native";

type Props = {
    children: string | JSX.Element | JSX.Element[]
    style?: StyleProp<ViewStyle>
}

function ScreenView({children, style}:Props):JSX.Element{
    return(
        <View style={style}>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            {children}
        </View>
    )
}

export default ScreenView