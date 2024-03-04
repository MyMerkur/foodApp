import React from "react";
import { View, Text, Image,TouchableWithoutFeedback } from "react-native";
import styles from './MealsCard.style';
const MealsCard = ({ item,onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
            <Image
                source={{ uri: item.strMealThumb }}
                style={styles.image}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.text}>
                    {item.strMeal}
                </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
    )
}
export default MealsCard;