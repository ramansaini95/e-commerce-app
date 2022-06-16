import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {color} from '../assets/color'
import TopBarNav  from './topBarNav'
const addAddress = () => {
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
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
    <TopBarNav/>
     
      <View
        style={{
          marginTop: 10,
          width: '82%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>Data</Text>
        <Text>Data</Text>
        <Text>Data</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          width: '80%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: color.green,
          }}></View>
        <View
          style={{
            height: 2,
            backgroundColor: color.green,
            width: '45%',
          }}></View>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: color.green,
          }}></View>
        <View
          style={{
            height: 2,
            backgroundColor: 'gray',
            width: '45%',
          }}></View>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: 'gray',
          }}></View>
      </View>
      <ScrollView 
      
    contentContainerStyle={{
        justifyContent:'center',
        flex:1
    }}
      >
      <View
        style={{
          flex: 1,
          // backgroundColor:'gray',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            // height: '80%',
            backgroundColor: '#fff',
            alignSelf: 'center',
            borderRadius: 20,
            elevation: 3,
            shadowRadius: 6,

            shadowOpacity: 4,
            shadowColor: 'gray',
            padding: 10,
          }}>
          <FlatList
            data={DATA}
            // renderItem={renderItem}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View>
                <Text
                  style={{
                    color: color.appColor,
                    fontSize: 16,
                    marginTop: 15,
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  Name
                </Text>
                <TextInput
                  style={{
                    height: 30,
                    borderBottomWidth: 1,
                    borderColor: color.appColor,
                    width: '90%',
                    alignSelf: 'center',
                  }}></TextInput>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 44,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: color.appColor,
            marginTop: 40,
            borderRadius: 8,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: '700',
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            countinue
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default addAddress;
