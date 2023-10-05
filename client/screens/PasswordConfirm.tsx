import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../interfaces"
import { buttons, text, input } from "../styles/index"
import { authSections, authExtensions } from "../styles/screens/authStyles"
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    StatusBar
} from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "passwordConfirm">

function PasswordConfirm({ navigation }: Props):JSX.Element{
    return (
        <View style={authSections.mainView}>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View style={[authSections.content, authExtensions.authContentHeight__50]}>
                <Text style={text.headerLevel__3}>Подтвердите пароль</Text>
                <View style={authSections.input}>
                    <TextInput
                        placeholder="Введите пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            authExtensions.marginBottom__custom
                        ]}
                    />
                    <TextInput
                        placeholder="Подтвердите пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            authExtensions.marginBottom__custom
                        ]}
                    />
                    <TouchableOpacity
                        style={buttons.rounded}
                        onPress={()=>{navigation.navigate('home')}}
                    >
                        <Text style={text.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default PasswordConfirm