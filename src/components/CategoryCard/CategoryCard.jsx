import React from "react";
import { View, Text, TouchableWithoutFeedback,Image } from "react-native";
import styles from './CategoryCard.style';
const CategoryCard = ({ item , onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri:item.strCategoryThumb}}
                />
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{item.strCategory}</Text>
                </View> 
            </View>
        </TouchableWithoutFeedback>

    )
}
export default CategoryCard;