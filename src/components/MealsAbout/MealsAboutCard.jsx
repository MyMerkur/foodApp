import React from "react";
import { View, Text, Image, Button, Linking } from "react-native";
import styles from './MealsAboutCard.style'
const MealsAboutCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.strMealThumb }}
                style={styles.image}
            />
            <View style={styles.innerAbout}>
                <Text style={styles.title}>{item.strMeal}</Text>
                <Text style={styles.description}>{item.strInstructions}</Text>
                <Button
                    title="YouTube Video"
                    onPress={() => Linking.openURL(`${item.strYoutube}`)}
                    color={'white'}

                />
            </View>

        </View>
    )
}
export default MealsAboutCard;