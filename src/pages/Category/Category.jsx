import React from "react";
import { FlatList, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import CategoryCard from "../../components/CategoryCard";
import styles from './Category.style';
const Category = ({ navigation }) => {
    const api_url = Config.API_URL
    const { data } = useFetch(api_url);

    const handleFilteredMeals = strCategory => {
        navigation.navigate('MealsDetailPage', { strCategory })
        console.log(strCategory)
    }

    const renderItem = ({ item }) => <CategoryCard item={item} onSelect={() => handleFilteredMeals(item.strCategory)} />;

    return (
        <View >
            <FlatList
                data={data.categories}
                renderItem={renderItem}
                style={styles.container}
            />
        </View>

    )
}
export default Category;