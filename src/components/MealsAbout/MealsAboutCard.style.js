import { Dimensions, StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#3c096c",
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        height:55,
        padding:12,
        textAlign:'center'
    },
    description:{
        color:'white',
        padding:20,
        height:Dimensions.get('window').height/1
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    image:{
        width:400,
        height:200,
        
    }
})