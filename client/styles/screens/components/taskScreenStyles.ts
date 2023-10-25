import {StyleSheet} from "react-native";

export const taskScreen = StyleSheet.create({
    mainView: {
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "flex-start",
        backgroundColor:"#B8E1F4",
        paddingTop:"10%"
    },
    content:{
        paddingLeft:16,
        paddingRight:16
    }
})

export const taskStartScreen = StyleSheet.create({
    systemFolderButton:{
        backgroundColor: "#FFF",
        height:90,
        width: 160,
        display: "flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        borderRadius:11,
        padding: 10
    },
    systemFolderButtonText:{
        fontWeight: "400",
        fontSize:16,
        fontFamily: "SF Pro Display",
        color: "black"
    },
    taskFolderButton:{
        minHeight:45,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "#FFF",
        borderRadius: 9,
        width:"100%"
    },
    taskFolderButtonText:{
        fontWeight: "400",
        fontSize:20,
        fontFamily: "SF Pro Display",
        color: "black"
    },
})

export const goalScreen = StyleSheet.create({
    dateLayout:{
        fontFamily: "SF Pro Display",
        fontWeight: "700",
        fontSize:20,
        color: "#616161"
    }
})

export const taskCard = StyleSheet.create({
    layout:{
        backgroundColor:"#FFF",
        borderRadius: 11,
        padding: 18
    },
    subtaskName:{
        fontFamily: "SF Pro Display",
        fontWeight: "500",
        fontSize:20,
        color: "black"
    },
    subtaskDescription:{
        fontFamily: "SF Pro Display",
        fontWeight: "500",
        fontSize:14,
        color: "#827E7E"
    }
})

export const subtaskEditScreen = StyleSheet.create({
    fromTaskText:{
        fontFamily: "SF Pro Display",
        fontWeight:"500",
        fontSize:16,
        color:"#616161"
    },
    taskDescriptionText:{
        fontFamily: "SF Pro Display",
        fontWeight:"500",
        fontSize:20,
    }

})