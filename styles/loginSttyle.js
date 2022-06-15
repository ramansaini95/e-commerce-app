import { StyleSheet } from "react-native"
const loginStyle= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:10,
    },
    salonImage:{
        height:200,
        width:'90%',
        alignSelf:'center',
        marginTop:50,
        resizeMode:'contain',
        //backgroundColor:'pink'


    },
    subView:{
       // marginTop:40,
        width:'90%',
        justifyContent:'center',
        alignSelf:'center'
        
    },
    textStyle:{
        fontSize:18,
        color:'#00a3b2'
    },
    textField:{
        width:'100%',
        height:44,
      //  backgroundColor:'pink',
        alignSelf:'center',
       // marginTop:5,
        borderBottomWidth:1,
        borderBottomColor:'#00a3b2'

    },
    buttonStyle:{
        width:'90%',
        height:44,
        backgroundColor:'#00a3b2',
        borderRadius:8,
        marginTop:50,
        alignSelf:'center',
       justifyContent:'center'
    }


})
export default loginStyle