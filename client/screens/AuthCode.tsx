import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../interfaces"
import { buttons, text, input } from "../styles/index"
import { authSections, authExtensions } from "../styles/screens/authStyles"
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StatusBar
} from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "code">

function AuthCode({ navigation }: Props):JSX.Element{
    return (
        <View style={authSections.mainView}>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View style={[authSections.content, authExtensions.authContentHeight__70]}>
                <Text style={text.headerLevel__4}>Введите код, полученный в электронном письме</Text>
                <TextInput
                    placeholder="_ _ _  _ _ _"
                    style={[
                        input.inputField__alignCenter,
                        authExtensions.marginBottom__custom
                    ]}
                />
                <View style={authSections.textFooter}>
                    <Text style={text.simpleText}>Не приходит письмо?</Text>
                    <Text style={text.link}>Отправить код повторно</Text>
                </View>
                <TouchableOpacity style={buttons.rounded}>
                    <Text style={text.buttonText} onPress={()=>{navigation.navigate('passwordConfirm')}}>Подтвердить</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AuthCode