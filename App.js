import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/welcomeScreen/Welcome"
import HomeScreen from "./screens/Home"
import AuthScreen from './screens/Auth'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}  />
        <Stack.Screen name="Home" component={HomeScreen}   />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}


