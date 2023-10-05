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

const font = "SF Pro Display"
const white = "#FFFFFF"
const black = "#000000"
export const text = StyleSheet.create({
    link:{
        fontFamily: font,
        fontSize:20,
        color:"#847AFF",
        fontWeight:"400"
    },
    buttonText:{
        fontFamily: font,
        fontSize:21,
        color:white,
        fontWeight:"700",
    },
    simpleText:{
        fontFamily: font,
        fontSize:20,
        color:black,
        fontWeight:"400"
    },
    signGoogle:{
        fontFamily: font,
        fontSize:20,
        color:black,
        fontWeight:"700"
    },
    signApple:{
        fontFamily: font,
        fontSize:20,
        color:white,
        fontWeight:"700"
    },
    headerLevel__4:{
        fontFamily:font,
        fontWeight:"500",
        fontSize:24,
        color:black
    },
    headerLevel__3:{
        fontFamily:font,
        fontWeight:"700",
        fontSize:32,
        color:black
    }

})

export const input = StyleSheet.create({
    inputField:{
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        height: 56,
        padding:16,
        fontSize: 20
    },
    inputField__alignCenter:{
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        fontSize: 20,
        textAlign:"center"
    },
})