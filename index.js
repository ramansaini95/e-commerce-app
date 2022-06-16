/**
 * @format
 */

import {AppRegistry} from 'react-native';
import loginScreen from './App';
import {name as appName} from './app.json';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


AppRegistry.registerComponent(appName, () => loginScreen);
