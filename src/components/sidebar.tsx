import React, { FC } from 'react'
import { View } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

const SideBar: FC<DrawerContentComponentProps> = () => {
  return <View style={{ backgroundColor: 'red', flex: 1 }}></View>
}

export default SideBar
