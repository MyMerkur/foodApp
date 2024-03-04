import React from "react";
import { View,Text,Image, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import MealsCard from "../../components/MealsCard";
import styles from './MealsDetail.style'
const MealsDetail=({route,navigation})=>{
    const {strCategory} = route.params;
    const {data} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
    
    
    const handleFilterMeals = strMeal=> {
        navigation.navigate('MealsInnerDetail', {strMeal});
        console.log('Seçilen Ürün:',strMeal)
    }

    const renderItem =({item})=> <MealsCard item={item} onSelect={()=>handleFilterMeals(item.strMeal)}/>
    return(
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderItem}
                style={styles.container}
            />
        </View>
    )
}
export default MealsDetail;