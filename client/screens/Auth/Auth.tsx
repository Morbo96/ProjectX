import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/types"
import { buttons, text, input, margin } from "../../styles/components"
import { authSections, authExtensions } from "../../styles/screens/authStyles"
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
} from "react-native"
import ScreenView from "../../components/ScreenView";

type Props = NativeStackScreenProps<RootStackParamList, "auth">

function Auth({ navigation }: Props):JSX.Element{
    return (
        <ScreenView style={authSections.mainView}>
            <View style={authSections.imageView}>
                <Image source={require('../../assets/images/auth.png')}/>
            </View>

            <View style={[authSections.content, margin.mt_50]}>
                <View style={authSections.input}>
                    <TextInput
                        placeholder="Логин"
                        style={[
                            input.inputField,
                            margin.mb_3
                        ]}
                    />

                    <TextInput
                        placeholder="Пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            margin.mb_3
                        ]}
                    />

                    <TouchableOpacity
                        style={buttons.rounded}
                        onPress={()=>{navigation.navigate('code')}}
                    >
                        <Text style={text.buttonText}>Вход</Text>
                    </TouchableOpacity>
                </View>

                <View style={authSections.signButtons}>
                    <TouchableOpacity style={[buttons.signWithGoogle, margin.mb_3]}>
                        <Text style={text.signGoogle}>Продолжить с Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={buttons.signWithApple}>
                        <Text style={text.signApple}>Продолжить с Apple</Text>
                    </TouchableOpacity>
                </View>

                <View style={authSections.textFooter}>
                    <Text style={text.simpleText}>Еще нет аккаунта?</Text>
                    <Text style={text.link}>Зарегистрироваться</Text>
                </View>
            </View>
        </ScreenView>
    )
}
export default Auth