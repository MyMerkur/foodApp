import { StyleSheet } from "react-native";
export default styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        marginBottom:20,
        marginTop:20,
        padding:10,
        borderRadius:12,
        backgroundColor:"#3c096c"
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:'#e0aaff',
        zIndex:1,
        position:'relative',
        top:88,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:400,
        textAlign:'right',
        height:90,
        
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:180
    },
    image:{
        width:400,
        height:200,
        zIndex:0,
        position:'absolute'
    }
})