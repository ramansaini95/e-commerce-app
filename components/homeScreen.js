import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Image, Text, TextInput, FlatList} from 'react-native';
import style from '../styles/homeStyle'

const homeScreen = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          backgroundColor: '#fff',
          flex:1,
          justifyContent:'center'
        }}>
        <View
          style={style.topBar}>
          <View
            style={style.topBarSubView}>
            <TouchableOpacity>
              <Image
                style={style.menuImage}
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
        <View
            style={{
                marginTop:10,
                backgroundColor:'gray',
                height:40,
                width:'85%',
                alignSelf:'center',
                borderRadius:10,
                flexDirection:'row',padding:10,
                justifyContent:'space-between'
            }}
        >
            <TouchableOpacity
                style={{justifyContent:'center',
                width:30
            }}
            >
                <Image
                   style={{
                    height:20,
                    width:20,alignSelf:'center'
                   }}
                   source={require('../assets/search.png')}
                >

                </Image>

            </TouchableOpacity>
            <TextInput
              style={{flex:1,}}
            >

            </TextInput>

        </View>
        <View
           style={{flex:1,
        marginTop:10,
    backgroundColor:'#fff',alignSelf:'center'}}
        >
              <FlatList
              contentContainerStyle={{
                width: '98%',
                padding:2,
                alignSelf:'center'
              }}
              numColumns={2}
              data={DATA}
              // renderItem={renderItem}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                    style={{
                       // backgroundColor:'gray',
                        height:250,
                        width:'47%',
                        marginLeft:5,
                        marginRight:5,
                        marginTop:5,marginBottom:5,
                        padding:5,borderRadius:8,
                        shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 10,
  elevation: 3,
  backgroundColor: 'white'
                    }}
                >
                    <TouchableOpacity
                        style={{alignSelf:"flex-end"}}
                    >
                        <Image
                           style={{height:20,width:20,}}
                           source={require('../assets/heart.png')}
                        >

                        </Image>
                    </TouchableOpacity>
                    <Image
                      style={{
                        height:'60%',
                        width:'95%',
                        alignSelf:'center',
                        marginTop:2

                      }}
                      source={require('../assets/product.png')}
                    >

                    </Image>
                    <Text 
                        style={{
                            fontSize:16,
                            color:'#000',
                            fontWeight:'700',
                            marginTop:3,
                            textTransform: 'uppercase'
                        }}
                    >
                        davions oi body wash
                    </Text>
                    <View
                         style={{
                            marginTop:5,
                            width:'100%',
                            flexDirection:'row',
                            justifyContent:'space-between'
                         }}
                    >
  <Text 
                        style={{
                            fontSize:16,
                            color:'#000',
                            fontWeight:'700',
                            marginTop:3,
                            textTransform: 'uppercase',
                            color:'#00a3b2'
                        }}
                    >
                       $13
                    </Text>
                    <Image
                        style={{
                            height:20,
                            width:20,tintColor:'#00a3b2'
                        }}
                        source={require('../assets/shopping-basket.png')}
                    >

                    </Image>
                    </View>

                </TouchableOpacity>
              )}/>

        </View>
      </View>
    </SafeAreaView>
  );
};
export default homeScreen;
