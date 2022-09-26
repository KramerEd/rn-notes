import React, { FC, useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box, Text } from '@/atoms'
import { SafeAreaView } from 'react-native'
import BookList from '@/components/bookList'

const SideBar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box bg={'$sidebarBackground'} flex={1}>
      <SafeAreaView>
        <Text variant={'sidebar'} m={'lg'} fontWeight={'bold'} fontSize={26}>
          NotesApp
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default SideBar
