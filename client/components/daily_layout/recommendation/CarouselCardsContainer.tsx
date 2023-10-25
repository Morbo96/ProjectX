import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import RecommendationCard from './RecommendationCard'


const data = [
    {
        title: "Вы пьете достаточно воды?",
        image: require("../../../assets/emoji/water-drop.png")
    },
    {
        title: "Вы пьете достаточно воды?",
        image: require("../../../assets/emoji/water-drop.png")
    },
    {
        title: "Вы пьете достаточно воды?",
        image: require("../../../assets/emoji/water-drop.png")
    }
]

const CarouselCardsContainer = () => {
    const [index, setIndex] = React.useState(0)

    return (
        <View>
            <Carousel
                pagingEnabled={true}
                loop={false}
                data={data}
                width={350}
                autoPlay={false}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                onSnapToItem={(index) => setIndex(index)}
                renderItem={RecommendationCard}
            />
        </View>
    )
}
export default CarouselCardsContainer