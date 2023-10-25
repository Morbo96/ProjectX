import {StyleSheet} from "react-native";

export const pomodoroLayout = StyleSheet.create({
    mainView: {
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor:"#B8E1F4",
        paddingTop:"10%"
    },
    taskTitle:{
        fontWeight:"500",
        fontSize: 32,
        fontFamily: "SF Pro Display",
        color: "black"
    },
    timeText:{
        fontWeight:"400",
        fontSize: 40,
        fontFamily: "Montserrat",
        color: "black"
    },
    hitCountText:{
        fontWeight:"400",
        fontSize: 24,
        fontFamily: "Montserrat",
        color: "black"
    }

})