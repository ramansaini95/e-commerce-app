import { StyleSheet } from "react-native"
 const homeStyle= StyleSheet.create({
    container:{
        flex: 1, backgroundColor: '#fff'
    },
    topBar:{
        height: 44,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      topBarSubView:{
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '35%',
      },
     menuImage:{
        height: 20,
        width: 20,
        marginleft: 10,
        tintColor: '#00a3b2',
      }
})
export default homeStyle