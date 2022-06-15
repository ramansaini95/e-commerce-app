import { SafeAreaView, Text, View } from "react-native"
import React from "react"

const myCart=()=>{
    return(
        <SafeAreaView>

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
            backgroundColor: 'gray',
          }}></View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            alignSelf: 'center',
            marginLeft: 20,
            fontWeight: '800',
          }}>
my Cart        </Text>
      </View>
        </SafeAreaView>
    )
}
export default myCart;