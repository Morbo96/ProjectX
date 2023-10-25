import React from  'react'
import {TouchableOpacity, View} from "react-native";

type Props = {
    checked: boolean
    diameter?: number
}
const RadioButton = ({checked, diameter}: Props) => {
    const [value, setValue] = React.useState(checked)
    const defaultDiameter = 24

    return(
        <TouchableOpacity style={{width:25, height:25}} onPress={()=>setValue(!value)}>
            <View style={{
                height: diameter? diameter:defaultDiameter,
                width: diameter? diameter:defaultDiameter,
                borderRadius: diameter? diameter/2:defaultDiameter/2,
                borderWidth: 2,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {
                    value ?
                    <View style={{
                        height: diameter? diameter/2:defaultDiameter/2,
                        width: diameter? diameter/2:defaultDiameter/2,
                        borderRadius: diameter? diameter/4:defaultDiameter/4,
                        backgroundColor: '#000',
                    }} />
                    : null
                }
            </View>
        </TouchableOpacity>
    )
}
export default RadioButton