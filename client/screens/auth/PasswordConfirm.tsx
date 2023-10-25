import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/types"
import { buttons, text, input, margin, headers } from "../../styles/components"
import { authSections, authExtensions } from "../../styles/screens/authStyles"
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from "react-native"
import ScreenView from "../../components/ScreenView";

type Props = NativeStackScreenProps<RootStackParamList, "passwordConfirm">

function PasswordConfirm({ navigation }: Props):JSX.Element{
    return (
        <ScreenView style={authSections.mainView}>
            <View style={[authSections.content, authExtensions.authContentHeight__50]}>
                <Text style={headers.header_2}>Подтвердите пароль</Text>
                <View style={authSections.input}>
                    <TextInput
                        placeholder="Введите пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            margin.mb_3
                        ]}
                    />
                    <TextInput
                        placeholder="Подтвердите пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            margin.mb_3
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
        </ScreenView>
    )
}
export default PasswordConfirm