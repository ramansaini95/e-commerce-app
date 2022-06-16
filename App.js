import * as React from 'react';

import homeScreen from './components/homeScreen';
import addAddress from './components/addAddress';
import loginScreen from './components/loginScreen';
import productDetails from './components/productDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="homeScreen" component={homeScreen} />
       <Stack.Screen name="addAddress" component={addAddress} />
       <Stack.Screen name="loginScreen" component={loginScreen} />
       <Stack.Screen name="productDetails" component={productDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;