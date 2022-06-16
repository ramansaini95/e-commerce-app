import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopBarNav from './topBarNav';
import {color} from '../assets/color';

const myCart = () => {
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
    <SafeAreaView style={{flex: 1}}>
      <TopBarNav />
      <ScrollView
        style={{
          flex: 1,
         // backgroundColor: 'gray',
        }}>
        <FlatList
          data={DATA}
          // renderItem={renderItem}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                height: 200,
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 10,
                shadowColor:'gray',
                elevation:4,
                shadowRadius:4,
                shadowOpacity:2

                // padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: '70%',
                  padding: 10,
                  //justifyContent:'space-evenly'
                }}>
                <Image
                  style={{
                    width: '30%',
                    height: '100%',
                  }}
                  source={require('../assets/product.png')}></Image>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      fontSize: 18,
                      color: '#000',
                    }}>
                    davions of oi body wash
                  </Text>
                  <View
                    style={{
                      width: '40%',
                      height: 35,
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 8,
                      marginTop: 10,
                      marginLeft: 18,
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 2,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                      }}>
                      Qty:
                    </Text>
                    <TouchableOpacity
                      style={{
                        height: 15,
                        width: 15,
                        borderRadius: 2,
                        backgroundColor: color.appColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: '#fff',
                          fontSize: 14,
                          alignSelf: 'center',
                          // textAlign:'center'
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity
                      style={{
                        height: 15,
                        width: 15,
                        borderRadius: 2,
                        backgroundColor: color.appColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: '#fff',
                          fontSize: 14,
                          alignSelf: 'center',
                          // textAlign:'center'
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: color.appColor,
                      marginLeft: 25,
                      marginTop: 5,
                      fontWeight: '700',
                    }}>
                    $36.6
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: '25%',
                  borderTopWidth: 1,
                  marginTop: 10,
                  marginBottom: 20,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  //padding: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 16,
                    fontWeight: '600',
                    marginLeft: 30,
                  }}>
                  Remove
                </Text>
                <View
                  style={{
                    width: 1,
                    height: '100%',
                    backgroundColor: '#000',
                  }}></View>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 16,
                    fontWeight: '600',
                    marginRight: 30,
                  }}>
                  move to wishlist
                </Text>
              </View>
            </View>
          )}
        />
        <View
          style={{
            height: 200,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: '#fff',
            borderRadius: 8,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 50,
            shadowColor:'gray',
            elevation:4,
            shadowRadius:4,
            shadowOpacity:2
          }}>
          <View
            style={{
              height: '30%',
              width: '100%',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'space-between'
            }}>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                  tintColor: 'pink',
                }}
                source={require('../assets/home.png')}></Image>
              <Text style={{marginLeft: 20}}>Apply Coupon</Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{
                  height: 15,
                  width: 15,
                  tintColor: 'pink',
                  marginRight:20
                }}
                source={require('../assets/home.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
              style={{
                height:'40%',
                width:'100%',
                borderBottomWidth:1,
                justifyContent:'space-evenly'
                

              }}
          >
            <View
               style={{flexDirection:'row',justifyContent:'space-between',padding:10}}
            >
              <Text>
                Price :
              </Text>
              <Text>
               $36
              </Text>

            </View>
            <View
               style={{flexDirection:'row',justifyContent:'space-between',padding:10}}
            >
              <Text>
                Price :
              </Text>
              <Text>
               $36
              </Text>

            </View>

          </View>
          <View
              style={{
                width:'90%',
                alignSelf:'center',
                height:'30%',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}
          >
            <Text
               style={{
                fontSize:18,
                color:color.appColor,
                fontWeight:'bold'
               }}
            >
              $39.0
            </Text>
            <TouchableOpacity
               style={{
                height:44,
                width:'40%',
                backgroundColor:color.appColor,
                borderRadius:8,
                justifyContent:'center'
               }}
            >
              <Text
                 style={{
                  textTransform:'uppercase',
                  fontSize:18,
                  color:'#fff',
                  textAlign:'center'
                 }}
              >
                proceed
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default myCart;
