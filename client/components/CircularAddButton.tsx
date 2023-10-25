import React from "react"
import {ImageSourcePropType, TouchableOpacity} from "react-native"
import { Circle, Text, Svg } from "react-native-svg"

type Props = {
    action?: (params: any) => any | Function | React.FunctionComponent
}

const CircularAddButton = ({action}: Props) => {
    const WIDTH = 40
    const HEIGHT = 40
    const RADIUS = 20

    return(
        <TouchableOpacity style={{width: 40, height:40}} onPress={action}>
            <Svg>
                <Circle
                    cx={WIDTH / 2}
                    cy={HEIGHT / 2}
                    r={RADIUS}
                    fill={"black"}
                />
                <Text
                    fill={"white"}
                    fontSize="40"
                    fontWeight="300"
                    fontFamily={"SF Pro Display"}
                    x="9"
                    y="33"
                >
                    +
                </Text>
            </Svg>
        </TouchableOpacity>
    )
}
export default CircularAddButton