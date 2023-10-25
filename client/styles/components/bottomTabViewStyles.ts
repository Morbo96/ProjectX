import {StyleSheet} from "react-native"

export const bottomTabViewStyles = StyleSheet.create({
    layout:{
        backgroundColor: "#FFF",
        borderRadius:26,
        padding: 0,
        marginLeft:15,
        marginRight:15,
        marginBottom:16
    },
    indicator:{
        height: 43,
        backgroundColor:"#5937BB",
        borderRadius:26,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:18,
        paddingPadding:18,
    },
    labelDefault:{
        fontFamily:"SF Pro Display",
        fontWeight:"700",
        fontSize: 21,
        color: "#5937BB",
    },
    labelActive:{
        fontFamily:"SF Pro Display",
        fontWeight:"700",
        fontSize: 21,
        color: "#FFF",
    }
})