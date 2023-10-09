import { StyleSheet } from 'react-native';

const buttonWidth = "100%"
const buttonHeight = 49
export const buttons = StyleSheet.create({
    rounded:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        backgroundColor:"#5648FF",
        height:buttonHeight,
        width: buttonWidth
    },
    squareRounded:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        backgroundColor:"#5648FF",
        height:buttonHeight,
        width: buttonWidth
    },
    signWithGoogle:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        backgroundColor:"#FFFFFF",
        height:buttonHeight,
        width:buttonWidth
    },
    signWithApple:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        backgroundColor:"#000000",
        height:buttonHeight,
        width:buttonWidth
    }
})