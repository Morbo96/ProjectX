import { StyleSheet } from 'react-native'

export const homeLayout = StyleSheet.create({
    mainView: {
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection:"column",
        backgroundColor:"#D5EAE3",
        paddingTop:"15%"
    },
    progressBarIcon:{
        borderRadius: 9,
        display:"flex",
        justifyContent: "center",
        alignItems:"center"
    },
    iconBar:{
        backgroundColor:"#FFFFFF4F",
        marginLeft: 12,
        marginRight: 12,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom: 5,
        borderRadius:16
    }
})