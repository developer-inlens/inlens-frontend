import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcomeScreen/Welcome";
import AuthScreen from "./screens/authScreen/EnterPhoneScreen";
import ProfileScreen from "./screens/authScreen/ProfileScreen";
import Header from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { colors } from "./constants/theme";
import Home from "./screens/homeScreen/Home";
const Stack = createNativeStackNavigator();

const MyTheme = {
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

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              // headerShown: false,
              headerTitle: () => <Header title="Shared Albums" />,

              // headerLeft: () => <Left title='Shared Albums' />,
              // headerRight:()=><Right/>,
              headerTintColor: "#444",
              headerStyle: {
                backgroundColor: colors.PRIMARY,
                padding: 0,
                margin: 0,
              },
            }}
          />
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}  /> */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
