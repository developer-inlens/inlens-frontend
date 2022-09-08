import React from 'react'
import {NativeBaseProvider} from 'native-base'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {colors} from './constants/theme'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import HomeScreen from './screens/homescreen2/Index'
import Header from './components/header/Header'
import AuthScreen from './screens/authScreen/EnterPhoneScreen'
import PhotoView from './screens/imageView/ImageView'
import PhotoUpload from './screens/photoUpload/Index'

const Stack = createNativeStackNavigator()

const AppTheme = {
  dark: true,
  colors: {
    primary: colors.PRIMARY,
    background: colors.BACKGROUND,
    // card: 'rgb(255, 255, 255)',
    // text: '#fff',
    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                // headerShown: false,
                headerTitle: () => <Header title="Shared Albums" />,

                headerTintColor: '#444',
                headerStyle: {
                  backgroundColor: colors.BACKGROUND,
                  padding: 0,
                  margin: 0,
                },
              }}
            />
            <Stack.Screen
              name="PhotoView"
              component={PhotoView}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PhotoUpload"
              component={PhotoUpload}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.BACKGROUND}
          />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App
