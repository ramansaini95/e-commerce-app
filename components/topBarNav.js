import { Image, Text, View } from "react-native";
import React from "react";
import {color} from '../assets/color'


const topBarNav=()=>{
    return(
        <View
        style={{
          height: 44,
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent:'space-evenly'
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: color.appColor,
            justifyContent:'center'
          }}>
            <Image
                style={{
                    height:15,
                    width:15,
                    alignSelf:'center',
                    tintColor:'#fff'
                }}
                source={require('../assets/left-arrow.png')}
            >

            </Image>
          </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            alignSelf: 'center',
            marginLeft: 20,
            fontWeight: '800',
          }}>
          Shipping Address
        </Text>
      </View>
    );
}
export default topBarNav;