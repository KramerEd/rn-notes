import React, { FC, useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box, Text, TouchableOpacity } from '@/atoms'
import { SafeAreaView } from 'react-native'
import BookList from '@/components/BookList'

const SideBar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box bg={'$sidebarBackground'} flex={1}>
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text variant={'sidebar'} m={'lg'} fontWeight={'bold'} fontSize={26}>
            NotesApp
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default SideBar
