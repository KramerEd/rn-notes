import React, { FC } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box, Text } from '@/atoms'
import { SafeAreaView } from 'react-native'

const SideBar: FC<DrawerContentComponentProps> = () => {
  return (
    <Box bg={'$sidebarBackground'} flex={1}>
      <SafeAreaView>
        <Text variant={'sidebar'} m={'lg'}>
          TestRN
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default SideBar
