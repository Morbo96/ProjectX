import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../interfaces"
import { buttons, text, input } from "../styles"
import { authSections, authExtensions } from "../styles/screens/authStyles"
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
    SafeAreaView
} from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "auth">

function Auth({ navigation }: Props):JSX.Element{
    return (
        <View style={authSections.mainView}>
            <StatusBar backgroundColor="transparent" translucent={true}/>

            <View style={authSections.imageView}>
                <Image source={require('../assets/images/auth.png')}/>
            </View>

            <View style={[authSections.content, authExtensions.authContentMarginTop]}>
                <View style={authSections.input}>
                    <TextInput
                        placeholder="Логин"
                        style={[
                            input.inputField,
                            authExtensions.marginBottom__custom
                        ]}
                    />

                    <TextInput
                        placeholder="Пароль"
                        secureTextEntry={true}
                        style={[
                            input.inputField,
                            authExtensions.marginBottom__custom
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
                    <TouchableOpacity style={[buttons.signWithGoogle, authExtensions.marginBottom__custom]}>
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
        </View>
    )
}
export default Auth