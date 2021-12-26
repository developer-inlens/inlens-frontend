/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen.js"
import HomeScreen from "./screens/homeScreen/HomeScreen"
import AuthScreen from "./screens/authScreen/EnterPhoneScreen";
import ProfileScreen from "./screens/authScreen/ProfileScreen";
import { colors } from "./constants/theme";
import Header from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

const AppTheme = {
  dark: true,
  colors: {
    primary: colors.PRIMARY,
    background: colors.PRIMARY,
    // card: 'rgb(255, 255, 255)',
    // text: '#fff',
    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
};

const App=() => {
  return <Provider store={store}>
  <NavigationContainer theme={AppTheme}>
     <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
              headerTitle: () => <Header title="Shared Albums" />,
              headerTintColor: "#444",
              headerStyle: {
                backgroundColor: colors.PRIMARY,
                padding: 0,
                margin: 0,
              },
            }}/>
      </Stack.Navigator>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY} />
  </NavigationContainer>
  </Provider>
};


export default App;
