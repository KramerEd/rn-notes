import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '@/screens/main'
import Sidebar from '@/components/sidebar'
import { HomeDrawerParamList, RootStackParamList } from '@/types/navTypes'
import DetailScreen from '@/screens/detail'

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
      {/*@ts-ignore*/}
      <Drawer.Screen name={'Detail'} component={DetailScreen} options={{}} />
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
