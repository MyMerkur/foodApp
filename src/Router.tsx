import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./pages/Category";
import MealsDetail from "./pages/Detail/MealsDetail";
import MealsInnerDetail from "./pages/MealsDetail/MealInnerDetail";

const Stack = createNativeStackNavigator();
const Router=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="CategoryPage"
                    component={Category}
                    options={{
                        title:'Kategoriler',
                        headerStyle:{ backgroundColor: '#10002b',},
                        headerTitleStyle:{color:'white'},
                    }}
                />
                <Stack.Screen
                    name="MealsDetailPage"
                    component={MealsDetail}
                    options={{
                        title:'Ürünler',
                        headerStyle:{ backgroundColor: '#10002b',},
                        headerTintColor:'white'
                    }}
                />
                <Stack.Screen
                    name="MealsInnerDetail"
                    component={MealsInnerDetail}
                    options={{
                        title:'Detay',
                        headerStyle:{ backgroundColor: '#10002b',},
                        headerTintColor:'white'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;