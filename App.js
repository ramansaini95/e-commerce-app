import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './components/homeScreen';
import addAddress from './components/addAddress';
import loginScreen from './components/loginScreen';
import productDetails from './components/productDetails';

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Screen name="homeScreen" component={homeScreen} />
      <Stack.Screen name="addAddress" component={addAddress} />
      <Stack.Screen name="loginScreen" component={loginScreen} />
      <Stack.Screen name="productDetails" component={productDetails} />
    </NavigationContainer>
  );
};

export default App;