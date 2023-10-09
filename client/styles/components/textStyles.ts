import { StyleSheet } from 'react-native';

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