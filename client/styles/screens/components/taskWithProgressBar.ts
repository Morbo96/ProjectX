import { StyleSheet } from 'react-native'

export const fillCircleAreaColor = "#C0E0F6"
export const circleAreaColorProgress = "#5937BB"

export const taskButton = StyleSheet.create({
    layout:{
        width:135,
        height: 150,
        backgroundColor: "#FFFFFF",
        borderRadius: 29,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
    },
    circle:{
        width: 100,
        height: 100,
    },
    image:{
        maxWidth:40,
        maxHeight: 40
    },
    progressValueText:{
        color: "#5937BB",
        fontWeight:"400",
        fontFamily:"SF Pro Display",
        fontSize: 20
    }
})

export const recommendationCard = StyleSheet.create({
    card:{
        backgroundColor: "#FFF",
        borderRadius:16,
        width: "95%",
        height: 140,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 31
    },
    cardImage:{
        width: 100,
        height: 100,
        paddingTop: 20,
        paddingBottom: 20,
        zIndex:2,
    }
})