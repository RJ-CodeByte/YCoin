/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/Splash';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import ResetPasswordScreen from './screens/ResetPassword';
import SignInScreen2 from './screens/SignIn2';
import ForgetPasswordScreen from './screens/ForgetPassword';
import SignInScreen3 from './screens/SignIn3';
import ChooseUsername from './screens/ChooseUsername';
import Backup from './screens/Backup';
import BackupRecovery from './screens/BackupRecovery';
import ChooseLanguage from './screens/ChooseLanguage';
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import ChooseCurrency from './screens/ChooseCurrency';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Splash' 
    screenOptions={{
        
      }
    }>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}} />
      <Stack.Screen name="reset password" component={ResetPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="forget password" component={ForgetPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignIn 2" component={SignInScreen2} options={{headerShown:false}} />
      <Stack.Screen name="SignIn 3" component={SignInScreen3} options={{headerShown:false}} />
      <Stack.Screen name="ChooseUname" component={ChooseUsername} options={{headerShown:false}} />
      <Stack.Screen name="Backup" component={Backup} options={{headerShown:false}} />
      <Stack.Screen name="BackupRecovery" component={BackupRecovery} options={{headerShown:false}} />
      <Stack.Screen name="Choose Language" component={ChooseLanguage} />
      <Stack.Screen name="Choose Currency" component={ChooseCurrency} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

