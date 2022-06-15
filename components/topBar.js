import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const topBar=()=>{
    return(
        <View
        style={{ height: 44,
            width: '100%',
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',}}>
        <View
          style={{ paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '35%',}}>
          <TouchableOpacity>
            <Image
              style={{ height: 20,
                width: 20,
                marginleft: 10,
                tintColor: '#00a3b2',}}
              source={require('../assets/menu.png')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '800',
              color: 'gray',
              marginleft: 10,
            }}>
            Shop All
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              marginleft: 10,
              alignSelf: 'center',
              tintColor: '#00a3b2',
            }}
            source={require('../assets/shopping-basket.png')}></Image>
        </TouchableOpacity>
      </View>

    )
}
export default topBar;