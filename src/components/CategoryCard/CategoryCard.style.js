import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        marginBottom:20,
        marginTop:20,
        padding:10,
        borderRadius:12,
        backgroundColor:"#3c096c"
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:'#e0aaff'
    },
    innerContainer:{
        
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:150,
        height:100,
        resizeMode:'contain'
    }

})