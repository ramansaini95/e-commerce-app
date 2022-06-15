import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import TopBar from './topBar';
import React from 'react';
import style from '../styles/productDetailStyle';
const productDetails = () => {
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
      <TopBar></TopBar>
      <ScrollView style={style.container}>
        <Image
          style={style.productImage}
          source={require('../assets/product.png')}></Image>
        <Text style={style.productTitle}>davions oi body wash</Text>
        <View
          style={{
            marginTop: 10,
            width: '100%',
            alignSelf: 'center',
          }}>
          <View style={style.viewRow}>
            <Text style={style.textList}>Select Size :</Text>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor:'gray',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>select size</Text>
              <TouchableOpacity>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    marginLeft: 10,
                    alignSelf: 'center',
                  }}
                  source={require('../assets/down-arrow.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[style.viewRow, {marginTop: 20}]}>
            <Text style={style.textList}>Brand</Text>
            <Text>hihih</Text>
          </View>
          <View style={[style.viewRow, {marginTop: 20}]}>
            <Text style={style.textList}>SKU</Text>
            <Text>hihih</Text>
          </View>
          <View style={[style.viewRow, {marginTop: 20}]}>
            <Text style={style.textList}>Availability</Text>
            <Text>InStock</Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <FlatList
              data={DATA}
              // renderItem={renderItem}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View>
                  <Text
                    style={[
                      style.textList,
                      {textAlign: 'center', textTransform: 'uppercase'},
                    ]}>
                    Data
                  </Text>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>
                </View>
              )}
            />
          </View>
          <View
            style={[
              style.viewRow,
              {
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '90%',
                marginTop: 20,
              },
            ]}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'gray',
              }}></View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 120,
                backgroundColor: 'pink',
                borderRadius: 10,
              }}></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default productDetails;
