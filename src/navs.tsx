import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '@/screens/main'
import Sidebar from '@/components/sidebar'
import { HomeDrawerParamList, RootStackParamList } from '@/types/navTypes'
import DetailScreen from '@/screens/detail'
import FormScreen from '@/screens/form'
import WebviewScreen from '@/screens/webview'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Main'}
      screenOptions={{ drawerType: 'back', swipeEdgeWidth: 200 }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name={'Main'}
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'Detail'} component={DetailScreen} options={{}} />
      <Stack.Screen name={'Form'} component={FormScreen} options={{}} />
      <Stack.Screen
        name={'Webview'}
        component={WebviewScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

export const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
