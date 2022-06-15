import React from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useState} from 'react';
import style from '../styles/loginSttyle';

const loginScreen = () => {
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

  const [value, setValue] = useState(false);

  return (
    <View style={style.container}>
      <Image
        style={style.salonImage}
        source={require('/Users/gurisaini/Documents/salonclouds/assets/saloncouds_logo.png')}
      />
      <View style={[style.subView, {marginTop: 40}]}>
        <Text style={style.textStyle}>Email</Text>
        <TextInput style={style.textField}></TextInput>
        {value && (
          <>
            <Text
              style={[
                style.textStyle,
                {
                  marginTop: 10,
                },
              ]}>
              password
            </Text>
            <TextInput style={style.textField}></TextInput>
          </>
        )}
      </View>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => this.RBSheet.open()}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {value ? 'login' : 'continue'}
        </Text>
      </TouchableOpacity>
      {value && (
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 30,
            }}>
            Forgot password
          </Text>
        </TouchableOpacity>
      )}
      <View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={250}
          openDuration={250}
          customStyles={{
            container: {
              // justifyContent: "center",
              alignItems: 'center',
            },
          }}>
          <View
            style={[
              style.subView,
              {
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 10,
              },
            ]}>
            <Text
              style={{
                color: '#00a3b2',
                fontSize: 18,
              }}>
              Cancel
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
              }}>
              Choose One
            </Text>

            <Text
              style={{
                color: '#00a3b2',
                fontSize: 18,
              }}>
              Done
            </Text>
          </View>
          <View
            style={{
              width: '90%',
            }}>
            <FlatList
              contentContainerStyle={{
                width: '100%',
              }}
              data={DATA}
              // renderItem={renderItem}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '100%',
                    backgroundColor: '#FFF',
                    marginTop: 3,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    setValue(true);
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </RBSheet>
      </View>
    </View>
  );
};
export default loginScreen;
