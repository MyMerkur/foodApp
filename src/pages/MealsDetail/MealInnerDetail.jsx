import React from "react";
import { View,Text,Image,FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import MealsAboutCard from "../../components/MealsAbout/MealsAboutCard";

const MealsInnerDetail=({route})=>{
    const {strMeal} = route.params;
    console.log('Inner e gelen veri:',strMeal)
    const {data} = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`);
    
    const renderItem =({item})=> <MealsAboutCard item={item}/>
    return(
        <FlatList
            data={data.meals}
            renderItem={renderItem}
        />
    )
}
export default MealsInnerDetail;