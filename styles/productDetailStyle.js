import { StyleSheet } from "react-native";

const productDetailStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',

    },
    mainView:{
        flex:1,
        backgroundColor:'#fff'
    },
    productImage:{
        height:240,
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        resizeMode:'contain'
    },
    productTitle:{
        fontSize:18,
        fontWeight:'700',
        textAlign:'center',
        textTransform:'uppercase',
        marginTop:3,
        padding:3
    },
    downArrow:{
        height:15,
        width:15,
        marginLeft:10,
        alignSelf:'center'
    },
    textList:{
        fontSize: 16,
        fontWeight: '700',
        color: '#00a3b2',
      },
      viewRow:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }

})
export default productDetailStyle